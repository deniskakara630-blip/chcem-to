"use client";
import { useState } from "react";
import Link from "next/link";

export default function DopytPage(){
 const [step,setStep]=useState(1);
 const [data,setData]=useState({service:"Maliar",description:"Potrebujem vymaľovať 3-izbový byt.",city:"Komárno",when:"Do 2 týždňov",budget:""});
 const set=(k:string,v:string)=>setData({...data,[k]:v});
 return <main className="appShell"><div className="topbar"><Link href="/" className="brand">⌂ Chcem <span>to</span></Link><span>Krok {step} z 3</span></div><div className="formCard">
  {step===1&&<><p className="eyebrow dark">NOVÝ DOPYT</p><h1>Čo potrebujete vyriešiť?</h1><label>Služba<select value={data.service} onChange={e=>set("service",e.target.value)}><option>Maliar</option><option>Elektrikár</option><option>Inštalatér</option><option>Upratovanie</option><option>Montáž nábytku</option><option>Iné</option></select></label><label>Popis práce<textarea value={data.description} onChange={e=>set("description",e.target.value)} /></label><button onClick={()=>setStep(2)}>Pokračovať →</button></>}
  {step===2&&<><p className="eyebrow dark">DETAILY</p><h1>Kde a kedy?</h1><label>Mesto<input value={data.city} onChange={e=>set("city",e.target.value)}/></label><label>Požadovaný termín<select value={data.when} onChange={e=>set("when",e.target.value)}><option>Čo najskôr</option><option>Do týždňa</option><option>Do 2 týždňov</option><option>Do mesiaca</option><option>Nemám pevný termín</option></select></label><label>Rozpočet (nepovinné)<input placeholder="napr. 700 €" value={data.budget} onChange={e=>set("budget",e.target.value)}/></label><div className="buttonRow"><button className="secondary" onClick={()=>setStep(1)}>← Späť</button><button onClick={()=>setStep(3)}>Skontrolovať →</button></div></>}
  {step===3&&<><p className="eyebrow dark">KONTROLA DOPYTU</p><h1>Pripravené na odoslanie</h1><div className="summary"><b>{data.service}</b><p>{data.description}</p><p>📍 {data.city}</p><p>📅 {data.when}</p>{data.budget&&<p>💶 {data.budget}</p>}</div><p className="hint">Po odoslaní systém osloví vhodných remeselníkov. Kontaktné údaje zákazníka zostávajú skryté, kým si nevyberie ponuku.</p><div className="buttonRow"><button className="secondary" onClick={()=>setStep(2)}>← Upraviť</button><Link className="buttonLink" href="/hladame">Odoslať dopyt →</Link></div></>}
 </div></main>
}
