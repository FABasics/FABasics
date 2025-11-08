// 1. DATA STORAGE - All Terms Properly Structured
const allTerms = [
    // Financial Statements (15 terms)
    { term: "Balance Sheet", category: "Financial Statements", definition: "A financial statement that reports a company's assets, liabilities, and shareholders' equity at a specific point in time.", example: "A company with $500K in assets and $200K in liabilities has $300K in equity." },
    { term: "Income Statement", category: "Financial Statements", definition: "A financial statement that shows a company's revenues, expenses, and resulting net income or loss over a period of time.", example: "Revenue of $1M minus expenses of $700K equals a net income of $300K." },
    { term: "Cash Flow Statement", category: "Financial Statements", definition: "A financial statement that summarizes the amount of cash and cash equivalents entering and leaving a company, grouped by operations, investing, and financing activities.", example: "The statement shows $100K from operations, -$50K from investing, and $20K from financing." },
    { term: "Retained Earnings", category: "Financial Statements", definition: "The cumulative net income of a company since its inception, less total dividends paid out to shareholders.", example: "Starting retained earnings of $200K plus $50K net income minus $10K dividends results in $240K retained earnings." },
    { term: "Trial Balance", category: "Financial Statements", definition: "A bookkeeping worksheet in which the balances of all ledgers are compiled into debit and credit columns to ensure total debits equal total credits.", example: "The total of all debit accounts is $500K, which exactly equals the total of all credit accounts." },
    { term: "Pro Forma", category: "Financial Statements", definition: "Projected financial statements that forecast a company's future performance under various assumptions.", example: "Management provided a Pro Forma for 2025, forecasting revenue at $2M based on a projected 20% growth rate." },
    { term: "Consolidated Statements", category: "Financial Statements", definition: "Financial statements that combine the financial results of a parent company and all of its subsidiaries into a single set of reports.", example: "Apple's Consolidated Statements include the performance of all its global divisions and subsidiaries." },
    { term: "Non-GAAP Measures", category: "Financial Statements", definition: "Financial metrics that are not prepared in accordance with Generally Accepted Accounting Principles (GAAP), often used by management to highlight operational performance.", example: "The press release focused on adjusted EBITDA, a Non-GAAP measure, to show core profitability." },
    { term: "Footnotes", category: "Financial Statements", definition: "Detailed notes accompanying a financial statement that provide further explanations, accounting policies, and breakdown of complex items.", example: "The Footnotes revealed a detailed breakdown of the goodwill impairment charge." },
    { term: "Fiscal Year", category: "Financial Statements", definition: "A one-year period that a company uses for financial reporting and budgeting, which may or may not coincide with the calendar year.", example: "Microsoft's Fiscal Year ends on June 30th, not December 31st." },
    { term: "Interim Financials", category: "Financial Statements", definition: "Financial statements covering a period shorter than a full fiscal year, such as quarterly or semi-annually.", example: "The company releases its Interim Financials (quarterly reports) to investors." },
    { term: "Statement of Equity", category: "Financial Statements", definition: "A financial statement that details the changes in the equity section of the balance sheet over a period of time.", example: "The Statement of Equity showed the impact of a new stock issuance and share repurchases." },
    { term: "Materiality", category: "Financial Statements", definition: "The concept that an omission or misstatement of an item in a financial report is material if it could influence the economic decision of users.", example: "A $100 error is immaterial to a company with $1 billion in revenue." },
    { term: "Going Concern", category: "Financial Statements", definition: "The assumption that a company will continue to operate indefinitely and not be forced to liquidate its assets.", example: "The auditor noted a risk to the company's Going Concern status due to significant operating losses." },
    { term: "Accrual Accounting", category: "Financial Statements", definition: "An accounting method where revenue or expenses are recorded when a transaction occurs rather than when payment is received or made.", example: "The company recorded sales revenue in December, even though the cash was collected in January." },

    // Core Accounting Concepts (20 terms)
    { term: "Debit", category: "Core Accounting", definition: "An entry on the left side of a ledger account; increases asset and expense accounts, decreases liability, equity, and revenue accounts.", example: "The company Debited the Cash account when receiving payment from a customer." },
    { term: "Credit", category: "Core Accounting", definition: "An entry on the right side of a ledger account; increases liability, equity, and revenue accounts, decreases asset and expense accounts.", example: "The company Credited the Sales Revenue account upon making a sale." },
    { term: "General Ledger", category: "Core Accounting", definition: "A complete record of all the financial transactions of a company, containing all the accounts needed to prepare financial statements.", example: "The accountant examined the General Ledger to trace a large expense item." },
    { term: "Asset", category: "Core Accounting", definition: "A resource controlled by the company as a result of past events and from which future economic benefits are expected to flow.", example: "Cash, Accounts Receivable, and Equipment are common Assets." },
    { term: "Liability", category: "Core Accounting", definition: "A present obligation of the company arising from past events, the settlement of which is expected to result in an outflow of resources.", example: "Accounts Payable, Loans Payable, and Unearned Revenue are Liabilities." },
    { term: "Equity", category: "Core Accounting", definition: "The residual interest in the assets of the company after deducting all its liabilities (Assets - Liabilities).", example: "Shareholders' Equity represents the owners' stake in the company." },
    { term: "Depreciation", category: "Core Accounting", definition: "The systematic reduction in the value of a tangible asset over its useful life, recorded as an expense on the income statement.", example: "A machine purchased for $100K with a 10-year life depreciates by $10K per year." },
    { term: "Amortization", category: "Core Accounting", definition: "The systematic reduction in the value of an intangible asset (like a patent or goodwill) over its useful life.", example: "A $50K patent with a 5-year life is Amortized by $10K per year." },
    { term: "Chart of Accounts", category: "Core Accounting", definition: "A list of all financial accounts used in a company's general ledger, typically organized by category.", example: "The company updated its Chart of Accounts to include a new 'Cloud Subscription Expense' line." },
    { term: "Journal Entry", category: "Core Accounting", definition: "The first step in the accounting cycle, where a business transaction is formally recorded, showing at least one debit and one credit.", example: "A Journal Entry was made to debit cash and credit sales revenue for a transaction." },
    { term: "Unearned Revenue", category: "Core Accounting", definition: "A liability account that represents money received from a customer for goods or services that have not yet been delivered or rendered.", example: "A software company received $1,200 for a 1-year subscription upfront, recording it as Unearned Revenue." },
    { term: "Accrued Expenses", category: "Core Accounting", definition: "Expenses that have been incurred but have not yet been paid or recorded in the books.", example: "Salaries for the last week of December are recorded as Accrued Expenses on the year-end Balance Sheet." },
    { term: "Capital Expenditure", category: "Core Accounting", definition: "Funds used by a company to acquire, upgrade, and maintain physical assets such as property or equipment.", example: "The purchase of a new factory building for $5 million is a CapEx." },
    { term: "Operating Expense", category: "Core Accounting", definition: "Expenditures a business incurs to run its day-to-day operations, such as rent, utilities, and salaries.", example: "Monthly rent of $5,000 for office space is an OpEx." },
    { term: "Double-Entry Bookkeeping", category: "Core Accounting", definition: "An accounting system where every transaction is recorded in at least two accounts, with total debits always equaling total credits.", example: "Selling a product requires a debit to Cash and a credit to Sales Revenue." },
    { term: "Matching Principle", category: "Core Accounting", definition: "An accounting principle that requires expenses to be recorded in the same period as the revenue they helped generate.", example: "The cost of goods sold is recorded in the same month as the revenue from those sales." },
    { term: "Conservatism Principle", category: "Core Accounting", definition: "A principle requiring that when faced with uncertainty, judgment should tend toward understating assets and revenues.", example: "Inventory is valued at the lower of cost or market value." },
    { term: "Revenue Recognition", category: "Core Accounting", definition: "The specific criteria that must be met for revenue to be recorded in a company's financial statements.", example: "A company recognizes subscription revenue monthly, not when the annual cash payment is received." },
    { term: "Book Value", category: "Core Accounting", definition: "The value of an asset as it appears on the balance sheet, calculated as the asset's original cost minus accumulated depreciation.", example: "A machine bought for $100K with $30K in accumulated depreciation has a Book Value of $70K." },
    { term: "Impairment", category: "Core Accounting", definition: "A permanent reduction in the value of a company's asset, typically a non-cash charge that reduces the asset's Book Value.", example: "The company recorded an Impairment charge on its goodwill after a major acquisition failed to perform." },

    // Financial Metrics (25 terms)
    { term: "EBITDA", category: "Financial Metrics", definition: "Earnings Before Interest, Taxes, Depreciation, and Amortization—a measure of operating performance.", example: "A company with $1M in operating income, $50K depreciation, and $10K amortization has an EBITDA of $1.06M." },
    { term: "Net Present Value", category: "Financial Metrics", definition: "The difference between the present value of cash inflows and outflows over time, used in capital budgeting.", example: "A project with a positive NPV is generally accepted, as it adds value to the company." },
    { term: "Internal Rate of Return", category: "Financial Metrics", definition: "The discount rate at which the NPV of all cash flows from a project equals zero.", example: "If a project's IRR is 15% and the company's cost of capital is 10%, the project is likely pursued." },
    { term: "Return on Equity", category: "Financial Metrics", definition: "A profitability ratio that measures net income earned for each dollar invested by shareholders.", example: "An ROE of 15% means the company generates 15 cents of profit for every dollar of equity." },
    { term: "Debt-to-Equity Ratio", category: "Financial Metrics", definition: "A leverage ratio that measures the proportion of financing from debt versus equity.", example: "A D/E ratio of 2.0 means the company uses twice as much debt as equity financing." },
    { term: "Working Capital", category: "Financial Metrics", definition: "A measure of liquidity, calculated as Current Assets minus Current Liabilities.", example: "Positive Working Capital indicates the company has enough short-term assets to cover short-term debts." },
    { term: "Current Ratio", category: "Financial Metrics", definition: "A liquidity ratio that measures ability to pay short-term obligations.", example: "A Current Ratio of 2.5 means $2.50 in current assets for every $1.00 in current liabilities." },
    { term: "Quick Ratio", category: "Financial Metrics", definition: "A stringent liquidity ratio that excludes inventory from current assets.", example: "The Quick Ratio of 1.2 is preferred when evaluating a retailer with large inventory." },
    { term: "Gross Margin", category: "Financial Metrics", definition: "The percentage of revenue remaining after subtracting Cost of Goods Sold.", example: "A Gross Margin of 40% means 40 cents of profit on every dollar of sales before OpEx." },
    { term: "Operating Margin", category: "Financial Metrics", definition: "The percentage of revenue remaining after subtracting all operating expenses.", example: "An Operating Margin of 20% indicates good efficiency in core operations." },
    { term: "Net Margin", category: "Financial Metrics", definition: "The percentage of revenue remaining after all expenses, including interest and taxes.", example: "A 10% Net Margin is the final profit percentage the company keeps." },
    { term: "Return on Assets", category: "Financial Metrics", definition: "A profitability ratio indicating how profitable a company is relative to its total assets.", example: "An ROA of 5% means the company generates 5 cents of profit for every dollar of assets." },
    { term: "P/E Ratio", category: "Financial Metrics", definition: "A valuation ratio of current share price compared to per-share earnings.", example: "A P/E Ratio of 20 means investors pay $20 for every $1 of current earnings." },
    { term: "CAGR", category: "Financial Metrics", definition: "Compound Annual Growth Rate - the mean annual growth rate over a specified period.", example: "The company's revenue had a CAGR of 8% over the last five years." },
    { term: "Discount Rate", category: "Financial Metrics", definition: "The interest rate used to determine present value of future cash flows.", example: "A higher Discount Rate is used for riskier investments, resulting in lower NPV." },
    { term: "Free Cash Flow", category: "Financial Metrics", definition: "Cash generated after accounting for outflows to support operations and maintain capital assets.", example: "FCF is money available to pay dividends, pay down debt, or pursue acquisitions." },
    { term: "Days Sales Outstanding", category: "Financial Metrics", definition: "Average number of days to collect payment after a sale.", example: "A low DSO of 30 days is better than 90 days, indicating efficient collection." },
    { term: "Inventory Turnover", category: "Financial Metrics", definition: "Measure of how many times inventory is sold and replaced over a period.", example: "An Inventory Turnover of 10 means the company sells its entire inventory 10 times yearly." },
    { term: "Total Shareholder Return", category: "Financial Metrics", definition: "Total return to shareholders, including capital gains and dividends.", example: "TSR of 18% comprised of 15% price increase and 3% dividend yield." },
    { term: "Economic Value Added", category: "Financial Metrics", definition: "Financial performance measure based on residual wealth after subtracting cost of capital.", example: "If a company's EVA is positive, it is creating value for shareholders." },
    { term: "Sunk Cost", category: "Financial Metrics", definition: "A cost already incurred that cannot be recovered; should not influence future decisions.", example: "$50K spent on R&D last year is a Sunk Cost when deciding whether to launch the product." },
    { term: "Break-Even Point", category: "Financial Metrics", definition: "The sales level where total revenues equal total costs, resulting in zero profit.", example: "The company needs to sell 10,000 units to reach its Break-Even Point." },
    { term: "Leverage", category: "Financial Metrics", definition: "Use of borrowed capital to increase potential return of an investment.", example: "High financial Leverage increases both potential returns and financial risk." },
    { term: "Cost of Goods Sold", category: "Financial Metrics", definition: "Direct costs attributable to production of goods or services sold.", example: "COGS includes raw materials and factory labor to build the product." },
    { term: "Capital Budgeting", category: "Financial Metrics", definition: "Process to determine which proposed fixed asset purchases or projects to accept.", example: "The finance team performed Capital Budgeting to select the best expansion project." },

    // Taxation (12 terms)
    { term: "Income Tax", category: "Taxation", definition: "Tax on individual or corporate income.", example: "Company earned $1M profit, pays $210K at 21% rate." },
    { term: "Corporate Tax", category: "Taxation", definition: "Tax levied on company profits.", example: "US federal corporate tax rate is 21%." },
    { term: "Tax Deduction", category: "Taxation", definition: "Expense that reduces taxable income.", example: "$10K in donations reduces taxable income." },
    { term: "Tax Credit", category: "Taxation", definition: "Direct reduction of tax owed.", example: "$5K R&D credit reduces tax bill by $5K." },
    { term: "Sales Tax", category: "Taxation", definition: "Tax imposed on sale of goods and services.", example: "California charges 7.25% sales tax." },
    { term: "Taxable Income", category: "Taxation", definition: "Income subject to taxation after deductions.", example: "$500K revenue minus $300K deductions equals $200K." },
    { term: "Capital Gains Tax", category: "Taxation", definition: "Tax on profit from asset sales.", example: "Bought stock $10K, sold $15K, tax on $5K gain." },
    { term: "Deferred Tax", category: "Taxation", definition: "Tax liability delayed to future periods.", example: "Accelerated depreciation creates deferred tax." },
    { term: "Effective Tax Rate", category: "Taxation", definition: "Actual tax paid divided by taxable income.", example: "Paid $180K on $1M income equals 18% effective." },
    { term: "Tax Loss Carryforward", category: "Taxation", definition: "Net losses used to offset future income.", example: "$100K loss this year reduces next year taxes." },
    { term: "Withholding Tax", category: "Taxation", definition: "Tax withheld from payments at source.", example: "Employer withholds federal tax from paychecks." },
    { term: "Payroll Tax", category: "Taxation", definition: "Taxes on wages and salaries.", example: "Social Security 6.2% plus Medicare 1.45%." },

    // Investment (15 terms)
    { term: "Angel Investor", category: "Investment", definition: "Individual investing own money in startups.", example: "Wealthy entrepreneur invests $50K for 10% equity." },
    { term: "Venture Capital", category: "Investment", definition: "Financing for high-growth startups.", example: "VC firm invests $5M for 30% ownership." },
    { term: "Seed Funding", category: "Investment", definition: "Initial capital to start business.", example: "$100K seed round to build MVP product." },
    { term: "IPO", category: "Investment", definition: "Initial Public Offering on stock exchange.", example: "Company goes public, shares trade on NASDAQ." },
    { term: "Unicorn", category: "Investment", definition: "Startup valued over $1 billion.", example: "Uber, Airbnb became unicorns before going public." },
    { term: "Series A B C", category: "Investment", definition: "Subsequent funding rounds.", example: "Series A $2M, Series B $10M, Series C $30M." },
    { term: "Private Equity", category: "Investment", definition: "Investment in private companies.", example: "PE firm buys mature company for $100M." },
    { term: "Bootstrapping", category: "Investment", definition: "Self-funding without external investors.", example: "Use personal savings and revenue to grow." },
    { term: "Pitch Deck", category: "Investment", definition: "Presentation to potential investors.", example: "10-15 slides: problem, solution, market, team, financials." },
    { term: "MVP", category: "Investment", definition: "Minimum Viable Product with core features.", example: "Simple app version to test market demand." },
    { term: "Traction", category: "Investment", definition: "Evidence of growth and customer demand.", example: "10K users, $50K monthly revenue growing 20%." },
    { term: "Acquisition", category: "Investment", definition: "Purchasing another company.", example: "Facebook acquired Instagram for $1 billion." },
    { term: "Merger", category: "Investment", definition: "Combining two companies into one.", example: "Disney merged with 21st Century Fox." },
    { term: "Convertible Note", category: "Investment", definition: "Loan converting to equity later.", example: "$100K loan converts at next funding round." },
    { term: "Accredited Investor", category: "Investment", definition: "Meets income or net worth requirements.", example: "$1M net worth or $200K annual income." },

    // Shark Tank (18 terms)
    { term: "Valuation", category: "Shark Tank", definition: "Estimated worth of company.", example: "Asking $100K for 10% values company at $1M." },
    { term: "Equity Stake", category: "Shark Tank", definition: "Ownership percentage in company.", example: "Giving 20% equity means investor owns one-fifth." },
    { term: "Royalty Deal", category: "Shark Tank", definition: "Payment per unit sold until investment returned.", example: "$2 per unit sold until $200K repaid." },
    { term: "Due Diligence", category: "Shark Tank", definition: "Investigation before investment.", example: "Verify sales, check patents, review contracts." },
    { term: "Term Sheet", category: "Shark Tank", definition: "Document outlining investment terms.", example: "Amount, equity, board seats, exit rights." },
    { term: "Pre-Money Valuation", category: "Shark Tank", definition: "Company value before investment.", example: "$1M valuation before raising $200K." },
    { term: "Post-Money Valuation", category: "Shark Tank", definition: "Company value after investment.", example: "$1M pre plus $200K investment equals $1.2M post." },
    { term: "Dilution", category: "Shark Tank", definition: "Reduction in ownership percentage.", example: "Own 100%, give 20% to investor, now own 80%." },
    { term: "Revenue Multiple", category: "Shark Tank", definition: "Valuation as multiple of revenue.", example: "$500K revenue valued at 4x equals $2M." },
    { term: "Exit Strategy", category: "Shark Tank", definition: "Plan to sell investment for profit.", example: "Acquisition by larger company or IPO." },
    { term: "Cap Table", category: "Shark Tank", definition: "Spreadsheet showing ownership stakes.", example: "Founder 70%, investor 20%, employees 10%." },
    { term: "Burn Rate Analysis", category: "Shark Tank", definition: "Evaluating monthly cash use.", example: "Spending $50K monthly, need to reduce." },
    { term: "Unit Economics", category: "Shark Tank", definition: "Profit per customer or sale.", example: "Customer worth $100, costs $30 to acquire." },
    { term: "Customer Acquisition Cost", category: "Shark Tank", definition: "Cost to get customer.", example: "Spend $10K marketing, get 100 customers equals $100 CAC." },
    { term: "Lifetime Value", category: "Shark Tank", definition: "Total customer revenue.", example: "Customer spends $500 over lifetime." },
    { term: "Path to Profitability", category: "Shark Tank", definition: "Plan to become profitable.", example: "Hit profitability at 1000 customers in 18 months." },
    { term: "Market Size", category: "Shark Tank", definition: "Total addressable market value.", example: "Pet food market $50B annually in US." },
    { term: "Scalability", category: "Shark Tank", definition: "Ability to grow without proportional costs.", example: "Software scales, physical products harder to scale." }
];

