import { useState, useRef } from 'react'
import './App.css'
import { parseCSVFile } from "./utils/parseCSV";
import { getLineTotal, getSubtotal, getTax, getGrandTotal } from "./utils/calculations";
import { downloadInvoiceAsPDF } from "./utils/generatePDF";

function App() {
  const [rows, setRows] = useState([]);
  const [clientName, setClientName] = useState("");
  const [taxRate, setTaxRate] = useState("");

  const invoiceRef = useRef(null);
  const fileInputRef = useRef(null);

  const subtotal = getSubtotal(rows);
  const tax = getTax(subtotal, taxRate);
  const grandTotal = getGrandTotal(subtotal, tax);

  function handleFileChange(event) {
    const file = event.target.files[0];
    if (!file) return;

    parseCSVFile(file, (data) => {
      setRows(data);
    });
  }

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-2xl mx-auto space-y-6">

        {/* Controls */}
        <div className="bg-white rounded-lg shadow p-6 space-y-4">

          {/* Hidden real file input */}
          <input
            type="file"
            accept=".csv"
            onChange={handleFileChange}
            ref={fileInputRef}
            className="hidden"
          />

          {/* Styled fake button that triggers the hidden input */}
          <button
            onClick={() => fileInputRef.current.click()}
            className="w-full border-2 border-dashed border-slate-300 rounded-lg py-6 text-slate-500 hover:border-slate-400 hover:text-slate-600 transition"
          >
            Click to upload CSV
          </button>

          <input
            type="text"
            placeholder="Client Name"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            className="w-full border border-slate-300 rounded px-3 py-2"
          />

          <input
            type="number"
            placeholder="Tax Rate (%)"
            value={taxRate}
            onChange={(e) => setTaxRate(e.target.value)}
            className="w-full border border-slate-300 rounded px-3 py-2"
          />
        </div>

        {/* Invoice preview */}
        <div ref={invoiceRef} className="bg-white rounded-lg shadow p-8">
          <p className="text-lg font-semibold mb-4">Client: {clientName}</p>

          <ul className="space-y-1 mb-4">
            {rows.map((row, index) => (
              <li key={index} className="text-slate-700">
                {row.item} - {row.quantity} × {row.price} = {getLineTotal(row)}
              </li>
            ))}
          </ul>

          <div className="border-t pt-4 space-y-1 text-right">
            <p>Subtotal: {subtotal}</p>
            <p>Tax: {tax}</p>
            <p className="font-bold text-lg">Grand Total: {grandTotal}</p>
          </div>
        </div>

        <button
          onClick={() => downloadInvoiceAsPDF(invoiceRef)}
          className="w-full bg-slate-900 text-white py-3 rounded-lg font-medium"
        >
          Download PDF
        </button>

      </div>
    </div>
  );
}

export default App