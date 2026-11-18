# Roundy

Source code for the Roundy Electron game.

## Build on Windows

1. Install Node.js with npm.
2. Run `npm ci` in this folder.
3. Run `npm run build:win`.
4. Find the Roundy Windows installer under `dist` and install the game.

## Publish a game update

The Windows build uses the NSIS installer because a portable `.exe` cannot update itself automatically. At startup, the game checks the configured GitHub Releases feed. If a newer release is available, the player can agree to download and install it; declining closes the game. A failed update check leaves the current game available to play.

For each update:

1. Commit and push the game source changes to the repository's `main` branch.
2. GitHub Actions builds the Windows installer and publishes a GitHub Release automatically.
3. Confirm the latest release contains the Windows installer and `latest.yml`. The app reads this release metadata when it checks for updates.
4. The first installation must use the NSIS installer. The old portable launcher cannot self-update; after installing NSIS once, later updates can install through the in-game prompt.

Google sign-in is optional. Copy `build/google-oauth.example.json` to `build/google-oauth.json` and enter your OAuth client values in the local copy. The real config is ignored by Git and should not be committed. Without OAuth setup, the game still saves progress locally.

Progress and Google sign-in remain in the existing local save folder. Install the Roundy NSIS build once to enable automatic updates.
