# Spec: Reversible Password Gate

## Objective

Temporarily hide the article behind a client-side password prompt. Visitors may view the existing bilingual page only after entering `fuckgerli`. The protection must be easy to disable without removing code.

This is a deterrent on static GitHub Pages, not secure authentication: the published HTML and media remain retrievable by someone who inspects the site or repository.

## Tech Stack

- Existing standalone HTML, CSS, and JavaScript in `index.html`
- Browser `sessionStorage` for per-tab unlock state
- No dependencies or build step

## Commands

- Inspect: `git diff --check && git diff -- index.html specs/password-gate.md`
- Syntax smoke test: `node tests/password-gate.test.mjs`
- Publish: `git add index.html specs/password-gate.md tests/password-gate.test.mjs && git commit -m "Add reversible password gate" && git push origin main`

## Project Structure

- `index.html`: article, lock screen, styles, and gate behavior
- `tests/password-gate.test.mjs`: static behavior checks
- `specs/password-gate.md`: requirements and rollback instructions

## Code Style

Use dependency-free, ES5-compatible page scripting consistent with the existing file. Keep the reversal control explicit:

```js
var PASSWORD_PROTECTION_ENABLED = true;
```

Changing that value to `false` must make the page public without deleting the gate.

## Testing Strategy

- Static test confirms the feature flag, password check, session-only persistence, lock markup, and public-mode branch.
- Browser test confirms the article is hidden initially, a wrong password is rejected, the correct password reveals it, refresh remains unlocked in the same tab, and the bilingual controls still work.
- Live GitHub Pages check confirms the deployed gate appears.

## Boundaries

- Always: Preserve all article text, images, audio, video, language switching, and responsive behavior.
- Always: Focus the password field and provide a clear incorrect-password message.
- Always: Store only an unlocked marker in `sessionStorage`; do not store the password.
- Ask first: Moving the site to authenticated hosting or changing repository visibility.
- Never: Claim this client-side gate securely protects published source or media assets.
- Never: Add dependencies or expose additional personal information.

## Plan

1. Add a static test describing the gate contract.
2. Add the lock screen, isolated styles, feature flag, and gate logic to `index.html`.
3. Run static and browser verification, then review the diff.
4. Commit and push to GitHub Pages; verify the live URL.

## Tasks

- [x] Add password-gate contract test.
  - Acceptance: Test fails before implementation and checks all reversible-gate requirements.
  - Verify: `node tests/password-gate.test.mjs`
  - Files: `tests/password-gate.test.mjs`
- [x] Implement the reversible gate.
  - Acceptance: Locked by default, exact password unlocks, wrong password does not, session-tab state persists, flag disables gate.
  - Verify: Static test and browser flow.
  - Files: `index.html`
- [x] Review and publish.
  - Acceptance: Existing content remains intact, diff is clean, commit reaches `origin/main`, and the live URL is locked.
  - Verify: `git diff --check`, browser inspection, GitHub Pages request.

## Success Criteria

- The article is not visually shown before successful password entry.
- `fuckgerli` reveals the article; any other value leaves it locked.
- Access survives refresh in the same tab but not a new browser session.
- Setting `PASSWORD_PROTECTION_ENABLED` to `false` immediately restores public display.
- Existing English/Spanish content and media continue to work after unlocking.

## Open Questions

None. The user's requested password and temporary client-side scope are explicit.
