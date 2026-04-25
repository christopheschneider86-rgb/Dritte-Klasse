# Codebase Map – Lern-Abenteuer 3. Klasse

**Last updated:** 2026-04-25  
**Purpose:** Gamified learning app for 3rd-grade Bavarian elementary school children. Six subjects: Mathe, HSU, Musik, Englisch, Religion (active), Deutsch (coming soon). Features profile management, coin-based rewards, localStorage-backed progress tracking, parent statistics dashboard, and game highscores.

---

## File Structure

```
/Dritte-Klasse/
├── index.html                           # Hub: profiles, 6-subject grid, parent stats, games bestenliste
├── tier_entdecker.html                  # HSU mini-game: animal explorer (linked from hsu_trainer)
├── mathe/
│   ├── mathe_trainer_3_klasse.html      # Math trainer: 9 topic tiles, multi-choice/puzzle tasks
│   └── mathe_jump.html                  # Math mini-game: jumping platformer with arithmetic
├── hsu/
│   ├── hsu_trainer_3_klasse.html        # HSU trainer: 10+ topics, links to tier_entdecker
│   └── hsu_fragen.js                    # Question bank for HSU (200+ questions, 12 topics)
├── musik/
│   ├── musik_trainer.html               # Musik hub: 3 sub-modules + inline Q&A + bestenliste
│   ├── musik_merker.html                # Piano memory game (Simon Says, 9 levels, highscore)
│   ├── musik_orchester.html             # Orchestra instrument explorer (iframe overlay in trainer)
│   └── musik_fragen.js                  # Question bank for music (100+ questions, 3 topics)
├── englisch/
│   ├── englisch_trainer.html            # Englisch trainer: vocabulary cards, multi-choice quiz
│   └── englisch_woerter.js              # English word bank (animals, colors, numbers, food, …)
└── religion/
    ├── religion_trainer.html            # Religion hub: Q&A trainer, Lückentext, 3-game bestenliste
    ├── religion_fragen.js               # Question bank: Jakob & Esau (1 topic, 24 questions)
    ├── religion_flipper.html            # Mini-game: Bibelflipper (pinball with bumpers, endless)
    ├── religion_tower.html              # Mini-game: Himmelsbau (tower blocks stacking)
    ├── religion_leiter.html             # Mini-game: Himmelsleiter (10-question quiz ladder)
    ├── religion_lexikon.html            # Bibelgeschichten lexikon (iframe overlay from trainer)
    ├── religion_luecken.html            # (Orphaned) standalone gap-fill, no longer linked
    └── religion_stammbaum.html          # (Orphaned) family tree viewer, accessible via lexikon only
```

---

## Navigation Map

```
index.html
├── → mathe/mathe_trainer_3_klasse.html
│       └── → mathe/mathe_jump.html           (Mathe-Hüpfer game banner)
├── → hsu/hsu_trainer_3_klasse.html
│       └── → tier_entdecker.html              (Tier-Entdecker game banner)
├── → musik/musik_trainer.html
│       ├── → musik/musik_merker.html          (Musik-Merkspiel banner)
│       └── → musik/musik_orchester.html       (iframe overlay via openLexikon)
├── → englisch/englisch_trainer.html
└── → religion/religion_trainer.html
        ├── → religion/religion_flipper.html   (Bibelflipper banner)
        ├── → religion/religion_tower.html     (Himmelsbau banner)
        ├── → religion/religion_leiter.html    (Himmelsleiter — inline launch or link)
        └── → religion/religion_lexikon.html   (iframe overlay via openBibelGeschichten)
```

---

## Game Inventory

| Game | File | Subject | Cost | Reward | Highscore key |
|---|---|---|---|---|---|
| Mathe-Hüpfer | mathe_jump.html | Mathe | – | +coins per jump | `m_jump_hs_addsub`, `m_jump_hs_muldiv`, `m_jump_hs_mixed` |
| Tier-Entdecker | tier_entdecker.html | HSU | – | +coins per level | `m_tier_hs` |
| Musik-Merkspiel | musik/musik_merker.html | Musik | –10 🪙 | +coins per level | `m_musik_hs` |
| Bibelflipper | religion/religion_flipper.html | Religion | –10 🪙 | +5 🪙 per round | `m_rel_flipper_hs` |
| Himmelsbau | religion/religion_tower.html | Religion | –10 🪙 | +1 🪙 per block | `m_rel_tower_hs` |
| Himmelsleiter | religion/religion_leiter.html | Religion | –10 🪙 | +coins per correct | `m_rel_hs` |

