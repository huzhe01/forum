import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
  title: 'Linux Do Clone',
  description: 'A local clone of the Linux Do forum',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-forum-bg text-forum-text h-screen overflow-hidden flex flex-col">
        <Navbar />
        <div className="flex flex-1 pt-16 h-full">
          <Sidebar />
          <main className="flex-1 lg:ml-64 overflow-y-auto h-full w-full">
            <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8 pb-20">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
