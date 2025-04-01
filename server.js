


const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static('public'));

// Hacker-themed ASCII art middleware
app.use((req, res, next) => {
  console.log(`
    ██████╗ ██╗  ██╗ █████╗ ███╗   ██╗████████╗
    ██╔══██╗██║  ██║██╔══██╗████╗  ██║╚══██╔══╝
    ██████╔╝███████║███████║██╔██╗ ██║   ██║   
    ██╔═══╝ ██╔══██║██╔══██║██║╚██╗██║   ██║   
    ██║     ██║  ██║██║  ██║██║ ╚████║   ██║   
    ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝   
  `);
  next();
});

// Proxy middleware
app.use('/proxy', createProxyMiddleware({
  target: process.env.TARGET_URL || 'https://google.com',
  changeOrigin: true,
  pathRewrite: { '^/proxy': '' },
  onProxyRes: (proxyRes) => {
    proxyRes.headers['X-Phantom-Proxy'] = 'Active'; // Cool header
  }
}));

app.listen(PORT, () => {
  console.log(`[+] Phantom Proxy active on port ${PORT}`);
});