import Link from "next/link";
import RobkoHomeLink from "../RobkoHomeLink";

export default function Hladame(){
  return <main className="appShell searchPage">
    <div className="statusCard searchStatusCard">
      <div className="searchHeadRow"><RobkoHomeLink /><div className="searchCheck">✓</div><span className="searchHeadSpacer" aria-hidden="true" /></div>
      <p className="eyebrow dark">ROBKO UŽ HĽADÁ</p>
      <h1>Oslovujeme vhodných remeselníkov</h1>
      <p className="searchLead">Robko v prvej vlne oslovuje najvhodnejších dodávateľov v okolí. Ak nebude dostatok reakcií, okruh automaticky rozšíri.</p>
      <div className="searchProgress"><div /></div>
      <div className="searchStats"><span><b>8</b><small>oslovených</small></span><span><b>4</b><small>otvorili dopyt</small></span><span><b>3</b><small>ponuky</small></span></div>
      <Link className="buttonLink searchButton" href="/ponuky">Robko našiel 3 ponuky →</Link>
    </div>
    <style>{`.searchPage{background:#f6f7f9;min-height:100vh;padding-top:70px}.searchStatusCard{max-width:820px;margin:0 auto;padding:38px 48px 46px;border-radius:24px;box-shadow:0 18px 50px rgba(7,21,45,.08)}.searchHeadRow{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;margin-bottom:22px}.searchHeadRow .robkoHomeLink{position:static!important;top:auto!important;left:auto!important;justify-self:start}.searchHeadRow .robkoHomeImage{width:72px;height:72px;flex-basis:72px}.searchHeadRow .robkoHomeName{font-size:14px}.searchHeadRow .robkoHomeName strong{font-size:22px}.searchHeadSpacer{display:block}.searchCheck{width:48px;height:48px;border-radius:50%;display:grid;place-items:center;background:#fff2bd;color:#d98900;font-size:25px;font-weight:900;margin:0;justify-self:center}.searchStatusCard .eyebrow{margin:0 0 12px;font-size:13px;font-weight:900;letter-spacing:.08em;color:#687386}.searchStatusCard h1{font-size:38px;line-height:1.08;letter-spacing:-1.2px;margin:0 0 18px;color:#07152d}.searchLead{max-width:670px;margin:0;color:#536077;font-size:17px;line-height:1.5}.searchProgress{height:10px;background:#eceff3;border-radius:999px;margin:34px 0 28px;overflow:hidden}.searchProgress div{width:68%;height:100%;border-radius:999px;background:#ffb800}.searchStats{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:32px}.searchStats span{background:#f7f8fa;border:1px solid #eceef2;border-radius:15px;padding:18px 20px;display:flex;flex-direction:column;gap:4px}.searchStats b{font-size:25px;color:#07152d}.searchStats small{font-size:13px;color:#697386}.searchButton{display:inline-flex;align-items:center;justify-content:center;min-height:52px;padding:0 24px;border-radius:13px;font-size:16px}@media(max-width:850px){.searchPage{padding-top:28px}.searchStatusCard{margin:0 16px;padding:26px 24px 30px}.searchHeadRow .robkoHomeImage{width:62px;height:62px;flex-basis:62px}.searchStatusCard h1{font-size:30px}.searchStats{grid-template-columns:1fr}.searchButton{width:100%}}`}</style>
  </main>
}
