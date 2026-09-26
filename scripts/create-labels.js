import { readFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";

const labels = JSON.parse(
  await readFile(new URL("../.github/labels.json", import.meta.url), "utf8")
);

for (const label of labels) {
  try {
    execFileSync("gh", [
      "label", "create", label.name,
      "--color", label.color,
      "--description", label.description,
      "--force"
    ], { stdio: "inherit" });
  } catch (error) {
    console.error(`Failed to create/update label: ${label.name}`);
    process.exitCode = 1;
  }
}