---

## Modules & Key Functions

### index.html (653 lines)
**Purpose:** Landing page with profile manager, subject grid, coin wallet, parent stats and games bestenliste.

**Key functions & global state:**
- `loadProfiles()` — Load all profiles from localStorage (STORAGE_KEY=`m_app_v9`)
- `saveProfiles()` — Persist profiles to localStorage
- `setActive(id)` — Switch active profile, refresh UI and stats
- `addProfile()` — Create new child profile via prompt
- `deleteProfile(id, e)` — Remove profile (needs confirmation, min 1 profile)
- `updateCoinDisplay()` — Refresh coin wallet display
- `updateParentStats()` — Calculate and display subject stats (time filter: week / lastweek / 3weeks / all)
- `setStatsPeriod(period, el)` — Switch stats time period tab
- `updateGameBestenliste()` — Read all game highscore keys, render top-3 cards per game
- `setGameTab(tab, el)` — Filter game bestenliste by subject (all / mathe / hsu / musik / rel)
- `render()` — Render profile chips and add button
- `showNewsIfNew()` — Show news modal once per version (NEWS_VERSION=`news_v9`)
- **Global state:** `profiles`, `activeProfId`, `statsPeriod`, `gameHsTab`
- **Game constants:** `GAMES_HS[]` — array of 8 game definitions with key, name, icon, unit, subj

**localStorage keys read:**
- `m_app_v9` — All profiles + history arrays
- `m_app_active_prof` — Active profile ID
- `m_jump_hs_addsub/muldiv/mixed`, `m_tier_hs`, `m_musik_hs`, `m_rel_flipper_hs`, `m_rel_tower_hs`, `m_rel_hs` — All game highscores (read-only in index)

---

### mathe/mathe_trainer_3_klasse.html (676 lines)
**Purpose:** Math trainer with 9 topic tiles (Zahlraum 1000, Addition, Subtraktion, Multiplikation, Division, Geometrie, Uhrzeit, Geld, Vermischtes).

**Key game mechanics:**
- 9 topic tiles → subtype bar → task display
- Multi-choice (4 options), number input (Mauer-style brick walls), visual puzzles (T-Haus cross)
- Coin rewards per correct answer; history stored in `profile.history`
- Game banner → mathe_jump.html

**Key functions:**
- `loadProfile()`, `updateCoinDisplay()`, `renderQuestion()`, `checkAnswer()`, `playSound()`
- History: `{ts, topic, subtopic, ok, difficulty}`

---

### mathe/mathe_jump.html (418 lines)
**Purpose:** Platformer mini-game: jump over arithmetic questions. 3 modes: +/–, ×/÷, Gemischt.

**Key mechanics:**
- Canvas-based jumping game with scrolling math obstacles
- Mode selection screen before game starts
- `saveHighscore(mode, score)` → writes to `m_jump_hs_addsub`, `m_jump_hs_muldiv`, or `m_jump_hs_mixed`
- Highscore format: `[{name, score}]` sorted desc, top 5 kept
- Back button → `mathe_trainer_3_klasse.html`

---

### hsu/hsu_trainer_3_klasse.html (612 lines)
**Purpose:** Home Science trainer with 12 topic tiles (Wald, Wasser, Feuerwehr, Blutkreislauf, Orientierung, Ritter, Märchen, Geschichte, Beruf, Kontinente, Verkehr, Sommer).

**Key mechanics:**
- Questions from `hsu_fragen.js` (HSU_TOPICS), multi-choice / Yes-No / True-False
- Coin rewards, history in `profile.hsu_history`
- Game banner → `../tier_entdecker.html` (Tier-Entdecker)
- Bestenliste reads `m_tier_hs`

---

### hsu/hsu_fragen.js (312 lines)
**Structure:** `HSU_TOPICS` object — 12 topic slugs, each with `{title, icon, sub, color, questions[]}`.  
Each question: `{q, hint, choices[], sol, isYesNo, bonus}`

