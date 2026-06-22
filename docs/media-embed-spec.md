# Spec: Gerli's Kitchen media embeds

## Objective
Add the provided English and Spanish warning images to the top of the matching language sections on the GitHub Pages page, and add the provided audio and video files as clean embeds with download buttons. The English image belongs in the English section; the Spanish image belongs in the Spanish section.

## Tech Stack
- Static HTML served by GitHub Pages
- Single `index.html` file with client-side language toggle
- Local static assets under `assets/`

## Commands
- Preview locally: `python -m http.server 8000`
- Check changes: `git status --short`
- Review diff: `git diff -- index.html docs/media-embed-spec.md`

## Project Structure
- `index.html` - shared English/Spanish page content and styling
- `assets/` - self-hosted images, audio, and video files
- `docs/media-embed-spec.md` - this spec

## Code Style
- Keep all styling self-contained in `index.html`
- Use semantic wrappers like `figure`, `figcaption`, `audio`, and `video`
- Prefer simple, readable HTML over extra scripting

## Testing Strategy
- Open the page locally in a browser
- Confirm English shows the English image at the top
- Confirm Spanish shows the Spanish image at the top
- Confirm the audio player and video player load from local assets
- Confirm download links resolve to the local asset files

## Boundaries
- Always: keep both language versions visually aligned, use local asset paths, and preserve the current language toggle behavior
- Ask first: changing the page copy, adding new dependencies, or altering the GitHub Pages deployment setup
- Never: hotlink the new media, break the language toggle, or remove the existing warning content

## Success Criteria
- English section shows the English image at the top
- Spanish section shows the Spanish image at the top
- Both sections include the same audio embed near the top with a download button
- Both sections include the same video embed around the middle of the page with a download button
- All media loads from committed local files in `assets/`
- The page still toggles cleanly between languages

## Open Questions
- None
