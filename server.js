const http = require('node:http');
const marker = process.env.FORGE_DEPLOY_MARKER || "forge-cp7-railway-node-1777841491395";
const server = http.createServer((req, res) => {
  if (req.url === '/healthz') {
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify({ ok: true, forge_build: marker }));
    return;
  }
  res.setHeader('content-type', 'text/html; charset=utf-8');
  res.end(`<!doctype html><html><head><meta name="forge-build" content="${marker}"><title>Forge Railway Smoke</title></head><body><h1>Forge Railway Smoke</h1><p>${marker}</p></body></html>`);
});
const port = Number(process.env.PORT || 3000);
server.listen(port, '0.0.0.0', () => console.log(`Forge Railway smoke listening on ${port}`));
