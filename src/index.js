import prompt from "prompt";
import createQRCode from "./services/qrcode/create.js";

import promptSchema from "./prompts/prompt-main.js";

async function main() {
  prompt.get(promptSchema, async (err, result) => {
    if (result.select == 1) {
      await createQRCode();
    }

    if (result.select == 2) {
      console.log("Escolheu o PASSWORD!");
    }
  });

  prompt.start();
}

main();
