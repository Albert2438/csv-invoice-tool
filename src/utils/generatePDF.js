
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export async function downloadInvoiceAsPDF(elementRef) {
  const canvas = await html2canvas(elementRef.current);
  const imageData = canvas.toDataURL("image/png");

  const pdf = new jsPDF();
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const imgHeight = (canvas.height * pdfWidth) / canvas.width;

  pdf.addImage(imageData, "PNG", 0, 0, pdfWidth, imgHeight);
  pdf.save("invoice.pdf");
}