import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nino D'Angelo — Il Ragazzo di Napoli",
  description: "Sito dedicato a Nino D'Angelo, cantante e attore napoletano",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}