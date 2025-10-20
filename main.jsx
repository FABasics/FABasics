import React, { useState, useMemo } from 'react';
import { Search, BookOpen, TrendingUp, DollarSign, FileText, Building, Users, Calculator, BarChart3, Menu, X, Star, Download } from 'lucide-react';

const AccountingTerms = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTerm, setSelectedTerm] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [activeTab, setActiveTab] = useState('browse');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setActiveTab('browse');
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setShowFavoritesOnly(false);
  };

  const toggleFavorite = (termName) => {
    setFavorites(prev => 
      prev.includes(termName) 
        ? prev.filter(f => f !== termName)
        : [...prev, termName]
    );
  };

  const exportFavorites = () => {
    const favTerms = allTerms.filter(t => favorites.includes(t.term));
    const text = favTerms.map(t => 
      `${t.term} (${t.category})\n${t.definition}\nExample: ${t.example}\n\n`
    ).join('');
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'accounting-terms-favorites.txt';
    a.click();
  };

  const categories = [
    { name: 'All', icon: BookOpen, color: 'bg-blue-500' },
    { name: 'Financial Statements', icon: FileText, color: 'bg-green-500' },
    { name: 'Assets Liabilities', icon: Building, color: 'bg-purple-500' },
    { name: 'Revenue Expenses', icon: TrendingUp, color: 'bg-orange-500' },
    { name: 'Ratios Analysis', icon: BarChart3, color: 'bg-red-500' },
    { name: 'Taxation', icon: Calculator, color: 'bg-yellow-500' },
    { name: 'Business Entities', icon: Users, color: 'bg-indigo-500' },
    { name: 'Principles', icon: DollarSign, color: 'bg-pink-500' },
    { name: 'Shark Tank', icon: TrendingUp, color: 'bg-cyan-500' },
    { name: 'GST Tax', icon: Calculator, color: 'bg-emerald-500' },
    { name: 'Investment', icon: DollarSign, color: 'bg-violet-500' },
    { name: 'Banking', icon: Building, color: 'bg-rose-500' },
    { name: 'Auditing', icon: FileText, color: 'bg-amber-500' },
    { name: 'Cost Accounting', icon: Calculator, color: 'bg-lime-500' },
    { name: 'Management', icon: Users, color: 'bg-teal-500' }
  ];

  const allTerms = [
    // Financial Statements (15 terms)
    { term: "Balance Sheet", category: "Financial Statements", definition: "Financial statement reporting assets, liabilities, and equity.", example: "Company with $500K assets, $200K liabilities has $300K equity." },
    { term: "Income Statement", category: "Financial Statements", definition: "Shows revenues, expenses, and net income.", example: "Revenue $1M minus expenses $700K equals net income $300K." },
    { term: "Cash Flow Statement", category: "Financial Statements", definition: "Shows cash from operations, investing, financing.", example: "$100K operations, -$50K investing, $20K financing." },
    { term: "Retained Earnings", category: "Financial Statements", definition: "Cumulative net income minus dividends.", example: "Start $200K plus $50K income minus $10K dividends." },
    { term: "Trial Balance", category: "Financial Statements", definition: "Lists accounts to verify debits equal credits.", example: "Total debits $500K equals credits $500K." },
    { term: "Pro Forma", category: "Financial Statements", definition: "Projected financial statements.", example: "Forecast 2025 revenue at $2M based on 20% growth." },
    { term: "Consolidated Statements", category: "Financial Statements", definition: "Combined parent and subsidiary statements.", example: "Amazon includes AWS and Whole Foods." },
    { term: "Statement of Changes in Equity", category: "Financial Statements", definition: "Shows movements in shareholders' equity.", example: "Beginning equity plus income minus dividends." },
    { term: "Notes to Financial Statements", category: "Financial Statements", definition: "Additional disclosures and explanations.", example: "Accounting policies, contingencies, related party transactions." },
    { term: "Comparative Statements", category: "Financial Statements", definition: "Side-by-side comparison of multiple periods.", example: "2024 vs 2023 revenue shows 15% growth." },
    { term: "Common Size Statement", category: "Financial Statements", definition: "All items expressed as percentage of base.", example: "Every line item as % of total revenue." },
    { term: "10-K", category: "Financial Statements", definition: "Annual report filed with SEC.", example: "Comprehensive annual financial information." },
    { term: "10-Q", category: "Financial Statements", definition: "Quarterly report filed with SEC.", example: "Less detailed than 10-K, filed quarterly." },
    { term: "Earnings Per Share", category: "Financial Statements", definition: "Net income divided by outstanding shares.", example: "$1M income, 100K shares equals $10 EPS." },
    { term: "Comprehensive Income", category: "Financial Statements", definition: "Net income plus other comprehensive income.", example: "Includes unrealized gains on investments." },

    // Assets & Liabilities (20 terms)
    { term: "Asset", category: "Assets Liabilities", definition: "Resource with economic value.", example: "Cash $50K, inventory $100K, equipment $200K." },
    { term: "Liability", category: "Assets Liabilities", definition: "Obligation owed to others.", example: "Bank loan $100K, supplier bills $50K." },
    { term: "Current Assets", category: "Assets Liabilities", definition: "Convertible to cash within one year.", example: "Cash, receivables, inventory." },
    { term: "Fixed Assets", category: "Assets Liabilities", definition: "Long-term tangible assets.", example: "Factory, trucks, equipment." },
    { term: "Accounts Receivable", category: "Assets Liabilities", definition: "Money owed by customers.", example: "Sold $10K on 30-day terms." },
    { term: "Accounts Payable", category: "Assets Liabilities", definition: "Money owed to suppliers.", example: "Received $5K inventory, due in 45 days." },
    { term: "Inventory", category: "Assets Liabilities", definition: "Goods for sale or production materials.", example: "Store has $100K shoes in stock." },
    { term: "Prepaid Expenses", category: "Assets Liabilities", definition: "Advance payments for future services.", example: "Paid $12K annual insurance upfront." },
    { term: "Accrued Expenses", category: "Assets Liabilities", definition: "Incurred but unpaid expenses.", example: "Employee worked December, paid January." },
    { term: "Intangible Assets", category: "Assets Liabilities", definition: "Non-physical assets with value.", example: "Patents, trademarks, goodwill." },
    { term: "Goodwill", category: "Assets Liabilities", definition: "Excess purchase price over fair value.", example: "Bought $5M company for $7M, $2M goodwill." },
    { term: "Depreciation", category: "Assets Liabilities", definition: "Asset cost allocation over useful life.", example: "$100K equipment, 10-year life equals $10K annually." },
    { term: "Accumulated Depreciation", category: "Assets Liabilities", definition: "Total depreciation recorded.", example: "$100K equipment, $20K depreciated, $80K book value." },
    { term: "Current Liabilities", category: "Assets Liabilities", definition: "Due within one year.", example: "Credit card, quarterly taxes, short-term loans." },
    { term: "Long-term Liabilities", category: "Assets Liabilities", definition: "Due beyond one year.", example: "20-year mortgage, 10-year bonds." },
    { term: "Deferred Revenue", category: "Assets Liabilities", definition: "Payment before delivery.", example: "Annual subscription $1200 paid upfront." },
    { term: "Working Capital", category: "Assets Liabilities", definition: "Current assets minus current liabilities.", example: "$300K assets minus $150K liabilities equals $150K." },
    { term: "Book Value", category: "Assets Liabilities", definition: "Asset cost minus accumulated depreciation.", example: "$100K cost minus $30K depreciation equals $70K." },
    { term: "Fair Value", category: "Assets Liabilities", definition: "Current market value of asset.", example: "Land worth $500K today, bought for $300K." },
    { term: "Contingent Liability", category: "Assets Liabilities", definition: "Potential future obligation.", example: "Lawsuit pending, may owe $1M if lose." },

    // Revenue & Expenses (18 terms)
    { term: "Revenue", category: "Revenue Expenses", definition: "Income from operations.", example: "Sold 1000 units at $50 equals $50K revenue." },
    { term: "Expense", category: "Revenue Expenses", definition: "Costs incurred in operations.", example: "Rent $5K, salaries $50K, utilities $2K." },
    { term: "COGS", category: "Revenue Expenses", definition: "Cost of Goods Sold - direct production costs.", example: "Sold 100 shirts for $2K, cost $800 to make." },
    { term: "Gross Profit", category: "Revenue Expenses", definition: "Revenue minus COGS.", example: "$100K revenue minus $40K COGS equals $60K." },
    { term: "Net Income", category: "Revenue Expenses", definition: "Revenue minus all expenses.", example: "$500K revenue minus $400K expenses equals $100K." },
    { term: "Operating Income", category: "Revenue Expenses", definition: "Profit from core business operations.", example: "Gross profit minus operating expenses." },
    { term: "EBITDA", category: "Revenue Expenses", definition: "Earnings Before Interest, Taxes, Depreciation, Amortization.", example: "$100K operating income plus $20K depreciation." },
    { term: "Operating Expenses", category: "Revenue Expenses", definition: "Day-to-day business costs.", example: "Salaries, rent, utilities, marketing, insurance." },
    { term: "Variable Costs", category: "Revenue Expenses", definition: "Costs that change with production volume.", example: "Raw materials scale with output." },
    { term: "Fixed Costs", category: "Revenue Expenses", definition: "Costs constant regardless of volume.", example: "Rent $5K monthly whether produce 100 or 1000 units." },
    { term: "Break-Even Point", category: "Revenue Expenses", definition: "Sales level where revenue equals costs.", example: "Need to sell 1000 units at $50 to cover $50K costs." },
    { term: "Contribution Margin", category: "Revenue Expenses", definition: "Sales price minus variable cost per unit.", example: "$100 price minus $60 variable equals $40 margin." },
    { term: "Net Revenue", category: "Revenue Expenses", definition: "Revenue minus returns and discounts.", example: "$100K gross minus $5K returns minus $3K discounts." },
    { term: "Interest Expense", category: "Revenue Expenses", definition: "Cost of borrowing money.", example: "$100K loan at 6% equals $6K annual interest." },
    { term: "Amortization", category: "Revenue Expenses", definition: "Intangible asset write-off over time.", example: "$50K patent over 10 years equals $5K annually." },
    { term: "Bad Debt Expense", category: "Revenue Expenses", definition: "Estimated uncollectible receivables.", example: "Estimate 3% of credit sales won't be collected." },
    { term: "Salaries Expense", category: "Revenue Expenses", definition: "Employee compensation costs.", example: "Monthly payroll $50K for all employees." },
    { term: "Rent Expense", category: "Revenue Expenses", definition: "Facility rental costs.", example: "Office rent $5K per month, warehouse $8K." },

    // Ratios & Analysis (15 terms)
    { term: "Current Ratio", category: "Ratios Analysis", definition: "Current assets divided by current liabilities.", example: "$200K assets divided by $100K liabilities equals 2.0." },
    { term: "ROA", category: "Ratios Analysis", definition: "Return on Assets - net income divided by assets.", example: "$50K income divided by $500K assets equals 10%." },
    { term: "ROE", category: "Ratios Analysis", definition: "Return on Equity - net income divided by equity.", example: "$100K income divided by $500K equity equals 20%." },
    { term: "Debt to Equity Ratio", category: "Ratios Analysis", definition: "Total debt divided by shareholders equity.", example: "$500K debt divided by $500K equity equals 1.0." },
    { term: "Quick Ratio", category: "Ratios Analysis", definition: "Liquid assets divided by current liabilities.", example: "Cash and receivables divided by liabilities." },
    { term: "Profit Margin", category: "Ratios Analysis", definition: "Net income divided by revenue.", example: "$50K income divided by $500K revenue equals 10%." },
    { term: "Gross Margin", category: "Ratios Analysis", definition: "Gross profit divided by revenue.", example: "$300K profit divided by $500K revenue equals 60%." },
    { term: "Operating Margin", category: "Ratios Analysis", definition: "Operating income divided by revenue.", example: "$80K divided by $500K equals 16%." },
    { term: "P/E Ratio", category: "Ratios Analysis", definition: "Price to Earnings - stock price divided by EPS.", example: "$50 stock divided by $5 EPS equals 10x." },
    { term: "Asset Turnover", category: "Ratios Analysis", definition: "Revenue divided by average total assets.", example: "$1M revenue divided by $500K assets equals 2x." },
    { term: "Inventory Turnover", category: "Ratios Analysis", definition: "COGS divided by average inventory.", example: "$400K COGS divided by $100K inventory equals 4x." },
    { term: "Days Sales Outstanding", category: "Ratios Analysis", definition: "Average days to collect receivables.", example: "365 days divided by receivables turnover." },
    { term: "Burn Rate", category: "Ratios Analysis", definition: "Rate of spending cash reserves.", example: "Startup spending $50K monthly on operations." },
    { term: "Runway", category: "Ratios Analysis", definition: "Time before running out of cash.", example: "$500K cash divided by $100K burn equals 5 months." },
    { term: "Interest Coverage", category: "Ratios Analysis", definition: "EBIT divided by interest expense.", example: "$200K EBIT divided by $20K interest equals 10x." },

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

    // GST Tax (15 terms)
    { term: "GST", category: "GST Tax", definition: "Goods and Services Tax - comprehensive indirect tax.", example: "India GST rates: 5%, 12%, 18%, 28%." },
    { term: "Input Tax Credit", category: "GST Tax", definition: "Tax paid on purchases claimed against output.", example: "Paid 18 rupees GST on purchase, reduce output by 18." },
    { term: "CGST", category: "GST Tax", definition: "Central Goods and Services Tax.", example: "Intra-state sale at 18%, CGST is 9%." },
    { term: "SGST", category: "GST Tax", definition: "State Goods and Services Tax.", example: "Intra-state sale at 18%, SGST is 9%." },
    { term: "IGST", category: "GST Tax", definition: "Integrated GST on inter-state supply.", example: "Delhi to Mumbai sale, charge 18% IGST." },
    { term: "GST Registration", category: "GST Tax", definition: "Mandatory enrollment for businesses.", example: "Annual turnover over 40 lakhs must register." },
    { term: "GSTIN", category: "GST Tax", definition: "15-digit GST Identification Number.", example: "Format: state code plus PAN plus entity code." },
    { term: "GSTR-1", category: "GST Tax", definition: "Return for outward supplies details.", example: "File by 11th showing all monthly sales." },
    { term: "GSTR-3B", category: "GST Tax", definition: "Summary return for liabilities and credit.", example: "Monthly summary filed by 20th." },
    { term: "Reverse Charge Mechanism", category: "GST Tax", definition: "Recipient pays GST instead of supplier.", example: "Company hiring unregistered lawyer pays GST." },
    { term: "Composition Scheme", category: "GST Tax", definition: "Simplified compliance for small businesses.", example: "Pay 1% on turnover, cannot claim ITC." },
    { term: "E-Way Bill", category: "GST Tax", definition: "Electronic document for goods movement.", example: "Transporting goods over 50,000 rupees needs bill." },
    { term: "HSN Code", category: "GST Tax", definition: "Harmonized System of Nomenclature for goods.", example: "Coffee beans HSN code 0901 determines GST rate." },
    { term: "Place of Supply", category: "GST Tax", definition: "Location determining applicable GST.", example: "Destination determines CGST/SGST or IGST." },
    { term: "GST Audit", category: "GST Tax", definition: "Examination of records for compliance.", example: "Turnover over 5 crore requires annual audit." },

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
    { term: "Customer Acquisition Cost", category: "Shark Tank", definition: "CAC - cost to get customer.", example: "Spend $10K marketing, get 100 customers equals $100 CAC." },
    { term: "Lifetime Value", category: "Shark Tank", definition: "LTV - total customer revenue.", example: "Customer spends $500 over lifetime." },
    { term: "Path to Profitability", category: "Shark Tank", definition: "Plan to become profitable.", example: "Hit profitability at 1000 customers in 18 months." },
    { term: "Market Size", category: "Shark Tank", definition: "Total addressable market value.", example: "Pet food market $50B annually in US." },
    { term: "Scalability", category: "Shark Tank", definition: "Ability to grow without proportional costs.", example: "Software scales, physical products harder to scale." },

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

    // Banking (12 terms)
    { term: "Loan", category: "Banking", definition: "Money borrowed with repayment obligation.", example: "Bank loan $100K at 6% for 5 years." },
    { term: "Interest Rate", category: "Banking", definition: "Cost of borrowing expressed as percentage.", example: "6% annual interest on $100K loan equals $6K per year." },
    { term: "Mortgage", category: "Banking", definition: "Loan for purchasing real estate.", example: "$400K 30-year mortgage at 5% interest." },
    { term: "Credit Score", category: "Banking", definition: "Numerical rating of creditworthiness.", example: "FICO score 750 considered very good credit." },
    { term: "Compound Interest", category: "Banking", definition: "Interest on principal plus accumulated interest.", example: "$1000 at 10% compounds to $1100, then $1210." },
    { term: "APR", category: "Banking", definition: "Annual Percentage Rate including fees.", example: "Credit card 18% APR includes interest and fees." },
    { term: "Line of Credit", category: "Banking", definition: "Revolving borrowing arrangement.", example: "$50K credit line, draw and repay as needed." },
    { term: "Collateral", category: "Banking", definition: "Asset pledged to secure loan.", example: "House serves as collateral for mortgage loan." },
    { term: "Principal", category: "Banking", definition: "Original amount of loan or investment.", example: "Borrowed $100K principal, owe interest on this amount." },
    { term: "Certificate of Deposit", category: "Banking", definition: "Time deposit with fixed rate and term.", example: "$10K CD at 4% for 12 months." },
    { term: "Refinancing", category: "Banking", definition: "Replacing existing loan with new one.", example: "Refinance mortgage from 6% to 4% to save money." },
    { term: "Default", category: "Banking", definition: "Failure to meet debt obligations.", example: "Missed 3 loan payments, loan in default." },

    // Auditing (10 terms)
    { term: "Audit", category: "Auditing", definition: "Independent examination of financial records.", example: "External auditor reviews company books annually." },
    { term: "Internal Controls", category: "Auditing", definition: "Processes to ensure accurate reporting.", example: "Require two signatures on checks over $5K." },
    { term: "Material Misstatement", category: "Auditing", definition: "Error significant enough to affect decisions.", example: "Overstated revenue by $1M is material for $10M company." },
    { term: "Audit Opinion", category: "Auditing", definition: "Auditor's assessment of financial statements.", example: "Unqualified opinion means statements are fairly presented." },
    { term: "SOX Compliance", category: "Auditing", definition: "Meeting Sarbanes-Oxley requirements.", example: "Public companies must certify internal controls." },
    { term: "Internal Audit", category: "Auditing", definition: "Company's own examination of controls.", example: "Internal auditor checks expense reports for fraud." },
    { term: "External Audit", category: "Auditing", definition: "Independent third-party examination.", example: "Deloitte audits public company financial statements." },
    { term: "Audit Trail", category: "Auditing", definition: "Documented path of transactions.", example: "Can trace every journal entry to source document." },
    { term: "Segregation of Duties", category: "Auditing", definition: "Separate roles to prevent fraud.", example: "Different people authorize, record, and handle cash." },
    { term: "Fraud Triangle", category: "Auditing", definition: "Pressure, opportunity, rationalization for fraud.", example: "Financial pressure plus weak controls equals fraud risk." },

    // Cost Accounting (12 terms)
    { term: "Cost Accounting", category: "Cost Accounting", definition: "Tracking and analyzing costs of production.", example: "Calculate cost per unit to set pricing." },
    { term: "Direct Materials", category: "Cost Accounting", definition: "Raw materials in finished product.", example: "Steel in car manufacturing." },
    { term: "Direct Labor", category: "Cost Accounting", definition: "Wages of production workers.", example: "Assembly line worker wages." },
    { term: "Manufacturing Overhead", category: "Cost Accounting", definition: "Indirect production costs.", example: "Factory rent, utilities, supervisors." },
    { term: "Variance Analysis", category: "Cost Accounting", definition: "Comparing actual to budgeted costs.", example: "Materials cost $5K over budget, investigate why." },
    { term: "Job Costing", category: "Cost Accounting", definition: "Tracking costs for specific projects.", example: "Construction project tracks materials and labor separately." },
    { term: "Process Costing", category: "Cost Accounting", definition: "Averaging costs over units produced.", example: "Oil refinery divides total costs by gallons produced." },
    { term: "Activity-Based Costing", category: "Cost Accounting", definition: "Allocating overhead based on activities.", example: "Setup costs allocated by number of production runs." },
    { term: "Standard Costing", category: "Cost Accounting", definition: "Using predetermined costs for planning.", example: "Standard cost $10 per unit, actual $11, variance $1." },
    { term: "Prime Cost", category: "Cost Accounting", definition: "Direct materials plus direct labor.", example: "$3 materials plus $2 labor equals $5 prime cost." },
    { term: "Conversion Cost", category: "Cost Accounting", definition: "Direct labor plus overhead.", example: "$2 labor plus $3 overhead equals $5 conversion." },
    { term: "Overhead Rate", category: "Cost Accounting", definition: "Overhead allocated per unit or hour.", example: "$100K overhead, 10K hours equals $10 per hour." },

    // Management (15 terms)
    { term: "Budget", category: "Management", definition: "Financial plan for specific period.", example: "Annual budget projects $1M revenue, $800K expenses." },
    { term: "KPI", category: "Management", definition: "Key Performance Indicator for success.", example: "Customer retention rate, profit margin, sales growth." },
    { term: "Variance", category: "Management", definition: "Difference between budget and actual.", example: "Budgeted $100K, spent $110K, unfavorable $10K variance." },
    { term: "Benchmarking", category: "Management", definition: "Comparing performance to standards.", example: "Compare profit margin to industry average." },
    { term: "Dashboard", category: "Management", definition: "Visual display of key metrics.", example: "Real-time display of sales, expenses, cash position." },
    { term: "Master Budget", category: "Management", definition: "Comprehensive budget including all areas.", example: "Sales, production, cash, capital budgets combined." },
    { term: "Operating Budget", category: "Management", definition: "Day-to-day income and expenses.", example: "Monthly operating budget for salaries and supplies." },
    { term: "Capital Budget", category: "Management", definition: "Long-term asset investments.", example: "Plan to buy $500K equipment over 3 years." },
    { term: "Cash Budget", category: "Management", definition: "Projected cash receipts and payments.", example: "Forecast $50K cash shortage in March." },
    { term: "Flexible Budget", category: "Management", definition: "Adjusts for actual activity levels.", example: "Budget for 1000 units vs actual 1200 units." },
    { term: "Zero-Based Budget", category: "Management", definition: "Justify every expense from scratch.", example: "Each department starts at zero, builds up budget." },
    { term: "Rolling Forecast", category: "Management", definition: "Continuously updated projection.", example: "Always maintain 12-month forward forecast." },
    { term: "Balanced Scorecard", category: "Management", definition: "Performance measurement across dimensions.", example: "Financial, customer, internal, learning perspectives." },
    { term: "Sensitivity Analysis", category: "Management", definition: "Testing impact of variable changes.", example: "What if sales drop 10% or costs rise 5%." },
    { term: "Scenario Planning", category: "Management", definition: "Preparing for different outcomes.", example: "Best case, worst case, most likely scenarios." },

    // Principles (15 terms)
    { term: "GAAP", category: "Principles", definition: "Generally Accepted Accounting Principles.", example: "US standard framework for financial reporting." },
    { term: "Accrual Accounting", category: "Principles", definition: "Record revenue when earned, expenses when incurred.", example: "Invoice in December, cash in January, record December." },
    { term: "Matching Principle", category: "Principles", definition: "Match expenses with related revenues.", example: "Record COGS in same period as related sales." },
    { term: "Double-Entry", category: "Principles", definition: "Every transaction affects two accounts.", example: "Debit cash, credit revenue for cash sale." },
    { term: "Conservatism", category: "Principles", definition: "Choose method that least overstates income.", example: "Record probable loss now, probable gain when realized." },
    { term: "IFRS", category: "Principles", definition: "International Financial Reporting Standards.", example: "Global accounting standards used in 140+ countries." },
    { term: "Cash Basis Accounting", category: "Principles", definition: "Record only when cash received or paid.", example: "Record sale when customer pays, not when invoiced." },
    { term: "Revenue Recognition", category: "Principles", definition: "When to record revenue earned.", example: "Recognize when product delivered and payment certain." },
    { term: "Consistency", category: "Principles", definition: "Use same methods period to period.", example: "If use FIFO, continue using FIFO each year." },
    { term: "Materiality", category: "Principles", definition: "Disclose information that affects decisions.", example: "$1M error material for $10M company, not $1B." },
    { term: "Full Disclosure", category: "Principles", definition: "Provide all relevant information.", example: "Disclose pending lawsuits in footnotes." },
    { term: "Going Concern", category: "Principles", definition: "Assume business continues indefinitely.", example: "Value assets at cost, not liquidation value." },
    { term: "Economic Entity", category: "Principles", definition: "Business separate from owner.", example: "Owner's personal expenses separate from business." },
    { term: "Historical Cost", category: "Principles", definition: "Record assets at purchase price.", example: "Land bought for $100K recorded at $100K, not current value." },
    { term: "Time Period", category: "Principles", definition: "Divide activity into reporting periods.", example: "Report quarterly and annually." },

    // Business Entities (10 terms)
    { term: "Corporation", category: "Business Entities", definition: "Legal entity separate from owners.", example: "Apple Inc, Microsoft Corporation." },
    { term: "LLC", category: "Business Entities", definition: "Limited Liability Company hybrid structure.", example: "Combines partnership flexibility with corporate protection." },
    { term: "Partnership", category: "Business Entities", definition: "Business owned by two or more people.", example: "Law firm with multiple partners sharing profits." },
    { term: "Sole Proprietorship", category: "Business Entities", definition: "Business owned by one person.", example: "Freelance consultant operating independently." },
    { term: "S Corporation", category: "Business Entities", definition: "Corp with pass-through taxation.", example: "Small corp avoiding double taxation, max 100 shareholders." },
    { term: "C Corporation", category: "Business Entities", definition: "Standard corporation with corporate tax.", example: "Large public companies like Amazon, Google." },
    { term: "Public Company", category: "Business Entities", definition: "Shares traded on public exchange.", example: "Tesla stock trades on NASDAQ." },
    { term: "Private Company", category: "Business Entities", definition: "Privately held, not publicly traded.", example: "SpaceX not publicly traded, privately owned." },
    { term: "Nonprofit", category: "Business Entities", definition: "Organization operating for mission not profit.", example: "Red Cross, charities, foundations." },
    { term: "Holding Company", category: "Business Entities", definition: "Owns controlling stakes in other companies.", example: "Berkshire Hathaway owns multiple businesses." },

    // Additional Financial Statements (10 terms)
    { term: "Statement of Cash Flows", category: "Financial Statements", definition: "Reports cash inflows and outflows.", example: "Operating, investing, financing activities." },
    { term: "Adjusted Trial Balance", category: "Financial Statements", definition: "Trial balance after adjusting entries.", example: "Includes accruals and deferrals before statements." },
    { term: "Post-Closing Trial Balance", category: "Financial Statements", definition: "Trial balance after closing entries.", example: "Only balance sheet accounts remain." },
    { term: "Income Summary", category: "Financial Statements", definition: "Temporary account for closing entries.", example: "Transfer revenue and expenses to retained earnings." },
    { term: "Management Discussion & Analysis", category: "Financial Statements", definition: "MD&A - narrative explanation of financials.", example: "Management explains trends and outlook." },
    { term: "Segment Reporting", category: "Financial Statements", definition: "Financial info by business segment.", example: "Report by geographic region or product line." },
    { term: "Interim Statements", category: "Financial Statements", definition: "Financial reports for periods less than a year.", example: "Monthly or quarterly financial statements." },
    { term: "Closing Entries", category: "Financial Statements", definition: "Entries to zero out temporary accounts.", example: "Close revenue and expense accounts to equity." },
    { term: "Adjusting Entries", category: "Financial Statements", definition: "End of period entries for accruals/deferrals.", example: "Accrue wages payable, defer unearned revenue." },
    { term: "Reversing Entries", category: "Financial Statements", definition: "Optional entries at start of new period.", example: "Reverse certain accruals from prior period." },

    // Additional Assets & Liabilities (15 terms)
    { term: "Marketable Securities", category: "Assets Liabilities", definition: "Short-term liquid investments.", example: "Treasury bills, commercial paper, stocks." },
    { term: "Trading Securities", category: "Assets Liabilities", definition: "Securities bought for short-term profit.", example: "Mark to market each period." },
    { term: "Available for Sale Securities", category: "Assets Liabilities", definition: "Investments held for indefinite period.", example: "Unrealized gains in other comprehensive income." },
    { term: "Held to Maturity Securities", category: "Assets Liabilities", definition: "Debt securities held until maturity.", example: "Bonds held at amortized cost." },
    { term: "Allowance for Doubtful Accounts", category: "Assets Liabilities", definition: "Contra-asset for uncollectible receivables.", example: "Estimate 2% of receivables uncollectible." },
    { term: "Notes Payable", category: "Assets Liabilities", definition: "Written debt obligation.", example: "Signed $50K promissory note, 5% interest." },
    { term: "Bonds Payable", category: "Assets Liabilities", definition: "Long-term debt securities.", example: "Issued $1M in 10-year bonds at 6%." },
    { term: "Warranty Liability", category: "Assets Liabilities", definition: "Estimated warranty costs.", example: "Estimate 5% of sales will need repairs." },
    { term: "Premium on Bonds", category: "Assets Liabilities", definition: "Bonds issued above face value.", example: "Issue $1M bonds for $1.05M, premium $50K." },
    { term: "Discount on Bonds", category: "Assets Liabilities", definition: "Bonds issued below face value.", example: "Issue $1M bonds for $950K, discount $50K." },
    { term: "Callable Bonds", category: "Assets Liabilities", definition: "Bonds issuer can redeem early.", example: "Company can call bonds after 5 years." },
    { term: "Convertible Bonds", category: "Assets Liabilities", definition: "Bonds convertible to stock.", example: "Convert each bond to 50 shares of stock." },
    { term: "Zero-Coupon Bonds", category: "Assets Liabilities", definition: "Bonds with no periodic interest.", example: "Buy for $600, receive $1000 at maturity." },
    { term: "Capital Lease Liability", category: "Assets Liabilities", definition: "Finance lease obligation.", example: "Record lease as if purchased with loan." },
    { term: "Operating Lease Liability", category: "Assets Liabilities", definition: "Short-term lease obligation.", example: "Office lease creates lease liability." },

    // Additional Revenue & Expenses (12 terms)
    { term: "Sales Revenue", category: "Revenue Expenses", definition: "Income from selling products.", example: "Sold merchandise for $500K this quarter." },
    { term: "Service Revenue", category: "Revenue Expenses", definition: "Income from providing services.", example: "Consulting fees $50K for the quarter." },
    { term: "Interest Revenue", category: "Revenue Expenses", definition: "Income from interest earned.", example: "Earned $5K interest on investments." },
    { term: "Dividend Revenue", category: "Revenue Expenses", definition: "Income from dividends received.", example: "Received $3K dividends from stock holdings." },
    { term: "Gain on Sale of Assets", category: "Revenue Expenses", definition: "Profit from selling assets.", example: "Sold equipment for $15K, book value $10K, gain $5K." },
    { term: "Loss on Sale of Assets", category: "Revenue Expenses", definition: "Loss from selling assets below book value.", example: "Sold equipment for $8K, book value $10K, loss $2K." },
    { term: "Utilities Expense", category: "Revenue Expenses", definition: "Electricity, water, gas costs.", example: "Monthly utilities $2K for operations." },
    { term: "Insurance Expense", category: "Revenue Expenses", definition: "Insurance premium costs.", example: "Annual business insurance $12K." },
    { term: "Advertising Expense", category: "Revenue Expenses", definition: "Marketing and promotion costs.", example: "Google Ads $10K monthly campaign." },
    { term: "Supplies Expense", category: "Revenue Expenses", definition: "Office and operational supplies.", example: "Monthly supplies $500 for office." },
    { term: "Professional Fees", category: "Revenue Expenses", definition: "Legal, accounting, consulting fees.", example: "Annual audit $15K, legal fees $8K." },
    { term: "Research & Development", category: "Revenue Expenses", definition: "R&D costs for new products.", example: "Spent $100K developing new software." },

    // Additional Ratios & Analysis (15 terms)
    { term: "Accounts Receivable Turnover", category: "Ratios Analysis", definition: "Credit sales divided by average AR.", example: "$600K sales, $100K AR equals 6x turnover." },
    { term: "Accounts Payable Turnover", category: "Ratios Analysis", definition: "Purchases divided by average AP.", example: "$480K purchases, $80K AP equals 6x." },
    { term: "Debt Service Coverage Ratio", category: "Ratios Analysis", definition: "Cash flow available to pay debt.", example: "$120K cash flow, $100K debt payments equals 1.2x." },
    { term: "Times Interest Earned", category: "Ratios Analysis", definition: "EBIT divided by interest expense.", example: "EBIT $200K, interest $20K equals 10x coverage." },
    { term: "Fixed Charge Coverage", category: "Ratios Analysis", definition: "Ability to cover fixed obligations.", example: "EBIT plus lease divided by interest plus lease." },
    { term: "Cash Ratio", category: "Ratios Analysis", definition: "Cash plus marketable securities over current liabilities.", example: "$150K cash, $100K liabilities equals 1.5x." },
    { term: "Dividend Yield", category: "Ratios Analysis", definition: "Annual dividend divided by stock price.", example: "$2 dividend, $50 stock price equals 4% yield." },
    { term: "Dividend Payout Ratio", category: "Ratios Analysis", definition: "Dividends divided by earnings.", example: "$40K dividends, $100K earnings equals 40%." },
    { term: "Book Value per Share", category: "Ratios Analysis", definition: "Equity divided by shares outstanding.", example: "$500K equity, 100K shares equals $5 per share." },
    { term: "Price to Sales Ratio", category: "Ratios Analysis", definition: "Market cap divided by revenue.", example: "$100M market cap, $50M revenue equals 2x." },
    { term: "Enterprise Value", category: "Ratios Analysis", definition: "Market cap plus debt minus cash.", example: "$100M cap plus $30M debt minus $10M cash." },
    { term: "EV to EBITDA", category: "Ratios Analysis", definition: "Enterprise value divided by EBITDA.", example: "$120M EV, $20M EBITDA equals 6x." },
    { term: "Return on Sales", category: "Ratios Analysis", definition: "Operating income divided by sales.", example: "$100K income, $1M sales equals 10%." },
    { term: "Capital Turnover", category: "Ratios Analysis", definition: "Sales divided by total capital.", example: "$2M sales, $800K capital equals 2.5x." },
    { term: "Equity Multiplier", category: "Ratios Analysis", definition: "Assets divided by equity.", example: "$1M assets, $500K equity equals 2x." },

    // Additional Taxation (13 terms)
    { term: "Alternative Minimum Tax", category: "Taxation", definition: "Parallel tax system ensuring minimum payment.", example: "Calculate both regular and AMT, pay higher." },
    { term: "Tax Bracket", category: "Taxation", definition: "Income range taxed at specific rate.", example: "10%, 12%, 22%, 24%, 32%, 35%, 37% brackets." },
    { term: "Marginal Tax Rate", category: "Taxation", definition: "Tax rate on last dollar earned.", example: "Next $1 earned taxed at 24% marginal rate." },
    { term: "Tax Shield", category: "Taxation", definition: "Reduction in taxes through deductions.", example: "$50K interest expense saves $10.5K in taxes." },
    { term: "Deferred Tax Asset", category: "Taxation", definition: "Future tax benefit from losses.", example: "$100K loss creates $21K deferred tax asset." },
    { term: "Deferred Tax Liability", category: "Taxation", definition: "Future tax obligation from timing differences.", example: "Accelerated depreciation creates future liability." },
    { term: "Section 179 Deduction", category: "Taxation", definition: "Immediate expensing of equipment.", example: "Deduct $1M equipment purchase immediately." },
    { term: "Bonus Depreciation", category: "Taxation", definition: "Additional first-year depreciation.", example: "100% bonus depreciation available." },
    { term: "Standard Deduction", category: "Taxation", definition: "Fixed deduction amount.", example: "$13,850 single, $27,700 married 2023." },
    { term: "Itemized Deductions", category: "Taxation", definition: "List of specific deductible expenses.", example: "Mortgage interest, state taxes, charity." },
    { term: "Estimated Tax Payments", category: "Taxation", definition: "Quarterly tax payments.", example: "Self-employed pay estimated taxes quarterly." },
    { term: "Tax Audit", category: "Taxation", definition: "IRS examination of tax return.", example: "Selected for audit, provide documentation." },
    { term: "Tax Extension", category: "Taxation", definition: "Additional time to file return.", example: "File extension for 6 more months." },

    // Additional GST Tax (10 terms)
    { term: "Tax Invoice", category: "GST Tax", definition: "Invoice showing GST separately.", example: "Must show GSTIN, HSN, tax amount." },
    { term: "Bill of Supply", category: "GST Tax", definition: "Bill for exempt or composition supplies.", example: "Used when tax invoice not required." },
    { term: "Credit Note", category: "GST Tax", definition: "Document reducing invoice value.", example: "Issue for returns or price reduction." },
    { term: "Debit Note", category: "GST Tax", definition: "Document increasing invoice value.", example: "Issue for additional charges after supply." },
    { term: "Annual Return GSTR-9", category: "GST Tax", definition: "Yearly GST summary.", example: "Filed annually by regular taxpayers." },
    { term: "Input Service Distributor", category: "GST Tax", definition: "Office distributing ITC.", example: "Head office distributes credit to branches." },
    { term: "Job Work", category: "GST Tax", definition: "Processing goods for another.", example: "Send materials for manufacturing." },
    { term: "Tax Deduction at Source", category: "GST Tax", definition: "TDS on GST payments.", example: "Government deducts 2% GST on payments." },
    { term: "Tax Collection at Source", category: "GST Tax", definition: "TCS by e-commerce operators.", example: "Amazon collects 1% GST from sellers." },
    { term: "GST Refund", category: "GST Tax", definition: "Claiming excess GST paid.", example: "Exports or input tax exceeding output tax." },

    // Additional Shark Tank (12 terms)
    { term: "Board Seat", category: "Shark Tank", definition: "Position on board of directors.", example: "Shark gets voting rights on major decisions." },
    { term: "Drag-Along Rights", category: "Shark Tank", definition: "Force minority to sell if majority sells.", example: "If 51% sells, others must sell too." },
    { term: "Anti-Dilution", category: "Shark Tank", definition: "Protection against ownership dilution.", example: "Maintain percentage in future funding rounds." },
    { term: "Liquidation Preference", category: "Shark Tank", definition: "Priority in getting money back if sold.", example: "Investor gets 2x investment before others paid." },
    { term: "Vesting Schedule", category: "Shark Tank", definition: "Equity earned over time.", example: "Founder equity vests over 4 years." },
    { term: "Cliff", category: "Shark Tank", definition: "Minimum time before vesting.", example: "1-year cliff before any equity vests." },
    { term: "Churn Rate", category: "Shark Tank", definition: "Customer loss rate.", example: "Lose 5% of customers monthly." },
    { term: "Retention Rate", category: "Shark Tank", definition: "Customer keeping rate.", example: "Retain 95% of customers monthly." },
    { term: "Monthly Recurring Revenue", category: "Shark Tank", definition: "MRR - predictable monthly income.", example: "100 subscribers at $50 equals $5K MRR." },
    { term: "Gross Merchandise Value", category: "Shark Tank", definition: "GMV - total sales value.", example: "Marketplace sold $1M products, GMV $1M." },
    { term: "Take Rate", category: "Shark Tank", definition: "Percentage kept from transactions.", example: "Marketplace keeps 15% of $1M GMV equals $150K." },
    { term: "Competitive Advantage", category: "Shark Tank", definition: "Edge over competitors.", example: "Patented technology, brand recognition." },

    // Additional Investment (8 terms)
    { term: "Down Round", category: "Investment", definition: "Funding at lower valuation than previous.", example: "Valued at $10M, new round at $8M." },
    { term: "Up Round", category: "Investment", definition: "Funding at higher valuation.", example: "Series A at $5M, Series B at $20M." },
    { term: "Bridge Round", category: "Investment", definition: "Short-term funding between major rounds.", example: "$500K to reach profitability before Series B." },
    { term: "Crowdfunding", category: "Investment", definition: "Raising money from many small investors.", example: "Kickstarter campaign raised $200K from 1000 backers." },
    { term: "Lock-up Period", category: "Investment", definition: "Time insiders cannot sell shares.", example: "6-month lock-up after IPO." },
    { term: "Product Market Fit", category: "Investment", definition: "Product satisfies strong market demand.", example: "Customers love it, organic growth accelerating." },
    { term: "Pivot", category: "Investment", definition: "Strategic change in business model.", example: "Instagram started as location app, pivoted to photos." },
    { term: "Leveraged Buyout", category: "Investment", definition: "LBO - buying with borrowed money.", example: "PE firm borrows $80M to buy $100M company." },

    // Additional Banking (8 terms)
    { term: "Overdraft", category: "Banking", definition: "Spending more than account balance.", example: "Account balance $100, spent $150, overdraft $50." },
    { term: "Simple Interest", category: "Banking", definition: "Interest only on principal.", example: "$1000 at 10% simple interest earns $100 yearly." },
    { term: "Amortization Schedule", category: "Banking", definition: "Table showing loan payment breakdown.", example: "Monthly payment split between principal and interest." },
    { term: "Foreclosure", category: "Banking", definition: "Lender seizes property for non-payment.", example: "Failed to pay mortgage, bank foreclosed on house." },
    { term: "Home Equity", category: "Banking", definition: "Property value minus mortgage balance.", example: "House worth $500K, owe $300K, equity is $200K." },
    { term: "Secured Loan", category: "Banking", definition: "Loan backed by collateral.", example: "Car loan secured by the vehicle itself." },
    { term: "Unsecured Loan", category: "Banking", definition: "Loan not backed by collateral.", example: "Personal loan based only on creditworthiness." },
    { term: "Money Market Account", category: "Banking", definition: "Savings account with higher interest rate.", example: "Money market pays 3% vs regular savings 1%." },

    // BASICS: Fundamental Accounting Concepts (25 terms)
    { term: "Accounting Equation", category: "Principles", definition: "Assets = Liabilities + Equity. Foundation of double-entry bookkeeping.", example: "$100K assets = $40K liabilities + $60K equity." },
    { term: "Debit", category: "Principles", definition: "Left side entry that increases assets and expenses, decreases liabilities and equity.", example: "Debit cash $1000 when receiving payment." },
    { term: "Credit", category: "Principles", definition: "Right side entry that increases liabilities and equity, decreases assets and expenses.", example: "Credit revenue $1000 when making sale." },
    { term: "Journal Entry", category: "Principles", definition: "Record of a transaction with debits and credits.", example: "Debit Cash $500, Credit Revenue $500 for sale." },
    { term: "General Ledger", category: "Principles", definition: "Master record containing all accounts and transactions.", example: "All journal entries posted to respective accounts in ledger." },
    { term: "T-Account", category: "Principles", definition: "Visual representation of account with debits on left, credits on right.", example: "Cash T-account shows increases on left, decreases on right." },
    { term: "Chart of Accounts", category: "Principles", definition: "Complete list of all accounts used by a company.", example: "101-Cash, 201-Accounts Payable, 301-Common Stock, 401-Revenue." },
    { term: "Normal Balance", category: "Principles", definition: "Side where account increases (debit or credit).", example: "Assets have debit normal balance, liabilities have credit." },
    { term: "Contra Account", category: "Principles", definition: "Account that offsets another account's balance.", example: "Accumulated Depreciation reduces Equipment account." },
    { term: "Posting", category: "Principles", definition: "Transferring journal entry amounts to ledger accounts.", example: "Post $1000 cash debit from journal to cash ledger account." },
    { term: "Source Document", category: "Principles", definition: "Original record providing transaction evidence.", example: "Invoice, receipt, check stub, purchase order." },
    { term: "Account", category: "Principles", definition: "Individual record tracking specific asset, liability, equity, revenue, or expense.", example: "Cash account tracks all cash receipts and payments." },
    { term: "Footing", category: "Principles", definition: "Sum of debit or credit column in an account.", example: "Total debits $5000, total credits $3000, debit balance $2000." },
    { term: "Trial Balance Purpose", category: "Principles", definition: "Verifies total debits equal total credits before preparing statements.", example: "Catch mathematical errors but not all mistakes." },
    { term: "Fiscal Year", category: "Principles", definition: "12-month accounting period, may differ from calendar year.", example: "July 1 to June 30 is fiscal year for many governments." },
    { term: "Accounting Period", category: "Principles", definition: "Time span for which financial statements are prepared.", example: "Monthly, quarterly, or annual reporting periods." },
    { term: "Calendar Year", category: "Principles", definition: "January 1 to December 31 accounting period.", example: "Most businesses use calendar year for reporting." },
    { term: "Temporary Accounts", category: "Principles", definition: "Revenue, expense, and dividend accounts closed each period.", example: "Closed to Retained Earnings at year-end, start next year at zero." },
    { term: "Permanent Accounts", category: "Principles", definition: "Asset, liability, and equity accounts that carry balances forward.", example: "Balance sheet accounts continue from period to period." },
    { term: "Owner's Equity", category: "Principles", definition: "Owner's claim on business assets after liabilities.", example: "Assets $100K minus Liabilities $40K equals Owner's Equity $60K." },
    { term: "Stockholders' Equity", category: "Principles", definition: "Shareholders' ownership interest in corporation.", example: "Common Stock + Retained Earnings + Additional Paid-In Capital." },
    { term: "Drawing", category: "Principles", definition: "Owner withdrawal of assets from business (sole proprietorship/partnership).", example: "Owner withdraws $5000 cash for personal use." },
    { term: "Dividends", category: "Principles", definition: "Distribution of corporate earnings to shareholders.", example: "Declare $50K dividend to shareholders, reduces retained earnings." },
    { term: "Par Value", category: "Principles", definition: "Stated value assigned to each share of stock.", example: "Common stock par value $1 per share." },
    { term: "Paid-in Capital", category: "Principles", definition: "Amount stockholders paid for shares above par value.", example: "Sell 1000 shares $10 par for $15 each, paid-in capital $5000." },

    // BEGINNER: Building Block Concepts (25 terms)
    { term: "Accrued Revenue", category: "Revenue Expenses", definition: "Revenue earned but not yet received in cash.", example: "Performed $5K consulting work, client pays next month, accrue revenue now." },
    { term: "Accrued Expense", category: "Revenue Expenses", definition: "Expense incurred but not yet paid in cash.", example: "Employees worked December, paid January, accrue wages expense December." },
    { term: "Unearned Revenue", category: "Assets Liabilities", definition: "Cash received before earning revenue (liability).", example: "Received $12K for annual subscription upfront, liability until earned." },
    { term: "Prepaid Expense", category: "Assets Liabilities", definition: "Cash paid before expense is incurred (asset).", example: "Paid $12K insurance for year, asset until coverage period passes." },
    { term: "Cash vs Accrual Basis", category: "Principles", definition: "Cash recognizes when money changes hands; accrual when earned/incurred.", example: "Cash: record when paid. Accrual: record when work done." },
    { term: "Straight-Line Depreciation", category: "Assets Liabilities", definition: "Equal depreciation expense each period over asset's useful life.", example: "$10K equipment, 5-year life, $0 salvage = $2K annual depreciation." },
    { term: "Declining Balance Depreciation", category: "Assets Liabilities", definition: "Accelerated method with higher expense in early years.", example: "Double declining balance: 40% of book value each year for 5-year asset." },
    { term: "Units of Production Depreciation", category: "Assets Liabilities", definition: "Depreciation based on actual usage or output.", example: "Machine depreciated per units produced, not time." },
    { term: "Salvage Value", category: "Assets Liabilities", definition: "Estimated value of asset at end of useful life.", example: "$10K equipment estimated worth $1K after 5 years." },
    { term: "Useful Life", category: "Assets Liabilities", definition: "Period asset expected to contribute to operations.", example: "Equipment useful life 10 years, depreciate over 10 years." },
    { term: "Net Realizable Value", category: "Assets Liabilities", definition: "Expected selling price minus costs to sell.", example: "Inventory sells for $100K, costs $10K to sell, NRV $90K." },
    { term: "Lower of Cost or Market", category: "Assets Liabilities", definition: "Inventory valued at original cost or current market, whichever is lower.", example: "Cost $10K, market $8K, report inventory at $8K (conservative)." },
    { term: "Specific Identification Method", category: "Assets Liabilities", definition: "Track actual cost of each specific inventory item.", example: "Car dealership tracks cost of each vehicle individually." },
    { term: "FIFO Method", category: "Assets Liabilities", definition: "First In First Out - assume oldest inventory sold first.", example: "In inflation, FIFO gives higher profit, lower COGS." },
    { term: "LIFO Method", category: "Assets Liabilities", definition: "Last In First Out - assume newest inventory sold first.", example: "In inflation, LIFO gives lower profit, higher COGS, tax savings." },
    { term: "Weighted Average Method", category: "Assets Liabilities", definition: "Average cost of all units available for sale.", example: "100 units at $10, 100 at $12 = $11 average cost per unit." },
    { term: "Perpetual Inventory System", category: "Assets Liabilities", definition: "Continuous tracking of inventory with each transaction.", example: "Barcode scan updates inventory count immediately at sale." },
    { term: "Periodic Inventory System", category: "Assets Liabilities", definition: "Physical count at period end to determine inventory.", example: "Count inventory quarterly, calculate COGS as: Beginning + Purchases - Ending." },
    { term: "Freight-In", category: "Assets Liabilities", definition: "Transportation costs to get inventory, added to inventory cost.", example: "$1K shipping on $10K purchase increases inventory cost to $11K." },
    { term: "FOB Shipping Point", category: "Assets Liabilities", definition: "Buyer owns goods when shipped, pays freight.", example: "Title transfers at seller's dock, buyer responsible for shipping." },
    { term: "FOB Destination", category: "Assets Liabilities", definition: "Seller owns goods until delivered, pays freight.", example: "Title transfers at buyer's location, seller pays shipping." },
    { term: "Purchase Returns", category: "Assets Liabilities", definition: "Merchandise returned to supplier reduces purchases.", example: "Returned $2K defective goods, reduces inventory purchases." },
    { term: "Purchase Discounts", category: "Assets Liabilities", definition: "Price reduction for early payment of purchase.", example: "2/10, n/30 means 2% off if paid within 10 days, net due in 30." },
    { term: "Sales Returns and Allowances", category: "Revenue Expenses", definition: "Contra-revenue account for returned goods and price reductions.", example: "Customer returned $1K goods, reduces net sales revenue." },
    { term: "Sales Discounts", category: "Revenue Expenses", definition: "Contra-revenue account for early payment discounts given.", example: "Customer takes 2% discount $20 on $1000 sale for early payment." },

    // INTERMEDIATE: Practical Application (25 terms)
    { term: "Bank Reconciliation", category: "Principles", definition: "Matching bank statement to company's cash records, adjusting differences.", example: "Outstanding checks, deposits in transit, bank fees cause differences." },
    { term: "Outstanding Checks", category: "Principles", definition: "Checks written but not yet cleared bank.", example: "Wrote check for $500, not cashed yet, reduces book balance not bank balance." },
    { term: "Deposits in Transit", category: "Principles", definition: "Deposits made but not yet recorded by bank.", example: "Deposited $1000 on last day of month, appears on next month's bank statement." },
    { term: "NSF Check", category: "Principles", definition: "Non-Sufficient Funds check returned by bank.", example: "Customer's $500 check bounced, reduce cash and increase accounts receivable." },
    { term: "Petty Cash Fund", category: "Principles", definition: "Small amount of cash for minor expenditures.", example: "Establish $200 petty cash for postage, office supplies, minor expenses." },
    { term: "Aging of Accounts Receivable", category: "Assets Liabilities", definition: "Classifying receivables by how long outstanding.", example: "0-30 days: $10K, 31-60 days: $5K, over 60 days: $2K (higher default risk)." },
    { term: "Percentage of Sales Method", category: "Assets Liabilities", definition: "Estimate bad debts as percentage of credit sales.", example: "Credit sales $100K, estimate 2% uncollectible = $2K bad debt expense." },
    { term: "Percentage of Receivables Method", category: "Assets Liabilities", definition: "Estimate bad debts as percentage of ending receivables.", example: "Receivables $50K, estimate 5% uncollectible = $2.5K allowance needed." },
    { term: "Direct Write-Off Method", category: "Assets Liabilities", definition: "Write off bad debt when determined uncollectible (not GAAP for most).", example: "Specific customer defaults, directly reduce accounts receivable." },
    { term: "Allowance Method", category: "Assets Liabilities", definition: "Estimate and record bad debts in period of sale (GAAP required).", example: "Match bad debt expense with revenue in same period." },
    { term: "Maturity Date", category: "Assets Liabilities", definition: "Date note or bond becomes due for payment.", example: "90-day note dated March 1 matures May 30." },
    { term: "Maturity Value", category: "Assets Liabilities", definition: "Principal plus interest due at maturity.", example: "$10K note at 6% for 90 days matures at $10,150." },
    { term: "Discounting a Note", category: "Assets Liabilities", definition: "Selling note receivable to bank before maturity.", example: "Sell $10K note to bank for $9,800, receive cash now." },
    { term: "Interest Calculation", category: "Assets Liabilities", definition: "Principal × Rate × Time formula.", example: "$10,000 × 6% × 90/360 = $150 interest for 90 days." },
    { term: "Maker of Note", category: "Assets Liabilities", definition: "Party who signs note and promises to pay.", example: "Customer signs note, becomes maker, owes you money." },
    { term: "Payee of Note", category: "Assets Liabilities", definition: "Party to whom note is payable.", example: "You hold note receivable, you are payee, will receive payment." },
    { term: "Dishonored Note", category: "Assets Liabilities", definition: "Note not paid at maturity.", example: "Customer doesn't pay $10K note at maturity, transfer to accounts receivable." },
    { term: "Capital Expenditure", category: "Assets Liabilities", definition: "Cost that improves asset or extends life, capitalized.", example: "$5K engine replacement extends truck life 3 years, capitalize not expense." },
    { term: "Revenue Expenditure", category: "Revenue Expenses", definition: "Cost that maintains asset, expensed immediately.", example: "$500 oil change maintains truck, expense immediately." },
    { term: "Betterment", category: "Assets Liabilities", definition: "Improvement making asset more efficient, capitalize.", example: "Add air conditioning to building, increases value, capitalize $10K." },
    { term: "Extraordinary Repair", category: "Assets Liabilities", definition: "Major repair extending useful life, capitalize.", example: "Complete engine overhaul extends life 5 years, capitalize." },
    { term: "Ordinary Repair", category: "Revenue Expenses", definition: "Routine maintenance, expense immediately.", example: "Regular maintenance $200, expense in current period." },
    { term: "Impairment", category: "Assets Liabilities", definition: "Permanent decline in asset value below book value.", example: "Equipment book value $50K, worth $30K, record $20K impairment loss." },
    { term: "Asset Disposal", category: "Assets Liabilities", definition: "Removing asset from books via sale, trade, or discard.", example: "Sold equipment, remove cost and accumulated depreciation, record gain/loss." },
    { term: "Trade-In", category: "Assets Liabilities", definition: "Exchanging old asset as partial payment for new.", example: "Trade old truck book value $10K for new truck, receive $12K trade-in allowance." },

    // ADVANCED: Complex Concepts (25 terms)
    { term: "Effective Interest Method", category: "Assets Liabilities", definition: "Amortizing bond premium/discount using market rate.", example: "Interest expense = Carrying value × Market rate, more accurate than straight-line." },
    { term: "Straight-Line Amortization", category: "Assets Liabilities", definition: "Equal amortization of bond premium/discount each period.", example: "$5K premium over 10 years = $500 amortization per year." },
    { term: "Carrying Value of Bonds", category: "Assets Liabilities", definition: "Face value ± unamortized premium or discount.", example: "$100K bonds with $5K unamortized discount = $95K carrying value." },
    { term: "Market Rate vs Stated Rate", category: "Assets Liabilities", definition: "Market rate determines bond price, stated rate determines cash interest.", example: "If market 8% > stated 6%, bonds sell at discount." },
    { term: "Bond Issue Costs", category: "Assets Liabilities", definition: "Legal, printing, underwriting costs of issuing bonds.", example: "$50K issue costs reduce proceeds, amortize over bond life." },
    { term: "Callable Bond Premium", category: "Assets Liabilities", definition: "Extra amount paid to redeem bonds before maturity.", example: "Call bonds at 102, pay 102% of face value to retire early." },
    { term: "Operating Lease", category: "Assets Liabilities", definition: "Short-term lease treated as rental expense (old rules).", example: "Lease office equipment, expense monthly payment, don't record asset." },
    { term: "Capital Lease (Finance Lease)", category: "Assets Liabilities", definition: "Long-term lease treated as asset purchase.", example: "Lease substantially transfers ownership, record asset and liability." },
    { term: "Lease Criteria", category: "Assets Liabilities", definition: "Tests determining if lease is operating or capital.", example: "Transfer of ownership, bargain purchase, 75% economic life, 90% PV." },
    { term: "Depletion", category: "Assets Liabilities", definition: "Allocating cost of natural resources as extracted.", example: "Timber, oil, minerals depleted based on units extracted." },
    { term: "Percentage Depletion", category: "Assets Liabilities", definition: "Tax deduction based on percentage of gross income.", example: "Oil wells can deduct 15% of gross income as depletion." },
    { term: "Cost Depletion", category: "Assets Liabilities", definition: "Allocating resource cost based on units extracted.", example: "$1M cost, 100K tons reserves = $10 depletion per ton extracted." },
    { term: "Goodwill Impairment", category: "Assets Liabilities", definition: "Writing down goodwill when fair value declines.", example: "Acquired company underperforms, goodwill reduced from $5M to $3M." },
    { term: "Goodwill Testing", category: "Assets Liabilities", definition: "Annual assessment if goodwill value declined.", example: "Compare reporting unit fair value to carrying value including goodwill." },
    { term: "Patent Amortization", category: "Assets Liabilities", definition: "Allocating patent cost over legal or useful life.", example: "$100K patent, 10-year life = $10K annual amortization expense." },
    { term: "Copyright", category: "Assets Liabilities", definition: "Exclusive right to publish, reproduce creative work.", example: "Author holds copyright, amortize over estimated economic life." },
    { term: "Trademark", category: "Assets Liabilities", definition: "Exclusive right to use brand name or symbol.", example: "Nike swoosh, indefinite life, test annually for impairment." },
    { term: "Franchise", category: "Assets Liabilities", definition: "Right to operate business using another's name.", example: "McDonald's franchise fee $45K, amortize over franchise period." },
    { term: "Research and Development Costs", category: "Revenue Expenses", definition: "R&D costs expensed immediately under GAAP.", example: "Spent $500K developing new drug, expense immediately, can't capitalize." },
    { term: "Software Development Costs", category: "Assets Liabilities", definition: "Costs after technological feasibility can be capitalized.", example: "Pre-feasibility: expense. Post-feasibility: capitalize and amortize." },
    { term: "Asset Retirement Obligation", category: "Assets Liabilities", definition: "Liability for future asset removal cost.", example: "Oil rig must be removed in 20 years, record liability at present value." },
    { term: "Contingent Liability", category: "Assets Liabilities", definition: "Potential obligation depending on future event.", example: "Lawsuit pending: probable and estimable = accrue; possible = disclose; remote = ignore." },
    { term: "Warranty Accrual", category: "Assets Liabilities", definition: "Estimated warranty costs recorded at sale.", example: "Sell $1M products, estimate 3% warranty cost, accrue $30K liability." },
    { term: "Product Warranty", category: "Assets Liabilities", definition: "Seller's promise to repair/replace defective products.", example: "1-year warranty on TVs, accrue estimated costs when sold." },
    { term: "Self-Insurance", category: "Assets Liabilities", definition: "Company bears own risks rather than buying insurance.", example: "Set aside funds for potential losses, don't accrue until loss occurs." }
  ];

  const filteredTerms = useMemo(() => {
    let terms = allTerms;
    
    if (showFavoritesOnly) {
      terms = terms.filter(t => favorites.includes(t.term));
    }
    
    if (selectedCategory !== 'All') {
      terms = terms.filter(t => t.category === selectedCategory);
    }
    
    if (searchTerm) {
      terms = terms.filter(t =>
        t.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (t.example && t.example.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    return terms;
  }, [searchTerm, selectedCategory, favorites, showFavoritesOnly]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto p-4">
        <header className="text-center py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-3">
            Financial Accounting Dictionary
          </h1>
          <p className="text-lg text-slate-600 mb-2">
            {allTerms.length}+ comprehensive terms with examples
          </p>
          <p className="text-sm text-slate-500">
            Shark Tank • GST Tax • Investment • Banking • Auditing • Cost Accounting • Management
          </p>
        </header>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-lg mb-6 overflow-hidden">
          <div className="flex border-b border-slate-200">
            <button
              onClick={() => setActiveTab('browse')}
              className={`flex-1 py-4 px-6 font-semibold transition ${
                activeTab === 'browse'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-slate-600 hover:bg-slate-50'
              }`}
            >
              <BookOpen className="inline-block mr-2" size={20} />
              Browse Terms
            </button>
            <button
              onClick={() => setActiveTab('search')}
              className={`flex-1 py-4 px-6 font-semibold transition ${
                activeTab === 'search'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Search className="inline-block mr-2" size={20} />
              Quick Search
            </button>
            <button
              onClick={() => setActiveTab('favorites')}
              className={`flex-1 py-4 px-6 font-semibold transition ${
                activeTab === 'favorites'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Star className="inline-block mr-2" size={20} />
              Favorites ({favorites.length})
            </button>
          </div>
        </div>

        {/* Quick Search Tab */}
        {activeTab === 'search' && (
          <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
              Quick Search
            </h2>
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
              <div className="relative mb-6">
                <Search className="absolute left-4 top-4 text-slate-400" size={24} />
                <input
                  type="text"
                  placeholder="Type any accounting term..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-14 pr-4 py-4 text-lg border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  autoFocus
                />
              </div>
              <div className="flex gap-3 justify-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
                >
                  Search Terms
                </button>
                {searchTerm && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="px-8 py-3 bg-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-300 transition"
                  >
                    Clear
                  </button>
                )}
              </div>
            </form>
            
            {/* Quick Category Buttons */}
            <div className="mt-8 max-w-3xl mx-auto">
              <p className="text-sm text-slate-600 mb-4 text-center">Or browse by category:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {categories.slice(1, 9).map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <button
                      key={cat.name}
                      onClick={() => {
                        setSelectedCategory(cat.name);
                        setActiveTab('browse');
                      }}
                      className={`p-3 rounded-lg transition ${cat.color} text-white hover:opacity-90 flex items-center justify-center gap-2`}
                    >
                      <Icon size={18} />
                      <span className="text-sm font-medium">{cat.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Favorites Tab */}
        {activeTab === 'favorites' && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-800">
                Your Favorites ({favorites.length})
              </h2>
              {favorites.length > 0 && (
                <button
                  onClick={exportFavorites}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  <Download size={18} />
                  <span className="text-sm">Export</span>
                </button>
              )}
            </div>
            
            {favorites.length === 0 ? (
              <div className="text-center py-12">
                <Star size={64} className="mx-auto text-slate-300 mb-4" />
                <p className="text-slate-500 text-lg mb-2">No favorites yet</p>
                <p className="text-slate-400 text-sm mb-6">
                  Click the star icon on any term to add it to your favorites
                </p>
                <button
                  onClick={() => setActiveTab('browse')}
                  className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  Browse Terms
                </button>
              </div>
            ) : (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {allTerms.filter(t => favorites.includes(t.term)).map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 border border-slate-200 rounded-lg hover:border-blue-500 hover:shadow-md transition relative"
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(item.term);
                      }}
                      className="absolute top-2 right-2 p-1 hover:bg-slate-100 rounded"
                    >
                      <Star
                        size={16}
                        fill="#fbbf24"
                        className="text-yellow-400"
                      />
                    </button>
                    
                    <div onClick={() => setSelectedTerm(item)} className="cursor-pointer">
                      <h4 className="font-semibold text-slate-800 mb-1 pr-6">{item.term}</h4>
                      <p className="text-xs text-blue-600 mb-2">{item.category}</p>
                      <p className="text-sm text-slate-600 line-clamp-2 mb-2">{item.definition}</p>
                      {item.example && (
                        <p className="text-xs text-emerald-600 italic line-clamp-1">
                          Ex: {item.example}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Browse Tab */}
        {activeTab === 'browse' && (
          <>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-3 text-slate-400" size={20} />
                <input
                  type="text"
                  placeholder="Search terms, definitions, examples..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="flex items-center justify-between flex-wrap gap-3">
                <button
                  onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                    showFavoritesOnly
                      ? 'bg-yellow-500 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <Star size={18} fill={showFavoritesOnly ? 'white' : 'none'} />
                  <span className="text-sm">
                    {showFavoritesOnly ? `Favorites (${favorites.length})` : 'Show Favorites'}
                  </span>
                </button>
                {(searchTerm || selectedCategory !== 'All' || showFavoritesOnly) && (
                  <button
                    onClick={clearSearch}
                    className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition text-sm"
                  >
                    Reset All Filters
                  </button>
                )}
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-semibold text-slate-700">Categories</h2>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-2"
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
              
              <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 ${mobileMenuOpen ? 'block' : 'hidden md:grid'}`}>
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  const count = allTerms.filter(t => cat.name === 'All' || t.category === cat.name).length;
                  return (
                    <button
                      key={cat.name}
                      onClick={() => {
                        setSelectedCategory(cat.name);
                        setMobileMenuOpen(false);
                      }}
                      className={`flex flex-col items-center gap-1 p-3 rounded-lg transition ${
                        selectedCategory === cat.name
                          ? `${cat.color} text-white shadow-lg`
                          : 'bg-white text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <Icon size={20} />
                      <span className="text-xs font-medium text-center">{cat.name}</span>
                      <span className="text-xs opacity-75">{count}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-700">
                  {filteredTerms.length} Terms Found
                </h3>
                {selectedCategory !== 'All' && (
                  <button
                    onClick={() => setSelectedCategory('All')}
                    className="text-sm text-blue-600 hover:text-blue-700"
                  >
                    Clear Filter
                  </button>
                )}
              </div>
              
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredTerms.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 border border-slate-200 rounded-lg hover:border-blue-500 hover:shadow-md transition relative"
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(item.term);
                      }}
                      className="absolute top-2 right-2 p-1 hover:bg-slate-100 rounded"
                    >
                      <Star
                        size={16}
                        fill={favorites.includes(item.term) ? '#fbbf24' : 'none'}
                        className={favorites.includes(item.term) ? 'text-yellow-400' : 'text-slate-400'}
                      />
                    </button>
                    
                    <div onClick={() => setSelectedTerm(item)} className="cursor-pointer">
                      <h4 className="font-semibold text-slate-800 mb-1 pr-6">{item.term}</h4>
                      <p className="text-xs text-blue-600 mb-2">{item.category}</p>
                      <p className="text-sm text-slate-600 line-clamp-2 mb-2">{item.definition}</p>
                      {item.example && (
                        <p className="text-xs text-emerald-600 italic line-clamp-1">
                          Ex: {item.example}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {filteredTerms.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-slate-500 text-lg">No terms found.</p>
                  <button
                    onClick={clearSearch}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </>
        )}

        {selectedTerm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedTerm(null)}>
            <div className="bg-white rounded-lg max-w-2xl w-full p-6 max-h-96 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">{selectedTerm.term}</h3>
                  <p className="text-sm text-blue-600 mt-1">{selectedTerm.category}</p>
                </div>
                <button
                  onClick={() => setSelectedTerm(null)}
                  className="text-slate-400 hover:text-slate-600"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-slate-700 mb-1">Definition:</p>
                  <p className="text-slate-700">{selectedTerm.definition}</p>
                </div>
                {selectedTerm.example && (
                  <div>
                    <p className="text-sm font-semibold text-emerald-700 mb-1">Example:</p>
                    <p className="text-slate-700 italic">{selectedTerm.example}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountingTerms;
