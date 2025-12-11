import Link from 'next/link';
import {
    MessageSquare,
    Calendar,
    MoreHorizontal,
    Code,
    Server,
    HardDrive,
    FileText,
    Users,
    BookOpen,
    Zap,
    Activity,
    Gift
} from 'lucide-react';

const MENU_ITEMS = [
    { label: 'Topics', icon: MessageSquare, href: '/' },
    { label: 'Recent', icon: Calendar, href: '/recent' },
    { label: 'More', icon: MoreHorizontal, href: '/more' },
];

const CATEGORIES = [
    { label: 'Development', icon: Code, color: 'text-blue-400' },
    { label: 'Operations', icon: Server, color: 'text-red-400' },
    { label: 'Resources', icon: HardDrive, color: 'text-green-400' },
    { label: 'Documents', icon: FileText, color: 'text-cyan-400' },
    { label: 'Jobs', icon: Users, color: 'text-yellow-400' },
    { label: 'Reading', icon: BookOpen, color: 'text-purple-400' },
    { label: 'News', icon: Zap, color: 'text-orange-400' },
    { label: 'Feedback', icon: Activity, color: 'text-gray-400' },
    { label: 'Welfare', icon: Gift, color: 'text-pink-400' },
];

export default function Sidebar() {
    return (
        <aside className="fixed left-0 top-16 bottom-0 w-64 bg-forum-card border-r border-forum-border overflow-y-auto hidden lg:block p-4">
            <nav className="space-y-6">
                <div className="space-y-1">
                    {MENU_ITEMS.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="flex items-center gap-3 px-3 py-2 text-forum-text-muted hover:text-forum-text hover:bg-forum-border/30 rounded-md transition-colors"
                        >
                            <item.icon className="w-5 h-5" />
                            <span className="text-sm font-medium">{item.label}</span>
                        </Link>
                    ))}
                </div>

                <div>
                    <h3 className="px-3 text-xs font-semibold text-forum-text-muted uppercase tracking-wider mb-2">
                        Categories
                    </h3>
                    <div className="space-y-1">
                        {CATEGORIES.map((category) => (
                            <Link
                                key={category.label}
                                href="#"
                                className="flex items-center gap-3 px-3 py-2 text-forum-text-muted hover:text-forum-text hover:bg-forum-border/30 rounded-md transition-colors group"
                            >
                                <category.icon className={`w-4 h-4 ${category.color}`} />
                                <span className="text-sm">{category.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </aside>
    );
}
