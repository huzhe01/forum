import TopicList from '@/components/TopicList';

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="bg-blue-900/30 border border-blue-800 p-4 rounded-md flex items-start gap-3">
        <div className="text-blue-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-blue-100">Welcome to the Community</h2>
          <p className="text-blue-200/80 text-sm mt-1">
            Sincere, friendly, united, professional. Building the community we are proud of.
          </p>
        </div>
      </div>

      <TopicList />
    </div>
  );
}
