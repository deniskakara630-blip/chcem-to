import "./globals.css";
import "./background.css";
import "./robko-reference.css";
import "./phone1-reference.css";
import "./robko-header.css";

export const metadata = {
  title: "Robko | Robko robí pre vás",
  description: "Povedzte Robkovi, čo potrebujete. Získajte ponuky od overených remeselníkov a vyberte si tú najlepšiu.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="sk"><body>{children}</body></html>;
}
