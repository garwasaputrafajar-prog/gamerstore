const els=document.querySelectorAll(".item,.card,.step,details");
els.forEach(e=>e.classList.add("reveal"));
if("IntersectionObserver" in window){
  const io=new IntersectionObserver(en=>en.forEach(x=>{
    if(x.isIntersecting){const t=x.target;t.style.transitionDelay=(([...els].indexOf(t))%4*80)+"ms";t.classList.add("in");setTimeout(()=>t.style.transitionDelay="",900);io.unobserve(t)}
  }),{threshold:.15});
  els.forEach(e=>io.observe(e));
}else{els.forEach(e=>e.classList.add("in"))}

// Form stok. Ganti nomor WhatsApp (format 62, tanpa 0 atau +)
const WA="628xxxxxxxxxx";
const akun=[
{p:50000,g:"Mobile Legends",t:"Starter, 15 hero",d:"5 skin · cocok untuk akun cadangan"},
{p:65000,g:"Free Fire",t:"Level 25, 1 bundle",d:"Akun rapi, email bisa diganti"},
{p:80000,g:"Mobile Legends",t:"Legend IV, banyak skin",d:"Ada skin Special, Elite, dan Limited",img:"images/akun-ml-80k.jpg"},
{p:95000,g:"Free Fire",t:"Level 32, 2 bundle",d:"Ada beberapa skin senjata"},
{p:150000,g:"Mobile Legends",t:"Warrior, 25 hero",d:"15 skin · email bisa diganti"},
{p:150000,g:"Free Fire",t:"Level 40, 3 bundle",d:"Ada beberapa skin senjata"},
{p:250000,g:"Mobile Legends",t:"Elite, 40 hero",d:"22 skin · bebas banned"},
{p:250000,g:"Free Fire",t:"Level 55, 6 bundle",d:"Ada senjata evo dan karakter"},
{p:350000,g:"Mobile Legends",t:"Epic, 60 hero",d:"30 skin · email bisa diganti"},
{p:350000,g:"Free Fire",t:"Level 62, 10 bundle",d:"Senjata evo dan karakter langka"},
{p:450000,g:"Mobile Legends",t:"Legend, 75 hero",d:"50 skin · ada skin Epic"},
{p:450000,g:"Free Fire",t:"Level 70, 14 bundle",d:"Banyak bundle dan evo gun"},
{p:550000,g:"Mobile Legends",t:"Mythic, 90 hero",d:"70 skin · ada skin Legend"},
{p:550000,g:"Free Fire",t:"Level 75, 18 bundle",d:"Koleksi lengkap, akun rapi"}
];
const rp=n=>"Rp "+n.toLocaleString("id-ID");
const hasil=document.getElementById("hasil");
const form=document.getElementById("finder");
const err=document.getElementById("err");
const info=document.getElementById("info");
const zoom=document.getElementById("zoom");
function tampil(p){
  const list=akun.filter(a=>p==="under100"?a.p<100000:a.p===p);
  hasil.innerHTML=list.map((a,i)=>{
    const msg=encodeURIComponent("Halo GamerStore, saya tertarik akun "+a.g+" "+a.t+" ("+rp(a.p)+")");
    const foto=a.img?'<button class="fotobtn" type="button" aria-label="Perbesar foto akun"><img class="foto" src="'+a.img+'" alt="Foto akun '+a.g+' '+a.t+'" loading="lazy"><span>Foto asli akun</span></button>':'';
    return '<div class="card pop in" style="animation-delay:'+(i*90)+'ms">'+foto+'<small class="'+(a.g==="Free Fire"?"ff":"")+'">'+a.g+'</small><h3>'+a.t+'</h3><p class="item">'+a.d+'</p><div class="price">'+rp(a.p)+'</div><a class="btn" href="https://wa.me/'+WA+'?text='+msg+'" target="_blank" rel="noopener">Tanya akun ini</a></div>';
  }).join("")||'<p class="empty">Belum ada stok di harga ini.</p>';
  const label=p==="under100"?"Di bawah Rp 100.000":rp(p);
  info.textContent="Stok "+label+": "+list.length+" akun";
}
form.addEventListener("submit",e=>{
  e.preventDefault();
  const v=form.elements.harga.value;
  if(!v){err.textContent="Pilih harga dulu.";return}
  err.textContent="";
  tampil(v==="under100"?v:+v);
  requestAnimationFrame(()=>{
    const kurang=matchMedia("(prefers-reduced-motion:reduce)").matches;
    document.getElementById("akun").scrollIntoView({behavior:kurang?"auto":"smooth",block:"start"});
    info.focus({preventScroll:true});
  });
});
form.addEventListener("change",()=>{err.textContent=""});
hasil.addEventListener("click",e=>{
  const b=e.target.closest(".fotobtn");
  if(!b)return;
  zoom.querySelector("img").src=b.querySelector("img").src;
  zoom.showModal();
});
zoom.addEventListener("click",()=>zoom.close());
