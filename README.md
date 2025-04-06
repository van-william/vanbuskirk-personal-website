# William VanBuskirk Personal Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/cea44605-7b80-4084-9ab4-a54064f23094/deploy-status)](https://app.netlify.com/sites/william-vanbuskirk/deploys)

A modern personal website built with React, TypeScript, and Vite.

## Personal Journey

I started to build a personal website with Lovable and Cursor to also learn more about Typescript and web development. Turned into a larger personal project over time.

Key learnings:
* Tailwind CSS for styling
* React for component-based development
* Vite for fast development and building
* TypeScript for type safety
* Modern web development practices

## Application Architecture

The application follows a modern React architecture with the following structure:

### Entry Points
- `index.html`: The single HTML file that serves as the entry point, containing a root div where the React app is mounted
- `src/main.tsx`: The TypeScript entry point that uses `createRoot` to mount the React application

### Core Components
- `App.tsx`: The main application component that sets up:
  - Routing (using react-router-dom)
  - Theme provider
  - Query client for data fetching
  - UI providers (Toaster, Tooltip)
  - Layout wrapper
  - Route definitions

### Component Structure
- `src/pages/`: Top-level page components (About, Projects, etc.)
- `src/components/layout/`: Layout components
- `src/components/ui/`: Reusable UI components

### Key Features
- Dynamic rendering using JSX (JavaScript XML)
- Component-based architecture for reusability
- TypeScript for type safety
- Modern React patterns and hooks
- Responsive design with Tailwind CSS

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```
4. Fill in your environment variables in `.env`

## Development

```bash
npm run dev
```

## Testing

Run tests:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

## Building for Production

```bash
npm run build
```

## Deployment

This site is configured for deployment on Netlify. The build process is automated through the `netlify.toml` configuration file.
