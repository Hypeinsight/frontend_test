'use client';

import React, { useState, useEffect } from 'react';
import UserList from './UserList';
import UserEditForm from './UserEditForm';

/**
 * UserDashboard Component
 * 
 * Main component for the user management dashboard.
 * This component should:
 * 1. Fetch users from the API
 * 2. Handle user selection for editing
 * 3. Manage overall dashboard state
 * 4. Coordinate between the list and edit form
 */
const UserDashboard = () => {
  // TODO: Implement state management for:
  // - users data
  // - loading state
  // - error state
  // - selected user for editing
  // - modal visibility

  // TODO: Implement useEffect to fetch users when component mounts
  
  // TODO: Implement handlers for:
  // - Editing users
  // - Toggling user status
  // - Saving user changes
  // - Cancelling edit operation

  return (
    <div className="user-dashboard">
      {/* This is the starter template for the dashboard */}
      {/* Replace this with your implementation */}
      
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">User Management</h2>
        <button 
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Add User
        </button>
      </div>

      {/* Placeholder message - replace with your implementation */}
      <div className="p-8 text-center border border-dashed border-gray-300 rounded-lg">
        <p className="text-gray-500 mb-4">
          Implement the user dashboard here by editing the files in:
        </p>
        <code className="bg-gray-100 px-2 py-1 rounded">
          /app/components/UserDashboard/
        </code>
        
        <div className="mt-6 text-left bg-gray-50 p-4 rounded-md max-w-2xl mx-auto">
          <h3 className="font-semibold mb-2">Implementation Requirements:</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Fetch users from <code>https://jsonplaceholder.typicode.com/users</code></li>
            <li>Display users in a clean, organized list</li>
            <li>Implement user editing functionality</li>
            <li>Add ability to toggle user active status</li>
            <li>Handle loading and error states</li>
            <li>Use proper React patterns and hooks</li>
          </ul>
        </div>
      </div>
      
      {/* Uncomment and implement these components */}
      {/* <UserList users={users} onEdit={handleEditUser} onToggleStatus={handleToggleStatus} /> */}
      
      {/* User edit form - should appear in a modal when editing */}
      {/* {showEditForm && (
        <UserEditForm 
          user={selectedUser} 
          onSave={handleSaveUser} 
          onCancel={handleCancelEdit} 
        />
      )} */}
    </div>
  );
};

export default UserDashboard;