import "./globals.css";

export const metadata = {
  title: "Chcem to | Remeselníci a služby",
  description: "Zadajte zákazku a získajte ponuky od overených remeselníkov.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="sk"><body>{children}</body></html>;
}
