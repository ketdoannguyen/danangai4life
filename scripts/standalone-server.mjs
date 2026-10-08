import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';

// Serve the same generated HTML and assets as the published static Site.
const project = fileURLToPath(new URL('../', import.meta.url));
process.chdir(project);
const args = process.argv.slice(2);
const option = (name, fallback) => {
  const index = args.indexOf(name);
  return index < 0 ? fallback : args[index + 1];
};
const watching = args.includes('--watch');
const port = Number(option('--port', process.env.PORT || '5173'));
const host = option('--host', process.env.HOST || '127.0.0.1');
if (!Number.isInteger(port) || port < 0 || port > 65535) throw new Error('Invalid port.');
const root = path.join(project, 'dist');
const build = () => {
  const result = spawnSync(process.execPath, ['build.mjs'], {cwd: project, stdio: 'inherit'});
  return result.status === 0;
};
if ((watching || !fs.existsSync(path.join(root, 'index.html'))) && !build()) process.exit(1);

const mime = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml',
  '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml; charset=utf-8',
  '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
};
const server = http.createServer((req, res) => {
  if (!['GET', 'HEAD'].includes(req.method)) {
    res.writeHead(405, {'Allow': 'GET, HEAD'}); return res.end();
  }
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); }
  catch { res.writeHead(400); return res.end('Invalid URL'); }
  let file = path.resolve(root, '.' + pathname);
  if (file !== root && !file.startsWith(root + path.sep)) {
    res.writeHead(403); return res.end('Forbidden');
  }
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
  if (!fs.existsSync(file) || !fs.statSync(file).isFile()) {
    res.statusCode = 404;
    if (path.extname(pathname)) return res.end('Not found');
    file = path.join(root, '404.html');
  }
  res.setHeader('Content-Type', mime[path.extname(file).toLowerCase()] || 'application/octet-stream');
  res.setHeader('Content-Length', fs.statSync(file).size);
  res.setHeader('Cache-Control', 'no-store');
  if (req.method === 'HEAD') return res.end();
  const stream = fs.createReadStream(file);
  stream.on('error', () => { if (!res.headersSent) res.writeHead(500); res.end(); });
  stream.pipe(res);
});
server.on('error', error => { console.error(error.message); process.exitCode = 1; shutdown(); });
server.listen(port, host, () => console.log(`AI4Life ready: http://${host}:${server.address().port}/`));

let timer;
const watchers = [];
if (watching) {
  const changed = () => {
    clearTimeout(timer);
    timer = setTimeout(() => { if (build()) console.log('Source rebuilt; refresh the browser.'); }, 120);
  };
  for (const dir of ['src/ai4life', 'static-assets']) watchers.push(fs.watch(dir, {recursive: true}, changed));
  watchers.push(fs.watch('build.mjs', changed));
}
function shutdown() {
  clearTimeout(timer);
  for (const watcher of watchers) watcher.close();
  server.close();
}
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
