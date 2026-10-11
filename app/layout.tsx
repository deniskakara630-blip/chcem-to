import "./globals.css";

export const metadata = {
  title: "Robko | Robko robí pre vás",
  description: "Povedzte Robkovi, čo potrebujete. Získajte ponuky od overených remeselníkov a vyberte si tú najlepšiu.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="sk"><body>{children}</body></html>;
}
