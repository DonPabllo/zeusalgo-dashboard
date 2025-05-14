// src/app/layout.tsx
import './globals.css'; // <-- Importă stilurile globale

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
