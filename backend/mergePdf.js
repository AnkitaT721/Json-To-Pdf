const PDFMerger = require("pdf-merger-js");
const path = require("path");


var merger = new PDFMerger();

const mergePdfs = async (p1, p2) => {
  await merger.add(p1); 
  await merger.add(p2); 

  await merger.save(path.join(__dirname, "/upload/merged.pdf"));
};

module.exports = { mergePdfs };
