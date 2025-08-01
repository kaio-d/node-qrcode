import prompt from "prompt";

import promptSchema from "./prompts/prompt-main.js";

async function main() {
  prompt.get(promptSchema, async (err, result) => {
    if (result.select == 1) {
      console.log("Ecolheu QRCODE !");
    }

    if (result.select == 2) {
      console.log("Escolheu o PASSWORD!");
    }
  });

  prompt.start()
}

main();
