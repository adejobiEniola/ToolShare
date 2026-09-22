# AGENTS.md — ToolLocker working rules

1. Never touch `.env`.
   - Do not create, edit, delete, or print it.
   - Only `.env.example` may be read or edited for variable names.

2. Only use Devign (daisyUI) components from the owner's list. Never invent one.
   - If the component you need is not on the list, stop and ask.
   - Do not substitute a custom-built lookalike.

3. Never let type errors block the build or going online.
   - Always run a separate typecheck (`npx tsc -b`) so errors are found early and never block you by surprise.
   - `vite build` must stay green; fix or surface type errors separately.
   - Do not add `tsc` gates to the build.

4. One thing at a time.
   - Do a single task, verify it, then stop for review.

5. Ask before installing anything new.
   - Never run `npm install` without explicit approval.
