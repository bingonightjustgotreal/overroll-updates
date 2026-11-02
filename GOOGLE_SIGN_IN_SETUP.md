# Google sign-in and cloud-save setup

The game keeps working without Google setup. It saves progress on this computer and shows a setup message when a new player chooses Google sign-in. To turn on Google sign-in and private Google Drive cloud saves:

1. Open [Google Cloud Console](https://console.cloud.google.com/) and create or select a project.
2. In **APIs & Services → Library**, enable **Google Drive API**.
3. In **Google Auth Platform**, configure the app name and support email. For a personal/testing build, choose **External** and add the Google account(s) that will test the game under **Audience → Test users**.
4. In **Clients → Create client**, choose **Desktop app**. Create it and download the client JSON.
5. Copy `build/google-oauth.example.json` to `build/google-oauth.json`, then enter the downloaded JSON's `client_id` and `client_secret` values there. These are installed-app OAuth credentials; do not use a Web application client. The real config is ignored by Git so the client secret is not uploaded with the source.
6. Rebuild the Windows app with `npm run build:win` from this `Code` folder. The OAuth config is packaged with the app.

Google sign-in opens the user's normal web browser and returns to the game through a temporary loopback listener. Cloud saves use only Google's `drive.appdata` scope, which stores the save in the app's private Drive data area. Refresh credentials are encrypted with the operating system's secure credential storage. Local saves remain available if the user skips sign-in or Google is unavailable.

For distribution beyond the accounts listed as test users, finish Google's consent-screen publishing and verification requirements. Google also expires refresh tokens for External apps left in Testing after 7 days when Drive access is requested; publish the consent screen to Production for ongoing cloud sync. Without a client ID, or while Google blocks a non-test account, the built-in workaround is **Play locally**; progress is still saved on that computer.
