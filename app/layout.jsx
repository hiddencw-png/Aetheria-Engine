import './globals.css';

export const metadata = {
  title: 'Aetheria Engine',
  description: 'Launch-ready product marketing landing page.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
