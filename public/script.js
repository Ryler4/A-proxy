document.getElementById('proxyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const url = document.getElementById('url').value;
    const iframe = document.getElementById ('contentFrame');
    iframe.src = `/proxy?url=${encodeURIComponent(url)}`;
});

document.getElementById('theme').addEventListener('change', function(event) {
    const selectedTheme = event.target.value;
    document.body.className = selectedTheme;
});