---

### tier_entdecker.html (732 lines)
**Purpose:** Animal explorer game (standalone, linked from HSU trainer).

**Key mechanics:**
- Levels of increasing difficulty; animals revealed one by one with facts
- Coin rewards per correct level
- `saveHighscore(level)` → `m_tier_hs` → `[{name, score}]` sorted desc
- Back button → `hsu/hsu_trainer_3_klasse.html`

---

### musik/musik_trainer.html (615 lines)
**Purpose:** Musik hub with inline Q&A trainer + links to 2 sub-games + Lexikon overlay.

**Key mechanics:**
- Loads questions from `musik_fragen.js` (MUSIK_TOPICS)
- `openLexikon()` — opens `musik_orchester.html` as iframe overlay
- `closeLexikon()` — closes overlay
- Game banner → `musik_merker.html`
- Bestenliste reads `m_musik_hs`
- History: `profile.musik_history` with `{ts, ok, key}`

---

### musik/musik_merker.html (656 lines)
**Purpose:** Piano memory game (Simon Says, 9 levels).

**Key mechanics:**
- Web Audio API tones, 7 white keys (A–G)
- `saveHighscore(name, lvl)` → `m_musik_hs` → `[{name, score}]` sorted desc, top 5 kept
- Cost: –10 🪙 to start; coin rewards per level passed
- Back button → `musik_trainer.html`

---

### musik/musik_orchester.html (384 lines)
**Purpose:** Orchestra instrument explorer (opens as iframe overlay in musik_trainer).  
Interactive exhibit of 7 instruments from Peter & the Wolf with descriptions and SVG images.

---

### musik/musik_fragen.js (605 lines)
**Structure:** `MUSIK_TOPICS` object — 3 topics: `peter_wolf`, `instrumente`, `klavier`.  
Each question: `{tag, q, hint, choices[], sol, visual, bonus}`

---

### englisch/englisch_trainer.html (778 lines)
**Purpose:** English vocabulary trainer with flashcard and quiz modes.

**Key mechanics:**
- Word bank from `englisch_woerter.js`
- Flashcard mode (Wortkarten) and multi-choice quiz
- Coin rewards; history in `profile.eng_history` with `{ts, ok, key}`
- Back button → `../index.html`

---

### englisch/englisch_woerter.js (225 lines)
**Structure:** `ENGLISCH_WOERTER` object — categories (animals, colors, numbers, food, …), each with `[{de, en, emoji}]` entries.

---

### religion/religion_trainer.html (930 lines)
**Purpose:** Religion hub — Q&A trainer (4 modes), Lückentext, 3-game banner, 3-tab bestenliste, Bibelgeschichten overlay.

**Modes:**
1. **Quiz** (multiple-choice trainer)
2. **Himmelsleiter** (visual ladder progress within trainer, links to `religion_leiter.html`)
3. **Lückentext** (gap-fill with global `SAETZE[]` pool, 22 sentences)
4. **Bibelgeschichten** (opens `religion_lexikon.html` as iframe overlay)

**Key functions:**
- `loadProfile()`, `updateCoinDisplay()`, `checkAnswer()`
- `openBibelGeschichten()` / `closeBibelGeschichten()` — iframe overlay
- `startLuecken()` — shuffles `SAETZE[]`, renders gap-fill
- `buildTiles()` — renders topic tiles from `RELIGION_TOPICS`
- `updateHighscores()` — 3-tab bestenliste (flipper/tower/leiter); `switchHsTab(tab)`
- History: `profile.rel_history` with `{ts, ok, topic}`
- **Global state:** `SAETZE[]` (22 fill-in-the-blank sentences), `curHsTab`

**Game banners:**
- ⚡ Bibelflipper → `religion_flipper.html`
- 🏛️ Himmelsbau → `religion_tower.html`

---

### religion/religion_fragen.js (39 lines)
**Structure:** `RELIGION_TOPICS` object — 1 topic: `jakobesau`.  
24 questions across 5 parts: Die Zwillinge, Linsengericht & Erstgeburtsrecht, Der gestohlene Segen, Flucht & Himmelsleiter, Bei Laban & Nomadenleben.  
Each question: `{q, hint, choices[], sol, imgEmoji?, imgLabel?}`

