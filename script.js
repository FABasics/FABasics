// New function to handle the Google Search redirect
function searchGoogle(query) {
    const googleQuery = encodeURIComponent(`Financial Accounting ${query}`);
    // Opens a new tab with the Google search results
    window.open(`https://www.google.com/search?q=${googleQuery}`, '_blank');
    searchResults.classList.remove('active');
    searchInput.value = '';
}
