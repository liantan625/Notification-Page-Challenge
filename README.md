# Notification Page Challenge

A clean, responsive notification center UI built as a small frontend challenge. This project recreates a notification page component where users can view, mark-as-read, and interact with notifications. It focuses on accessible markup, responsive layout, and simple state handling suitable for learning or portfolio demonstration.

Status
- Completion: Prototype / UI challenge
- Tech: React, Typescript, Vite

Why this project?
- Small, focused UI component that demonstrates:
  - Notifications list rendering
  - Marking notifications as read/unread
  - Filtering or grouping (if implemented)
  - Accessibility and keyboard navigation considerations
- Good for practicing DOM manipulation, responsive design, and accessibility best practices.

Features
- Responsive layout for desktop and mobile
- Keyboard-accessible interactions
- Semantic HTML and ARIA where appropriate
- Easily replaceable data source (mock JSON or JS array)

Quickstart

Prerequisites
- Node.js and npm installed (only if project uses a build/debug server)
- Or just a modern browser if the project is a static site (open index.html)

Install and run (if using npm)
```bash
# install dependencies
npm install

# start dev server (if available)
npm start

# build for production (if available)
npm run build
```

Open directly (static)
```bash
# open index.html in your browser, or serve with a static server
# using npx serve (optional)
npx serve .
```

Project structure (example)
```
/
├─ index.html            # main HTML page
├─ src/
│  ├─ css/               # styles
│  └─ js/                # JS logic
├─ data/
│  └─ notifications.json # sample notifications data
├─ screenshot.png
└─ README.md
```

Usage
- The notifications are loaded from a data source (e.g., a JSON file or an in-memory array).
- Actions commonly supported:
  - Mark single notification read/unread
  - Mark all as read
  - Click notification to open related content (if implemented)
- Keyboard interactions:
  - Tab to focus the notification list
  - Enter or Space to open/activate a notification
  - Arrow keys (optional) to navigate items — implement if desired

Accessibility
- Use semantic list markup (ul / li) for the notifications list.
- Provide aria-live regions for announcing new notifications or unread counts.
- Ensure sufficient color contrast for unread/read states.
- Make interactive elements focusable and provide visible focus styles.

Customization
- Replace the sample data file (data/notifications.json) with your own notifications.
- Style the component by editing CSS variables or classes in src/css.
- Hook events to open real content or route to other pages when notifications are clicked.

Testing ideas
- Unit tests for utility functions (date formatting, unread count).
- Integration / E2E tests to ensure keyboard navigation and interactions work (e.g., Playwright or Cypress).
- Accessibility audit with axe or Lighthouse to catch contrast and semantic issues.

Suggested improvements / next steps
- Add unit and E2E tests and include them in CI.
- Deploy a live demo using GitHub Pages.
- Add a small API or local storage integration to persist read state.
- Add animations for transition states and better mobile touch interactions.

Contributing
- Contributions welcome. Please open issues for bugs or feature requests.
- For changes:
  1. Fork the repo
  2. Create a branch (feature/fix-...)
  3. Open a pull request with a clear description and screenshots if applicable

License
- Choose a license (MIT recommended) and add a LICENSE file. Example:
```
MIT License
```

Contact
- Maintainer: liantan625
- GitHub: https://github.com/liantan625

Thanks for building this — if you want I can:
- Push this README directly to your repo in a PR
- Tailor commands to match scripts in your package.json
- Add a demo deploy workflow (GitHub Actions) for GitHub Pages

Signed — @copilot
