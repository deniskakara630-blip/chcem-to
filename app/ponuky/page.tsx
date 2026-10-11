import Link from "next/link";
import RobkoHomeLink from "../RobkoHomeLink";

const offers=[
 {id:1,name:"Martin",avatar:"👨🏻‍🔧",rating:"4,9",jobs:86,price:690,term:"o 4 dni",badge:"Najlepšia hodnota",text:"Cena zahŕňa penetráciu, dve vrstvy bielej farby a zakrytie nábytku."},
 {id:2,name:"Jozef",avatar:"👨🏼‍🎨",rating:"4,7",jobs:142,price:640,term:"o 6 dní",badge:"Najnižšia cena",text:"Materiál podľa dohody. Realizácia približne 3 dni."},
 {id:3,name:"Peter",avatar:"👷🏻",rating:"4,8",jobs:61,price:720,term:"zajtra",badge:"Najrýchlejší",text:"Môžem začať zajtra. Cena vrátane základného materiálu."}
];

export default function Ponuky(){return <main className="appShell wide"><div className="topbar"><RobkoHomeLink/><span>Maľovanie • Komárno</span></div><div className="pageTitle"><p className="eyebrow dark">3 PONUKY</p><h1>Vyberte si remeselníka</h1><p>Porovnajte konečnú cenu, termín, skúsenosti a obsah ponuky.</p></div><div className="offerList">{offers.map((o,i)=><article className={i===0?"offerRow best":"offerRow"} key={o.id}><div><span className="tag">{o.badge}</span><div className="offerPerson"><span className={`offerAvatar avatar${o.id}`} aria-hidden="true">{o.avatar}</span><div><h2>{o.name}</h2><p>⭐ {o.rating} • {o.jobs} dokončených zákaziek • ✓ Overený</p></div></div><p>{o.text}</p></div><div className="offerAction"><strong>{o.price} €</strong><span>Termín: {o.term}</span><Link className="buttonLink" href={`/ponuky/${o.id}`}>Pozrieť detail</Link></div></article>)}</div><style>{`.offerPerson{display:flex;align-items:center;gap:13px;margin:12px 0 8px}.offerPerson h2{margin:0 0 4px}.offerPerson p{margin:0}.offerAvatar{width:58px;height:58px;flex:0 0 58px;border-radius:50%;display:grid;place-items:center;font-size:31px;border:1px solid rgba(7,21,45,.08)}.avatar1{background:#fff1bf}.avatar2{background:#e9f4ff}.avatar3{background:#eef0ff}@media(max-width:600px){.offerAvatar{width:52px;height:52px;flex-basis:52px;font-size:28px}}`}</style></main>}
