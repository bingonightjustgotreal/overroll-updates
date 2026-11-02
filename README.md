# Overroll

Source code for the Overroll Electron game.

## Build on Windows

1. Install Node.js with npm.
2. Run `npm ci` in this folder.
3. Run `npm run build:win`.
4. Find the portable Windows build under `dist`.

Google sign-in is optional. Copy `build/google-oauth.example.json` to `build/google-oauth.json` and enter your OAuth client values in the local copy. The real config is ignored by Git and should not be committed. Without OAuth setup, the game still saves progress locally.

Progress saves are stored on the player’s computer. This repository’s current Windows target is portable; uploading a new release does not automatically update previously downloaded copies.