# Sample Issue Catalog

Use these issues to validate JevFlow classification and confidence gating.

## 01. OAuth login returns 500 after refresh token expires

When the access token expires and the refresh request fails, POST /auth/login returns HTTP 500 instead of redirecting the user to sign in again. Reproduced in staging and production.

**Expected:** `{"type": "bug", "area": "backend", "priority": "high", "security_sensitive": false, "human_review": true}`

**Why included:** Strong backend bug; authentication context may increase review need.

## 02. Users can see another customer's invoice by changing the invoice ID

Logged-in customer A can request /api/invoices/184 even when invoice 184 belongs to customer B. The API returns the invoice instead of 403. This is reproducible in staging.

**Expected:** `{"type": "bug", "area": "security", "priority": "critical", "security_sensitive": true, "human_review": true}`

**Why included:** Clear authorization/security issue.

## 03. Add dark mode to the dashboard

Please add a dark theme to the web dashboard with a user preference toggle and persistence across sessions.

**Expected:** `{"type": "feature", "area": "frontend", "priority": "low", "security_sensitive": false, "human_review": false}`

**Why included:** Straightforward product feature.

## 04. Document how to run the project with Node.js 20

The README does not explain the required Node version or the commands for local setup. Please add installation, start, and test instructions.

**Expected:** `{"type": "documentation", "area": "general", "priority": "low", "security_sensitive": false, "human_review": false}`

**Why included:** Documentation-only issue.

## 05. Database CPU jumps to 95% during report generation

Generating the monthly analytics report causes the PostgreSQL CPU to remain above 90% for several minutes. Queries appear to scan the entire transactions table.

**Expected:** `{"type": "bug", "area": "database", "priority": "high", "security_sensitive": false, "human_review": true}`

**Why included:** Performance/database problem.

## 06. Deployments should run smoke tests before production rollout

Our GitHub Actions workflow deploys immediately after build. Add a smoke-test stage and prevent production deployment when health checks fail.

**Expected:** `{"type": "feature", "area": "devops", "priority": "high", "security_sensitive": false, "human_review": true}`

**Why included:** CI/CD reliability feature.

## 07. AI assistant gives confident answers when context is missing

When the RAG retriever returns zero useful documents, the assistant still produces a confident answer. We should detect insufficient context and request clarification or escalate.

**Expected:** `{"type": "bug", "area": "ai", "priority": "high", "security_sensitive": false, "human_review": true}`

**Why included:** AI reliability issue with uncertainty.

## 08. Can we switch the API from REST to GraphQL?

Would GraphQL simplify the frontend data fetching? I am not proposing an implementation yet; I want to understand the trade-offs for this project.

**Expected:** `{"type": "question", "area": "backend", "priority": "low", "security_sensitive": false, "human_review": true}`

**Why included:** Architectural question, not a feature request.

## 09. Upgrade GitHub Actions checkout and setup-node versions

The repository still uses older action versions in CI. Update the workflow dependencies and verify tests continue to pass.

**Expected:** `{"type": "maintenance", "area": "devops", "priority": "medium", "security_sensitive": false, "human_review": false}`

**Why included:** Routine maintenance.

## 10. Search field becomes unusable on mobile screens

At widths below 380px the search input overlaps the filter button, preventing users from typing. Seen on Chrome Android.

**Expected:** `{"type": "bug", "area": "frontend", "priority": "medium", "security_sensitive": false, "human_review": false}`

**Why included:** Responsive frontend bug.

## 11. Rotate leaked staging API key immediately

A staging third-party API key was accidentally pasted into yesterday's CI logs. The logs are visible to repository collaborators. We need to revoke and rotate the key and inspect recent usage.

**Expected:** `{"type": "maintenance", "area": "security", "priority": "critical", "security_sensitive": true, "human_review": true}`

**Why included:** High-risk security maintenance.

## 12. Add CSV export for monthly transactions

Finance users want to download the filtered monthly transaction table as a CSV file from the dashboard.

**Expected:** `{"type": "feature", "area": "frontend", "priority": "medium", "security_sensitive": false, "human_review": false}`

**Why included:** Normal user-facing feature.

## 13. Sometimes the app feels slow

A few pages feel slower than before, but I do not have exact timings or steps to reproduce. It might happen more often after leaving the app open for a while.

**Expected:** `{"type": "bug", "area": "general", "priority": "medium", "security_sensitive": false, "human_review": true}`

**Why included:** Deliberately ambiguous; useful for confidence-gate testing.

## 14. Should we cache AI classification responses?

Would caching repeated classification requests reduce latency and cost? What risks would we have if issue content changes?

**Expected:** `{"type": "question", "area": "ai", "priority": "low", "security_sensitive": false, "human_review": true}`

**Why included:** AI architecture/design question.

## 15. Production health endpoint exposes internal build metadata

GET /health currently returns the commit SHA, server hostname, environment name, and deployment timestamp publicly. Please review whether this information should be exposed.

**Expected:** `{"type": "bug", "area": "security", "priority": "high", "security_sensitive": true, "human_review": true}`

**Why included:** Security-sensitive information disclosure.