// 2. STATE AND INITIALIZATION
let currentCategory = 'All';

// 3. MAIN RENDER FUNCTION
function renderTerms() {
    const searchTerm = document.getElementById('search-input') ? document.getElementById('search-input').value.toLowerCase() : '';
    let filteredTerms = allTerms;

    // Filter by category
    if (currentCategory && currentCategory !== 'All') {
        filteredTerms = filteredTerms.filter(term => term.category === currentCategory);
    }

    // Filter by search term
    if (searchTerm) {
        filteredTerms = filteredTerms.filter(term =>
            term.term.toLowerCase().includes(searchTerm) ||
            term.definition.toLowerCase().includes(searchTerm) ||
            (term.example && term.example.toLowerCase().includes(searchTerm))
        );
    }

    // Generate HTML
    const termsHtml = filteredTerms.map(term => {
        return `
            <div class="term-card" data-term="${term.term}">
                <h3 class="term-title">${term.term}</h3>
                <p class="term-brief">${term.definition}</p> 
                <button class="view-details-btn">View Details</button>
            </div>
        `;
    }).join('');

    const termsOutput = document.getElementById('terms-output');
    if (termsOutput) {
        if (filteredTerms.length === 0) {
            termsOutput.innerHTML = `
                <div class="no-results">
                    <h2>No Terms Found</h2>
                    <p>Try broadening your search or selecting a different category.</p>
                </div>
            `;
        } else {
            termsOutput.innerHTML = `<div class="terms-grid">${termsHtml}</div>`;
        }
    }
}

