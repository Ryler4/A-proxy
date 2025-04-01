const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static('public'));

// Proxy middleware
app.use('/proxy', createProxyMiddleware({
  changeOrigin: true,
  pathRewrite: (path, req) => {
    const targetUrl = req.query.url;
    if (!targetUrl) {
      return res.status(400).send('No target URL provided');
    }
    return targetUrl;
  },
  onProxyReq: (proxyReq, req, res) => {
    console.log(`Proxying request to: ${req.query.url}`);
  },
  onError: (err, req, res) => {
    console.error(err);
    res.status(500).send('Proxy error');
  }
}));

app.listen(PORT, () => {
  console.log(`[+] Proxy server running on port ${PORT}`);
});
