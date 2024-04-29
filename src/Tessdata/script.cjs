import { createWorker } from "tesseract.js";
// const { createWorker } = require("tesseract.js");
const imgPath = "./report.jpeg";
async function extractText(imageData) {
  const worker = await createWorker("eng");

  (async () => {
    const {
      data: { text },
    } = await worker.recognize(imageData);
    console.log(text);
    await worker.terminate();
  })();
}
export default extractText;
