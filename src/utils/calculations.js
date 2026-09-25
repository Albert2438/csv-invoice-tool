
export function getLineTotal(row){
    const quantity = Number(row.quantity)
    const price = parseFloat(row.price)

    return quantity * price
}

export function getSubtotal(rows) {
  return rows.reduce((sum, row) => {
   return sum + getLineTotal(row)
  }, 0);
}

export function getTax(subtotal, taxRate) {
  // TODO: tax rate is likely entered as a percentage (e.g. 10 for 10%)
  // convert it to a decimal and multiply against subtotal
  const rate = parseFloat(taxRate) / 100;

  if (isNaN(rate)) {
    return 0; // no tax rate entered yet, treat as 0% tax
  }

  return subtotal * rate;
}

export function getGrandTotal(subtotal, tax) {
  // TODO: what's the relationship between subtotal, tax, and the final total?
  const finalTotal = subtotal + tax
  return finalTotal
}

