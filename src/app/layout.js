import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "HackOdisha 3.0",
  description: "Largest Student hackathon of Odisha | 3rd Edition | 2023",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/Images/HO3.svg"
          type="image/x-icon"
          sizes="any"
        ></link>
        <meta property="og:title" content="HackOdisha 3.0" />
        <meta property="og:url" content="https://hackodisha.tech/" />
        <meta
          property="og:image"
          content="https://aksharpharmacy.com/Images/HO3.svg"
        />
        <meta name="twitter:title" content="Akshar Pharmacy" />
        <meta
          name="twitter:description"
          content="HackOdisha 3.0 | Largest Student Run Hackathon of HackOdisha | Participate and Win Prizes, Goodies and subscriptions."
        />
        <meta
          name="twitter:image"
          content="https://aksharpharmacy.com/Images/HO3.svg"
        />
        <meta
          name="twitter:card"
          content="https://aksharpharmacy.com/Images/HO3.svg"
        />
      </head>
      <body className="font-syoog bggrad">
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
