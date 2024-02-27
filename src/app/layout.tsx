
import { Inter } from "next/font/google"; 
import { Header } from "app/componentes/Header";
import { Footer } from "app/componentes/shared/Footer";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header/>

        {children}
        
        <Footer/>
        </body>
    </html>
  );
}