---

### religion/religion_flipper.html (626 lines)
**Purpose:** Pinball mini-game with 5 educational bumpers (Jakob & Esau themes).

**Key mechanics:**
- Canvas 2D physics: ball, 2 flippers (angular velocity), 5 bumpers
- Endless multi-round: all 5 bumpers hit → reset, +5 🪙, round counter increments
- Round banner shown briefly (non-blocking), score accumulates across rounds
- 3 lives; game over shows round count + personal best
- `saveFlipperHighscore(score)` → `m_rel_flipper_hs` → `[{name, score}]` sorted desc, top 5
- Cost: –10 🪙; Back button → `religion_trainer.html`

---

### religion/religion_tower.html (441 lines)
**Purpose:** Tower-blocks stacking game (Himmelsbau).

**Key mechanics:**
- Canvas 2D: moving block drops, overlap with previous block calculated
- Perfect snap if overlap within 6px of full width (SNAP_THRESHOLD=6)
- Speed increases with score: `min(1.8 + score×0.12, 5.5)`
- Camera follows stack upward (`cameraY = max(0, mover.y − H×0.25)`)
- Falling cut pieces animate with gravity
- Bible fact every 5 blocks from `FACTS[]` (10 Jakob & Esau facts)
- Game over when remaining block < 15px (`MIN_BLOCK_W/2`)
- `saveTowerHighscore(score)` → `m_rel_tower_hs` → `[{name, score}]` sorted desc, top 5
- Cost: –10 🪙; +1 🪙 per block; Back button → `religion_trainer.html`

---

### religion/religion_leiter.html (454 lines)
**Purpose:** 10-question quiz game (Himmelsleiter / ladder).

**Key mechanics:**
- 10 random questions from `RELIGION_TOPICS.jakobesau.questions`
- Correct → climb one rung; wrong → fall back
- Results screen with score and coins awarded
- `saveScore(name, correct)` → `m_rel_hs` → `[{name, score, date}]` sorted desc
- Cost: –10 🪙; Back button → `religion_trainer.html`

---

### religion/religion_lexikon.html (491 lines)
**Purpose:** Bibelgeschichten lexikon (opens as iframe overlay from religion_trainer).

**Key mechanics:**
- Browsable stories: creation, Abraham, Rebekka, Jakob & Esau, Himmelsleiter, Laban, Stammbaum
- Each story has full German text + emoji illustrations
- Iframe-aware back button: `window.parent.closeBibelGeschichten()` if in iframe, else history.back()
- Glossary section with key terms

---

### religion/religion_luecken.html (243 lines) ⚠️ Orphaned
**Status:** Standalone gap-fill page, no longer linked from `religion_trainer.html` (replaced by inline Lückentext mode).  
Accessible only via direct URL. Consider removing or re-linking.

---

### religion/religion_stammbaum.html (260 lines) ⚠️ Orphaned
**Status:** Family tree viewer for Jakob & Esau. Not directly linked from `religion_trainer.html`; only accessible via `religion_lexikon.html` internal navigation or direct URL.

---

## Shared State & Storage

| Key | Written by | Read by | Format |
|---|---|---|---|
| `m_app_v9` | index + all trainers | index + all trainers | `{profileId → {name, coins, score, history, hsu_history, musik_history, eng_history, rel_history}}` |
| `m_app_active_prof` | index + all trainers | index + all trainers | String (profile ID) |
| `profiles[id].history` | mathe_trainer | index.html (stats) | `[{ts, topic, subtopic, ok, …}]` |
| `profiles[id].hsu_history` | hsu_trainer | index.html (stats) | `[{ts, ok, key}]` |
| `profiles[id].musik_history` | musik_trainer | index.html (stats) | `[{ts, ok, key}]` |
| `profiles[id].eng_history` | englisch_trainer | index.html (stats) | `[{ts, ok, key}]` |
| `profiles[id].rel_history` | religion_trainer | index.html (stats) | `[{ts, ok, topic}]` |
| `m_jump_hs_addsub` | mathe_jump | index, mathe_trainer | `[{name, score}]` sorted desc, top 5 |
| `m_jump_hs_muldiv` | mathe_jump | index, mathe_trainer | `[{name, score}]` sorted desc, top 5 |
| `m_jump_hs_mixed` | mathe_jump | index, mathe_trainer | `[{name, score}]` sorted desc, top 5 |
| `m_tier_hs` | tier_entdecker | index, hsu_trainer | `[{name, score}]` sorted desc, top 5 |
| `m_musik_hs` | musik_merker | index, musik_trainer | `[{name, score}]` sorted desc, top 5 |
| `m_rel_flipper_hs` | religion_flipper | index, religion_trainer | `[{name, score}]` sorted desc, top 5 |
| `m_rel_tower_hs` | religion_tower | index, religion_trainer | `[{name, score}]` sorted desc, top 5 |
| `m_rel_hs` | religion_leiter | index, religion_trainer | `[{name, score, date}]` sorted desc, top 5 |
| `news_v9` | index.html | index.html | `'1'` if news modal dismissed |

