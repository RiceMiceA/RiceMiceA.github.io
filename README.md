# RiceMiceA.github.io

A static GitHub Pages portfolio for Zikun (Tony) Liu, focused on robotics, embedded systems, controls, motion planning, and engineering build logs.

## Files

- `index.html` - main one-page portfolio
- `styles.css` - responsive visual system with light/dark theme
- `script.js` - theme toggle, project filters, footer year
- `assets/` - lightweight custom SVG illustrations
- `.nojekyll` - tells GitHub Pages to serve this as plain static HTML
- `404.html`, `robots.txt`, `sitemap.xml` - basic site support files

## Publish to GitHub Pages

```bash
git clone https://github.com/RiceMiceA/RiceMiceA.github.io.git
cd RiceMiceA.github.io
# Copy these generated files into the repo root, replacing the old index.html.
git add .
git commit -m "Build robotics portfolio homepage"
git push origin main
```

GitHub Pages should then serve the site at:

```text
https://ricemicea.github.io/
```

## Customization checklist

1. Replace the SVG illustrations with real project photos or demo GIFs when available.
2. Add more specific results for each project: hardware photos, test videos, lessons learned, and links to reports.
3. Create individual project pages later if the one-page layout gets too dense.
4. Update the hero paragraph when your current research or internship focus changes.
5. Add a PDF resume link if you want recruiters to download a resume directly.

## Content notes

The project descriptions were drafted from public GitHub repository names and README snippets, plus the LinkedIn URL supplied by the site owner. The LinkedIn profile itself may not be accessible to unauthenticated crawlers, so update the copy with any details you want from LinkedIn before publishing.
