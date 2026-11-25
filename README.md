# FocusFlow
A local productivity dashboard combining a Pomodoro timer, task checklist and session counter. Supports 25-minute focus, 5-minute break and 15-minute long break modes. Tasks, completed focus sessions and timer state persist in localStorage. Timer uses an absolute deadline to reduce drift when tabs are inactive.

## Run
Open `index.html` (or host via GitHub Pages). No account or dependencies. Browser storage is origin-specific and may be unavailable in private browsing.

## Test
`node --test test.js` (Node.js 18+). Manual check: create a task, mark it done, refresh, and verify persistence. Start/pause/reset the timer and switch modes.

## Limitations
No cross-device sync. Completion is recognised when the page runs again; it does not send background notifications.
