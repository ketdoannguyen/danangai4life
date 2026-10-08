import fs from 'node:fs';
import path from 'node:path';

// Serve the exact static publication through the managed preview server.
export function staticPublicationPreview() {
  return {
    name: 'ai4life-static-publication-preview',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        let pathname;
        try { pathname = decodeURIComponent(new URL(req.url, 'http://preview').pathname); }
        catch { return next(); }
        if (pathname.startsWith('/@') || pathname.startsWith('/__')) return next();
        const root = path.resolve('dist');
        let file = path.resolve(root, '.' + pathname);
        if (!file.startsWith(root + path.sep) && file !== root) return next();
        if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
        if (!fs.existsSync(file)) {
          if (path.extname(pathname)) return next();
          file = path.join(root, '404.html');
          res.statusCode = 404;
        }
        const types = {'.html':'text/html; charset=utf-8','.mjs':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.woff2':'font/woff2','.webp':'image/webp','.png':'image/png','.jpg':'image/jpeg','.docx':'application/vnd.openxmlformats-officedocument.wordprocessingml.document'};
        res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
        res.setHeader('Cache-Control','no-store');
        fs.createReadStream(file).pipe(res);
      });
    },
  };
}
