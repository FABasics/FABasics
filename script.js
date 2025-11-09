// COMPLETE ACCOUNTING & FINANCE DICTIONARY - 329 TERMS
const allTerms = [
    // ========== FINANCIAL STATEMENTS (25 terms) ==========
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
    { term: "Comparative Statements", category: "Financial Statements", definition: "Side-by-side comparison of financial statements from multiple periods.", example: "2024 vs 2023 revenue shows 15% growth." },
    { term: "Common Size Statement", category: "Financial Statements", definition: "Financial statements where all items are expressed as a percentage of a base figure.", example: "Every line item shown as percentage of total revenue." },
    { term: "10-K", category: "Financial Statements", definition: "Comprehensive annual report filed with SEC by public companies.", example: "Contains complete annual financial information and disclosures." },
    { term: "10-Q", category: "Financial Statements", definition: "Quarterly report filed with SEC by public companies.", example: "Less detailed than 10-K, filed quarterly." },
    { term: "Earnings Per Share", category: "Financial Statements", definition: "Net income divided by weighted average outstanding shares.", example: "$1M income, 100K shares equals $10 EPS." },
    { term: "Comprehensive Income", category: "Financial Statements", definition: "Net income plus other comprehensive income items.", example: "Includes unrealized gains on available-for-sale securities." },
    { term: "Liquidity", category: "Financial Statements", definition: "Ability to meet short-term financial obligations.", example: "High current ratio indicates high liquidity." },
    { term: "Solvency", category: "Financial Statements", definition: "Ability to meet long-term debt obligations.", example: "Low debt-to-equity ratio indicates high solvency." },
    { term: "Segment Reporting", category: "Financial Statements", definition: "Reporting financial data for different business units or geographic regions.", example: "Amazon reports retail, AWS, and international segments separately." },
    { term: "Full Disclosure Principle", category: "Financial Statements", definition: "Accounting principle requiring all relevant information be disclosed in financial statements.", example: "Disclosing potential liabilities from pending lawsuits in the notes." },

    // ========== CORE ACCOUNTING (20 terms) ==========
    { term: "Debit", category: "Core Accounting", definition: "An entry on the left side of a ledger account; increases asset and expense accounts, decreases liability, equity, and revenue accounts.", example: "The company Debited the Cash account when receiving payment from a customer." },
    { term: "Credit", category: "Core Accounting", definition: "An entry on the right side of a ledger account; increases liability, equity, and revenue accounts, decreases asset and expense accounts.", example: "The company Credited the Sales Revenue account upon making a sale." },
    { term: "General Ledger", category: "Core Accounting", definition: "A complete record of all the financial transactions of a company, containing all the accounts needed to prepare financial statements.", example: "The accountant examined the General Ledger to trace a large expense item." },
    { term: "Asset", category: "Core Accounting", definition: "A resource controlled by the company as a result of past events and from which future economic benefits are expected to flow.", example: "Cash, Accounts Receivable, and Equipment are common Assets." },
    { term: "Liability", category: "Core Accounting", definition: "A present obligation of the company arising from past events, the settlement of which is expected to result in an outflow of resources.", example: "Accounts Payable, Loans Payable, and Unearned Revenue are Liabilities." },
    { term: "Equity", category: "Core Accounting", definition: "The residual interest in the assets of the company after deducting all its liabilities (Assets - Liabilities).", example: "Shareholders' Equity represents the owners' stake in the company." },
    { term: "Depreciation", category: "Core Accounting", definition: "The systematic reduction in the value of a tangible asset over its useful life, recorded as an expense on the income statement.", example: "A machine purchased for $100K with a 10-year life depreciates by $10K per year." },
    { term: "Amortization", category: "Core Accounting", definition: "The systematic reduction in the value of an intangible asset over its useful life.", example: "A $50K patent with a 5-year life is Amortized by $10K per year." },
    { term: "Chart of Accounts", category: "Core Accounting", definition: "A list of all financial accounts used in a company's general ledger, typically organized by category.", example: "The company updated its Chart of Accounts to include a new 'Cloud Subscription Expense' line." },
    { term: "Journal Entry", category: "Core Accounting", definition: "The first step in the accounting cycle, where a business transaction is formally recorded, showing at least one debit and one credit.", example: "A Journal Entry was made to debit cash and credit sales revenue for a transaction." },
    { term: "Unearned Revenue", category: "Core Accounting", definition: "A liability account that represents money received from a customer for goods or services that have not yet been delivered.", example: "A software company received $1,200 for a 1-year subscription upfront, recording it as Unearned Revenue." },
    { term: "Accrued Expenses", category: "Core Accounting", definition: "Expenses that have been incurred but have not yet been paid or recorded in the books.", example: "Salaries for the last week of December are recorded as Accrued Expenses on the year-end Balance Sheet." },
    { term: "Capital Expenditure", category: "Core Accounting", definition: "Funds used by a company to acquire, upgrade, and maintain physical assets such as property or equipment.", example: "The purchase of a new factory building for $5 million is a CapEx." },
    { term: "Operating Expense", category: "Core Accounting", definition: "Expenditures a business incurs to run its day-to-day operations, such as rent, utilities, and salaries.", example: "Monthly rent of $5,000 for office space is an OpEx." },
    { term: "Double-Entry Bookkeeping", category: "Core Accounting", definition: "An accounting system where every transaction is recorded in at least two accounts, with total debits always equaling total credits.", example: "Selling a product requires a debit to Cash and a credit to Sales Revenue." },
    { term: "Matching Principle", category: "Core Accounting", definition: "An accounting principle that requires expenses to be recorded in the same period as the revenue they helped generate.", example: "The cost of goods sold is recorded in the same month as the revenue from those sales." },
    { term: "Conservatism Principle", category: "Core Accounting", definition: "A principle requiring that when faced with uncertainty, judgment should tend toward understating assets and revenues.", example: "Inventory is valued at the lower of cost or market value." },
    { term: "Revenue Recognition", category: "Core Accounting", definition: "The specific criteria that must be met for revenue to be recorded in a company's financial statements.", example: "A company recognizes subscription revenue monthly, not when the annual cash payment is received." },
    { term: "Book Value", category: "Core Accounting", definition: "The value of an asset as it appears on the balance sheet, calculated as original cost minus accumulated depreciation.", example: "A machine bought for $100K with $30K in accumulated depreciation has a Book Value of $70K." },
    { term: "Impairment", category: "Core Accounting", definition: "A permanent reduction in the value of a company's asset, typically a non-cash charge.", example: "The company recorded an Impairment charge on its goodwill after an acquisition underperformed." },

    // ========== FINANCIAL METRICS (25 terms) ==========
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

    // ========== ASSETS & LIABILITIES (35 terms) ==========
    { term: "Current Assets", category: "Assets & Liabilities", definition: "Assets convertible to cash within one year.", example: "Cash, receivables, and inventory." },
    { term: "Fixed Assets", category: "Assets & Liabilities", definition: "Long-term tangible assets used in operations.", example: "Factory buildings, trucks, and equipment." },
    { term: "Accounts Receivable", category: "Assets & Liabilities", definition: "Money owed to the company by customers.", example: "Sold $10K on 30-day payment terms." },
    { term: "Accounts Payable", category: "Assets & Liabilities", definition: "Money owed by the company to suppliers.", example: "Received $5K inventory, payment due in 45 days." },
    { term: "Inventory", category: "Assets & Liabilities", definition: "Goods held for sale or production materials.", example: "Retail store has $100K worth of shoes in stock." },
    { term: "Prepaid Expenses", category: "Assets & Liabilities", definition: "Advance payments for future services.", example: "Paid $12K annual insurance premium upfront." },
    { term: "Intangible Assets", category: "Assets & Liabilities", definition: "Non-physical assets with economic value.", example: "Patents, trademarks, copyrights, and goodwill." },
    { term: "Goodwill", category: "Assets & Liabilities", definition: "Excess of purchase price over fair value of acquired assets.", example: "Bought $5M company for $7M, recording $2M goodwill." },
    { term: "Accumulated Depreciation", category: "Assets & Liabilities", definition: "Total depreciation recorded on an asset to date.", example: "$100K equipment, $20K depreciated, $80K book value remaining." },
    { term: "Current Liabilities", category: "Assets & Liabilities", definition: "Obligations due within one year.", example: "Credit card balances, quarterly taxes, short-term loans." },
    { term: "Long-term Liabilities", category: "Assets & Liabilities", definition: "Obligations due beyond one year.", example: "20-year mortgage, 10-year corporate bonds." },
    { term: "Deferred Revenue", category: "Assets & Liabilities", definition: "Payment received before goods or services are delivered.", example: "Annual subscription of $1200 paid upfront, recognized monthly." },
    { term: "Fair Value", category: "Assets & Liabilities", definition: "Current market value of an asset.", example: "Land worth $500K today, originally bought for $300K." },
    { term: "Contingent Liability", category: "Assets & Liabilities", definition: "Potential future obligation dependent on uncertain events.", example: "Lawsuit pending, may owe $1M if company loses." },
    { term: "Marketable Securities", category: "Assets & Liabilities", definition: "Short-term liquid investments easily converted to cash.", example: "Treasury bills, commercial paper, publicly traded stocks." },
    { term: "Trading Securities", category: "Assets & Liabilities", definition: "Securities bought for short-term profit.", example: "Marked to market value each reporting period." },
    { term: "Available for Sale Securities", category: "Assets & Liabilities", definition: "Investments held for indefinite period.", example: "Unrealized gains reported in other comprehensive income." },
    { term: "Held to Maturity Securities", category: "Assets & Liabilities", definition: "Debt securities the company intends to hold until maturity.", example: "Corporate bonds held at amortized cost." },
    { term: "Allowance for Doubtful Accounts", category: "Assets & Liabilities", definition: "Contra-asset account for estimated uncollectible receivables.", example: "Estimate 2% of total receivables will be uncollectible." },
    { term: "Notes Payable", category: "Assets & Liabilities", definition: "Written promise to pay a specific amount.", example: "Signed $50K promissory note at 5% interest." },
    { term: "Bonds Payable", category: "Assets & Liabilities", definition: "Long-term debt securities issued by the company.", example: "Issued $1M in 10-year bonds at 6% interest." },
    { term: "Warranty Liability", category: "Assets & Liabilities", definition: "Estimated future costs of honoring product warranties.", example: "Estimate 5% of product sales will require warranty repairs." },
    { term: "Premium on Bonds", category: "Assets & Liabilities", definition: "Bonds issued at a price above face value.", example: "Issue $1M bonds for $1.05M, premium is $50K." },
    { term: "Discount on Bonds", category: "Assets & Liabilities", definition: "Bonds issued at a price below face value.", example: "Issue $1M bonds for $950K, discount is $50K." },
    { term: "Callable Bonds", category: "Assets & Liabilities", definition: "Bonds that the issuer can redeem before maturity.", example: "Company can call bonds after 5 years at predetermined price." },
    { term: "Convertible Bonds", category: "Assets & Liabilities", definition: "Bonds that can be converted into company stock.", example: "Each bond convertible to 50 shares of common stock." },
    { term: "Zero-Coupon Bonds", category: "Assets & Liabilities", definition: "Bonds that pay no periodic interest.", example: "Buy for $600, receive $1000 at maturity in 10 years." },
    { term: "Capital Lease Liability", category: "Assets & Liabilities", definition: "Lease recorded as asset purchase with financing.", example: "Equipment lease treated as if purchased with a loan." },
    { term: "Operating Lease Liability", category: "Assets & Liabilities", definition: "Lease obligation for short-term or low-value assets.", example: "Office space lease creates monthly lease liability." },
    { term: "Property Plant Equipment", category: "Assets & Liabilities", definition: "Long-term physical assets used in production.", example: "Buildings, machinery, vehicles, and land." },
    { term: "Land", category: "Assets & Liabilities", definition: "Real estate owned by the company, not depreciated.", example: "Factory land valued at historical cost on balance sheet." },
    { term: "Buildings", category: "Assets & Liabilities", definition: "Structures owned by the company, subject to depreciation.", example: "Office building depreciated over 30-40 years." },
    { term: "Equipment", category: "Assets & Liabilities", definition: "Machinery and tools used in business operations.", example: "Manufacturing equipment depreciated over useful life." },
    { term: "Vehicles", category: "Assets & Liabilities", definition: "Company-owned transportation assets.", example: "Delivery trucks depreciated over 5-7 years." },
    { term: "Furniture and Fixtures", category: "Assets & Liabilities", definition: "Office furnishings and permanent attachments.", example: "Desks, chairs, shelving depreciated over 7-10 years." },

    // ========== REVENUE & EXPENSES (30 terms) ==========
    { term: "Revenue", category: "Revenue & Expenses", definition: "Income generated from normal business operations.", example: "Sold 1000 units at $50 equals $50K revenue." },
    { term: "Expense", category: "Revenue & Expenses", definition: "Costs incurred in the process of earning revenue.", example: "Rent $5K, salaries $50K, utilities $2K monthly." },
    { term: "Gross Profit", category: "Revenue & Expenses", definition: "Revenue minus Cost of Goods Sold.", example: "$100K revenue minus $40K COGS equals $60K gross profit." },
    { term: "Net Income", category: "Revenue & Expenses", definition: "Total revenue minus all expenses and taxes.", example: "$500K revenue minus $400K total expenses equals $100K net income." },
    { term: "Operating Income", category: "Revenue & Expenses", definition: "Profit from core business operations before interest and taxes.", example: "Gross profit minus operating expenses equals operating income." },
    { term: "Variable Costs", category: "Revenue & Expenses", definition: "Costs that change proportionally with production volume.", example: "Raw materials cost increases with units produced." },
    { term: "Fixed Costs", category: "Revenue & Expenses", definition: "Costs that remain constant regardless of production volume.", example: "Monthly rent of $5K whether producing 100 or 1000 units." },
    { term: "Contribution Margin", category: "Revenue & Expenses", definition: "Sales price minus variable cost per unit.", example: "$100 selling price minus $60 variable cost equals $40 contribution margin." },
    { term: "Net Revenue", category: "Revenue & Expenses", definition: "Gross revenue minus returns, allowances, and discounts.", example: "$100K gross minus $5K returns minus $3K discounts equals $92K net." },
    { term: "Interest Expense", category: "Revenue & Expenses", definition: "Cost of borrowing money for operations or investments.", example: "$100K loan at 6% annual interest equals $6K interest expense." },
    { term: "Bad Debt Expense", category: "Revenue & Expenses", definition: "Estimated uncollectible portion of accounts receivable.", example: "Estimate 3% of $100K credit sales won't be collected, record $3K expense." },
    { term: "Salaries Expense", category: "Revenue & Expenses", definition: "Employee compensation costs for the period.", example: "Monthly payroll of $50K for all full-time employees." },
    { term: "Rent Expense", category: "Revenue & Expenses", definition: "Cost of leasing facilities or equipment.", example: "Office rent $5K per month, warehouse $8K monthly." },
    { term: "Sales Revenue", category: "Revenue & Expenses", definition: "Income specifically from selling products.", example: "Sold merchandise totaling $500K this quarter." },
    { term: "Service Revenue", category: "Revenue & Expenses", definition: "Income from providing services to customers.", example: "Consulting fees totaling $50K for the quarter." },
    { term: "Interest Revenue", category: "Revenue & Expenses", definition: "Income earned from interest on investments or loans.", example: "Earned $5K interest on corporate bond investments." },
    { term: "Dividend Revenue", category: "Revenue & Expenses", definition: "Income from dividends received on stock investments.", example: "Received $3K in dividends from equity investments." },
    { term: "Gain on Sale of Assets", category: "Revenue & Expenses", definition: "Profit from selling an asset above its book value.", example: "Sold equipment for $15K with book value of $10K, gain of $5K." },
    { term: "Loss on Sale of Assets", category: "Revenue & Expenses", definition: "Loss from selling an asset below its book value.", example: "Sold equipment for $8K with book value of $10K, loss of $2K." },
    { term: "Utilities Expense", category: "Revenue & Expenses", definition: "Cost of electricity, water, gas, and other utilities.", example: "Monthly utilities average $2K for factory operations." },
    { term: "Insurance Expense", category: "Revenue & Expenses", definition: "Cost of insurance premiums for business coverage.", example: "Annual business liability insurance costs $12K." },
    { term: "Advertising Expense", category: "Revenue & Expenses", definition: "Cost of marketing and promotional activities.", example: "Monthly Google Ads campaign costs $10K." },
    { term: "Supplies Expense", category: "Revenue & Expenses", definition: "Cost of office and operational supplies consumed.", example: "Monthly office supplies expense averages $500." },
    { term: "Professional Fees", category: "Revenue & Expenses", definition: "Payments for legal, accounting, and consulting services.", example: "Annual audit costs $15K, legal retainer $8K." },
    { term: "Research & Development", category: "Revenue & Expenses", definition: "Costs incurred developing new products or services.", example: "Spent $100K developing new software features this quarter." },
    { term: "Travel Expense", category: "Revenue & Expenses", definition: "Business-related travel costs for employees.", example: "Monthly travel expenses for sales team total $8K." },
    { term: "Meals and Entertainment", category: "Revenue & Expenses", definition: "Cost of business meals and client entertainment.", example: "Client dinners and business lunches total $2K monthly." },
    { term: "Maintenance Expense", category: "Revenue & Expenses", definition: "Cost of maintaining and repairing equipment and facilities.", example: "Regular equipment maintenance costs $3K monthly." },
    { term: "Telephone Expense", category: "Revenue & Expenses", definition: "Cost of phone services and communications.", example: "Monthly phone and internet services cost $1.5K." },
    { term: "Postage and Shipping", category: "Revenue & Expenses", definition: "Cost of mailing and shipping products or documents.", example: "Monthly shipping costs for e-commerce business total $5K." },

    // ========== RATIOS & ANALYSIS (25 terms) ==========
    { term: "Accounts Receivable Turnover", category: "Ratios & Analysis", definition: "Measures efficiency of collecting credit sales.", example: "Net Credit Sales divided by Average Accounts Receivable." },
    { term: "Times Interest Earned", category: "Ratios & Analysis", definition: "Measures ability to meet interest payments on debt.", example: "EBIT divided by Interest Expense, result of 10x means strong coverage." },
    { term: "Dividend Payout Ratio", category: "Ratios & Analysis", definition: "Portion of earnings paid to shareholders as dividends.", example: "Dividends per share divided by Earnings Per Share." },
    { term: "Capital Employed", category: "Ratios & Analysis", definition: "Total capital used in business operations.", example: "Total assets minus current liabilities." },
    { term: "EBIT Margin", category: "Ratios & Analysis", definition: "Operating profitability before interest and taxes.", example: "EBIT divided by Revenue shows operating efficiency." },
    { term: "Cash Conversion Cycle", category: "Ratios & Analysis", definition: "Time needed to convert resource inputs into cash flows.", example: "Days Inventory + Days Receivable - Days Payable." },
    { term: "Debt to Assets Ratio", category: "Ratios & Analysis", definition: "Proportion of assets financed by debt.", example: "Total Debt divided by Total Assets." },
    { term: "Fixed Asset Turnover", category: "Ratios & Analysis", definition: "Efficiency in using fixed assets to generate revenue.", example: "Revenue divided by Average Fixed Assets." },
    { term: "Return on Sales", category: "Ratios & Analysis", definition: "Profit generated per dollar of sales.", example: "Net Income divided by Net Sales shows profitability." },
    { term: "Asset Turnover", category: "Ratios & Analysis", definition: "Efficiency in using assets to generate sales.", example: "$1M revenue divided by $500K assets equals 2x turnover." },
    { term: "Burn Rate", category: "Ratios & Analysis", definition: "Rate at which a company spends cash reserves.", example: "Startup spending $50K monthly on operations has $50K burn rate." },
    { term: "Runway", category: "Ratios & Analysis", definition: "Time before company runs out of cash.", example: "$500K cash divided by $100K monthly burn equals 5 months runway." },
    { term: "Interest Coverage", category: "Ratios & Analysis", definition: "Ability to pay interest on outstanding debt.", example: "$200K EBIT divided by $20K interest equals 10x coverage." },
    { term: "Price to Book Ratio", category: "Ratios & Analysis", definition: "Market value compared to book value of equity.", example: "Stock price $50 divided by book value $25 equals 2.0 P/B ratio." },
    { term: "Earnings Yield", category: "Ratios & Analysis", definition: "Inverse of P/E ratio, showing earnings as percentage.", example: "EPS $5 divided by stock price $50 equals 10% earnings yield." },
    { term: "Dividend Yield", category: "Ratios & Analysis", definition: "Annual dividends as percentage of stock price.", example: "$2 annual dividend divided by $40 stock price equals 5% yield." },
    { term: "Profit per Employee", category: "Ratios & Analysis", definition: "Measure of workforce productivity.", example: "$10M net income divided by 100 employees equals $100K per employee." },
    { term: "Sales per Employee", category: "Ratios & Analysis", definition: "Revenue efficiency per employee.", example: "$50M revenue divided by 100 employees equals $500K per employee." },
    { term: "Operating Cash Flow Ratio", category: "Ratios & Analysis", definition: "Cash flow relative to current liabilities.", example: "Operating cash flow divided by current liabilities." },
    { term: "Receivables Collection Period", category: "Ratios & Analysis", definition: "Average days to collect accounts receivable.", example: "365 days divided by receivables turnover ratio." },
    { term: "Payables Payment Period", category: "Ratios & Analysis", definition: "Average days to pay suppliers.", example: "365 days divided by payables turnover ratio." },
    { term: "Cash Ratio", category: "Ratios & Analysis", definition: "Most conservative liquidity ratio using only cash.", example: "Cash and cash equivalents divided by current liabilities." },
    { term: "Defensive Interval Ratio", category: "Ratios & Analysis", definition: "Days company can operate using liquid assets.", example: "Liquid assets divided by daily operating expenses." },

    // ========== TAXATION (12 terms) ==========
    { term: "Income Tax", category: "Taxation", definition: "Tax on individual or corporate income.", example: "Company earned $1M profit, pays $210K at 21% federal rate." },
    { term: "Corporate Tax", category: "Taxation", definition: "Tax levied on company profits.", example: "US federal corporate tax rate is 21%." },
    { term: "Tax Deduction", category: "Taxation", definition: "Expense that reduces taxable income.", example: "$10K charitable donation reduces taxable income by $10K." },
    { term: "Tax Credit", category: "Taxation", definition: "Direct dollar-for-dollar reduction of tax liability.", example: "$5K R&D tax credit reduces tax bill by exactly $5K." },
    { term: "Sales Tax", category: "Taxation", definition: "Tax imposed on sale of goods and services.", example: "California charges 7.25% base sales tax rate." },
    { term: "Taxable Income", category: "Taxation", definition: "Income subject to taxation after allowable deductions.", example: "$500K revenue minus $300K deductions equals $200K taxable income." },
    { term: "Capital Gains Tax", category: "Taxation", definition: "Tax on profit from selling capital assets.", example: "Bought stock for $10K, sold for $15K, taxed on $5K gain." },
    { term: "Deferred Tax", category: "Taxation", definition: "Tax liability postponed to future periods.", example: "Accelerated depreciation creates deferred tax liability." },
    { term: "Effective Tax Rate", category: "Taxation", definition: "Actual percentage of income paid in taxes.", example: "Paid $180K tax on $1M income equals 18% effective rate." },
    { term: "Tax Loss Carryforward", category: "Taxation", definition: "Net operating losses used to offset future taxable income.", example: "$100K loss this year reduces next year's taxable income." },
    { term: "Withholding Tax", category: "Taxation", definition: "Tax withheld from payments at the source.", example: "Employer withholds federal income tax from employee paychecks." },
    { term: "Payroll Tax", category: "Taxation", definition: "Taxes on wages and salaries paid to employees.", example: "Social Security 6.2% plus Medicare 1.45% of wages." },

    // ========== GST TAX (15 terms) ==========
    { term: "GST", category: "GST Tax", definition: "Goods and Services Tax - comprehensive indirect tax on supply of goods and services.", example: "India GST rates are 5%, 12%, 18%, and 28%." },
    { term: "Input Tax Credit", category: "GST Tax", definition: "Tax paid on purchases that can be claimed against output tax.", example: "Paid 18 rupees GST on purchase, reduce output tax liability by 18." },
    { term: "CGST", category: "GST Tax", definition: "Central Goods and Services Tax collected by central government.", example: "On intra-state sale at 18%, CGST is 9%." },
    { term: "SGST", category: "GST Tax", definition: "State Goods and Services Tax collected by state government.", example: "On intra-state sale at 18%, SGST is 9%." },
    { term: "IGST", category: "GST Tax", definition: "Integrated GST levied on inter-state supply of goods and services.", example: "Sale from Delhi to Mumbai charges 18% IGST." },
    { term: "GST Registration", category: "GST Tax", definition: "Mandatory enrollment in GST system for eligible businesses.", example: "Businesses with annual turnover over 40 lakhs must register." },
    { term: "GSTIN", category: "GST Tax", definition: "15-digit GST Identification Number assigned to registered taxpayers.", example: "Format includes state code, PAN, entity code, and check digit." },
    { term: "GSTR-1", category: "GST Tax", definition: "Monthly/quarterly return filing outward supplies details.", example: "File by 11th of following month showing all sales invoices." },
    { term: "GSTR-3B", category: "GST Tax", definition: "Summary return showing tax liability and input tax credit.", example: "Monthly summary return filed by 20th of following month." },
    { term: "Reverse Charge Mechanism", category: "GST Tax", definition: "Recipient of goods/services pays GST instead of supplier.", example: "Registered company hiring unregistered lawyer pays GST directly." },
    { term: "Composition Scheme", category: "GST Tax", definition: "Simplified GST compliance for small businesses.", example: "Pay 1% of turnover as tax, cannot claim input tax credit." },
    { term: "E-Way Bill", category: "GST Tax", definition: "Electronic document required for movement of goods.", example: "Mandatory for transporting goods worth over 50,000 rupees." },
    { term: "HSN Code", category: "GST Tax", definition: "Harmonized System of Nomenclature code for classifying goods.", example: "Coffee beans classified under HSN code 0901." },
    { term: "Place of Supply", category: "GST Tax", definition: "Location that determines which GST applies.", example: "Destination of goods determines CGST/SGST or IGST application." },
    { term: "GST Audit", category: "GST Tax", definition: "Examination of GST records for compliance verification.", example: "Businesses with turnover over 5 crore require annual GST audit." },

    // ========== SHARK TANK (18 terms) ==========
    { term: "Valuation", category: "Shark Tank", definition: "Estimated total worth of a company.", example: "Asking $100K for 10% equity values company at $1M." },
    { term: "Equity Stake", category: "Shark Tank", definition: "Percentage of ownership in the company.", example: "Giving 20% equity means investor owns one-fifth of company." },
    { term: "Royalty Deal", category: "Shark Tank", definition: "Payment per unit sold until investment amount is recovered.", example: "$2 royalty per unit sold until $200K total is repaid." },
    { term: "Due Diligence", category: "Shark Tank", definition: "Thorough investigation of business before investing.", example: "Verify sales figures, check patents, review legal contracts." },
    { term: "Term Sheet", category: "Shark Tank", definition: "Document outlining key investment terms and conditions.", example: "Specifies investment amount, equity percentage, board seats, exit rights." },
    { term: "Pre-Money Valuation", category: "Shark Tank", definition: "Company's value before receiving new investment.", example: "$1M pre-money valuation before raising $200K investment." },
    { term: "Post-Money Valuation", category: "Shark Tank", definition: "Company's value after receiving new investment.", example: "$1M pre-money plus $200K investment equals $1.2M post-money." },
    { term: "Dilution", category: "Shark Tank", definition: "Reduction in ownership percentage after new investment.", example: "Own 100%, give 20% to investor, now own 80% (diluted by 20%)." },
    { term: "Revenue Multiple", category: "Shark Tank", definition: "Valuation expressed as multiple of annual revenue.", example: "$500K annual revenue valued at 4x equals $2M valuation." },
    { term: "Exit Strategy", category: "Shark Tank", definition: "Plan for investor to sell stake and realize profit.", example: "Acquisition by larger company or Initial Public Offering." },
    { term: "Cap Table", category: "Shark Tank", definition: "Capitalization table showing all ownership stakes.", example: "Founder 70%, investor 20%, employee pool 10%." },
    { term: "Burn Rate Analysis", category: "Shark Tank", definition: "Evaluation of monthly cash expenditure rate.", example: "Spending $50K monthly, need to reduce or raise more capital." },
    { term: "Unit Economics", category: "Shark Tank", definition: "Profitability metrics per customer or unit sold.", example: "Customer worth $100 lifetime value, costs $30 to acquire." },
    { term: "Customer Acquisition Cost", category: "Shark Tank", definition: "Average cost to acquire one new customer.", example: "Spend $10K on marketing, acquire 100 customers, CAC is $100." },
    { term: "Lifetime Value", category: "Shark Tank", definition: "Total revenue expected from a customer over their lifetime.", example: "Average customer spends $500 total before churning." },
    { term: "Path to Profitability", category: "Shark Tank", definition: "Strategic plan showing how business will become profitable.", example: "Expect to reach profitability at 1000 customers in 18 months." },
    { term: "Market Size", category: "Shark Tank", definition: "Total addressable market value for the product.", example: "US pet food market is $50 billion annually." },
    { term: "Scalability", category: "Shark Tank", definition: "Ability to grow revenue without proportional cost increases.", example: "Software businesses scale better than manufacturing businesses." },

    // ========== INVESTMENT (15 terms) ==========
    { term: "Angel Investor", category: "Investment", definition: "High net worth individual investing personal money in startups.", example: "Wealthy entrepreneur invests $50K for 10% equity in early-stage startup." },
    { term: "Venture Capital", category: "Investment", definition: "Professional financing for high-growth potential startups.", example: "VC firm invests $5M for 30% ownership stake." },
    { term: "Seed Funding", category: "Investment", definition: "Initial capital raised to start a business.", example: "$100K seed round to build minimum viable product." },
    { term: "IPO", category: "Investment", definition: "Initial Public Offering - first sale of stock to public.", example: "Company goes public, shares begin trading on NASDAQ." },
    { term: "Unicorn", category: "Investment", definition: "Privately held startup valued at over $1 billion.", example: "Uber and Airbnb were unicorns before going public." },
    { term: "Series A B C", category: "Investment", definition: "Sequential funding rounds as company grows.", example: "Series A $2M, Series B $10M, Series C $30M progression." },
    { term: "Private Equity", category: "Investment", definition: "Investment capital in private companies or buyouts.", example: "PE firm acquires mature company for $100M." },
    { term: "Bootstrapping", category: "Investment", definition: "Self-funding business growth without external investors.", example: "Use personal savings and customer revenue to grow organically." },
    { term: "Pitch Deck", category: "Investment", definition: "Presentation slides for pitching to potential investors.", example: "10-15 slides covering problem, solution, market, team, financials." },
    { term: "MVP", category: "Investment", definition: "Minimum Viable Product with essential features only.", example: "Simple app version to test market demand before full build." },
    { term: "Traction", category: "Investment", definition: "Evidence of business growth and customer demand.", example: "10K active users, $50K monthly revenue growing 20% monthly." },
    { term: "Acquisition", category: "Investment", definition: "One company purchasing another company.", example: "Facebook acquired Instagram for $1 billion in 2012." },
    { term: "Merger", category: "Investment", definition: "Two companies combining to form single entity.", example: "Disney merged with 21st Century Fox assets." },
    { term: "Convertible Note", category: "Investment", definition: "Loan that converts to equity at future funding round.", example: "$100K loan converts to equity at Series A valuation." },
    { term: "Accredited Investor", category: "Investment", definition: "Individual meeting SEC income or net worth requirements.", example: "$1M net worth or $200K annual income qualifies as accredited." },

    // ========== BANKING (12 terms) ==========
    { term: "Loan", category: "Banking", definition: "Money borrowed with obligation to repay with interest.", example: "Bank loan of $100K at 6% annual interest for 5 years." },
    { term: "Interest Rate", category: "Banking", definition: "Percentage charged for borrowing money.", example: "6% annual interest on $100K loan equals $6K interest per year." },
    { term: "Mortgage", category: "Banking", definition: "Loan specifically for purchasing real estate.", example: "$400K 30-year mortgage at 5% interest rate." },
    { term: "Credit Score", category: "Banking", definition: "Numerical rating of individual's creditworthiness.", example: "FICO score of 750 considered very good credit rating." },
    { term: "Compound Interest", category: "Banking", definition: "Interest calculated on principal plus accumulated interest.", example: "$1000 at 10% compounds to $1100 year 1, then $1210 year 2." },
    { term: "APR", category: "Banking", definition: "Annual Percentage Rate including all fees and charges.", example: "Credit card with 18% APR includes interest plus annual fees." },
    { term: "Line of Credit", category: "Banking", definition: "Revolving credit allowing borrowing up to set limit.", example: "$50K line of credit, draw and repay as needed for working capital." },
    { term: "Collateral", category: "Banking", definition: "Asset pledged as security for loan repayment.", example: "House serves as collateral securing the mortgage loan." },
    { term: "Principal", category: "Banking", definition: "Original amount borrowed or invested.", example: "Borrowed $100K principal, interest charged on this base amount." },
    { term: "Certificate of Deposit", category: "Banking", definition: "Time deposit account with fixed rate and maturity date.", example: "$10K CD paying 4% interest for 12-month term." },
    { term: "Refinancing", category: "Banking", definition: "Replacing existing loan with new loan at better terms.", example: "Refinance mortgage from 6% to 4% to reduce monthly payments." },
    { term: "Default", category: "Banking", definition: "Failure to meet loan repayment obligations.", example: "Missed 3 consecutive loan payments triggers default status." },

    // ========== AUDITING (10 terms) ==========
    { term: "Audit", category: "Auditing", definition: "Independent examination of financial records and statements.", example: "External auditor conducts annual audit of company financial statements." },
    { term: "Internal Controls", category: "Auditing", definition: "Processes and procedures ensuring accurate financial reporting.", example: "Require dual signatures on all checks exceeding $5K." },
    { term: "Material Misstatement", category: "Auditing", definition: "Error significant enough to influence economic decisions.", example: "Overstating revenue by $1M is material for $10M revenue company." },
    { term: "Audit Opinion", category: "Auditing", definition: "Auditor's professional assessment of financial statement accuracy.", example: "Unqualified opinion means statements are fairly presented in all material respects." },
    { term: "SOX Compliance", category: "Auditing", definition: "Meeting Sarbanes-Oxley Act requirements for public companies.", example: "CEO and CFO must certify accuracy of financial statements and internal controls." },
    { term: "Internal Audit", category: "Auditing", definition: "Company's own independent assessment of controls and processes.", example: "Internal auditor reviews expense reports for policy compliance and fraud." },
    { term: "External Audit", category: "Auditing", definition: "Independent third-party examination of financial statements.", example: "Deloitte performs external audit of public company annual financials." },
    { term: "Audit Trail", category: "Auditing", definition: "Documented chronological record of all transactions.", example: "Can trace every journal entry back to original source document." },
    { term: "Segregation of Duties", category: "Auditing", definition: "Separating key financial tasks among different people.", example: "Different employees authorize purchases, record transactions, and handle cash." },
    { term: "Fraud Triangle", category: "Auditing", definition: "Three conditions enabling fraud: pressure, opportunity, rationalization.", example: "Financial pressure plus weak controls plus justification creates fraud risk." },

    // ========== COST ACCOUNTING (12 terms) ==========
    { term: "Cost Accounting", category: "Cost Accounting", definition: "System for tracking, recording, and analyzing production costs.", example: "Calculate precise cost per unit to optimize pricing and profitability." },
    { term: "Direct Materials", category: "Cost Accounting", definition: "Raw materials directly traceable to finished product.", example: "Steel used in manufacturing automobiles." },
    { term: "Direct Labor", category: "Cost Accounting", definition: "Wages of workers directly involved in production.", example: "Assembly line worker wages directly tied to units produced." },
    { term: "Manufacturing Overhead", category: "Cost Accounting", definition: "Indirect production costs not directly traceable to units.", example: "Factory rent, utilities, equipment depreciation, supervisor salaries." },
    { term: "Variance Analysis", category: "Cost Accounting", definition: "Comparing actual costs to budgeted or standard costs.", example: "Materials cost $5K over budget, investigate supplier price increases." },
    { term: "Job Costing", category: "Cost Accounting", definition: "Tracking costs for each specific job or project.", example: "Construction project tracks all materials and labor costs separately." },
    { term: "Process Costing", category: "Cost Accounting", definition: "Averaging production costs across all units produced.", example: "Oil refinery divides total monthly costs by gallons produced." },
    { term: "Activity-Based Costing", category: "Cost Accounting", definition: "Allocating overhead based on activities driving costs.", example: "Machine setup costs allocated by number of production runs." },
    { term: "Standard Costing", category: "Cost Accounting", definition: "Using predetermined cost estimates for budgeting and control.", example: "Standard cost $10 per unit, actual cost $11, unfavorable variance $1." },
    { term: "Prime Cost", category: "Cost Accounting", definition: "Sum of direct materials and direct labor costs.", example: "$3 materials plus $2 direct labor equals $5 prime cost per unit." },
    { term: "Conversion Cost", category: "Cost Accounting", definition: "Sum of direct labor and manufacturing overhead.", example: "$2 direct labor plus $3 overhead equals $5 conversion cost per unit." },
    { term: "Overhead Rate", category: "Cost Accounting", definition: "Predetermined rate for allocating overhead to products.", example: "$100K overhead divided by 10K labor hours equals $10 per hour rate." },

    // ========== MANAGEMENT (15 terms) ==========
    { term: "Budget", category: "Management", definition: "Detailed financial plan for specific time period.", example: "Annual budget projects $1M revenue and $800K total expenses." },
    { term: "KPI", category: "Management", definition: "Key Performance Indicator measuring success against objectives.", example: "Track customer retention rate, profit margin, monthly sales growth." },
    { term: "Variance", category: "Management", definition: "Difference between budgeted and actual performance.", example: "Budgeted $100K expenses, actual $110K, unfavorable $10K variance." },
    { term: "Benchmarking", category: "Management", definition: "Comparing company performance to industry standards or competitors.", example: "Compare 15% profit margin to 12% industry average." },
    { term: "Dashboard", category: "Management", definition: "Visual display of key business metrics in real-time.", example: "Executive dashboard shows sales, expenses, cash position at a glance." },
    { term: "Master Budget", category: "Management", definition: "Comprehensive budget consolidating all departmental budgets.", example: "Combines sales, production, operating, cash, and capital budgets." },
    { term: "Operating Budget", category: "Management", definition: "Budget for day-to-day income and expenses.", example: "Monthly operating budget includes salaries, rent, utilities, supplies." },
    { term: "Capital Budget", category: "Management", definition: "Budget for long-term asset investments and projects.", example: "3-year plan to invest $500K in new manufacturing equipment." },
    { term: "Cash Budget", category: "Management", definition: "Projection of cash receipts and disbursements.", example: "Cash budget forecasts $50K shortage in March, plan financing." },
    { term: "Flexible Budget", category: "Management", definition: "Budget that adjusts for actual activity levels achieved.", example: "Budget flexes from 1000 to 1200 units based on actual production." },
    { term: "Zero-Based Budget", category: "Management", definition: "Budgeting approach requiring justification of all expenses from zero.", example: "Each department builds budget from scratch, no automatic increases." },
    { term: "Rolling Forecast", category: "Management", definition: "Continuously updated forecast extending fixed period into future.", example: "Always maintain current 12-month forward-looking financial forecast." },
    { term: "Balanced Scorecard", category: "Management", definition: "Performance measurement framework across multiple perspectives.", example: "Evaluate financial, customer, internal process, learning and growth metrics." },
    { term: "Sensitivity Analysis", category: "Management", definition: "Testing how changes in variables impact outcomes.", example: "Model impact if sales drop 10% or variable costs increase 5%." },
    { term: "Scenario Planning", category: "Management", definition: "Preparing contingency plans for different possible futures.", example: "Develop best case, worst case, and most likely scenario plans." },

    // ========== PRINCIPLES (15 terms) ==========
    { term: "GAAP", category: "Principles", definition: "Generally Accepted Accounting Principles - US accounting standards.", example: "Public companies must prepare financial statements following GAAP." },
    { term: "Matching Principle", category: "Principles", definition: "Match expenses to revenues they helped generate in same period.", example: "Record cost of goods sold in same period as related sales revenue." },
    { term: "Double-Entry", category: "Principles", definition: "Every transaction recorded with equal debits and credits.", example: "Cash sale requires debit to Cash and credit to Sales Revenue." },
    { term: "Conservatism", category: "Principles", definition: "When uncertain, choose method least likely to overstate income or assets.", example: "Record probable losses immediately but defer probable gains until realized." },
    { term: "IFRS", category: "Principles", definition: "International Financial Reporting Standards used globally.", example: "Over 140 countries require or permit IFRS for financial reporting." },
    { term: "Cash Basis Accounting", category: "Principles", definition: "Record transactions only when cash received or paid.", example: "Record sale when customer pays cash, not when invoice is sent." },
    { term: "Consistency", category: "Principles", definition: "Use same accounting methods from period to period.", example: "If using FIFO inventory method, continue using FIFO each year." },
    { term: "Full Disclosure", category: "Principles", definition: "Provide all information relevant to understanding financial statements.", example: "Disclose pending litigation and contingent liabilities in footnotes." },
    { term: "Economic Entity", category: "Principles", definition: "Business treated as separate from its owners.", example: "Owner's personal expenses kept completely separate from business records." },
    { term: "Historical Cost", category: "Principles", definition: "Record assets at original purchase price.", example: "Land purchased for $100K recorded at cost, not current market value." },
    { term: "Time Period", category: "Principles", definition: "Divide business activities into artificial time periods for reporting.", example: "Report financial results quarterly and annually." },
    { term: "Monetary Unit", category: "Principles", definition: "Record only transactions measurable in monetary units.", example: "Employee morale and brand reputation not recorded despite importance." },
    { term: "Objectivity Principle", category: "Principles", definition: "Financial statements based on verifiable, objective evidence.", example: "Transactions supported by invoices, receipts, and contracts." },
    { term: "Cost-Benefit Principle", category: "Principles", definition: "Benefits of information should exceed cost of providing it.", example: "Don't track every pencil individually if tracking costs more than pencils." },
    { term: "Substance Over Form", category: "Principles", definition: "Economic reality takes precedence over legal form.", example: "Finance lease recorded as asset purchase despite legal form as lease." },

    // ========== BUSINESS ENTITIES (10 terms) ==========
    { term: "Corporation", category: "Business Entities", definition: "Legal entity separate from owners with limited liability.", example: "Apple Inc and Microsoft Corporation are publicly traded corporations." },
    { term: "LLC", category: "Business Entities", definition: "Limited Liability Company combining partnership flexibility with corporate protection.", example: "Small business owners form LLC for liability protection with pass-through taxation." },
    { term: "Partnership", category: "Business Entities", definition: "Business owned by two or more people sharing profits and liabilities.", example: "Law firm with multiple partners sharing ownership and profits." },
    { term: "Sole Proprietorship", category: "Business Entities", definition: "Business owned and operated by single individual.", example: "Freelance consultant operating independently without formal entity structure." },
    { term: "S Corporation", category: "Business Entities", definition: "Small corporation electing pass-through taxation status.", example: "Corporation with under 100 shareholders avoiding double taxation." },
    { term: "C Corporation", category: "Business Entities", definition: "Standard corporation taxed separately from owners.", example: "Large public companies like Amazon and Google are C Corporations." },
    { term: "Public Company", category: "Business Entities", definition: "Company whose shares trade on public stock exchange.", example: "Tesla stock publicly traded on NASDAQ exchange." },
    { term: "Private Company", category: "Business Entities", definition: "Company not publicly traded, owned by founders or private investors.", example: "SpaceX remains privately held, not available to public investors." },
    { term: "Nonprofit", category: "Business Entities", definition: "Organization operating for charitable mission rather than profit.", example: "Red Cross, hospitals, universities, and charitable foundations." },
    { term: "Holding Company", category: "Business Entities", definition: "Company owning controlling stakes in other companies.", example: "Berkshire Hathaway owns multiple operating businesses and investments." },

    // ========== FINANCIAL MODELING & VALUATION (20 terms) ==========
    { term: "DCF Model", category: "Financial Modeling", definition: "Discounted Cash Flow valuation using present value of future cash flows.", example: "DCF model shows stock intrinsic value of $80 vs market price $65." },
    { term: "WACC", category: "Financial Modeling", definition: "Weighted Average Cost of Capital - blended cost of debt and equity.", example: "WACC of 8% means firm must earn at least 8% return on investments." },
    { term: "Terminal Value", category: "Financial Modeling", definition: "Value of all future cash flows beyond explicit forecast period.", example: "Calculate terminal value using perpetuity growth model after year 5." },
    { term: "Comparable Companies Analysis", category: "Financial Modeling", definition: "Valuation using trading multiples of similar public companies.", example: "Value SaaS company at 10x revenue multiple like comparable peers." },
    { term: "Precedent Transactions", category: "Financial Modeling", definition: "Valuation based on multiples paid in past M&A transactions.", example: "Recent sector acquisitions averaged 12x EBITDA multiple." },
    { term: "Enterprise Value", category: "Financial Modeling", definition: "Total company value including equity value plus net debt.", example: "Market Cap plus Total Debt minus Cash equals Enterprise Value." },
    { term: "Equity Value", category: "Financial Modeling", definition: "Market value of company's equity or market capitalization.", example: "Share Price multiplied by Shares Outstanding equals Equity Value." },
    { term: "LBO Model", category: "Financial Modeling", definition: "Leveraged Buyout model showing returns using significant debt financing.", example: "Private equity firm models 70% debt financing for target acquisition." },
    { term: "Modeling Assumptions", category: "Financial Modeling", definition: "Key inputs and estimates driving financial model outputs.", example: "Assume 5% revenue growth and 20% EBITDA margin going forward." },
    { term: "Pivot Table", category: "Financial Modeling", definition: "Spreadsheet tool for summarizing and analyzing large datasets.", example: "Use pivot table to summarize monthly sales by region and product." },
    { term: "Circular Reference", category: "Financial Modeling", definition: "Formula error where calculation depends on its own result.", example: "Debt interest calculation depends on debt balance depending on interest." },
    { term: "Hockey Stick Projection", category: "Financial Modeling", definition: "Unrealistic projections showing modest then explosive growth.", example: "Startup shows 20% growth year 1 but 200% growth year 3." },
    { term: "Revenue Driver", category: "Financial Modeling", definition: "Key metric determining revenue forecast.", example: "Number of subscribers drives subscription revenue forecast." },
    { term: "Balance Sheet Plug", category: "Financial Modeling", definition: "Balancing figure ensuring assets equal liabilities plus equity.", example: "Cash often used as plug to balance the balance sheet." },
    { term: "Three Statement Model", category: "Financial Modeling", definition: "Integrated model linking income statement, balance sheet, and cash flow.", example: "Changes in one statement automatically flow through to other statements." },
    { term: "Cost of Equity", category: "Financial Modeling", definition: "Required return for equity investors, often calculated using CAPM.", example: "Risk-free rate plus beta times equity risk premium." },
    { term: "Beta", category: "Financial Modeling", definition: "Measure of stock volatility relative to overall market.", example: "Beta of 1.5 means stock moves 50% more than market." },
    { term: "Growth Rate Assumptions", category: "Financial Modeling", definition: "Projected rates of revenue or earnings growth.", example: "Conservative 3% perpetual growth rate in terminal value calculation." },
    { term: "Exit Multiple", category: "Financial Modeling", definition: "Valuation multiple used to estimate terminal value.", example: "Exit at 8x EBITDA based on industry trading multiples." },

    // ========== PERSONAL FINANCE (15 terms) ==========
    { term: "Personal Budget", category: "Personal Finance", definition: "Individual plan for managing income, expenses, and savings.", example: "Zero-based budget assigns every dollar of income to specific category." },
    { term: "Net Worth", category: "Personal Finance", definition: "Total assets minus total liabilities for an individual.", example: "$100K assets minus $50K debt equals $50K net worth." },
    { term: "Emergency Fund", category: "Personal Finance", definition: "Liquid savings reserved for unexpected expenses.", example: "Save 6 months of living expenses in high-yield savings account." },
    { term: "FICO Score", category: "Personal Finance", definition: "Consumer credit score ranging from 300 to 850.", example: "FICO score of 800 qualifies for best mortgage interest rates." },
    { term: "401k Plan", category: "Personal Finance", definition: "Employer-sponsored retirement savings plan with tax advantages.", example: "Contribute enough to receive full employer match of 6%." },
    { term: "Roth IRA", category: "Personal Finance", definition: "Individual retirement account with tax-free withdrawals in retirement.", example: "Contribute maximum $6,500 annually to Roth IRA." },
    { term: "Tax-Advantaged Account", category: "Personal Finance", definition: "Savings vehicle providing tax benefits or deferrals.", example: "401k, Traditional IRA, Roth IRA, and HSA are tax-advantaged." },
    { term: "Rule of 72", category: "Personal Finance", definition: "Quick formula to estimate years needed to double money.", example: "Money at 8% interest doubles in approximately 72÷8 = 9 years." },
    { term: "Time Value of Money", category: "Personal Finance", definition: "Principle that money now is worth more than same amount later.", example: "$1,000 today worth more than $1,000 next year due to earning potential." },
    { term: "Sinking Fund", category: "Personal Finance", definition: "Savings method for planned future large expenses.", example: "Save $200 monthly for $2,400 vacation planned next year." },
    { term: "Debt-to-Income Ratio", category: "Personal Finance", definition: "Percentage of monthly income going toward debt payments.", example: "$1,000 debt payments on $5,000 income equals 20% DTI." },
    { term: "Annual Percentage Rate", category: "Personal Finance", definition: "Yearly cost of credit including interest and fees.", example: "Credit card with 22% APR charges high interest on balances." },
    { term: "Annual Percentage Yield", category: "Personal Finance", definition: "Effective annual return accounting for compound interest.", example: "Savings account advertises 4.5% APY with monthly compounding." },
    { term: "Inflation", category: "Personal Finance", definition: "Rate at which general price levels rise over time.", example: "3% annual inflation reduces purchasing power by 3% yearly." },
    { term: "Dividend Income", category: "Personal Finance", definition: "Regular payments received from stock ownership.", example: "Dividend stock pays $1.50 per share quarterly distribution." },

    // ========== FINANCIAL MANAGEMENT (15 terms) ==========
    { term: "Treasury Management", category: "Financial Management", definition: "Managing company's cash, investments, and funding operations.", example: "Treasury optimizes cash balances across multiple bank accounts globally." },
    { term: "Payback Period", category: "Financial Management", definition: "Time required to recover initial investment from cash flows.", example: "$100K investment with $25K annual returns has 4-year payback." },
    { term: "Working Capital Management", category: "Financial Management", definition: "Managing current assets and liabilities to ensure liquidity.", example: "Optimize inventory levels, receivables collection, and payables timing." },
    { term: "Cost of Capital", category: "Financial Management", definition: "Minimum return company must earn on investments to satisfy investors.", example: "Used as hurdle rate for evaluating capital projects." },
    { term: "Capital Structure", category: "Financial Management", definition: "Mix of debt and equity used to finance operations.", example: "Target capital structure of 60% equity and 40% debt." },
    { term: "Financial Leverage", category: "Financial Management", definition: "Using borrowed funds to amplify potential investment returns.", example: "High leverage magnifies both profits and losses." },
    { term: "Risk-Return Tradeoff", category: "Financial Management", definition: "Principle that higher potential returns require accepting higher risk.", example: "High-yield junk bonds offer higher returns but greater default risk." },
    { term: "Dividend Policy", category: "Financial Management", definition: "Company's approach to paying earnings to shareholders.", example: "Stable dividend policy paying $1.00 per share quarterly." },
    { term: "Trade Credit", category: "Financial Management", definition: "Short-term financing from suppliers allowing delayed payment.", example: "Purchase inventory on net 30 payment terms." },
    { term: "Factoring", category: "Financial Management", definition: "Selling accounts receivable to third party for immediate cash.", example: "Sell $50K receivables to factor for $45K cash immediately." },
    { term: "Agency Problem", category: "Financial Management", definition: "Conflict between management decisions and shareholder interests.", example: "CEO spending excessively on corporate perks reduces shareholder value." },
    { term: "Price-to-Book Ratio", category: "Financial Management", definition: "Market price per share divided by book value per share.", example: "P/B ratio of 2.0 means market values company at twice book value." },
    { term: "Inventory Management", category: "Financial Management", definition: "Controlling ordering, storage, and use of inventory.", example: "Just-In-Time system minimizes inventory holding costs." },
    { term: "Hedging", category: "Financial Management", definition: "Using financial instruments to reduce exposure to risks.", example: "Currency hedging protects against foreign exchange rate fluctuations." },
    { term: "Credit Policy", category: "Financial Management", definition: "Guidelines for extending credit to customers.", example: "Offer net 30 terms to customers with credit score above 700." },

    // ========== CORPORATE TAX (15 terms) ==========
    { term: "Corporate Taxable Income", category: "Corporate Tax", definition: "Company's gross income less allowable tax deductions.", example: "Start with book income and make adjustments per tax code." },
    { term: "Permanent Difference", category: "Corporate Tax", definition: "Items in book income never included in taxable income.", example: "Municipal bond interest is tax-exempt, creating permanent difference." },
    { term: "Temporary Difference", category: "Corporate Tax", definition: "Timing differences between book and tax income that reverse.", example: "Accelerated tax depreciation creates temporary difference." },
    { term: "Net Operating Loss", category: "Corporate Tax", definition: "Tax loss from prior year available to offset future income.", example: "$1M NOL carried forward to reduce next year's taxable income." },
    { term: "Tax Deduction", category: "Corporate Tax", definition: "Expense reducing taxable income on dollar-for-dollar basis.", example: "Business meals generally 50% deductible for tax purposes." },
    { term: "Business Tax Credit", category: "Corporate Tax", definition: "Direct reduction of corporate tax liability.", example: "R&D tax credit provides dollar-for-dollar tax reduction." },
    { term: "Goodwill Amortization", category: "Corporate Tax", definition: "Tax deduction for purchased goodwill over 15 years.", example: "$1.5M goodwill amortized at $100K annually for tax." },
    { term: "Transfer Pricing", category: "Corporate Tax", definition: "Pricing goods/services between related entities in different jurisdictions.", example: "Set intercompany prices to minimize overall global tax burden." },
    { term: "Earnings and Profits", category: "Corporate Tax", definition: "Tax measure of company's ability to pay taxable dividends.", example: "Dividends taxable to shareholders only to extent of E&P." },
    { term: "Consolidated Tax Return", category: "Corporate Tax", definition: "Single tax return for parent and qualifying subsidiaries.", example: "Parent with 80%+ owned subsidiaries can file consolidated." },
    { term: "State Tax Apportionment", category: "Corporate Tax", definition: "Formula allocating multistate income to individual states.", example: "Based on sales, payroll, and property factors by state." },
    { term: "Tax Nexus", category: "Corporate Tax", definition: "Sufficient business presence triggering state tax obligation.", example: "Physical location or significant sales create tax nexus." },
    { term: "Alternative Minimum Tax", category: "Corporate Tax", definition: "Parallel tax system ensuring minimum tax payment.", example: "Calculate both regular and AMT, pay higher amount." },
    { term: "Section 179 Deduction", category: "Corporate Tax", definition: "Immediate expensing of qualifying equipment purchases.", example: "Deduct full cost of equipment in year purchased rather than depreciate." },
    { term: "Bonus Depreciation", category: "Corporate Tax", definition: "Additional first-year depreciation deduction for qualifying property.", example: "Deduct 100% of equipment cost in first year under bonus rules." },

    // ========== CORPORATE ACCOUNTING (15 terms) ==========
    { term: "Treasury Stock", category: "Corporate Accounting", definition: "Company's own shares repurchased from shareholders.", example: "Company buys back 10,000 shares reducing outstanding shares." },
    { term: "Stock Split", category: "Corporate Accounting", definition: "Increasing share count while proportionally decreasing price.", example: "2-for-1 split doubles shares and halves price per share." },
    { term: "Par Value", category: "Corporate Accounting", definition: "Nominal minimum legal value assigned to each share.", example: "Common stock with $0.01 par value per share." },
    { term: "Additional Paid-in Capital", category: "Corporate Accounting", definition: "Amount received from stock sales exceeding par value.", example: "Sell $0.01 par stock for $10, APIC is $9.99 per share." },
    { term: "Diluted EPS", category: "Corporate Accounting", definition: "Earnings per share assuming conversion of all dilutive securities.", example: "Includes impact of stock options and convertible bonds." },
    { term: "Basic EPS", category: "Corporate Accounting", definition: "Net income divided by weighted average shares outstanding.", example: "Primary EPS calculation reported on income statement." },
    { term: "Preferred Stock", category: "Corporate Accounting", definition: "Stock class with priority over common for dividends and liquidation.", example: "Preferred pays fixed 5% dividend before any common dividends." },
    { term: "Book Value Per Share", category: "Corporate Accounting", definition: "Shareholders' equity divided by common shares outstanding.", example: "$1M equity divided by 100K shares equals $10 per share." },
    { term: "Stock Options", category: "Corporate Accounting", definition: "Right to purchase shares at predetermined strike price.", example: "Executive granted options to buy 10,000 shares at $50." },
    { term: "Restricted Stock Units", category: "Corporate Accounting", definition: "Stock grants that vest over time based on conditions.", example: "RSUs vest after 4 years of continued employment." },
    { term: "Consolidation", category: "Corporate Accounting", definition: "Combining parent and subsidiary financial statements.", example: "Required when parent controls over 50% of subsidiary voting stock." },
    { term: "Equity Method", category: "Corporate Accounting", definition: "Accounting for investments with significant influence (20-50%).", example: "Investor records proportionate share of investee's net income." },
    { term: "Derivative Instrument", category: "Corporate Accounting", definition: "Financial contract deriving value from underlying asset.", example: "Stock options, futures, and swaps are derivative instruments." },
    { term: "Off-Balance Sheet", category: "Corporate Accounting", definition: "Obligations not reported as balance sheet liabilities.", example: "Certain operating leases kept off balance sheet (pre-ASC 842)." },
    { term: "Intercompany Elimination", category: "Corporate Accounting", definition: "Removing transactions between consolidated entities.", example: "Eliminate intercompany sales when preparing consolidated statements." },

    // ========== BUDGETING & PLANNING (5 terms) ==========
    { term: "Zero-Based Budgeting", category: "Budgeting & Planning", definition: "Budgeting requiring justification of all expenses from zero base.", example: "Each year justify all spending rather than using last year plus increment." },
    { term: "Top-Down Budgeting", category: "Budgeting & Planning", definition: "Executive management sets budget targets for lower levels.", example: "CFO allocates total budget across departments from top down." },
    { term: "Bottom-Up Budgeting", category: "Budgeting & Planning", definition: "Departments submit budget requests aggregated upward.", example: "Each department builds detailed budget rolled up to company level." },
    { term: "Incremental Budgeting", category: "Budgeting & Planning", definition: "Using prior period budget as base with adjustments.", example: "Take last year's budget and add 5% for inflation and growth." },
    { term: "Activity-Based Budgeting", category: "Budgeting & Planning", definition: "Budgeting based on activities and their resource requirements.", example: "Budget based on expected production runs, setups, and inspections." }
];

