import {content as C} from './content.mjs';
import {filterValues,filteredContent,countdown,registrationOpen} from './site.mjs';
const path=location.pathname.replace(/\/$/,'')||'/';
const mobile=document.querySelector('[data-mobile]'),nav=document.getElementById('main-nav');
function closeGroups(except){document.querySelectorAll('[data-disclosure]').forEach(b=>{if(b!==except){b.setAttribute('aria-expanded','false');document.getElementById(b.dataset.disclosure).hidden=true;}});}
function toggle(b,open){b.setAttribute('aria-expanded',String(open));document.getElementById(b.dataset.disclosure).hidden=!open;}
mobile?.addEventListener('click',()=>{const open=mobile.getAttribute('aria-expanded')!=='true';mobile.setAttribute('aria-expanded',String(open));mobile.setAttribute('aria-label',open?'Đóng menu điều hướng':'Mở menu điều hướng');nav.classList.toggle('mobile-open',open);if(open)toggle(document.querySelector('[data-disclosure="nav-tracks"]'),true);});
document.querySelectorAll('[data-disclosure]').forEach(b=>b.addEventListener('click',()=>{const open=b.getAttribute('aria-expanded')!=='true';closeGroups(b);toggle(b,open);}));
document.addEventListener('click',ev=>{if(!ev.target.closest('.nav-group')&&!ev.target.closest('[data-mobile]'))closeGroups();});
document.addEventListener('keydown',ev=>{if(ev.key==='Escape'){const active=document.querySelector('[data-disclosure][aria-expanded="true"]');closeGroups();if(nav?.classList.contains('mobile-open')){nav.classList.remove('mobile-open');mobile.setAttribute('aria-expanded','false');mobile.setAttribute('aria-label','Mở menu điều hướng');mobile.focus();}else active?.focus();}});
matchMedia('(min-width:768px)').addEventListener('change',ev=>{if(ev.matches){nav?.classList.remove('mobile-open');mobile?.setAttribute('aria-expanded','false');closeGroups();}});
let clock;
function tick(){const {remaining,values}=countdown();document.querySelectorAll('[data-countdown]').forEach(el=>{if(!remaining){el.hidden=true;return;}el.hidden=false;if(!el.children.length)el.innerHTML=['Ngày','Giờ','Phút','Giây'].map(label=>`<div><strong></strong><span>${label}</span></div>`).join('');[...el.querySelectorAll('strong')].forEach((n,i)=>n.textContent=String(values[i]).padStart(2,'0'));});}
if(document.querySelector('[data-countdown]')){tick();clock=setInterval(tick,1000);document.addEventListener('visibilitychange',tick);}window.addEventListener('pagehide',()=>clearInterval(clock));window.addEventListener('pageshow',ev=>{if(ev.persisted&&document.querySelector('[data-countdown]')){clearInterval(clock);tick();clock=setInterval(tick,1000);}});
function applyFilters(push=false){const params=new URLSearchParams(location.search);if(push){document.querySelectorAll('[data-filter]').forEach(s=>params.set(s.dataset.filter,s.value));history.pushState({},'',location.pathname+'?'+params.toString());}const v=filterValues(path,params);document.querySelectorAll('[data-filter]').forEach(s=>s.value=v[s.dataset.filter]);const target=document.querySelector('[data-filter-content]');if(target)target.innerHTML=filteredContent(path,v);const count=document.querySelector('[data-filter-count]');if(count&&target)count.textContent='Đang hiển thị '+target.querySelectorAll('[data-image]').length+' ảnh và ấn phẩm';if(path==='/ket-qua'){const img=document.querySelector('[data-results-year-photo] img');const a=C.gallery.find(a=>a.id===(v.nam==='2024'?'winners-event-2024':'the-liems-award-2025'));if(img){img.src='/assets/ai4life/'+a.thumbnail;img.alt='Vinh danh các đội thi mùa '+v.nam;}}}
if(document.querySelector('[data-filter]')){applyFilters();document.querySelectorAll('[data-filter]').forEach(s=>s.addEventListener('change',()=>applyFilters(true)));window.addEventListener('popstate',()=>applyFilters());}
function openHash(){if(!location.hash)return;let id;try{id=decodeURIComponent(location.hash.slice(1));}catch{return;}const target=document.getElementById(id);if(!target)return;if(target.tagName==='DETAILS')target.open=true;target.closest('details')?.setAttribute('open','');if(id==='cong-nhan-diem'){target.querySelectorAll('details').forEach(d=>d.open=true);}requestAnimationFrame(()=>target.scrollIntoView());}
window.addEventListener('hashchange',openHash);openHash();
const dialog=document.getElementById('image-dialog');let album=[],current=0,opener;
function showPhoto(){const a=album[current];if(!a)return;const img=document.getElementById('dialog-photo');img.src='/assets/ai4life/'+a.path;img.alt=a.alt;document.getElementById('image-title').textContent=a.title;document.getElementById('image-caption').textContent=a.year+' · '+a.category;document.getElementById('image-position').textContent=`Ảnh ${current+1} trên ${album.length}`;document.getElementById('image-original').href=img.src;document.getElementById('image-download').href=img.src;dialog.querySelector('[data-previous]').disabled=album.length<2;dialog.querySelector('[data-next]').disabled=album.length<2;}
const previous=()=>{current=(current-1+album.length)%album.length;showPhoto();},next=()=>{current=(current+1)%album.length;showPhoto();};
document.addEventListener('click',ev=>{const b=ev.target.closest('[data-image]');if(!b)return;opener=b;album=[...document.querySelectorAll('[data-image]')].map(b=>C.gallery.find(a=>a.id===b.dataset.image));current=album.findIndex(a=>a.id===b.dataset.image);showPhoto();dialog.showModal();document.body.style.overflow='hidden';dialog.querySelector('[data-close]').focus();});
dialog?.querySelector('[data-close]').addEventListener('click',()=>dialog.close());dialog?.querySelector('[data-previous]').addEventListener('click',previous);dialog?.querySelector('[data-next]').addEventListener('click',next);
dialog?.addEventListener('close',()=>{document.body.style.overflow='';opener?.focus();document.getElementById('dialog-photo').removeAttribute('src');});
dialog?.addEventListener('click',ev=>{if(ev.target===dialog){const r=dialog.getBoundingClientRect();if(ev.clientX<r.left||ev.clientX>r.right||ev.clientY<r.top||ev.clientY>r.bottom)dialog.close();}});
dialog?.addEventListener('keydown',ev=>{if(ev.key==='ArrowLeft'){ev.preventDefault();previous();}if(ev.key==='ArrowRight'){ev.preventDefault();next();}if(ev.key==='Tab'){const focusable=[...dialog.querySelectorAll('button:not([disabled]),a[href]')];const first=focusable[0],last=focusable.at(-1);if(ev.shiftKey&&document.activeElement===first){ev.preventDefault();last.focus();}else if(!ev.shiftKey&&document.activeElement===last){ev.preventDefault();first.focus();}}});
if(!matchMedia('(prefers-reduced-motion:reduce)').matches&&'IntersectionObserver' in window){const obs=new IntersectionObserver(entries=>entries.forEach(x=>{if(x.isIntersecting){x.target.classList.remove('reveal-ready');x.target.classList.add('revealed');obs.unobserve(x.target);}}),{threshold:0,rootMargin:"0px 0px -40px 0px"});document.querySelectorAll('.section').forEach(el=>{if(el.getBoundingClientRect().top>innerHeight){el.classList.add('reveal-ready');obs.observe(el);}});window.addEventListener('pagehide',()=>{document.querySelectorAll('.reveal-ready').forEach(el=>el.classList.remove('reveal-ready'));obs.disconnect();});}
// Fresh page loads use the current business date; no registration data is collected here.
if(!registrationOpen()){document.querySelectorAll('a[href^="https://forms.gle/"]').forEach(a=>{const b=document.createElement('button');b.disabled=true;b.className='button closed';b.textContent='Đã kết thúc đăng ký';a.replaceWith(b);});}

