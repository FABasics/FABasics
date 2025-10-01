// New function to handle the Google Search redirect
function searchGoogle(query) {
    const googleQuery = encodeURIComponent(`Financial Accounting ${query}`);
    // Opens a new tab with the Google search results
    window.open(`https://www.google.com/search?q=${googleQuery}`, '_blank');
    searchResults.classList.remove('active');
    searchInput.value = '';
}
function scrollToTopic(topicTitle) {
    // 1. Clear the search input
    searchInput.value = ''; 
    // 2. Hide the floating search results box
    searchResults.classList.remove('active');
    
    // 3. IMPORTANT: Reset the main topic grid filter
    topicItems.forEach(item => {
        item.style.display = 'block'; // Show all topics again
    });

    // ... (rest of the scrolling and pulse animation code) ...
}
