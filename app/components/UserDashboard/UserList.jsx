'use client';

import React from 'react';

/**
 * UserList Component
 *
 * Displays a list of users with options to edit and toggle status
 *
 * @param {Array} users - Array of user objects
 * @param {Function} onEdit - Function to call when edit button is clicked
 * @param {Function} onToggleStatus - Function to call when toggling user status
 */
const UserList = ({ users = [], onEdit, onToggleStatus }) => {
  // TODO: Implement the user list component

  // Check if users are available
  if (users.length === 0) {
    return (
      <div className="bg-gray-50 p-4 text-center rounded">
        <p className="text-gray-500">No users found.</p>
      </div>
    );
  }

  return (
    <div className="user-list">
      {/* This is a placeholder for the user list component */}
      {/* Replace with your implementation */}

      <div className="grid gap-4">
        {/* Sample user card - you should map through the users array */}
        <div className="border rounded-md p-4 bg-white shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gray-100 p-2 rounded-full">
                <svg
                  className="w-6 h-6 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Sample User</h3>
                <p className="text-sm text-gray-500">sample@example.com</p>
                <p className="text-xs text-gray-400">Sample Company</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Active
              </span>
              <button
                className="p-1 text-blue-500 hover:text-blue-700"
                onClick={() =>
                  alert('Edit user functionality to be implemented')
                }
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  ></path>
                </svg>
              </button>
              <button
                className="p-1 text-gray-500 hover:text-gray-700"
                onClick={() =>
                  alert('Toggle status functionality to be implemented')
                }
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Add more sample cards or remove this placeholder */}
      </div>

      {/* 
        Implement the actual user list here by mapping through the users array:
        
        {users.map(user => (
          <UserCard 
            key={user.id} 
            user={user} 
            onEdit={() => onEdit(user)} 
            onToggleStatus={() => onToggleStatus(user.id)} 
          />
        ))}
      */}
    </div>
  );
};

export default UserList;
