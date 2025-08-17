# Songs of a Feather 🎵

A Spotify social application that connects music lovers through collaborative playlists. Follow friends and automatically share your top tracks in weekly updated collaborative playlists.

## Features

- **Social Music Discovery**: Follow friends to see their favorite tracks
- **Automatic Playlist Updates**: Your group playlists update weekly with fresh music from followed users
- **Spotify Integration**: OAuth login and playlist management
- **Real-time Collaboration**: Shared playlists that everyone can enjoy
- **Modern UI**: Built with Next.js 15 and Tailwind CSS

## 🏗️ Architecture

This is a full-stack monorepo containing:

- **Backend (`apps/api`)**: Python Flask API with Spotify Web API integration
- **Frontend (`apps/web`)**: Next.js 15 TypeScript application
- **Database**: Supabase for authentication and data storage
- **Deployment**: Vercel for both frontend and backend
- **Automation**: GitHub Actions for scheduled playlist updates

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- Python 3.8+
- [uv](https://github.com/astral-sh/uv) for Python package management
- Spotify Developer Account
- Supabase Account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mvacaporale/songs-of-a-feather.git
   cd songs-of-a-feather
   ```

2. **Install all dependencies**
   ```bash
   npm run install:all
   ```

3. **Set up environment variables**
   
   Create `.env` files in both `apps/api/` and `apps/web/` with your credentials:
   
   **apps/api/.env:**
   ```
   SPOTIFY_CLIENT_ID=your_spotify_client_id
   SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
   SUPABASE_URL=your_supabase_url
   SUPABASE_SERVICE_KEY=your_supabase_service_key
   JWT_SECRET=your_jwt_secret
   ```
   
   **apps/web/.env.local:**
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

## 🔧 Available Scripts

### Frontend Commands
- `npm run dev:web` - Start Next.js development server
- `npm run dev:api` - Start Flask development server
- `npm run build:web` - Build frontend for production
- `npm run lint:web` - Run ESLint on frontend
- `npm run test:api` - Run backend tests
- `npm run install:all` - Install all dependencies

### Backend Commands
```bash
# Activate Python environment (from root)
source .venv/bin/activate

# Navigate to API directory
cd apps/api

# Run development server
python app.py

# Run tests
pytest

# Format code
black .
isort .

# Manual playlist update
python update_group_playlists.py
```


## 🧪 Testing

Run the backend test suite:
```bash
npm run test:api
```
