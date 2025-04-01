document.getElementById('proxyForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const url = document.getElementById('url').value;
    const frame = document.getElementById('contentFrame');
    
    // Add proxy prefix
    const proxyUrl = `/proxy/${url}`;
    
    // Show loading state
    frame.srcdoc = `<html><body style="background:#000;color:#0f0;text-align:center;padding:50px">INITIALIZING CONNECTION...</body></html>`;
    
    // Load proxied content
    frame.src = proxyUrl;
});