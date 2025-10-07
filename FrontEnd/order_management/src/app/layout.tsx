import type { Metadata } from "next"; 
import "./global.css";          
import Header from "../components/Header";  
import Footer from "../components/Footer";   

export const metadata: Metadata = {  
  title: "Order Management",  
  description: "Simple Next.js app",  
};  

export default function RootLayout({ children }: { children: React.ReactNode }) {  
  return (  
    <html lang="vi">  
      <body className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">  
        <Header />   
        <main className="flex-1 mx-auto max-w-5xl px-4 py-8">{children}</main>  
        <Footer />   
      </body>  
    </html>  
  );  
}  
