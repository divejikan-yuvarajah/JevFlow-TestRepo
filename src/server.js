import http from "node:http";

const port = Number(process.env.PORT || 3000);

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ status: "ok", service: "jevflow-test-repo" }));
    return;
  }

  if (req.url === "/api/profile") {
    // Deliberately simple endpoint used by sample issue scenarios.
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ id: 42, name: "Demo User", role: "tester" }));
    return;
  }

  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify({
    name: "JevFlow Test Repository",
    message: "Use this repository to test GitHub issue triage automation."
  }));
});

server.listen(port, () => {
  console.log(`JevFlow test server running at http://localhost:${port}`);
});
