document.getElementById('proxyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const url = document.getElementById('url').value;
    const iframe = document.getElementById('contentFrame');
    iframe.src = `/proxy?url=${encodeURIComponent(url)}`;
});
