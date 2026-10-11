import Link from "next/link";

const services=[
  {icon:"🎨",name:"Maľovanie a stierky"},{icon:"🔌",name:"Elektrika"},{icon:"💧",name:"Vodoinštalácia"},
  {icon:"📦",name:"Montáž nábytku"},{icon:"🧱",name:"Rekonštrukcia"},{icon:"🧹",name:"Upratovanie"},
  {icon:"🌱",name:"Záhrada"},{icon:"🚚",name:"Preprava"},{icon:"•••",name:"Ďalšie služby"}
];
const Robko=({small=false}:{small?:boolean})=><img className={small?"robkoImg small":"robkoImg"} src="/robko.svg" alt="Majster Robko"/>;

export default function Home(){return <main className="conceptHome">
  <section className="conceptHero">
    <div className="conceptCopy">
      <div className="conceptLogo"><Robko/><span>Majster<br/><b>Robko</b></span></div>
      <h1>Robko robí pre vás.</h1>
      <p className="conceptLead">Jednoducho zadáte,<br/>čo potrebujete spraviť.<br/>Overení majstri vám pošlú<br/>ponuky. Vy si vyberiete.</p>
      <Link className="conceptCta" href="/dopyt">Začať zadarmo <span>→</span></Link>
      <div className="benefits"><div><i>⚡</i><p><b>Rýchlo</b><span>Ponuky už do pár hodín</span></p></div><div><i>✓</i><p><b>Overení majstri</b><span>Hodnotenia a recenzie</span></p></div><div><i>💬</i><p><b>Bez obvolávania</b><span>Vy zadáte, oni sa ozvú</span></p></div></div>
    </div>
    <div className="phoneMock">
      <div className="phoneTop"><div className="miniLogo"><Robko small/><b>Majster <em>Robko</em></b></div><span>🔔</span></div>
      <h2>Čo potrebujete<br/>spraviť?</h2><Link href="/dopyt" className="searchMock">⌕ <span>Napíšte, čo potrebujete...</span></Link>
      <div className="serviceGrid">{services.map(s=><Link href="/dopyt" key={s.name}><strong>{s.icon}</strong><span>{s.name}</span></Link>)}</div>
      <div className="robkoHelp"><Robko small/><p><b>Neviete si vybrať?</b><br/>Napíšte, čo potrebujete.<br/>Robko vám poradí.</p></div>
      <div className="phoneNav"><span className="active">⌂<small>Domov</small></span><span>▣<small>Moje zákazky</small></span><Link href="/dopyt" className="plus">+</Link><span>▢<small>Správy</small></span><span>♙<small>Profil</small></span></div>
    </div>
  </section>
  <section className="conceptSteps"><div><i>▣</i><p><b>Zadáte, čo potrebujete</b><span>Jednoducho a za pár minút.</span></p></div><div><i>♟</i><p><b>Majstri sa vám ozvú</b><span>Porovnajte ponuky, ceny aj termíny.</span></p></div><div><i>✓</i><p><b>Vyberiete si</b><span>A dohodnite sa priamo v aplikácii.</span></p></div><div><i>⌂</i><p><b>Robko to dá dokopy</b><span>Práca je hotová. Spoľahlivo a bez stresu.</span></p></div></section>
</main>}
