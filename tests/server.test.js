import test from "node:test";
import assert from "node:assert/strict";

test("basic arithmetic sanity test", () => {
  assert.equal(2 + 2, 4);
});

test("sample repository metadata is stable", () => {
  const metadata = {
    project: "jevflow-test-repo",
    purpose: "triage-testing"
  };

  assert.equal(metadata.project, "jevflow-test-repo");
  assert.equal(metadata.purpose, "triage-testing");
});
