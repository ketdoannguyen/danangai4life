import fs from 'node:fs';
import path from 'node:path';
import {pageTitles,renderPage,header,footer,imageDialog,escape as e} from './src/ai4life/site.mjs';
fs.mkdirSync('dist',{recursive:true});
for (const name of ['site.mjs','content.mjs','client.mjs','style.css']) fs.copyFileSync('src/ai4life/'+name,'dist/'+name);
for (const name of ['assets','fonts','documents']) fs.cpSync('static-assets/'+name,'dist/'+name,{recursive:true});
const origin='https://danang-ai4life-2026-vku.chatgpt-8250.chatgpt.site';
const description='Khám phá hai bảng thi, lịch trình, thể lệ, giải thưởng, chuyên gia và hoạt động của Danang AI4Life tại VKU.';
const output=(route,notFound=false)=>`<!doctype html><html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"><title>${e(pageTitles[route]||'Không tìm thấy trang')} | VKU</title><meta name="description" content="${description}">${notFound?'<meta name="robots" content="noindex">':`<link rel="canonical" href="${origin+route}">`}<meta property="og:title" content="${e(pageTitles[route]||'Danang AI4Life 2026')} | VKU"><meta property="og:description" content="${description}"><meta property="og:type" content="website"><meta property="og:url" content="${origin+route}"><meta property="og:image" content="${origin}/assets/ai4life/brand/dragon-bridge-hero.webp"><meta name="twitter:card" content="summary_large_image"><link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="preload" href="/fonts/InterVariable.woff2" as="font" type="font/woff2" crossorigin><link rel="stylesheet" href="/style.css"><script type="module" src="/client.mjs"></script></head><body>${header(route)}<main class="${route==='/'?'home-page':'container'}" id="main-content">${renderPage(route)}</main>${footer()}${imageDialog()}</body></html>`;
for(const route of Object.keys(pageTitles)){const filename=route==='/'?'dist/index.html':'dist'+route+'/index.html';fs.mkdirSync(path.dirname(filename),{recursive:true});fs.writeFileSync(filename,output(route));}
fs.writeFileSync('dist/404.html',output('/404',true));
fs.writeFileSync('dist/favicon.svg',`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="7" fill="#064fc4"/><path d="m7 23 8-16h3l7 16h-4l-1.5-4h-8L10 23Zm6-7h5l-2.5-6Z" fill="white"/><path d="M6 27h7" stroke="#ec1631" stroke-width="2"/><path d="M17 27h9" stroke="#ffc51b" stroke-width="2"/></svg>`);
fs.writeFileSync('dist/robots.txt','User-agent: *\nAllow: /\nSitemap: '+origin+'/sitemap.xml\n');
fs.writeFileSync('dist/sitemap.xml','<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+Object.keys(pageTitles).map(r=>`<url><loc>${origin+r}</loc></url>`).join('')+'</urlset>');
console.log(JSON.stringify({generatedPages:Object.keys(pageTitles).length,notFoundPage:true}));
