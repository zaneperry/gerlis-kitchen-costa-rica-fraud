import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

assert.match(html, /var PASSWORD_PROTECTION_ENABLED = true;/, 'gate should be enabled by default');
assert.match(html, /id="password-gate"/, 'lock screen should exist');
assert.match(html, /id="site-content"/, 'article content should have a gateable container');
assert.match(html, /id="site-content"[^>]*\binert\b/, 'locked article should be removed from interaction');
assert.match(html, /enteredPassword === 'fuckgerli'/, 'exact requested password should unlock');
assert.match(html, /sessionStorage\.setItem\('gk-unlocked', 'true'\)/, 'unlock should persist for the tab');
assert.match(html, /sessionStorage\.getItem\('gk-unlocked'\) === 'true'/, 'refresh should restore tab access');
assert.match(html, /if \(!PASSWORD_PROTECTION_ENABLED\)/, 'public-mode rollback branch should exist');
assert.match(html, /content\.inert = false;/, 'unlock should restore article interaction');
assert.match(html, /aria-live="polite"/, 'wrong-password feedback should be announced');
assert.doesNotMatch(html, /localStorage\.setItem\('gk-unlocked'/, 'unlock must not persist across browser sessions');

console.log('Password gate contract checks passed.');
