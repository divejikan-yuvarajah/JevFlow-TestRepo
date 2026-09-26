import { readFile } from "node:fs/promises";

const issues = JSON.parse(
  await readFile(new URL("../sample-issues/issues.json", import.meta.url), "utf8")
);

for (const issue of issues) {
  console.log(`${String(issue.id).padStart(2, "0")}. ${issue.title}`);
}
