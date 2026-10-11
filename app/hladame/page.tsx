import Link from "next/link";
import RobkoHomeLink from "../RobkoHomeLink";

export default function Hladame(){
  return <main className="appShell searchPage">
    <div className="statusCard searchStatusCard">
      <div className="searchProgress"><div /></div>
      <div className="searchHeadRow">
        <div className="searchRobkoBox"><RobkoHomeLink /><span className="searchRobkoText">Robko už hľadá</span></div>
        <div className="searchTitle"><p>HĽADÁME PRE VÁS</p><h1>Oslovujeme vhodných remeselníkov</h1></div>
      </div>
      <p className="searchLead">Robko v prvej vlne oslovuje najvhodnejších dodávateľov v okolí. Ak nebude dostatok reakcií, okruh automaticky rozšíri.</p>
      <div className="searchStats"><span><b>8</b><small>oslovených</small></span><span><b>4</b><small>otvorili dopyt</small></span><span><b>3</b><small>ponuky</small></span></div>
      <Link className="buttonLink searchButton" href="/ponuky">Robko našiel 3 ponuky →</Link>
    </div>
    <style>{`.searchPage{background:#f6f7f9;min-height:100vh;padding-top:70px}.searchStatusCard{max-width:820px;margin:0 auto;padding:38px 48px 46px;border-radius:24px;box-shadow:0 18px 50px rgba(7,21,45,.08)}.searchProgress{height:10px;background:#eceff3;border-radius:999px;margin:0 0 34px;overflow:hidden;position:relative}.searchProgress div{width:68%;height:100%;border-radius:999px;background:#ffb800;position:relative;overflow:hidden}.searchProgress div:after{content:"";position:absolute;top:0;bottom:0;width:90px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.75),transparent);animation:progressShine 1.8s linear infinite}@keyframes progressShine{from{left:-100px}to{left:100%}}.searchHeadRow{display:grid;grid-template-columns:235px minmax(0,1fr);gap:30px;align-items:center;margin-bottom:30px}.searchRobkoBox{display:flex;align-items:center;gap:9px;background:#fff5cf;border:1px solid #ffe08a;border-radius:20px;padding:9px 14px 9px 7px}.searchRobkoBox .robkoHomeLink{position:static!important;top:auto!important;left:auto!important;display:block!important}.searchRobkoBox .robkoHomeImage{width:78px;height:78px;flex-basis:78px}.searchRobkoBox .robkoHomeName{display:none}.searchRobkoText{font-size:12px;line-height:1.4;font-weight:700;color:#07152d}.searchTitle p{font-size:12px;font-weight:900;letter-spacing:.11em;color:#9a6800;margin:0 0 10px}.searchTitle h1{font-size:40px;line-height:1.02;letter-spacing:-1.5px;margin:0;color:#07152d}.searchLead{max-width:670px;margin:0 0 28px;color:#536077;font-size:17px;line-height:1.5}.searchStats{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:32px}.searchStats span{background:#f7f8fa;border:1px solid #eceef2;border-radius:15px;padding:18px 20px;display:flex;flex-direction:column;gap:4px}.searchStats b{font-size:25px;color:#07152d}.searchStats small{font-size:13px;color:#697386}.searchButton{display:inline-flex;align-items:center;justify-content:center;min-height:52px;padding:0 24px;border-radius:13px;font-size:16px}@media(prefers-reduced-motion:reduce){.searchProgress div:after{animation:none}}@media(max-width:700px){.searchPage{padding-top:28px}.searchStatusCard{margin:0 16px;padding:26px 24px 30px}.searchProgress{margin-bottom:26px}.searchHeadRow{grid-template-columns:1fr;gap:18px}.searchTitle{order:1}.searchRobkoBox{order:2;max-width:100%}.searchRobkoBox .robkoHomeImage{width:66px;height:66px;flex-basis:66px}.searchTitle h1{font-size:32px}.searchStats{grid-template-columns:1fr}.searchButton{width:100%}}`}</style>
  </main>
}
