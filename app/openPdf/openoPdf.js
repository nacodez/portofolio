export const openPdfInNewTab = (pdfUrl) => {
    const newWindow = window.open(pdfUrl, '_blank');
    newWindow.focus();
};
