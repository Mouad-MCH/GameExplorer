# GameExplorer

A web application for discovering games, browsing creators, and exploring game development teams. Built with React + Vite.

## Features

- **Games Catalog** — Browse all games with genre filtering and search
- **Game Details** — View detailed information for any game
- **Development Team** — See who developed a given game
- **Creators Directory** — Browse and explore game creator profiles
- **Creator Profiles** — Detailed pages with ratings, platforms, timeline, and more
- **404 Page** — Graceful handling of unknown routes

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + React Router DOM 7 |
| Build | Vite 8 |
| Styling | Tailwind CSS 4 |
| Icons | lucide-react |
| HTTP Client | Axios |
| Linting | ESLint 10 |

## Getting Started

### Prerequisites

- Node.js 18+
- An API key for the games/creators data source

### Setup

1. Clone the repository and install dependencies:
   ```bash
   git clone https://github.com/Mouad-MCH/GameExplorer.git
   cd GameExplorer
   npm install
   ```

2. Create a `.env` file at the project root:
   ```env
   VITE_BASE_URL=your_api_base_url
   VITE_API_KEY=your_api_key
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project Structure

```
GameExplorer/
├── public/                # Static assets (favicon, images)
├── src/
│   ├── api/               # Axios API services (gamesApi, creatorsApi)
│   ├── assets/            # Images, fonts, icons used in components
│   ├── components/        # Reusable components (Navbar, GameCard, FilterMenu, …)
│   │   ├── ui/            # Generic UI primitives (Button, Spinner, …)
│   │   └── creator-details/ # Sub-components for creator profile page
│   ├── hooks/             # Custom React hooks
│   ├── pages/             # Route-level page components
│   │   ├── Home.jsx
│   │   ├── Games.jsx
│   │   ├── GameDetails.jsx
│   │   ├── DevelopersTeam.jsx
│   │   ├── Creators.jsx
│   │   ├── CreatorDetails.jsx
│   │   └── NotFound.jsx
│   ├── utils/             # Helper functions
│   ├── App.jsx            # Root component and router setup
│   └── main.jsx           # Application entry point
├── .env                   # Environment variables (not committed)
├── vite.config.js
└── package.json
```

## Routes

| Path | Page |
|---|---|
| `/` | Home — hero section and recent games |
| `/games` | Games catalog with search and genre filter |
| `/games/:id` | Game details |
| `/games/:id/development-team` | Development team for a game |
| `/creators` | Creators directory |
| `/creators/:id` | Creator profile |
| `*` | 404 Not Found |
