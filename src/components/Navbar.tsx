import Link from 'next/link';
import { Search, Menu, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-forum-card border-b border-forum-border z-50 px-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button className="lg:hidden p-2 text-forum-text-muted hover:text-forum-text">
          <Menu className="w-6 h-6" />
        </button>
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-400 to-yellow-200"></div>
          <span className="font-bold text-xl tracking-tight hidden sm:block">LINUX DO</span>
        </Link>
      </div>

      <div className="flex-1 max-w-2xl mx-4 hidden md:block">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-forum-text-muted group-focus-within:text-forum-accent" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-forum-border rounded-md leading-5 bg-black text-forum-text placeholder-forum-text-muted focus:outline-none focus:bg-forum-bg focus:border-forum-accent sm:text-sm transition-colors"
            placeholder="Search topics, posts, users..."
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="px-4 py-1.5 text-sm font-medium bg-forum-accent text-white rounded-md hover:bg-blue-600 transition-colors">
          Sign Up
        </button>
        <button className="px-4 py-1.5 text-sm font-medium bg-forum-border text-forum-text rounded-md hover:bg-gray-700 transition-colors flex items-center gap-2">
          <User className="w-4 h-4" />
          <span>Log In</span>
        </button>
      </div>
    </header>
  );
}
