import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer'; // Ensure casing matches file name
import ClientSideProviderTest from '@/components/ClientSideProviderTest'; // Ensure casing matches file name

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: "Next.js 14 Homepage" ,
    template: "%s | Next.js 14"
  },

  description: "Next.js starter app description",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ClientSideProviderTest> */}
        <div className='container'>
          <Navbar />
          {children}
          <Footer />
        </div>
        {/* <ClientSideProviderTest>  */}
      </body>
    </html>
  );
}