// =================================================================
// STATE AND UTILITIES
// =================================================================
let currentCategory = 'All';
const termsOutput = document.getElementById('terms-output');
const searchInput = document.getElementById('search-input');
const categoryList = document.getElementById('category-list');
const noResultsMessage = document.getElementById('no-results');

function getUniqueCategories() {
    const categories = new Set(allTerms.map(term => term.category).filter(c => c));
    return Array.from(categories).sort();
}

// 1. RENDER CATEGORIES
function renderCategories() {
    const categories = getUniqueCategories();
    categoryList.innerHTML = '';
    
    // Add "All Categories" button first
    const allLi = document.createElement('li');
    allLi.className = 'category-item';
    const allButton = document.createElement('button');
    allButton.className = 'all-category-btn category-filter-btn active';
    allButton.textContent = 'All Categories';
    allButton.setAttribute('data-category', 'All');
    allLi.appendChild(allButton);
    categoryList.appendChild(allLi);

    categories.forEach(category => {
        const li = document.createElement('li');
        li.className = 'category-item';
        
        const button = document.createElement('button');
        button.className = 'category-filter-btn';
        button.textContent = category;
        button.setAttribute('data-category', category);
        
        li.appendChild(button);
        categoryList.appendChild(li);
    });
}

// 2. RENDER TERMS
function renderTerms(filter = '', category = 'All') {
    let filteredTerms = allTerms;
    
    // 1. Filter by Category
    if (category !== 'All') {
        filteredTerms = filteredTerms.filter(term => term.category === category);
    }
    
    // 2. Filter by Search (Case-insensitive match)
    if (filter) {
        const lowerFilter = filter.toLowerCase();
        filteredTerms = filteredTerms.filter(term => 
            term.term.toLowerCase().includes(lowerFilter) || 
            term.definition.toLowerCase().includes(lowerFilter) ||
            (term.example && term.example.toLowerCase().includes(lowerFilter)) ||
            term.category.toLowerCase().includes(lowerFilter)
        );
    }
    
    // 3. Display Results
    termsOutput.innerHTML = '';
    
    if (filteredTerms.length === 0) {
        noResultsMessage.style.display = 'block';
    } else {
        noResultsMessage.style.display = 'none';
        
        filteredTerms.forEach(term => {
            const card = document.createElement('div');
            card.className = 'term-card';
            card.setAttribute('data-term', term.term);

            const termTitle = document.createElement('h3');
            termTitle.className = 'term-title';
            termTitle.textContent = term.term;

            const snippet = document.createElement('p');
            snippet.className = 'term-brief';
            snippet.textContent = term.definition;

            const detailsBtn = document.createElement('button');
            detailsBtn.className = 'view-details-btn';
            detailsBtn.textContent = 'View Details';
            
            detailsBtn.addEventListener('click', (e) => {
                e.stopPropagation(); 
                const termData = allTerms.find(t => t.term === term.term);
                if (termData) {
                    openModal(termData);
                }
            });
            
            card.addEventListener('click', () => {
                 const termData = allTerms.find(t => t.term === term.term);
                if (termData) {
                    openModal(termData);
                }
            });


            card.appendChild(termTitle);
            card.appendChild(snippet);
            card.appendChild(detailsBtn);
            termsOutput.appendChild(card);
        });
    }
}