// 4. CATEGORY GENERATION
function renderCategories() {
    const categories = ['All', ...new Set(allTerms.map(term => term.category))];
    const categoryButtons = categories.map(category => {
        const isActive = category === currentCategory ? 'active' : '';
        return `
            <li class="category-item">
                <button class="${isActive}" data-category="${category}">
                    ${category}
                </button>
            </li>
        `;
    }).join('');
    
    const categoryList = document.getElementById('category-list');
    if (categoryList) {
        categoryList.innerHTML = categoryButtons;
    }
}

// 5. EVENT LISTENERS
function attachEventListeners() {
    const categoryList = document.getElementById('category-list');
    const searchInput = document.getElementById('search-input');
    const termsOutput = document.getElementById('terms-output');

    // Category filter buttons
    if (categoryList) {
        categoryList.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                currentCategory = e.target.dataset.category;
                renderCategories();
                renderTerms();
            }
        });
    }

    // Search input
    if (searchInput) {
        searchInput.addEventListener('input', renderTerms);
    }

    // View Details buttons
    if (termsOutput) {
        termsOutput.addEventListener('click', (e) => {
            if (e.target.classList.contains('view-details-btn')) {
                const termCard = e.target.closest('.term-card');
                const termName = termCard.dataset.term;
                const termData = allTerms.find(t => t.term === termName);
                
                if (termData) {
                    openModal(termData);
                }
            }
        });
    }
}

// 6. MODAL FUNCTIONS
function openModal(termData) {
    const modal = document.getElementById('term-modal');
    const modalTerm = document.getElementById('modal-term');
    const modalDefinition = document.getElementById('modal-definition');
    const modalExample = document.getElementById('modal-example');
    
    if (modal && modalTerm && modalDefinition && modalExample) {
        modalTerm.textContent = termData.term;
        modalDefinition.textContent = termData.definition;
        modalExample.textContent = termData.example || 'No example available.';
        modal.style.display = 'block';
    }
}

function closeModal() {
    const modal = document.getElementById('term-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Close modal when clicking X
const closeButton = document.querySelector('.close-button');
if (closeButton) {
    closeButton.addEventListener('click', closeModal);
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    const modal = document.getElementById('term-modal');
    if (e.target === modal) {
        closeModal();
    }
});

// 7. INITIALIZE ON PAGE LOAD
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderTerms();
    attachEventListeners();
});
