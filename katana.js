
document.addEventListener('DOMContentLoaded', () => {
    const timestamp = new Date().getTime();
    fetch(`katana.json?t=${timestamp}`)
        .then(res => res.json())
        .then(data => {
            const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
            renderTimeline(sortedData, 'katana');
        })
        .catch(err => console.error("Error loading Katana JSON:", err));
});
