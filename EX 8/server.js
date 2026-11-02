// Science Fair Project Site - Native Node.js HTTP Server
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const publicDir = path.join(__dirname, 'public');

const projects = [
  { id: 1, title: 'Smart Irrigation System', category: 'Environment', description: 'A sensor-based system that waters plants when the soil becomes dry.', icon: '🌱' },
  { id: 2, title: 'Solar Energy Model', category: 'Energy', description: 'A simple model that demonstrates how sunlight can be converted into electricity.', icon: '☀️' },
  { id: 3, title: 'Water Purification', category: 'Chemistry', description: 'A demonstration of basic filtration methods used to clean water.', icon: '💧' },
  { id: 4, title: 'Volcano Eruption', category: 'Physics', description: 'A safe classroom demonstration of a chemical reaction that produces bubbles.', icon: '🌋' }
];

const server = http.createServer((req, res) => {
  try {
    const requestUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    const pathname = requestUrl.pathname;
    const method = req.method.toUpperCase();
    const isHeadRequest = method === 'HEAD';

    console.log(`[${new Date().toLocaleTimeString()}] ${method} ${pathname}`);

    // Home page
    if (pathname === '/' && (method === 'GET' || method === 'HEAD')) {
      return serveFile(path.join(publicDir, 'index.html'), 'text/html', res, isHeadRequest);
    }

    // Project data API (JSON)
    if (pathname === '/api/projects' && (method === 'GET' || method === 'HEAD')) {
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      return isHeadRequest ? res.end() : res.end(JSON.stringify({ success: true, count: projects.length, data: projects }));
    }

    // Static CSS and JavaScript files
    if (pathname === '/styles.css' && (method === 'GET' || method === 'HEAD')) {
      return serveFile(path.join(publicDir, 'styles.css'), 'text/css', res, isHeadRequest);
    }
    if (pathname === '/script.js' && (method === 'GET' || method === 'HEAD')) {
      return serveFile(path.join(publicDir, 'script.js'), 'text/javascript', res, isHeadRequest);
    }

    // 404 fallback
    res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
    return isHeadRequest ? res.end() : res.end(JSON.stringify({ success: false, message: 'Resource Not Found' }));
  } catch (error) {
    console.error(error);
    res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({ success: false, message: 'Internal Server Error' }));
  }
});

function serveFile(filePath, contentType, res, isHeadRequest = false) {
  fs.readFile(filePath, (error, content) => {
    if (error) {
      res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
      return res.end(JSON.stringify({ success: false, message: 'Unable to load page' }));
    }
    res.writeHead(200, { 'Content-Type': `${contentType}; charset=utf-8` });
    return isHeadRequest ? res.end() : res.end(content);
  });
}

server.listen(PORT, () => {
  console.log(`Science Fair website running at http://localhost:${PORT}`);
});
