"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "../../lib/supabase/client";

export default function DopytPage(){
 const router=useRouter();
 const [step,setStep]=useState(1);
 const [saving,setSaving]=useState(false);
 const [error,setError]=useState("");
 const [data,setData]=useState({service:"Maliar",description:"Potrebujem vymaľovať 3-izbový byt.",city:"Komárno",when:"Do 2 týždňov",budget:""});
 const set=(k:string,v:string)=>setData({...data,[k]:v});
 async function submit(){
  setSaving(true);setError("");
  const supabase=createClient();
  const {data:{user}}=await supabase.auth.getUser();
  if(!user){router.push("/prihlasenie");return;}
  const budget=data.budget?Number(data.budget.replace(/[^0-9.,]/g,"").replace(",",".")):null;
  const {error}=await supabase.from("requests").insert({customer_id:user.id,category:data.service,description:data.description,city:data.city,desired_date:data.when,budget:Number.isFinite(budget)?budget:null,status:"matching"});
  if(error){setError("Dopyt sa nepodarilo uložiť. Skúste to znova.");setSaving(false);return;}
  router.push("/hladame");
 }
 return <main className="appShell requestPage">
  <div className="requestTopbar"><Link href="/" className="requestBrand"><img src="/robko-master.png" alt="Majster Robko"/><span>Majster <b>Robko</b></span></Link><div className="stepBadge">Krok {step} z 3</div></div>
  <div className="requestWrap">
   <aside className="requestAside"><img src="/robko-master.png" alt="Robko"/><div><b>Robko vám pomôže</b><span>Stačí pár údajov. Ja nájdem vhodných majstrov a ponuky prídu za vami.</span></div></aside>
   <div className="formCard requestCard">
    <div className="stepDots"><i className="active"/><i className={step>=2?"active":""}/><i className={step>=3?"active":""}/></div>
    {step===1&&<><p className="eyebrow dark">POVEDZTE ROBKOVI</p><h1>Čo potrebujete vyriešiť?</h1><p className="hint">Popíšte prácu jednoducho. Robko podľa zadania osloví vhodných remeselníkov za vás.</p><label>Služba<select value={data.service} onChange={e=>set("service",e.target.value)}><option>Maliar</option><option>Elektrikár</option><option>Inštalatér</option><option>Upratovanie</option><option>Montáž nábytku</option><option>Iné</option></select></label><label>Popis práce<textarea value={data.description} onChange={e=>set("description",e.target.value)} /></label><button className="requestPrimary" onClick={()=>setStep(2)}>Pokračovať <span>→</span></button></>}
    {step===2&&<><p className="eyebrow dark">DETAILY</p><h1>Kde a kedy?</h1><p className="hint">Tieto údaje pomôžu Robkovi nájsť majstrov, ktorí majú vo vašom okolí voľný termín.</p><label>Mesto<input value={data.city} onChange={e=>set("city",e.target.value)}/></label><label>Požadovaný termín<select value={data.when} onChange={e=>set("when",e.target.value)}><option>Čo najskôr</option><option>Do týždňa</option><option>Do 2 týždňov</option><option>Do mesiaca</option><option>Nemám pevný termín</option></select></label><label>Rozpočet (nepovinné)<input placeholder="napr. 700 €" value={data.budget} onChange={e=>set("budget",e.target.value)}/></label><div className="buttonRow"><button className="secondary" onClick={()=>setStep(1)}>← Späť</button><button className="requestPrimary" onClick={()=>setStep(3)}>Skontrolovať →</button></div></>}
    {step===3&&<><p className="eyebrow dark">KONTROLA DOPYTU</p><h1>Robko môže začať hľadať</h1><div className="summary requestSummary"><b>{data.service}</b><p>{data.description}</p><p>📍 {data.city}</p><p>📅 {data.when}</p>{data.budget&&<p>💶 {data.budget}</p>}</div><p className="hint">Po odoslaní Robko osloví vhodných remeselníkov. Kontaktné údaje zostávajú skryté, kým si nevyberiete ponuku.</p>{error&&<p className="requestError">{error}</p>}<div className="buttonRow"><button className="secondary" onClick={()=>setStep(2)}>← Upraviť</button><button className="requestPrimary" disabled={saving} onClick={submit}>{saving?"Robko odosiela…":"Nechať Robka hľadať →"}</button></div></>}
   </div>
  </div>
  <style>{`
   .requestPage{background:radial-gradient(circle at 50% 0,#fff8df 0,transparent 31%),#f4f6f8!important;min-height:100vh;padding-bottom:80px}
   .requestTopbar{height:92px;background:rgba(255,255,255,.96);border-bottom:1px solid #e7e9ed;display:flex;align-items:center;justify-content:space-between;padding:0 max(5vw,36px);position:relative;z-index:2}
   .requestBrand{display:flex;align-items:center;gap:10px;font-size:17px;font-weight:900;color:#07152d}.requestBrand img{width:58px;height:58px;object-fit:contain}.requestBrand span{line-height:1}.requestBrand b{display:block;color:#ffb800;font-size:22px}
   .stepBadge{background:#fff4c7;border:1px solid #ffe18a;border-radius:999px;padding:10px 16px;font-size:14px;font-weight:900;color:#8d6200}
   .requestWrap{width:calc(100% - 40px);max-width:1040px;margin:58px auto 0;display:grid;grid-template-columns:260px minmax(0,680px);gap:28px;align-items:start;justify-content:center}
   .requestAside{position:sticky;top:28px;background:#07152d;color:#fff;border-radius:24px;padding:28px 24px;box-shadow:0 20px 45px rgba(7,21,45,.14)}.requestAside img{width:112px;height:112px;object-fit:contain;display:block;margin:-8px auto 12px}.requestAside b{display:block;font-size:21px;margin-bottom:8px}.requestAside span{display:block;color:#cbd3df;line-height:1.5;font-size:14px}
   .requestCard{width:100%!important;max-width:none!important;margin:0!important;padding:42px 46px 46px!important;border:1px solid #eceef1;box-shadow:0 22px 55px rgba(7,21,45,.09)!important;border-radius:26px!important}
   .stepDots{display:flex;gap:7px;margin-bottom:28px}.stepDots i{width:42px;height:6px;border-radius:20px;background:#e8ebef}.stepDots i.active{background:#ffb800}
   .requestCard .eyebrow{font-size:12px;letter-spacing:.11em;font-weight:900;color:#9a6b00;margin:0 0 10px}.requestCard h1{font-size:38px;line-height:1.05;letter-spacing:-1.2px;margin:0 0 12px;color:#07152d}.requestCard .hint{font-size:15px;line-height:1.5;color:#687386;margin:0 0 26px}.requestCard label{font-size:14px;margin:18px 0 0!important;gap:9px!important;color:#18263e}.requestCard input,.requestCard select,.requestCard textarea{font:inherit;background:#fbfcfd;border:1.5px solid #dce1e7!important;padding:15px 16px!important;border-radius:12px!important;transition:border-color .15s,box-shadow .15s}.requestCard input:focus,.requestCard select:focus,.requestCard textarea:focus{outline:none;border-color:#ffb800!important;box-shadow:0 0 0 4px rgba(255,184,0,.12)}.requestCard textarea{min-height:145px!important;line-height:1.5}
   .requestPrimary{margin-top:26px;min-height:54px;padding:0 25px!important;border-radius:13px!important;font-size:15px;box-shadow:0 9px 20px rgba(255,184,0,.22)}.buttonRow .requestPrimary{margin-top:0}.requestPrimary span{font-size:20px;margin-left:6px}.requestSummary{background:#f8f9fb;border:1px solid #e7e9ed;border-radius:16px;padding:20px;margin:20px 0}.requestSummary>b{font-size:18px}.requestError{background:#fff0ed;color:#a62c1e;padding:12px 14px;border-radius:10px;font-weight:700}
   @media(max-width:820px){.requestWrap{grid-template-columns:1fr;max-width:680px;margin-top:28px}.requestAside{position:relative;top:auto;display:flex;align-items:center;gap:15px;padding:18px 20px}.requestAside img{width:72px;height:72px;margin:0;flex:0 0 auto}.requestAside b{font-size:17px}.requestTopbar{height:76px;padding:0 18px}.requestBrand img{width:48px;height:48px}.requestBrand span{display:none}}
   @media(max-width:560px){.requestWrap{width:calc(100% - 24px)}.requestCard{padding:30px 22px 32px!important}.requestCard h1{font-size:31px}.requestAside{border-radius:18px}.stepBadge{padding:8px 12px}.requestPrimary{width:100%}.requestCard .buttonRow{margin-top:24px}}
  `}</style>
 </main>
}
