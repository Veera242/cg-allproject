import "@fontsource-variable/cormorant-garamond";
import "@fontsource-variable/jost";
import "./globals.css";
import SmoothScroll from "./SmoothScroll";

export const metadata = {
  title: "Casagrand | South India's Leading Real Estate Developer",
  description:
    "Browse luxury apartments, villas, and plots in Chennai, Bangalore, Coimbatore, and Dubai. Casagrand - Building aspirations.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FAF7F2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
