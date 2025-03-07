import "./globals.css";

export const metadata = {
  title: "Peperuney",
  description: "The pizza-slingin’, joint-tokin’, all-in degen fresh from the Matt Furie multiverse, here to leave his greasy mark on the memeverse one slice at a time. PepeRuney's the king of high-stakes and low-stress vibin’.",
  openGraph: {
    description: "The pizza-slingin’, joint-tokin’, all-in degen fresh from the Matt Furie multiverse, here to leave his greasy mark on the memeverse one slice at a time. PepeRuney's the king of high-stakes and low-stress vibin’.",
    images: [
      {
        url: "/meta-image.png",
        width: 800,
        height: 600,
        alt: "meta-img",
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body data-new-gr-c-s-check-loaded="14.1226.0" data-gr-ext-installed="" data-new-gr-c-s-loaded="14.1226.0">
        {children}
      </body>
    </html>
  );
}
