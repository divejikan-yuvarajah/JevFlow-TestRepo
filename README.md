# JevFlow Test Repository

A disposable GitHub repository designed to test **JevFlow — Confidence-Aware GitHub Issue Triage powered by Jev**.

This repository intentionally contains a very small Node.js application plus realistic GitHub issue scenarios. Its purpose is not to be a production application; it is a safe target repository where JevFlow can classify, prioritize, route, and escalate issues.

## What you can test

JevFlow should be able to infer:

- Issue type: `bug`, `feature`, `documentation`, `question`, `maintenance`
- Engineering area: `frontend`, `backend`, `database`, `devops`, `ai`, `security`, `general`
- Priority: `critical`, `high`, `medium`, `low`
- Security sensitivity
- Whether human review is needed
- Confidence-based automation policy

## Repository contents

```text
.github/
  ISSUE_TEMPLATE/
  workflows/
src/
tests/
sample-issues/
scripts/
docs/
```

## Quick start

```bash
npm install
npm test
npm start
```

The sample API will run on port `3000`.

## Create sample GitHub issues

After you push this repository to GitHub and install the GitHub CLI:

```bash
gh auth login
npm run seed:issues
```

This creates the predefined issues from `sample-issues/issues.json`.

> The seeding script checks for matching open issue titles first, so you can run it again without creating obvious duplicates.

## Suggested JevFlow labels

Use these labels in your JevFlow automation:

### Type
- `type:bug`
- `type:feature`
- `type:documentation`
- `type:question`
- `type:maintenance`

### Priority
- `priority:critical`
- `priority:high`
- `priority:medium`
- `priority:low`

### Area
- `area:frontend`
- `area:backend`
- `area:database`
- `area:devops`
- `area:ai`
- `area:security`
- `area:general`

### JevFlow
- `jev:auto-triaged`
- `jev:review-suggested`
- `jev:human-review`
- `security-review`

## Recommended testing order

1. Push this repository to GitHub.
2. Create the JevFlow labels.
3. Add your `TYPESAFE_API_KEY` secret to the repository running JevFlow.
4. Install/copy the JevFlow workflow.
5. Create one issue manually.
6. Confirm JevFlow adds the expected labels.
7. Run `npm run seed:issues`.
8. Compare JevFlow decisions against `sample-issues/expected-results.json`.

## Safety

This repository contains no real credentials or production data. Do not commit API keys. Keep Jev/TypeSafe secrets in GitHub Actions secrets.

## License

MIT
