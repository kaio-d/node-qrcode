import chalk from 'chalk';

const mainPrompt = [
  {
    name: "select",
    description: chalk.yellow.bold("Escolha a ferramenta (1 - QRCODE ou 2 - PASSWORD 3 - Consultar Locais)"),
    pattern: /^[1-3]+$/,
    message: chalk.red.italic("Escolha apenas entre 1 e 3"),
    required: true,
  },
];

export default mainPrompt;
