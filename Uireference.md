# UI Reference Guide for User Dashboard

This document provides visual and descriptive guidance for implementing the User Management Dashboard. You can use this reference alongside the code templates to build a complete solution.

## Main Dashboard Layout

```
┌─────────────────────────────────────────────────────┐
│ User Management Dashboard          [Add User] btn   │
├─────────────────────────────────────────────────────┤
│ ┌─────┐ ┌─────────────────────────┐ ┌───────────┐  │
│ │     │ │ John Doe                │ │ Active    │  │
│ │ 👤  │ │ john@example.com        │ │ ✏️ 🔄     │  │
│ └─────┘ └─────────────────────────┘ └───────────┘  │
├─────────────────────────────────────────────────────┤
│ ┌─────┐ ┌─────────────────────────┐ ┌───────────┐  │
│ │     │ │ Jane Smith              │ │ Inactive  │  │
│ │ 👤  │ │ jane@example.com        │ │ ✏️ 🔄     │  │
│ └─────┘ └─────────────────────────┘ └───────────┘  │
├─────────────────────────────────────────────────────┤
│ ┌─────┐ ┌─────────────────────────┐ ┌───────────┐  │
│ │     │ │ Robert Johnson          │ │ Active    │  │
│ │ 👤  │ │ robert@example.com      │ │ ✏️ 🔄     │  │
│ └─────┘ └─────────────────────────┘ └───────────┘  │
└─────────────────────────────────────────────────────┘
```

## Edit User Modal

```
┌─────────────────────────────────────────────┐
│ Edit User                        [X] Close  │
├─────────────────────────────────────────────┤
│ Name:    [John Doe                      ]   │
│ Email:   [john@example.com              ]   │
│ Phone:   [123-456-7890                  ]   │
│ Website: [johndoe.com                   ]   │
│                                             │
│ [✓] Active User                             │
│                                             │
│             [Cancel] [Save Changes]         │
└─────────────────────────────────────────────┘
```

## Component Styling Guidelines

### User Card

- White background with light border and subtle shadow
- Avatar/icon on the left (gray circle with user icon)
- User name in bold, email below in regular weight
- Status badge on the right (green for active, gray for inactive)
- Action buttons (edit pencil, toggle status) on the far right

### Edit Form Modal

- White background with shadow overlay on the page
- Clear header with title and close button
- Form fields with labels above inputs
- Checkbox for toggling active status
- Action buttons aligned to the right (Cancel in gray, Save in blue)

### Loading State

- Centered in the container
- Spinner animation (blue border)
- "Loading users..." text below the spinner

### Error State

- Red background with darker red border
- Clear error message with title
- Retry button for attempting to fetch data again

## Color Scheme

- Primary Blue: #3b82f6 (buttons, active elements)
- Success Green: #10b981 (active status)
- Error Red: #ef4444 (error states)
- Gray Scale:
  - Dark Gray: #1f2937 (headings)
  - Medium Gray: #6b7280 (secondary text)
  - Light Gray: #f3f4f6 (backgrounds)
  - Border Gray: #e5e7eb (borders)

## Typography

- Headings: 18-24px, bold, dark gray
- Body Text: 14-16px, regular weight, medium gray
- Buttons: 14px, bold, white on colored backgrounds
- Status Indicators: 12px, medium weight

## Responsive Design

- The dashboard should be responsive down to mobile screens
- On smaller screens, the user cards can stack vertically
- Modal should remain centered but adjust width appropriately
