# Codebase Map – Lern-Abenteuer 3. Klasse

**Last updated:** 2026-04-11  
**Purpose:** Gamified learning app for 3rd-grade German elementary school children with modules for math (Mathe), home science (HSU), and music (Musik). Features profile management, coin-based rewards, localStorage-backed progress tracking, and parent statistics dashboard.

---

## File Structure

```
/Dritte-Klasse/
├── index.html                          # Main hub: profile selector, 5-subject grid, parent stats
├── tier_entdecker.html                 # Interactive animal explorer game (HSU module)
├── mathe/
│   ├── mathe_trainer_3_klasse.html      # Math trainer: 9 topic tiles, multi-choice/puzzle tasks
│   └── mathe_jump.html                  # Math mini-game (jumping/physical challenge)
├── hsu/
│   ├── hsu_trainer_3_klasse.html        # Home science trainer: 10+ topics (Wald, Wasser, etc.)
│   └── hsu_fragen.js                    # Question bank for HSU (200+ questions, 10+ topics)
├── musik/
│   ├── musik_trainer.html               # Music trainer: 3 sub-modules (Peter/Wolf, Instruments, Klavier)
│   ├── musik_merker.html                # Piano memory game (Simon says with music)
│   ├── musik_orchester.html             # Orchestra instruments explorer
│   └── musik_fragen.js                  # Question bank for music (100+ questions)
└── todo-test/                           # Test folder (ignore)
```

---

## Modules & Key Functions

### index.html
**Purpose:** Landing page with profile manager, subject grid, coin wallet, and parent stats dashboard.  
**Lines:** 452 | **Complexity:** high

**Key functions & global state:**
- `loadProfiles()` — Load all profiles from localStorage (STORAGE_KEY='m_app_v9')
- `saveProfiles()` — Persist profiles to localStorage
- `setActive(id)` — Switch active profile, refresh UI and stats
- `addProfile()` — Create new child profile via prompt
- `deleteProfile(id, e)` — Remove profile (needs confirmation)
- `updateParentStats()` — Calculate and display topic stats (filtered by time period: week, lastweek, 3weeks, all)
- `render()` — Render profile chips and add button
- **Global state:** `profiles` (object of {id → name, coins, score, history, hsu_history, musik_history}), `activeProfId`

**Key localStorage keys:**
- `m_app_v9` — All profiles + history
- `m_app_active_prof` — Active profile ID

---

### mathe/mathe_trainer_3_klasse.html
**Purpose:** Math trainer with 9 topic tiles (Zahlraum 1000, Addition, Subraction, Multiplikation, Division, Geometrie, Uhrzeit, Geld, Vermischtes).  
**Lines:** 676 | **Complexity:** high

**Key game mechanics:**
- 9 topic tiles → each opens a subtype bar with 3-5 sub-topics
- Multi-choice (4 options), number input (Mauer-style brick walls), visual puzzles (T-Haus cross)
- Coin cost per attempt (stored in profile.coins)
- Star rating (0-3 stars based on correctness)
- Stores attempt history in profile.history (timestamp, topic, subtopic, ok, difficulty)

**Key functions:**
- `loadProfile()` — Load active profile's data, coins, history
- `updateCoinDisplay()` — Refresh coin count display
- `renderQuestion()` — Generate and render current task
- `checkAnswer()` — Validate input, award coins/stars, add history entry
- `playSound()` — Audio feedback (success/error)

---

### mathe/mathe_jump.html
**Purpose:** Physical/active math game (jumping or movement-based challenge).  
**Lines:** 418 | **Complexity:** medium

*Not fully analyzed yet — likely interactive game*

---

### hsu/hsu_trainer_3_klasse.html
**Purpose:** Home Science (HSU) trainer with 10+ topic tiles (Wald, Wasser, Feuerwehr, Blutkreislauf, Orientierung, Ritter, Märchen, Geschichte, Beruf, Kontinente, Sicher im Verkehr, Sommer).  
**Lines:** 612 | **Complexity:** high

**Key game mechanics:**
- Similar to Mathe: topic tiles → task display area
- Questions loaded from hsu_fragen.js (HSU_TOPICS)
- Multi-choice, Yes/No toggles, True/False
- Bonus questions after correct answers
- Coin rewards, star ratings, history tracking

**Key functions:**
- `loadProfile()`, `updateCoinDisplay()`, `checkAnswer()`
- `renderQuestion()` — Render MC, Yes/No, or text-based task
- History stored in profile.hsu_history

---

### hsu/hsu_fragen.js
**Purpose:** Question bank for HSU trainer (10 topic objects, ~200 questions total).  
**Lines:** 215 | **Complexity:** medium

**Structure:**
- `HSU_TOPICS` object: key=topic-slug, value={title, icon, sub, color, questions[]}
- Each question: `{q, hint, choices[], sol, isYesNo, bonus}`
- Topics: wald, wasser, feuerwehr, blutkreislauf, orientierung, ritter, märchen, geschichte, beruf, kontinente, verkehr, sommer

---

### musik/musik_trainer.html
**Purpose:** Music trainer hub with 3 sub-modules: Peter & the Wolf, Instruments, Piano game.  
**Lines:** 615 | **Complexity:** high

