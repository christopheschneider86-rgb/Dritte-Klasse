---
name: codebase-indexer
description: >
  Automatically generates and updates a CODEBASE_MAP.md for any project — a concise
  reference file that lets Claude navigate and understand the codebase without re-reading
  every file each session. Use this skill whenever the user asks to: "index this project",
  "create a codebase map", "make a project overview", "document the project structure",
  "update the codebase map", or "I want to save tokens in future sessions". Also trigger
  when the user starts a new project and says things like "where do we begin?" or
  "how do you want to approach this?" — proactively suggest creating a map. Ideal for
  projects with 3+ files or multiple modules.
---

# Codebase Indexer

Your job is to analyze a project and produce a `CODEBASE_MAP.md` — a living reference
document that Claude can read at the start of future sessions instead of re-reading every
source file. A good map saves 60–80% of tokens on follow-up sessions and helps Claude
give better, more targeted answers.

## Step 1: Discover the project

Run these commands to get a picture of the project before reading any file:

```bash
# Overall structure (exclude node_modules, .git, build artifacts)
find <project-dir> -type f \( -name "*.html" -o -name "*.js" -o -name "*.ts" \
  -o -name "*.py" -o -name "*.css" -o -name "*.json" \) \
  | grep -v node_modules | grep -v ".git" | grep -v dist | sort

# Count lines per file (shows which files are complex)
wc -l <project-dir>/**/*.{html,js,ts,py} 2>/dev/null | sort -rn | head -20

# LocalStorage / database keys (for web apps)
grep -r "localStorage\|sessionStorage\|STORAGE_KEY" <project-dir> --include="*.html" --include="*.js" -l

# Shared state / global variables
grep -rn "^let \|^const \|^var " <project-dir> --include="*.js" --include="*.html" | grep -v "node_modules" | head -30
```

Read only what you need to understand the purpose of each file — use `grep` to extract
key functions, class names, and exports rather than reading whole files.

## Step 2: Identify what matters most

For each file, determine:
- **Purpose**: What does this file do in one sentence?
- **Key functions/components**: The 3–5 most important entry points or functions
- **Dependencies**: What does it import or depend on?
- **Shared state**: Does it read/write localStorage, databases, global variables?
- **Known issues**: Any bugs, TODOs, or workarounds visible in comments?

Skip boilerplate, auto-generated files, and config files unless they're unusual.

## Step 3: Write CODEBASE_MAP.md

Save the file as `CODEBASE_MAP.md` in the project root. Use this structure:

```markdown
# Codebase Map – [Project Name]

**Last updated:** [date]
**Purpose:** [1–2 sentence description of what this project does]

---

## File Structure

[ASCII tree of all relevant files with one-line descriptions]

---

## Modules & Key Functions

For each significant file:
### [filename]
**Purpose:** [one sentence]
**Lines:** [count] | **Complexity:** low/medium/high

Key functions:
- `functionName(params)` — what it does
- `anotherFunction()` — what it does

[Only include functions that future Claude sessions would actually need to know about]

---

## Shared State & Storage

[Table or list of all localStorage keys, databases, global variables shared between files]

| Key/Variable | Where set | Where read | What it holds |
|---|---|---|---|
| ... | ... | ... | ... |

---

## Known Issues & Fixes

| Problem | File | Status | Notes |
|---|---|---|---|
| ... | ... | ✅ Fixed / ⚠️ Open | ... |

---

## How to Use This Map (for Claude)

- To fix a bug in X: read [filename], focus on [functionName]
- To add feature Y: start in [filename], the relevant section is around line [N]
- Don't re-read [filename] unless specifically asked — it's auto-generated/boilerplate

---

## Changelog

| Date | Change | Files affected |
|---|---|---|
| [date] | [what changed] | [files] |
```

## Step 4: Keep it lean

A map that's too long defeats the purpose — it wastes tokens itself. Aim for:
- **Under 200 lines** for small projects (< 10 files)
- **Under 400 lines** for medium projects (10–30 files)
- **Under 600 lines** for large projects (30+ files)

If you're going over, cut:
- Obvious things ("index.html is the main HTML file")
- Boilerplate functions (standard getters/setters, event listeners that do one thing)
- Dependency lists that can be read from package.json in 2 seconds

## Step 5: Tell the user how to use it

After creating the map, explain in 3–4 sentences:

1. **Where the file is** and how to open it
2. **How to start future sessions**: "At the start of each new chat, say: *'Lies bitte die CODEBASE_MAP.md und dann...'*"
3. **When to update it**: after adding new files, after big refactors, after fixing major bugs
4. **What it saves**: roughly how many tokens this will save per session

## What makes a great map

The best maps answer the questions a developer (or Claude) would ask at the start of a session:
- "What does this project do?"
- "Where is the code for feature X?"
- "What's the shared state between A and B?"
- "Are there any known gotchas I should know about?"

If reading the map takes 30 seconds and it answers those questions, it's a good map.
If it takes 3 minutes to read, it needs trimming.
