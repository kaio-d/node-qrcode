# 🧰 Kit de Ferramentas para Comércios - Node.js

Este projeto foi desenvolvido com **Node.js** e **JavaScript puro**, e tem como objetivo fornecer funcionalidades úteis para comércios de forma prática e acessível, direto pelo **terminal**.

---

## 🚀 Funcionalidades

O projeto possui duas funcionalidades principais:

### 1. 📷 Gerador de QR Code

- O usuário fornece um **link** via terminal.
- O terminal exibe o **QR Code** correspondente ao link inserido.
- Ideal para compartilhar links de pagamento, catálogos, redes sociais, etc.

### 2. 🔐 Gerador de Senhas

- A senha é gerada com base nas configurações definidas pelo usuário em um arquivo `.env`.
- Parâmetros disponíveis no `.env`:

```env
UPPERCASE_LETTERS=true
LOWERCASE_LETTERS=true
NUMBERS=true
SPECIAL_CHARACTERS=true
PASSWORD_LENGTH=8
```


## 🛠️ Tecnologias e Pacotes Utilizados
- Node.js

- chalk — estilização do terminal com cores

- prompt — interação com o usuário via terminal

- qrcode-terminal — geração de QR Codes diretamente no terminal

- dotenv — carregamento de variáveis do arquivo