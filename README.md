# John Vincent Laylo – Portfolio

Personal portfolio built with **React**, **TypeScript**, and **Vite**.  
It showcases my projects, skills, experience, education, and provides quick ways to contact me or download my CV.

## Tech Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 3
- EmailJS (contact form)

## Getting Started

### Install dependencies

```bash 
npm install
```

### Run the dev server

```bash
npm run dev
```

The app runs on the port Vite chooses (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
```

This creates an optimized build in the `dist` folder (used by Vercel).

### Lint

```bash
npm run lint
```

## Features

- **Section-based layout** with smooth scroll and snap between:
  - About Me
  - Projects
  - Experience
  - Education
  - Contact
- **Sidebar navigation**
  - Desktop sidebar + mobile bottom navigation
  - Active section highlighting
  - Social links (LinkedIn, GitHub, Facebook, Discord) opening in new tabs
- **About section**
  - Profile image and animated typewriter intro
  - Tech stack chips for frontend + backend
  - “View My Work” button scrolls directly to Projects
  - “Download CV” button downloads `public/john-vincent-laylo-cv.pdf`
- **Projects section**
  - Real projects with tags and live links
  - External links open in new tabs
- **Experience & Education**
  - Timeline-style cards with concise descriptions
- **Contact section**
  - EmailJS-powered form
  - Keyboard shortcut: **Ctrl+Enter** to send
  - Copy-to-clipboard email chip
  - Links to Calendly, GitHub, LinkedIn

## Toast Notifications

The app uses a global toast system to show messages at the **top center** of the page.

- One toast at a time (new messages replace old ones)
- Used for:
  - Successful contact form submission
  - Contact form errors
  - Successful CV download

Usage inside components:

```ts
import { useToast } from "./components/ui/Toast";

const { showToast } = useToast();

showToast({
  variant: "success", // or "error"
  message: "CV downloaded successfully.",
  duration: 4000,
});
```

The provider is mounted in `src/main.tsx`:

```tsx
<StrictMode>
  <ToastProvider>
    <App />
  </ToastProvider>
</StrictMode>
```

## Deployment

The project is configured to deploy easily on **Vercel**:

- Build command: `npm run build`
- Output directory: `dist`
- Vercel installs dependencies and runs the build automatically on each push.
