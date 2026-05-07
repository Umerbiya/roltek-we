const fs = require('fs');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
// Plesk's Phusion Passenger sets process.env.PORT dynamically.
// We fallback to 3000 for local development.
const port = process.env.PORT || 3000;

if (dev) {
  // Development mode: Boot the standard Next.js development server
  const { createServer } = require('http');
  const { parse } = require('url');
  const next = require('next');
  
  const app = next({ dev: true, port });
  const handle = app.getRequestHandler();
  
  app.prepare().then(() => {
    createServer((req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    }).listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port} in Development Mode`);
    });
  });
} else {
  // Production mode: Plesk's Passenger is starting this file.
  // In a standalone build, Next.js generates its own optimized server.js inside .next/standalone.
  // We simply pass the dynamic PORT and require the standalone server.
  // Note: The standalone server internally changes the working directory (process.chdir), 
  // so static assets must be copied into the standalone folder during build.
  
  process.env.PORT = port;
  
  const standaloneServerPath = path.join(__dirname, '.next', 'standalone', 'server.js');
  
  if (fs.existsSync(standaloneServerPath)) {
    require(standaloneServerPath);
  } else {
    // Fallback if the standalone server doesn't exist (e.g., failed build or missing folder)
    console.error('ERROR: Standalone server not found at', standaloneServerPath);
    console.error('Please ensure you have run "npm run build" and output: "standalone" is in your next config.');
    
    // Attempting emergency fallback using standard next server if full node_modules is present
    try {
      const { createServer } = require('http');
      const { parse } = require('url');
      const next = require('next');
      
      console.log('Attempting to start standard Next.js production server as fallback...');
      const app = next({ dev: false, port });
      const handle = app.getRequestHandler();
      
      app.prepare().then(() => {
        createServer((req, res) => {
          const parsedUrl = parse(req.url, true);
          handle(req, res, parsedUrl);
        }).listen(port, (err) => {
          if (err) throw err;
          console.log(`> Ready on http://localhost:${port} using emergency standard mode`);
        });
      });
    } catch (e) {
      process.exit(1);
    }
  }
}