// 3. MODAL FUNCTIONS
function openModal(termData) {
    const modal = document.getElementById('term-modal');
    const modalTerm = document.getElementById('modal-term');
    const modalCategory = document.getElementById('modal-category');
    const modalDefinition = document.getElementById('modal-definition');
    const modalExample = document.getElementById('modal-example');
    
    if (modal && modalTerm && modalDefinition && modalExample) {
        modalTerm.textContent = termData.term;
        modalCategory.textContent = termData.category;
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


// 4. TAB LOGIC (Must be globally accessible since HTML uses onclick)
function openTab(evt, tabName) {
    // Deactivate all tab content
    document.querySelectorAll(".tab-content").forEach(el => el.classList.remove("active"));
    
    // Deactivate all main tab buttons
    document.querySelectorAll(".tab-btn").forEach(el => el.classList.remove("active"));
    
    // Deactivate all sidebar nav buttons
    document.querySelectorAll(".sidebar button").forEach(el => el.classList.remove("active-nav"));

    // Activate selected tab content and button
    document.getElementById(tabName).classList.add("active");
    if (evt && evt.currentTarget) {
        evt.currentTarget.classList.add("active");
    }

    // Update corresponding sidebar button state
    const sidebarBtnId = (tabName === 'terms' ? 'nav-terms-btn' : 'nav-video-btn');
    const sidebarButton = document.getElementById(sidebarBtnId);
    if (sidebarButton) {
        sidebarButton.classList.add("active-nav");
    }
}

// Function to switch tab from sidebar
function openTabByName(tabName, clickedButton) {
    // 1. Deactivate all sidebar buttons
    document.querySelectorAll(".sidebar button").forEach(el => el.classList.remove("active-nav"));
    // 2. Activate the clicked sidebar button
    clickedButton.classList.add("active-nav");

    // 3. Deactivate all tab content and main tab buttons
    document.querySelectorAll(".tab-content").forEach(el => el.classList.remove("active"));
    document.querySelectorAll(".tab-btn").forEach(el => el.classList.remove("active"));
    
    // 4. Activate the selected tab content
    document.getElementById(tabName).classList.add("active");

    // 5. Activate the corresponding main tab button
    const mainTabButton = Array.from(document.querySelectorAll(".tab-btn")).find(btn => 
        btn.textContent.trim().toLowerCase().includes(tabName.replace('-', ' '))
    );
    if (mainTabButton) {
        mainTabButton.classList.add("active");
    }
}

// Ensure openTab and openTabByName are available globally
window.openTab = openTab;
window.openTabByName = openTabByName;


// 5. INITIALIZATION AND EVENT LISTENERS
document.addEventListener('DOMContentLoaded', () => {
    // Set initial active state for the sidebar and main tab
    const initialSidebarBtn = document.getElementById('nav-terms-btn');
    if (initialSidebarBtn) initialSidebarBtn.classList.add('active-nav');
    
    // Set the term count
    const termCountElement = document.getElementById('term-count');
    if (termCountElement) {
        termCountElement.textContent = allTerms.length;
    }

    // 1. Render categories and terms
    renderCategories();
    renderTerms('','All');

    // 2. Attach Category Filtering Listener
    categoryList.addEventListener('click', (event) => {
        const target = event.target;
        if (target.matches('.category-filter-btn')) {
            const category = target.getAttribute('data-category');
            currentCategory = category;
            searchInput.value = ''; // Clear search when selecting category
            
            // Update active state
            document.querySelectorAll('.category-filter-btn').forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');
            
            renderTerms('', category);
        }
    });

    // 3. Attach Search Listener
    searchInput.addEventListener('input', (e) => {
        // Clear category selection when searching
        currentCategory = 'All';
        document.querySelectorAll('.category-filter-btn').forEach(btn => btn.classList.remove('active'));
        const allCategoryBtn = document.querySelector('.all-category-btn');
        if(allCategoryBtn) allCategoryBtn.classList.add('active');
        
        renderTerms(e.target.value, 'All');
    });

    // 4. Modal Close Listeners
    const closeButton = document.querySelector('.close-button');
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('term-modal');
        if (e.target === modal) {
            closeModal();
        }
    });
});
