const services = [
  { icon: "🎨", name: "Maliar" },
  { icon: "⚡", name: "Elektrikár" },
  { icon: "🔧", name: "Inštalatér" },
  { icon: "🧹", name: "Upratovanie" },
  { icon: "🪑", name: "Montáž nábytku" },
  { icon: "➕", name: "Ďalšie služby" },
];

const offers = [
  { name: "Martin Novák", rating: "4,9", price: 690, term: "o 4 dni", badge: "Odporúčané" },
  { name: "Farbíme s.r.o.", rating: "4,7", price: 640, term: "o 6 dní", badge: "Najnižšia cena" },
  { name: "Peter Kováč", rating: "4,8", price: 720, term: "zajtra", badge: "Najrýchlejší" },
];

export default function Home() {
  return (
    <main>
      <header className="hero">
        <nav><strong>⌂ Chcem <span>to</span></strong><button>Pre remeselníkov</button></nav>
        <div className="heroContent">
          <p className="eyebrow">OVERENÍ REMESELNÍCI • JEDNODUCHO</p>
          <h1>Povedzte, čo potrebujete.<br/>Ponuky prídu za vami.</h1>
          <p className="lead">Opíšte prácu, pridajte fotky a porovnajte ceny a termíny remeselníkov vo vašom okolí.</p>
          <div className="requestBox">
            <textarea defaultValue="Potrebujem vymaľovať 3-izbový byt v Komárne." />
            <div className="requestMeta"><span>📍 Komárno</span><span>📷 Pridať fotky</span><button>Získať ponuky →</button></div>
          </div>
        </div>
      </header>

      <section>
        <div className="sectionHead"><div><p className="eyebrow dark">SLUŽBY</p><h2>S čím vám môžeme pomôcť?</h2></div><p>Vyberte kategóriu alebo jednoducho napíšte, čo potrebujete.</p></div>
        <div className="services">{services.map(s => <article className="service" key={s.name}><div>{s.icon}</div><strong>{s.name}</strong><span>Požiadať o ponuku →</span></article>)}</div>
      </section>

      <section className="soft">
        <div className="sectionHead"><div><p className="eyebrow dark">AKO TO FUNGUJE</p><h2>Tri kroky k hotovej práci</h2></div></div>
        <div className="steps"><article><b>01</b><h3>Opíšte zákazku</h3><p>AI vám pomôže doplniť rozsah, termín, lokalitu a fotografie.</p></article><article><b>02</b><h3>Dostanete ponuky</h3><p>Systém osloví vhodných remeselníkov a vy porovnáte cenu, termín a hodnotenie.</p></article><article><b>03</b><h3>Vyberiete si</h3><p>Potvrdíte dodávateľa, otvorí sa chat a dohodnete realizáciu.</p></article></div>
      </section>

      <section>
        <div className="sectionHead"><div><p className="eyebrow dark">UKÁŽKA</p><h2>Ponuky na maľovanie bytu</h2></div><span className="pill">3 nové ponuky</span></div>
        <div className="offers">{offers.map((o,i) => <article className={i===0?"offer featured":"offer"} key={o.name}><span className="tag">{o.badge}</span><div className="person"><div className="avatar">{o.name[0]}</div><div><h3>{o.name}</h3><p>✓ Overený • ⭐ {o.rating}</p></div></div><div className="price">{o.price} €</div><p>Termín realizácie: <strong>{o.term}</strong></p><button>Detail ponuky</button></article>)}</div>
      </section>

      <footer><strong>⌂ Chcem <span>to</span></strong><p>Slovenský marketplace služieb a remeselníkov • MVP prototyp</p></footer>
    </main>
  );
}
