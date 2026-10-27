# Tamara Chacon — Professional Portfolio

**Cybersecurity Strategist & Educator**  
*Security for the curious, the confused, and the C-suite.*

A personal portfolio of publications, speaking engagements, media appearances, and practical security education. Hosted with GitHub Pages. No paid hosting, runtime backend, or third-party analytics.

## Make changes

You can edit files directly on GitHub, including from your phone. Open a file, choose the pencil icon, make your change, and commit it to `main`. The **Actions** tab shows build and publication status.

- **Add or edit work:** `dist/works.json`
- **Edit your headline, bio, or page structure:** `build.py`
- **Change colors and layout:** `dist/style.css`
- **Change filtering, the theme switch, or Easter egg:** `dist/app.js`
- **Change the default theme:** `dist/theme-init.js`

`dist/index.html` is generated from `build.py` and `dist/works.json`; edit those source files for lasting changes. The workflow builds the page and publishes `dist` after a commit to `main`.

### Add an entry

Add an object to the array in `dist/works.json`, using a comma between objects:

```json
{
  "title": "Your session or article title",
  "category": "Speaking",
  "publisher": "Event or publication name",
  "date": "October 24, 2026",
  "role": "Speaker",
  "topic": "Threat hunting",
  "description": "A short description of the work and your contribution.",
  "url": "https://example.com/your-work"
}
```

Categories: `Published work`, `Speaking`, `Media`.
Topics: `Threat hunting`, `AI & security`, `Security fundamentals`, `Threat research`; use an empty string when the topic is not established.
Dates: full or abbreviated month plus day/year, or just a year when the precise date is unknown.
Use `null` for `url` when there is no public link. Keep collaborators and original authors credited. Descriptive titles are used where official session titles are unavailable.

## Preview locally

Python 3 and a browser are enough; no packages need installing.

```sh
python3 build.py
python3 -m http.server 8000 --directory dist
```

Open `http://localhost:8000`.

## Publishing

In repository **Settings → Pages**, set the build source to **GitHub Actions**. The workflow is `.github/workflows/pages.yml` and uses official GitHub Pages actions.

## Undo a change

GitHub keeps commit history. Revert an unwanted commit, or ask for an earlier version to be restored; committing that restoration republishes the site. To take the website offline, use **Settings → Pages → Unpublish site**.

## Features

- Chronological collection with format, topic, and text filters
- Dark mode by default, with a remembered light/dark preference
- Keyboard-accessible Easter egg on the star beside the headline
- Responsive layout and reduced-motion support
- External links to original publications, event sources, and media

Content is a growing collection; article dates can reflect updates. Speaking entries may be confirmed by the speaker rather than a public event archive. Private events are labeled and have no invented public links.
