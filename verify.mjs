import assert from 'node:assert/strict';
import fs from 'node:fs';
import {content as C} from './dist/content.mjs';
import {pageTitles,renderPage,filterValues,filteredContent,registrationOpen,countdown,localDate} from './dist/site.mjs';
assert.equal(C.event.maxTeamMembers,3);
for(const r of Object.values(C.rubrics))assert.equal(r.items.reduce((s,x)=>s+x.weight,0),100);
assert.deepEqual(C.prizes.map(x=>x.quantity),[2,2,2,4,15]);
assert.deepEqual(C.prizes.map(x=>x.amountVnd),[17000000,10000000,8000000,5000000,1000000]);
assert.equal(C.prizes.reduce((s,x)=>s+x.quantity*x.amountVnd,0),105000000);
assert.equal(registrationOpen(new Date('2026-09-30T16:59:59Z')),true);
assert.equal(registrationOpen(new Date('2026-09-30T17:00:00Z')),false);
assert.equal(localDate(new Date('2026-09-30T17:00:00Z')),'2026-10-01');
assert.equal(registrationOpen(new Date('2026-10-07T00:00:00Z')),false);
assert.equal(countdown(Date.parse('2026-10-10T00:29:59Z')).remaining,1);
assert.equal(countdown(Date.parse('2026-10-10T00:30:00Z')).remaining,0);
assert.equal(countdown(Date.parse('2026-10-11T00:30:00Z')).remaining,0);
assert.equal(C.people.length,10);assert.equal(C.partners.length,7);assert.equal(C.pastResults.length,14);assert.equal(C.gallery.length,16);
for(const a of C.gallery){assert.ok(fs.existsSync('dist/assets/ai4life/'+a.path));assert.ok(fs.existsSync('dist/assets/ai4life/'+a.thumbnail));}
assert.deepEqual(filterValues('/ket-qua',new URLSearchParams('nam=2026&bang=bad')),{nam:'2025',bang:'tat-ca'});
let h=filteredContent('/ket-qua',{nam:'2024',bang:'ai-challenge'});assert.ok(h.includes('Bigfooooot'));assert.ok(!h.includes('Four Stars'));assert.ok(!h.includes('<th scope="col">Sản phẩm'));
h=filteredContent('/thu-vien',{nam:'2025',loai:'an-pham'});assert.equal((h.match(/data-image=/g)||[]).length,3);assert.ok(h.includes('contain'));
h=filteredContent('/tin-tuc',{loai:'lich-su-kien'});assert.ok(h.includes('Ngày diễn ra: 10/10/2026'));assert.ok(!h.includes('Ngày đăng:'));
const routes=Object.keys(pageTitles);for(const route of routes){const filename=route==='/'?'dist/index.html':'dist'+route+'/index.html';const html=fs.readFileSync(filename,'utf8');assert.equal((html.match(/<h1\b/g)||[]).length,1);assert.ok(!html.includes('href="#"'));assert.ok(!html.includes('href=""'));assert.ok(!html.includes('/workspace/'));assert.ok(!html.includes('chưa có'));for(const match of html.matchAll(/(?:href|src)="([^"#]+)"/g)){const u=match[1];if(!u.startsWith('/')||u.startsWith('//'))continue;const path=u.split(/[?#]/)[0];assert.ok(fs.existsSync('dist'+path)||fs.existsSync('dist'+path+'/index.html'),`${route}: missing ${u}`);}}
const home=fs.readFileSync('dist/index.html','utf8');let last=-1;for(const s of C.homeSections){const pos=home.indexOf('id="'+s.id+'"');assert.ok(pos>last,s.id);last=pos;}
for(const id of ['ke-hoach','the-le']){const b=fs.readFileSync('dist/documents/'+id+'-ai4life-2026.docx');assert.equal(b.subarray(0,2).toString(),'PK');}
assert.ok(renderPage('/unknown').includes('Không tìm thấy trang'));
console.log(JSON.stringify({status:'passed',pages:routes.length,homeSections:12,gallery:16,pastResults:14,people:10,partners:7,rubricTotals:[100,100,100],prizeTotalVnd:105000000,checks:'Local links, assets, DOCX, filters, registration timezone boundary, countdown boundary, semantic headings and 404'}));