**Key sections:**
- Profile loader + coin display
- 3 subject tiles linking to: musik_merker.html, musik_orchester.html, q&a questions (inline)
- Question rendering for Peter/Wolf topics
- Same coin cost, history tracking pattern as Mathe/HSU

---

### musik/musik_merker.html
**Purpose:** Piano memory game (Simon Says with musical notes, 9 levels, highscore tracking).  
**Lines:** 656 | **Complexity:** high

**Key game mechanics:**
- Generate random sequence of piano notes (length increases with level)
- Player must repeat by clicking white-key buttons
- Lose heart for wrong note; game over at 0 hearts
- Visual piano (7 white keys A–G, CSS-only)
- Web Audio API for tone generation (playTon function, frequency-based)
- Highscores stored per profile in localStorage (m_musik_hs)

**Key functions & state:**
- `loadProfile()`, `loadHighscores()`, `saveHighscore()`
- `generiereSequenz()` — Generate random 9-note sequence
- `spieleSequenz()` — Play back sequence to user
- `tasteDrücken(noteIdx)` — Handle user click, validate against sequence
- `playTon(freq, dauer)` — Generate tone via Web Audio API
- **State:** `sequenz` (array of note indices), `eingabe` (user input), `level`, `herzen`, `abspielIdx`

**localStorage keys:**
- `m_musik_hs` — Highscores array [{name, lvl}]

---

### musik/musik_orchester.html
**Purpose:** Orchestra instruments explorer (visual tour of instruments from Peter & the Wolf).  
**Lines:** 384 | **Complexity:** medium

*Interactive exhibit of 7 main instruments with descriptions and SVG images*

---

### musik/musik_fragen.js
**Purpose:** Question bank for music trainer (~100 questions, 3 topics).  
**Lines:** 605 | **Complexity:** medium

**Structure:**
- `INSTRUMENT_BILD` object: instrument name → SVG path in img/ folder
- `MUSIK_TOPICS` object: key=topic-slug, value={icon, title, sub, questions[]}
- Each question: `{tag, q, hint, choices[], sol, visual, bonus}`
- Topics: peter_wolf, instrumente, klavier

---

### tier_entdecker.html
**Purpose:** Interactive animal explorer game (HSU module, standalone).  
**Lines:** 100+ | **Complexity:** medium

*Likely memory or matching game with animal images and facts*

---

## Shared State & Storage

| Key/Variable | Where set | Where read | What it holds |
|---|---|---|---|
| `m_app_v9` | index.html, trainers | All modules | Complete profiles object: {profileId → {name, coins, score, history, hsu_history, musik_history}} |
| `m_app_active_prof` | index.html, trainers | All modules | ID of currently active profile |
| `m_musik_hs` | musik_merker.html | musik_merker.html | JSON array of highscores: [{name, lvl}] |
| `profiles[id].coins` | All trainers (checkAnswer) | index.html, trainers | Coin balance per profile |
| `profiles[id].history` | mathe_trainer | index.html (stats) | Array of mathe attempts: [{ts, topic, subtopic, ok, stars, ...}] |
| `profiles[id].hsu_history` | hsu_trainer | index.html (stats) | Array of HSU attempts |
| `profiles[id].musik_history` | musik modules | index.html (stats) | Array of music attempts |

---

## Known Issues & Fixes

| Problem | File | Status | Notes |
|---|---|---|---|
| Parent stats periods (lastweek, 3weeks) may have off-by-one errors | index.html lines 308–325 | ⚠️ Open | `getWeekStart()` assumes Monday=1, Sunday=7. Edge cases at week boundaries untested. |
| Web Audio API context may fail on some browsers without user gesture | musik_merker.html line 228 | ⚠️ Known | ensureAudio() tries to resume context; some phones still block. |
| SVG instrument images may 404 if images/img/ folders missing | musik modules | ⚠️ Open | No fallback; shows broken image if SVG not found. |
| Coin deduction doesn't prevent negative balance | music_merker, trainers | ⚠️ Open | removeCoins() clamps to 0 but no UI warning when cost > balance. |
| localStorage full might corrupt profiles silently | all modules | ⚠️ Known | No error handling for quota exceeded. |

---

## How to Use This Map (for Claude)

1. **Profile & state management:** Always read index.html first — it owns localStorage keys `m_app_v9` and `m_app_active_prof`.
2. **Add a new subject:** Copy pattern from `mathe_trainer_3_klasse.html` or `hsu_trainer_3_klasse.html`. Create trainer HTML + question JS file.
3. **Fix coin/scoring bug:** Check `mathe_trainer` or `hsu_trainer` in the checkAnswer() function, then sync logic to music_merker.html.
4. **Add new HSU/Musik questions:** Edit `hsu_fragen.js` or `musik_fragen.js` — just add `{ q, hint, choices, sol, ...}` objects to the relevant topic.
5. **Debug parent stats:** Focus on index.html lines 296–383 (updateParentStats) and the time-period filtering logic.
6. **Audio issues:** Check musik_merker.html `ensureAudio()` and `playTon()` functions.

---

## Changelog

| Date | Change | Files affected |
|---|---|---|
| 2026-04-11 | Codebase map created | (all) |
