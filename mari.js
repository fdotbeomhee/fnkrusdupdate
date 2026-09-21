
document.addEventListener('DOMContentLoaded', () => {
    const timestamp = new Date().getTime();
    fetch(`mari.json?t=${timestamp}`)
        .then(res => res.json())
        .then(data => {
            const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
            renderTimeline(sortedData, 'mari');
        })
        .catch(err => console.error("Error loading Mari JSON:", err));
});
