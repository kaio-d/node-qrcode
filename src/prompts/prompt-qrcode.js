import chalk from "chalk";

const promptQRCode = [
  {
    name: "link",
    description: chalk.yellow.bold("Digite o Link para gerar o QRCODE:"),
  },
  {
    name: "type",
    description: chalk.yellow.bold(
      "Escolha o tipo de QRCODE (1 - Imagem ou 2 - Terminal)"
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Escolha apenas entre 1 e 2 "),
    required: true,
  },
];

export default promptQRCode;
