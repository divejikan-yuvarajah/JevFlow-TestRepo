import { readFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";

const issues = JSON.parse(
  await readFile(new URL("../sample-issues/issues.json", import.meta.url), "utf8")
);

function existingIssueTitles() {
  try {
    const output = execFileSync(
      "gh",
      ["issue", "list", "--state", "open", "--limit", "200", "--json", "title"],
      { encoding: "utf8" }
    );
    return new Set(JSON.parse(output).map((item) => item.title));
  } catch {
    console.error("Unable to read GitHub issues. Run `gh auth login` and make sure this folder is a GitHub repository.");
    process.exit(1);
  }
}

const existing = existingIssueTitles();

for (const issue of issues) {
  if (existing.has(issue.title)) {
    console.log(`Skipping existing issue: ${issue.title}`);
    continue;
  }

  execFileSync(
    "gh",
    ["issue", "create", "--title", issue.title, "--body", issue.body],
    { stdio: "inherit" }
  );
}
