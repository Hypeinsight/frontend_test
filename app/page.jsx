'use client';

import Link from 'next/link';

export default function AssessmentPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Frontend Developer Assessment
          </h1>
          <p className="mt-2 text-gray-600">
            Implement the User Management Dashboard according to the
            requirements in{' '}
            <a
              href="/EXAM.md"
              target="_blank"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              EXAM.md
            </a>
          </p>
          <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-700">
            <p className="font-medium">Time Allocation: 30 minutes</p>
            <p className="mt-1">
              Focus on functionality first, then improve the UI as time allows.
            </p>
          </div>
        </header>

        <main className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-4 bg-gray-100 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-700">
              User Management Dashboard
            </h2>
            <p className="text-sm text-gray-500">
              Implementation area - edit the components in
              /app/components/UserDashboard/
            </p>
          </div>

          {/* The main assessment component */}
          <div className="p-6">
            {/* Comment out the UserDashboard component for now */}
            {/* <UserDashboard /> */}

            {/* Add a placeholder instead */}
            <div className="p-8 text-center border border-dashed border-gray-300 rounded-lg">
              <p className="text-gray-500 mb-4">
                Implement the user dashboard here by editing the files in:
              </p>
              <code className="bg-gray-100 px-2 py-1 rounded">
                /app/components/UserDashboard/
              </code>

              <div className="mt-6 text-left bg-gray-50 p-4 rounded-md max-w-2xl mx-auto">
                <h3 className="font-semibold mb-2">
                  Implementation Requirements:
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>
                    Fetch users from{' '}
                    <code>https://jsonplaceholder.typicode.com/users</code>
                  </li>
                  <li>Display users in a clean, organized list</li>
                  <li>Implement user editing functionality</li>
                  <li>Add ability to toggle user active status</li>
                  <li>Handle loading and error states</li>
                  <li>Use proper React patterns and hooks</li>
                </ul>
              </div>
            </div>
          </div>
        </main>

        <footer className="mt-8 text-center text-gray-500 text-sm">
          <p>
            This assessment evaluates your ability to implement a real-world
            feature with API interactions.
          </p>
        </footer>
      </div>
    </div>
  );
}
