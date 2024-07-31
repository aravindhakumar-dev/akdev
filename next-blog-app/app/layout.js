import { Poppins } from "next/font/google";
import "./globals.css";
import "./bootstrap.min.css"; 
import Header from "./components/Header";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata = {
  title: "Aravindhakumar Freelance Web Developer | WordPress Expert | Shopify Developer | Custom Web Solutions",
  description: "Aravindhakumar is a seasoned freelance web developer specializing in WordPress and Shopify development. With extensive experience in creating dynamic, user-friendly websites, Aravindhakumar offers customized web solutions to help businesses thrive online. Whether you need a robust WordPress site or a feature-rich Shopify store, Aravindhakumar provides expert services tailored to your needs. Get professional web development with a focus on quality, performance, and SEO optimization.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
