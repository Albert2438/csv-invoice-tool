# CSV to Invoice

A lightweight, browser-based tool that turns a CSV of billing data into a polished, downloadable PDF invoice — no sign-up, no server, no data stored anywhere. Upload, fill in a few details, download.

![CSV to Invoice demo](./demo.gif)
<!-- Replace with an actual screen recording once you have one -->

## Features

- 📁 Upload a CSV of line items (item, quantity, price)
- ✏️ Enter client name and tax rate
- 🧮 Automatic subtotal, tax, and grand total calculation
- 📄 One-click PDF download of a clean invoice layout
- 🔒 Fully client-side — no data ever leaves your browser

## Tech Stack

- **React** (Vite) — UI and state management
- **Tailwind CSS** — styling
- **PapaParse** — CSV parsing
- **jsPDF + html2canvas** — PDF generation

## How It Works

1. Upload a CSV file with columns: `client_name`, `item`, `quantity`, `price`
2. Enter the client's name and your tax rate
3. Review the auto-calculated line totals, subtotal, tax, and grand total
4. Click **Download PDF** to get a ready-to-send invoice

## Sample CSV Format

```csv
client_name,item,quantity,price
Acme Corp,Web Design,1,500
Acme Corp,Hosting,3,20
Acme Corp,Domain Registration,1,15
```

## Getting Started Locally

```bash
git clone https://github.com/<your-username>/csv-to-invoice.git
cd csv-to-invoice
npm install
npm run dev
```

## Live Demo

[View live demo](#) <!-- Add your Vercel link once deployed -->

## Why I Built This

As part of building out my full-stack portfolio, I wanted a project that went beyond a standard CRUD app — something that combined file handling, data transformation, and document generation entirely in the browser, with a clean, no-friction user experience inspired by tools like iLovePDF.

## Roadmap / Possible Improvements

- [ ] Currency formatting
- [ ] Business info fields (name, logo, address)
- [ ] Invoice number and date fields
- [ ] CSV validation with helpful error messages
- [ ] Multi-currency support

## License

MIT