import chalk from "chalk";

const local = [
  {
    name: "São Paulo",
    price: 0,
  },

  {
    name: "Rio de Janeiro",
    price: 20.0,
  },
  {
    name: "Santa Catarina",
    price: 45.19,
  },
];

async function handleGas() {
  console.log(chalk.green.bold("Locais disponíveis para entrega:\n"));
  for (let i = 0; i < local.length; i++) {
    console.log(`Região: ${local[i].name} || Gás: R$ ${local[i].price.toFixed(2)}`);
  }
}

export default handleGas;
