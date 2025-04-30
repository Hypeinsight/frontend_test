#Frontend Developer Assessment

## Overview

This assessment evaluates your ability to implement a real-world feature that includes fetching data from APIs, displaying data in a well-designed UI, and handling user interactions.

## Time Allocation: 30 minutes

## User Management Dashboard Task

### Requirements:

You'll be implementing a simplified user management dashboard with the following features:

UI Design Refereence : frontend_test\Userdashboard_UI_Reference.png & frontend_test\Uireference.md

1. Display a list of users from an API
2. View user details
3. Edit user information
4. Toggle user active status

### Data Source:

- Use JSONPlaceholder API: `https://jsonplaceholder.typicode.com/users`
- For PUT/POST requests (simulating updates), use the appropriate endpoints
- You may need to handle these as mock updates since JSONPlaceholder doesn't persist changes

### Implementation Details:

1. **User List Component**

   - Fetch and display users in a clean, responsive list
   - Each user entry should display: name, email, and company name
   - Include status indicator (active/inactive) - you can assume all users start as active
   - Add action buttons (Edit, View Details, Toggle Status)

2. **User Edit Form**

   - Create a form to edit user information
   - Fields should include: name, email, phone, website
   - Implement form validation
   - Simulate saving changes to the API

3. **State Management**
   - Manage application state appropriately
   - Handle loading and error states
   - Implement optimistic UI updates when editing users

### Styling Requirements:

- Use the provided styling in the project (Tailwind CSS)
- Follow a clean, professional design
- Ensure responsive layout works on different screen sizes

## Assessment Criteria:

- Code organization and component structure
- State management approach
- API interaction implementation
- UI/UX implementation quality
- Error handling
- General React/Next.js best practices

## Getting Started:

1. Review the `UserDashboard` component in `/app/components/UserDashboard/index.jsx`
2. Implement the required functionality
3. Test your implementation with different scenarios (loading, error states, updates)

Good luck!
