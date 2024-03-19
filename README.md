# Cypress Automation Project

## Autor

Murilo Henrique Neves

## Descrição

Este documento **README** tem como objetivo documentar os processos de instalação e execução dos testes automatizados com Cypress.

## Pré-requisitos

1. [Node.js](https://nodejs.org/en/download/current)
2. [Visual Studio Code](https://code.visualstudio.com)

## Instalação

Primeiramente é necessário clonar o repositório para o seu local. Para isso:

### Clonar o repositório:

1. Clique em **Code**, selecione a opção **HTTPS** e copie a url do repositório.

![image](https://github.com/nevaao/CypressAutomationProject/assets/164090419/de3babb5-5ef5-4a79-ae79-54764d457059)

2. Abra um terminal (**cmd** ou **PowerShell**) apontando para o diretório onde deseja clonar o repositório.
3. No terminal, execute o comando **git clone [URL do repositório]**

Com o repositório clonado, clique com o botão direito do mouse dentro da pasta do repositório, selecione **Git Bash Here** e execute o seguinte comando para abrir o projeto com o VS Code:

```
code .
```

### Instalar dependências:

Com o VS Code aberto, abra um novo terminal e execute o seguinte comando:

```
npm install
```

Esse comando irá instalar todas as dependências listadas no arquivo **package.json** presente no projeto.

## Executar testes automatizados

Para executar os testes automatizados, execute o seguinte comando em um terminal do VS Code:

```
npx cypress open
```

Feito isso uma janela do Cypress abrirá. Nela selecione a opção **E2E Testing** o navegador desejado (**Electron:** recomendado). Na tela inicial do Cypress vá para o menu **Specs** e selecione a feature que deseja executar disponível em **cypress/step_definitions**.

**OBS.:** Para executar os testes em modo **headless** (sem abrir o navegador e exibir a execução do teste) basta apenas executar o seguinde comando no terminal do VS Code:

```
npx cypress run
```
