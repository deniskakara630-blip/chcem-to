"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../../lib/supabase/client";
import RobkoHomeLink from "../RobkoHomeLink";

export default function PrihlaseniePage() {
  const router = useRouter();
  const [email, setEmail] = useState(""); const [password, setPassword] = useState(""); const [name, setName] = useState("");
  const [mode, setMode] = useState<"login" | "signup">("login"); const [message, setMessage] = useState(""); const [loading, setLoading] = useState(false);
  async function submit(e: FormEvent) {e.preventDefault(); setLoading(true); setMessage(""); const supabase=createClient(); if(mode==="signup"){const {error}=await supabase.auth.signUp({email,password,options:{data:{full_name:name}}});if(error)setMessage(error.message);else setMessage("Registrácia je vytvorená. Robko vám poslal potvrdzovací e-mail.");}else{const {error}=await supabase.auth.signInWithPassword({email,password});if(error)setMessage("Prihlásenie sa nepodarilo. Skontrolujte e-mail a heslo.");else{router.push("/dopyt");router.refresh();}}setLoading(false);}
  return <main className="appShell"><div className="topbar"><RobkoHomeLink/><span>Účet zákazníka</span></div><form className="formCard" onSubmit={submit}><p className="eyebrow dark">{mode === "login" ? "PRIHLÁSENIE" : "REGISTRÁCIA"}</p><h1>{mode === "login" ? "Vitajte späť" : "Vytvorte si účet u Robka"}</h1>{mode === "signup" && <label>Meno a priezvisko<input required value={name} onChange={e=>setName(e.target.value)} /></label>}<label>E-mail<input required type="email" value={email} onChange={e=>setEmail(e.target.value)} /></label><label>Heslo<input required minLength={6} type="password" value={password} onChange={e=>setPassword(e.target.value)} /></label>{message && <p className="hint">{message}</p>}<button disabled={loading}>{loading ? "Pracujem…" : mode === "login" ? "Prihlásiť sa" : "Registrovať sa"}</button><button type="button" className="secondary" onClick={()=>{setMode(mode === "login" ? "signup" : "login");setMessage("");}}>{mode === "login" ? "Nemám účet – registrovať sa" : "Už mám účet – prihlásiť sa"}</button></form></main>;
}
