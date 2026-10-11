"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function RobkoHomeLink(){
  const [src,setSrc]=useState("");
  useEffect(()=>{
    let active=true;
    fetch("/",{cache:"force-cache"}).then(r=>r.text()).then(html=>{
      const match=html.match(/data:image\/png;base64,[A-Za-z0-9+/=]+/);
      if(active&&match)setSrc(match[0]);
    }).catch(()=>{});
    return()=>{active=false};
  },[]);
  return <Link href="/" className="robkoHomeLink" aria-label="Robko – domov">
    <span className="robkoHomeImage">{src&&<img src={src} alt="Majster Robko"/>}</span>
    <span className="robkoHomeName">Majster <strong>Robko</strong></span>
  </Link>;
}