if(document.referrer){try{const from=new URL(document.referrer);if(from.origin===location.origin&&from.pathname!==location.pathname&&!location.hash)document.querySelector("h1")?.focus({preventScroll:true});}catch{}}

// Ambient movement runs only while its section is visible.
const reducedMotion=matchMedia('(prefers-reduced-motion:reduce)');
let ambientObserver;
function updateAmbientMotion(){
  ambientObserver?.disconnect();
  document.querySelectorAll('.motion-active').forEach(el=>el.classList.remove('motion-active'));
  if(reducedMotion.matches||!('IntersectionObserver' in window))return;
  ambientObserver=new IntersectionObserver(entries=>entries.forEach(({target,isIntersecting})=>target.classList.toggle('motion-active',isIntersecting)),{threshold:0});
  document.querySelectorAll('.home-hero,.page-hero').forEach(el=>ambientObserver.observe(el));
}
updateAmbientMotion();
reducedMotion.addEventListener('change',updateAmbientMotion);
window.addEventListener('pagehide',()=>ambientObserver?.disconnect());
window.addEventListener('pageshow',ev=>{if(ev.persisted)updateAmbientMotion();});
const siteHeader=document.querySelector('.site-header');
let scrollFrame=false;
function updateHeader(){siteHeader?.classList.toggle('is-scrolled',scrollY>8);scrollFrame=false;}
window.addEventListener('scroll',()=>{if(!scrollFrame){scrollFrame=true;requestAnimationFrame(updateHeader);}},{passive:true});
updateHeader();
