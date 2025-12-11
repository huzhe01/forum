import { MessageSquare, Eye, Clock } from 'lucide-react';

const MOCK_TOPICS = [
    {
        id: 1,
        title: 'How is the L site doing after the recent blockage?',
        category: 'Operations',
        tags: ['Feedback', 'Announcement'],
        color: 'border-red-400',
        replies: 1800,
        views: '49.7k',
        activity: '35m',
        posters: ['/api/placeholder/32/32', '/api/placeholder/32/32', '/api/placeholder/32/32']
    },
    {
        id: 2,
        title: 'Please do not bring the toxicity of the internet here!',
        category: 'Operations',
        tags: ['Rules'],
        color: 'border-red-400',
        replies: '3.4k',
        views: '255k',
        activity: '4h',
        posters: ['/api/placeholder/32/32', '/api/placeholder/32/32', '/api/placeholder/32/32', '/api/placeholder/32/32']
    },
    {
        id: 3,
        title: 'About [Black & White] Crazy Thursday, I have something to say',
        category: 'Development',
        tags: ['Water', 'TreeHole'],
        color: 'border-blue-400',
        replies: 17,
        views: 364,
        activity: '1m',
        posters: ['/api/placeholder/32/32']
    },
    {
        id: 4,
        title: 'Can I use gpt-5.2 as a custom model in Cursor?',
        category: 'News',
        tags: ['AI', 'Software'],
        color: 'border-orange-400',
        replies: 19,
        views: 577,
        activity: '1m',
        posters: ['/api/placeholder/32/32', '/api/placeholder/32/32']
    },
    {
        id: 5,
        title: 'AI Assisted Thesis Writing Discussion Thread',
        category: 'Development',
        tags: ['AI'],
        color: 'border-base-400',
        replies: 5,
        views: 119,
        activity: '1m',
        posters: ['/api/placeholder/32/32']
    },
    {
        id: 6,
        title: 'My work vanished overnight, I do not know what to say...',
        category: 'Jobs',
        tags: ['TreeHole'],
        color: 'border-yellow-400',
        replies: 37,
        views: 828,
        activity: '1m',
        posters: ['/api/placeholder/32/32', '/api/placeholder/32/32', '/api/placeholder/32/32']
    },
    {
        id: 7,
        title: 'Is there a self-hosted GitHub proxy project?',
        category: 'Development',
        tags: ['Question'],
        color: 'border-blue-400',
        replies: 1,
        views: 45,
        activity: '1m',
        posters: ['/api/placeholder/32/32']
    },
];

export default function TopicList() {
    return (
        <div className="bg-forum-card rounded-lg border border-forum-border overflow-hidden">
            <div className="p-4 border-b border-forum-border flex items-center justify-between">
                <div className="flex gap-4">
                    <button className="text-sm font-medium text-forum-text bg-forum-border/50 px-3 py-1.5 rounded hover:bg-forum-border">Latest</button>
                    <button className="text-sm font-medium text-forum-text-muted hover:text-forum-text px-3 py-1.5">Top</button>
                    <button className="text-sm font-medium text-forum-text-muted hover:text-forum-text px-3 py-1.5">Categories</button>
                </div>
            </div>

            <div className="divide-y divide-forum-border/50">
                {MOCK_TOPICS.map((topic) => (
                    <div key={topic.id} className="p-4 hover:bg-forum-border/20 transition-colors group cursor-pointer flex items-start gap-4">
                        <div className="flex-1 min-w-0">
                            <h3 className="text-[17px] font-medium text-forum-text group-hover:text-forum-accent leading-snug mb-1">
                                {topic.title}
                            </h3>
                            <div className="flex items-center flex-wrap gap-2 text-xs">
                                <span className={`px-1.5 py-0.5 rounded border-l-2 ${topic.color} bg-forum-border/30 text-forum-text-muted`}>
                                    {topic.category}
                                </span>
                                {topic.tags.map(tag => (
                                    <span key={tag} className="text-forum-text-muted hover:underline cursor-pointer">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="hidden sm:flex items-center gap-1">
                            <div className="flex -space-x-2 mr-4">
                                {topic.posters.map((poster, i) => (
                                    <div key={i} className="w-6 h-6 rounded-full bg-gray-600 border border-forum-card"></div>
                                ))}
                            </div>

                            <div className="w-16 text-center text-forum-text-muted">
                                <div className="text-sm font-medium text-forum-accent">{topic.replies}</div>
                                <div className="text-[10px]">Replies</div>
                            </div>
                            <div className="w-16 text-center text-forum-text-muted hidden md:block">
                                <div className="text-sm">{topic.views}</div>
                                <div className="text-[10px]">Views</div>
                            </div>
                            <div className="w-16 text-right text-forum-text-muted">
                                <div className="text-sm text-forum-text/80">{topic.activity}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
