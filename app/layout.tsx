import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ResearchBridge',
  description: 'Connect and collaborate with researchers worldwide',
  metadataBase: new URL('https://research-bridge-git-ac450b-shreyanshrathred-gmailcoms-projects.vercel.app'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="border-b sticky top-0 bg-background z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <Link href="/" className="flex items-center">
                  <span className="text-xl font-bold">ResearchBridge</span>
                </Link>
              </div>
              <div className="hidden md:flex space-x-8">
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
              <div className="md:hidden flex items-center">
                <button className="text-gray-600 hover:text-gray-900">
                  <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
        <main className="min-h-[calc(100vh-4rem)]">
          {children}
        </main>
      </body>
    </html>
  );
}



import './globals.css'