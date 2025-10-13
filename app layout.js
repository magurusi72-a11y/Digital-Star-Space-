import "./globals.css";

export const metadata = {
  title: "Digital Star Space",
  description: "Empowering young minds in the digital era",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
