# JevFlow Test Plan

## Phase 1 — Manual smoke test

Create a single issue:

**Title:** OAuth login returns 500 after refresh token expires

Expected broad outcome:

- Type: bug
- Area: backend
- Priority: high
- Human review likely/recommended

Verify:

- JevFlow workflow starts on `issues.opened`
- Jev/TypeSafe request succeeds
- Structured decision result is produced
- Labels are applied
- Action summary is generated
- No API keys appear in logs

## Phase 2 — Security test

Create:

**Users can see another customer's invoice by changing the invoice ID**

Expected broad outcome:

- Type: bug
- Area: security
- Priority: critical
- Security-sensitive: yes
- Human review: yes

The workflow should fail safe if the Jev request fails.

## Phase 3 — Ambiguity/confidence test

Create:

**Sometimes the app feels slow**

Expected behavior:

- JevFlow should avoid over-confident automation when evidence is weak.
- Depending on your thresholds, `jev:review-suggested` or `jev:human-review` is desirable.

## Phase 4 — Batch test

Run:

```bash
npm run seed:labels
npm run seed:issues
```

Compare the resulting JevFlow decisions with:

`sample-issues/expected-results.json`

These expected values are a hand-authored test oracle, not guaranteed ground truth. The goal is to evaluate whether JevFlow behaves sensibly and whether confidence gating catches ambiguous cases.
