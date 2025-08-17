# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Spotify social application monorepo containing two main applications:

1. **apps/api** - Python Flask backend API that handles Spotify OAuth, playlist management, and user relationships
2. **apps/web** - Next.js 15 frontend application with TypeScript and Tailwind CSS

The application allows users to follow each other and automatically share their top tracks via collaborative Spotify playlists.

## Development Commands

### Monorepo Commands (from root)
```bash
# Install all dependencies
npm run install:all

# Development servers
npm run dev:web          # Start Next.js frontend
npm run dev:api          # Start Flask backend

# Build and test
npm run build:web        # Build frontend for production
npm run lint:web         # Run ESLint on frontend
npm run test:api         # Run backend tests
```

### Next.js Frontend (apps/web/)
```bash
cd apps/web
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Flask Backend (apps/api/)
```bash
cd apps/api
# Setup Python environment
uv venv                          # Create virtual environment with uv
source .venv/bin/activate        # Activate virtual environment (macOS/Linux)
# .venv\Scripts\activate         # Activate virtual environment (Windows)
uv pip install -r requirements.txt # Install dependencies

# Development commands
python app.py                    # Run development server
python app.py --log-level DEBUG  # Run with debug logging
python update_group_playlists.py # Run playlist update script manually
pytest                          # Run all tests
pytest tests/test_specific.py    # Run specific test file
black .                         # Format Python code
isort .                         # Sort imports
```

## Architecture Overview

### Backend (Flask)
- **app.py** - Main Flask application with API endpoints:
  - `/create-follow` - Creates mutual follow relationships between users
  - `/webhook/user-created` - Handles new user setup (creates playlists)
  - `/delete-user` - Deletes user and associated data
  - `/cron/update-playlist` - Weekly playlist update job
- **utils.py** - Core Spotify API utilities and Supabase database operations
- **update_group_playlists.py** - Scheduled task for updating user playlists
- Uses Supabase for authentication and database operations
- Deployed on Vercel with GitHub Actions handling scheduled playlist updates

### Frontend (Next.js)
- **App Router** structure with TypeScript
- **Supabase integration** for authentication
- **Tailwind CSS** for styling
- Environment-aware backend URL configuration (localhost:5000 for dev, Vercel for prod)
- Key routes:
  - `/` - Landing page
  - `/dashboard` - Authenticated user dashboard
  - `/auth/callback` - OAuth callback handler

### Database Schema (Supabase)
- **spotify_tokens** - Stores user OAuth tokens and email
- **spotify_playlists** - Tracks user's individual and group playlist IDs
- **spotify_follows** - Manages follower relationships between users

### Key Integrations
- **Spotify Web API** - All music-related operations (playlists, tracks, OAuth)
- **Supabase** - Database, authentication, and real-time features
- **Vercel** - Deployment platform for both frontend and backend

## Important Environment Variables

Both applications require environment configuration:
- Spotify API credentials (CLIENT_ID, CLIENT_SECRET)
- Supabase configuration (URL, keys)
- JWT secrets for webhook verification

## Automated Playlist Updates

GitHub Actions runs `update_group_playlists.py` every Monday at midnight UTC. The script updates all users' playlists with fresh tracks from followed users. Workflow file: `.github/workflows/update-playlists.yml`. Requires Supabase and Spotify credentials as GitHub repository secrets (setup: `.github/SECRETS_SETUP.md`).

## Testing

The Flask backend includes pytest-based tests in the `tests/` directory focusing on Spotify utilities and user setup workflows. Tests use ordering decorators to ensure proper execution sequence.