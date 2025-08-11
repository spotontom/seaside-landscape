
export const metadata = {
  title: "Seaside Landscape Solutions",
  description: "Lawn care, installs, and landscape maintenance along the coast."
};

import "./globals.css";

export default function RootLayout({ children }){
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
