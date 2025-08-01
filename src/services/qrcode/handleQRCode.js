import qrcode from "qrcode-terminal";
import chalk from "chalk";

async function handleQRCode(err, result) {
  if (err) {
    console.log("Error on application");
    return;
  }

  const isSmall = result.type == 2;
  qrcode.generate(result.link, { small: isSmall }, (qrcode) => {
    console.log(chalk.green("QRCODE gerado com sucesso:\n"));
    console.log(qrcode);
  });
}

export default handleQRCode;
