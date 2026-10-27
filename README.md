# Tamara Chacon — Professional Portfolio

**Cybersecurity Strategist & Educator**  
*Security for the curious, the confused, and the C-suite.*

This portfolio is hosted exclusively by GitHub Pages at https://hollygolightly528.github.io/.

## Update the portfolio — including from your phone

Open a file on GitHub, choose the pencil icon, make changes, and commit to `main`. GitHub Pages automatically builds and publishes the update. Check the **Actions** tab for the `pages build and deployment` run.

| What to change | File |
| --- | --- |
| Add or edit a publication, speaking engagement, or media appearance | `_data/works.json` |
| Headline, introduction, biography, navigation | `index.html` |
| Colors, layout, dark-mode palette | `style.css` |
| Search, filters, theme switch, Easter egg | `app.js` |
| Default theme | `theme-init.js` |
| Website settings | `_config.yml` |

### Add a work entry

Add an object to the array in `_data/works.json`, with a comma between entries:

```json
{
  "title": "Session or article title",
  "category": "Speaking",
  "publisher": "Event or publication name",
  "date": "October 24, 2026",
  "sort_date": "2026-10-24",
  "role": "Speaker",
  "topic": "Threat hunting",
  "description": "A short description of the work and your contribution.",
  "url": "https://example.com/your-work",
  "featured": false
}
```

- Categories: `Published work`, `Speaking`, `Media`.
- Topics: `Threat hunting`, `AI & security`, `Security fundamentals`, `Threat research`; use an empty string for an unconfirmed topic.
- Keep `date` human-readable. Use `sort_date` in YYYY-MM-DD form for ordering. When only the year is known, show just the year in `date` and use YYYY-01-01 for sorting.
- Use `null` for `url` when there is no public link. No fake link is shown.
- `featured: true` includes a publication in the featured writing section.
- Keep original authors and collaborators credited. Some event headings are descriptive when the official session title is unavailable.

Counts and ordering update automatically from the data. There is no separate generator to run and no package to install for routine edits. GitHub's built-in Jekyll build renders the templates in `_includes`.

## Publishing and rollback

GitHub Pages uses `main` and the repository root. Commit changes to update the live website. GitHub keeps version history; revert a commit to restore an earlier version. To take it offline, use **Settings → Pages → Unpublish site**.

## Features

Dark mode with a remembered light/dark choice; format, topic and text filters; responsive layout; reduced-motion support; a keyboard-accessible surprise on the hero star. No third-party analytics or runtime backend.

This is a growing collection. Dates may reflect article updates. Speaking entries can be confirmed by the speaker rather than a public archive. Private events are labeled and have no invented public links.
