import prompt from "prompt";
import createQRCode from "./services/qrcode/create.js";
import createPassword from "./services/password/create.js";
import createGas from "./services/gas/create.js";

import promptSchema from "./prompts/prompt-main.js";

async function main() {
  prompt.get(promptSchema, async (err, result) => {
    if (result.select == 1) {
      await createQRCode();
    }

    if (result.select == 2) {
      await createPassword();
    }

    if (result.select == 3) {
      await createGas();
    }
  });

  prompt.start();
}

main();
