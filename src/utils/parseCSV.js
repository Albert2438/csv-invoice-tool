// src/utils/parseCSV.js
import Papa from "papaparse";

// This function takes the raw File object from an <input type="file">
// and gives you back an array of row objects.
export function parseCSVFile(file, onComplete) {
  Papa.parse(file, {
    header: true,        // treats the first row as column names (keys)
    skipEmptyLines: true, // ignores blank rows in the CSV
    complete: (results) => {
      // results.data is the array of parsed rows, e.g.
      // [{ client_name: "Acme Corp", item: "Web Design", quantity: "1", price: "500" }, ...]
      onComplete(results.data);
    },
  });
}