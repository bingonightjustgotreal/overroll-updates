# Overroll

Source code for the Overroll Electron game.

## Build on Windows

1. Install Node.js with npm.
2. Run `npm ci` in this folder.
3. Run `npm run build:win`.
4. Find the Windows installer under `dist` and install Overroll.

## Publish a game update

The Windows build uses the NSIS installer because the portable `.exe` target cannot update itself automatically. The game checks the configured GitHub Releases feed when it starts. If a newer release is available, the player can agree to download and install it; declining closes the game. A failed update check leaves the current game available to play.

Pushing source changes to the `main` branch alone does not publish a playable update. For each update:

1. Commit and push the game source changes to the repository's `main` branch.
2. From this folder, run `npm version patch --no-git-tag-version` to bump the app and lockfile versions together, then commit and push that version change.
3. Set `GH_TOKEN` in the build environment to a GitHub token allowed to create releases and upload assets for `bingonightjustgotreal/overroll-updates`. Keep the token private and never commit it.
4. Run `npm run release:win` to build and publish the GitHub Release.
5. Confirm the release contains the Windows installer and `latest.yml`. The app reads this release metadata to compare versions and validate the downloaded installer.
6. Install the new NSIS build once on any existing portable-build machines. The old portable launcher cannot self-update; later NSIS installs can update from GitHub Releases at startup.

Google sign-in is optional. Copy `build/google-oauth.example.json` to `build/google-oauth.json` and enter your OAuth client values in the local copy. The real config is ignored by Git and should not be committed. Without OAuth setup, the game still saves progress locally.

Progress saves are stored on the player’s computer. Copies made with the earlier portable Windows launcher must be replaced once with the NSIS installer before they can receive automatic updates.

