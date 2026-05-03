import { mkdirSync, writeFileSync } from 'node:fs';
mkdirSync('dist', { recursive: true });
writeFileSync('dist/index.html', "<!doctype html>\n<html>\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"forge-build\" content=\"forge-cp7-vercel-failing-build-1777841453990\">\n<title>Forge Vercel Smoke</title>\n</head>\n<body>\n<main>\n<h1>Forge Vercel Smoke</h1>\n<p id=\"forge-marker\">forge-cp7-vercel-failing-build-1777841453990</p>\n</main>\n</body>\n</html>\n");
