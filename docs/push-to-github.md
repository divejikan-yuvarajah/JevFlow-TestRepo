# Push this test repository to GitHub

## Option A — GitHub CLI

```bash
git init
git add .
git commit -m "chore: initialize JevFlow test repository"
git branch -M main

gh auth login
gh repo create jevflow-test-repo --public --source=. --remote=origin --push
```

Then seed labels and issues:

```bash
npm run seed:labels
npm run seed:issues
```

## Option B — GitHub website

1. Create an empty repository named `jevflow-test-repo`.
2. Do not initialize it with a README.
3. Run:

```bash
git init
git add .
git commit -m "chore: initialize JevFlow test repository"
git branch -M main
git remote add origin YOUR_REPOSITORY_URL
git push -u origin main
```

Then:

```bash
gh auth login
npm run seed:labels
npm run seed:issues
```
