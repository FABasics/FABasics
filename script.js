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
} else {
        // CASE B: No Local Topic Found (Offer to Google Search)
        searchResults.innerHTML = `
            <div class="no-results">
                <p>Couldn't find an exact match in our guide.</p>
                <button class="google-search-button" onclick="searchGoogle('${searchTerm}')">
                    🔍 Ask AI: Search for "${searchTerm}"
                </button>
                const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const topicItems = document.querySelectorAll('.topic-item');

// Full data source for searching (MUST match your HTML data-keywords)
const topics = [
    {
        title: "Accounting Basics",
        description: "Learn fundamental accounting principles, concepts, and the accounting equation (Assets = Liabilities + Equity)",
        keywords: "accounting basics fundamentals principles concepts introduction equation"
    },
    {
        title: "Double-Entry Bookkeeping",
        description: "Understand the core accounting system where every transaction affects at least two accounts",
        keywords: "double entry bookkeeping debit credit system dual aspect"
    },
    {
        title: "Journal Entries",
        description: "Learn how to record business transactions with proper debits and credits in chronological order",
        keywords: "journal entries transactions recording debits credits posting"
    },
    {
        title: "General Ledger",
        description: "Master the main accounting record that contains all accounts and their balances",
        keywords: "general ledger books accounts t-accounts posting ledger accounts"
    },
    {
        title: "Trial Balance",
        description: "Verify accounting accuracy by ensuring total debits equal total credits",
        keywords: "trial balance verification balancing checking accuracy errors"
    },
    {
        title: "Financial Statements",
        description: "Create and interpret Balance Sheets, Income Statements, and Cash Flow Statements",
        keywords: "financial statements balance sheet income statement cash flow profit loss P&L"
    },
    {
        title: "Accounts Payable",
        description: "Manage money owed to suppliers and creditors, track payment schedules",
        keywords: "accounts payable creditors liabilities owe payment vendors suppliers"
    },
    {
        title: "Accounts Receivable",
        description: "Track money owed by customers, manage collections and credit policies",
        keywords: "accounts receivable debtors assets collection invoice customers AR"
    },
    {
        title: "Depreciation",
        description: "Calculate asset value reduction over time using straight-line, declining balance methods",
        keywords: "depreciation asset valuation amortization wear tear fixed assets"
    },
    {
        title: "Inventory Accounting",
        description: "Learn FIFO, LIFO, and weighted average methods for inventory valuation",
        keywords: "inventory accounting fifo lifo weighted average stock merchandise goods"
    },
    {
        title: "Bank Reconciliation",
        description: "Match your accounting records with bank statements to identify discrepancies",
        keywords: "bank reconciliation matching statements verification cash checking"
    },
    {
        title: "Financial Analysis",
        description: "Analyze company performance using liquidity, profitability, and efficiency ratios",
        keywords: "financial analysis ratios metrics performance liquidity profitability solvency"
    }
];

// --- CORE FUNCTIONS ---

function highlightText(text, searchTerm) {
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<strong>$1</strong>');
}

function searchGoogle(query) {
    const googleQuery = encodeURIComponent(`Financial Accounting ${query}`); 
    // Opens a new tab with the Google search results, providing the "AI Search" feature
    window.open(`https://www.google.com/search?q=${googleQuery}`, '_blank');
    
    // Clear the search UI
    searchResults.classList.remove('active');
    searchInput.value = '';
}

function scrollToTopic(topicTitle) {
    // 1. Clear the floating search results box and input
    searchResults.classList.remove('active');
    searchInput.value = '';
    
    // 2. Fix: Reset the main topic grid filter to show all cards again
    topicItems.forEach(item => {
        item.style.display = 'block'; 
    });

    // 3. Scroll to the main topics section
    const topicSection = document.getElementById('topics');
    topicSection.scrollIntoView({ behavior: 'smooth' });
    
    // 4. Animate the matching card
    setTimeout(() => {
        topicItems.forEach(item => {
            if (item.querySelector('h4').textContent === topicTitle) {
                item.style.animation = 'pulse 1s';
                setTimeout(() => item.style.animation = '', 1000); 
            }
        });
    }, 800); 
}

// --- MAIN EVENT LISTENER ---

searchInput.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase().trim();
    
    // 1. Logic to show/hide topics in the main grid section
    topicItems.forEach(item => {
        const itemKeywords = item.getAttribute('data-keywords').toLowerCase();
        if (itemKeywords.includes(searchTerm) || searchTerm.length === 0) {
            item.style.display = 'block'; 
        } else {
            item.style.display = 'none'; 
        }
    });

    // Handle the floating search results box 
    if (searchTerm.length === 0) {
        searchResults.classList.remove('active');
        return;
    }

    const filteredTopics = topics.filter(topic => {
        return topic.title.toLowerCase().includes(searchTerm) ||
               topic.description.toLowerCase().includes(searchTerm) ||
               topic.keywords.toLowerCase().includes(searchTerm);
    });

    if (filteredTopics.length > 0) {
        // CASE A: Local Topic Found (Show local suggestions)
        searchResults.innerHTML = filteredTopics.map(topic => `
            <div class="search-result-item" onclick="scrollToTopic('${topic.title}')">
                <div class="result-title">${highlightText(topic.title, searchTerm)}</div>
                <div class="result-description">${highlightText(topic.description, searchTerm)}</div>
            </div>
        `).join('');
        searchResults.classList.add('active');
    } else {
        // CASE B: No Local Topic Found (Offer to Google Search)
        searchResults.innerHTML = `
            <div class="no-results">
                <p>Couldn't find an exact match in our guide.</p>
                <button class="google-search-button" onclick="searchGoogle('${searchTerm}')">
                    🔍 Ask AI: Search for "${searchTerm}"
                </button>
            </div>
        `;
        searchResults.classList.add('active');
    }
});

// Function to close search box when clicking outside
document.addEventListener('click', function(e) {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.classList.remove('active');
    }
});

// The pulse animation style (keeps original functionality)
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4); }
    }
`;
document.head.appendChild(style);
            </div>
        `;
        searchResults.classList.add('active');
    }
});
<button class="google-search-button" onclick="searchGoogle('${searchTerm}')">
    🔍 Ask AI: Search for "${searchTerm}"
</button>
