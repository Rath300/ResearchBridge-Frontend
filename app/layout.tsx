import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ResearchBridge',
  description: 'Connect and collaborate with researchers worldwide',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <Link href="/" className="flex items-center">
                  <span className="text-xl font-bold">ResearchBridge</span>
                </Link>
              </div>
              <div className="flex space-x-8">
                <Link href="/discover" className="flex items-center hover:text-blue-600">
                  Discover
                </Link>
                <Link href="/collaborate" className="flex items-center hover:text-blue-600">
                  Collaborate
                </Link>
                <Link href="/mentors" className="flex items-center hover:text-blue-600">
                  Mentors
                </Link>
                <Link href="/research" className="flex items-center hover:text-blue-600">
                  Research
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}



import './globals.css'