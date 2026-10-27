const buttons=[...document.querySelectorAll('[data-filter]')];
const rows=[...document.querySelectorAll('.work-row')];
const search=document.querySelector('#search');
const topic=document.querySelector('#topic');
let filter='All';
function applyFilters(){
 const q=search.value.toLocaleLowerCase().trim();
 let count=0;
 rows.forEach(row=>{
  const show=(filter==='All'||row.dataset.category===filter)&&(topic.value==='All topics'||row.dataset.topic===topic.value)&&(!q||(row.textContent+' '+row.dataset.topic).toLocaleLowerCase().includes(q));
  row.hidden=!show;
  if(show)count++;
 });
 document.querySelector('#result-count').textContent=count+' '+(count===1?'entry':'entries');
 document.querySelector('#empty').hidden=count!==0;
}
buttons.forEach(button=>button.addEventListener('click',()=>{
 filter=button.dataset.filter;
 buttons.forEach(b=>{const selected=b===button;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected));});
 applyFilters();
}));
search.addEventListener('input',applyFilters);
topic.addEventListener('change',applyFilters);

const themeToggle=document.querySelector('#theme-toggle');
function updateThemeControl(){
 const dark=document.documentElement.dataset.theme==='dark';
 themeToggle.setAttribute('aria-label',dark?'Switch to light mode':'Switch to dark mode');
 themeToggle.setAttribute('title',dark?'Switch to light mode':'Switch to dark mode');
 themeToggle.querySelector('[aria-hidden]').textContent=dark?'☀':'☾';
 themeToggle.querySelector('.theme-label').textContent=dark?'Light mode':'Dark mode';
 document.querySelector('meta[name="theme-color"]').content=dark?'#161c20':'#f5f1e9';
}
themeToggle.addEventListener('click',()=>{
 const theme=document.documentElement.dataset.theme==='dark'?'light':'dark';
 document.documentElement.dataset.theme=theme;
 try {localStorage.setItem('tc-theme',theme);}catch(_){}
 updateThemeControl();
});
updateThemeControl();
const curiosityDialog=document.querySelector('#curiosity-dialog');
const curiosityStar=document.querySelector('.curiosity-star');
curiosityStar.addEventListener('click',()=>curiosityDialog.showModal());
document.querySelector('#close-curiosity').addEventListener('click',()=>curiosityDialog.close());
curiosityDialog.addEventListener('close',()=>curiosityStar.focus());
curiosityDialog.addEventListener('click',event=>{
 if(event.target===curiosityDialog){
  const box=curiosityDialog.getBoundingClientRect();
  if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)curiosityDialog.close();
 }
});
