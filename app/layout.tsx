import "./globals.css";
import "./background.css";
import "./robko-reference.css";
import "./phone1-reference.css";

export const metadata = {
  title: "Robko | Robko robí pre vás",
  description: "Povedzte Robkovi, čo potrebujete. Získajte ponuky od overených remeselníkov a vyberte si tú najlepšiu.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="sk"><body>{children}<a className="cornerRobko" href="/" aria-label="Majster Robko"><img src="/robko-master.png" alt="Majster Robko" /></a></body></html>;
}
