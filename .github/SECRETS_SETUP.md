# GitHub Secrets Setup

To configure the playlist update cron job, you need to add the following secrets to your GitHub repository:

## Required Secrets

Navigate to your GitHub repository → Settings → Secrets and variables → Actions → New repository secret

Add these secrets with their corresponding values:

1. **SUPABASE_URL**
   - Value: `https://uomomwtzebhxvizaxdyv.supabase.co`

2. **SUPABASE_SERVICE_KEY** 
   - Value: Your Supabase service role key (starts with `eyJhbGciOiJIUzI1NiIs...`)

3. **SPOTIFY_CLIENT_ID**
   - Value: `87e1c0ce80544a95bc512b4388f521e3`

4. **SPOTIFY_CLIENT_SECRET**
   - Value: Your Spotify client secret (starts with `ea9b3fa8b4bf...`)

## How to Add Secrets

1. Go to your GitHub repository
2. Click **Settings** tab
3. In the left sidebar, click **Secrets and variables** → **Actions**
4. Click **New repository secret**
5. Enter the name and value for each secret
6. Click **Add secret**

## Testing the Workflow

After adding secrets, you can test the workflow by:

1. Going to the **Actions** tab in your repository
2. Finding the "Update Spotify Playlists" workflow
3. Clicking **Run workflow** to trigger it manually
4. Monitoring the execution logs

## Schedule

The workflow is configured to run every Monday at midnight UTC. You can modify the schedule in `.github/workflows/update-playlists.yml` if needed.

The cron format is: `'0 0 * * 1'` where:
- `0 0` = midnight (00:00)
- `* *` = every day of month, every month  
- `1` = Monday (0=Sunday, 1=Monday, etc.)