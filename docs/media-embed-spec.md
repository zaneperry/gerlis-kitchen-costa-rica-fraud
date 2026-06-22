# Spec: Gerli's Kitchen media embeds

## Objective
Add the provided English and Spanish warning images to the top of the matching language sections on the GitHub Pages page, and add the provided audio and video files as clean embeds. The English image belongs in the English section; the Spanish image belongs in the Spanish section. The Take a Chef logo should appear in the top media area as the booking source reference, with factual language only.

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
- Confirm English shows the English image and Take a Chef logo at the top
- Confirm Spanish shows the Spanish image and Take a Chef logo at the top
- Confirm the audio player and video player load from local assets
- Confirm the video still has a download link

## Boundaries
- Always: keep both language versions visually aligned, use local asset paths, preserve the current language toggle behavior, and keep Take a Chef references factual
- Ask first: changing the page copy, adding new dependencies, or altering the GitHub Pages deployment setup
- Never: hotlink the new media, break the language toggle, or remove the existing warning content

## Success Criteria
- English section shows the English image and Take a Chef logo at the top
- Spanish section shows the Spanish image and Take a Chef logo at the top
- Both sections include the same audio embed near the top without a download button
- Both sections include the same video embed around the middle of the page with a download button
- All media loads from committed local files in `assets/`
- The page still toggles cleanly between languages

## Open Questions
- None
