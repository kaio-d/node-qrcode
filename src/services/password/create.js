import chalk from "chalk";
import handlePassword from "./handlePassword.js";

async function createPassword() {
  console.log(chalk.green.bold("Password:"));
  const password = await handlePassword();

  console.log(password);
}

export default createPassword;