---

## Known Issues

| Problem | File | Status |
|---|---|---|
| `religion_luecken.html` orphaned | religion/ | ⚠️ Not linked from trainer anymore |
| `religion_stammbaum.html` orphaned | religion/ | ⚠️ Only via lexikon internal nav |
| Web Audio API blocked without user gesture | musik_merker.html | ⚠️ ensureAudio() helps but not 100% |
| Coin balance can't go below 0 but no UI warning when balance insufficient | all games | ⚠️ No guard against spending when broke |
| localStorage quota exceeded silently corrupts profiles | all modules | ⚠️ No error handling |

---

## Conventions & Patterns

1. **Profile loading:** Every sub-page reads `m_app_v9` + `m_app_active_prof` on load. Coins are read/written directly to the profile object and saved back.
2. **Coin economy:** Trainers award +1–2 🪙 per correct answer. Games cost –10 🪙 to start and award coins during play.
3. **Highscore format:** All game highscore arrays follow `[{name, score}]`, sorted descending, capped at 5 entries. `name` comes from the active profile.
4. **History format:** All subject histories follow `{ts: Date.now(), ok: bool, …}`. Parent stats in index.html filters on `ts` and counts `ok` entries.
5. **iFrame overlay pattern:** openXxx() sets `display:block` on an overlay div + sets `iframe.src`. closeXxx() clears src + hides overlay. Used for Lexikon in Musik and Religion.
6. **Single-file architecture:** All CSS, HTML, JS in one `.html` file per page (except question banks in separate `.js` files). No build system, no frameworks.
7. **Adding a new subject:** Copy the pattern from `hsu_trainer_3_klasse.html`. Add a history key to `m_app_v9` profile structure in `index.html` (loadProfiles + addProfile). Add a stat card to `updateParentStats()`.
8. **Adding a new game:** Write `saveXxxHighscore(score)` to a new `m_xxx_hs` key. Add the game to `GAMES_HS[]` in `index.html`. Add a bestenliste tab/reader to the subject trainer.

---

## Changelog

| Date | Change | Files affected |
|---|---|---|
| 2026-04-11 | Codebase map created | — |
| 2026-04-23 | Religion module added: trainer, fragen, lexikon, leiter, stammbaum, luecken | religion/* |
| 2026-04-23 | Coin economy rebalanced; music merker bestenliste added | musik/*, religion/* |
| 2026-04-24 | Bibelflipper game added (endless multi-round, highscore) | religion/religion_flipper.html |
| 2026-04-24 | Bibelgeschichten as iframe overlay (like Musik lexikon) | religion/religion_trainer.html, religion_lexikon.html |
| 2026-04-24 | Himmelsbau (tower blocks) game added | religion/religion_tower.html |
| 2026-04-24 | Religion trainer: 3-tab bestenliste (Flipper/Tower/Leiter) | religion/religion_trainer.html |
| 2026-04-25 | Flipper: endless mode (bumper reset per round), round banner, personal best on game-over | religion/religion_flipper.html |
| 2026-04-25 | index.html: Spiele-Bestenliste section with all 8 games, subject filter tabs | index.html |
| 2026-04-25 | Codebase map fully updated | CODEBASE_MAP.md |
