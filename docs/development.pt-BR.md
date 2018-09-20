# Guia de desenvolvimento em React-native

*Leia em [Inglês](development.md).*

## Iniciando

Estas instruções irão preparar o projeto para rodar localmente em sua máquina com o propósito de desenvolvimento e testes.

---

## Pré-requisitos

A configuração de ambiente se inicia com a instalação do **node**, **npm** e da biblioteca **react-native**. Também é necessário o emulador android para rodar o app. Todas as instruções estão descritas abaixo.

### Instalação

Primeiro, é necessário instalar a última versão do **node** e do **npm**, podemos fazer isso de forma simples através do **nvm**. Apenas siga o tutorial disponível no site da nodesource: [Installing Node.js Tutorial: Using nvm](https://nodesource.com/blog/installing-node-js-tutorial-using-nvm-on-mac-os-x-and-ubuntu/).

Utiliza-se o nvm porque ele nos permite, dentre outras coisas, instalar bibliotecas sem utilizar permissão de super usuário no terminal. Após isso, instale os outros softwares/ferramentas necessárias. Apenas digite os comandos na sequência no terminal:

```
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:webupd8team/java
sudo apt-get update
sudo apt-get install oracle-java8-installer
```

Instale a biblioteca react-native, também no terminal:

```
npm install -g react-native-cli
```

### Emulador

Para rodar o aplicativo em um emulador primeiro deve-se baixar e instalar o Android Studio.

#### Android Studio

Baixe o software na página oficial do [Android Studio](https://developer.android.com/studio/) e siga as instruções de instalação.

#### AVD Manager

Depois de instalar o Android Studio corretamente, configure o AVD Manager, isto é, o gerenciador do emulador que será usado. Dentro da IDE do Android Studio, procure por AVD Manager ou simplesmente procure por este ícone:

![Image of avd manager](https://wtcindia.files.wordpress.com/2015/07/screen-shot-2015-07-23-at-2-49-36-pm.png)

Siga o passo a passo do processo de instalação, e baixe uma imagem de alguma API, caso você ainda não tenha nenhuma baixada.

---

## Baixando o projeto

Realize o Pull do projeto radio-atividade em uma pasta de sua preferência.

```
git clone https://github.com/diegowendel/radio-atividade.git
```

Entre na pasta `radio-atividade/radioAtividadeApp` onde está o código react-native do app. Rode o seguinte comando para instalar as dependências das bibliotecas.

```
npm install
```

---

## Rodando o aplicativo

Primeiramente, inicie o emulador previamente configurado no Android Studio.

Em seguida, execute o seguinte comando na pasta `radioAtividadeApp`.

```
react-native run-android
```

### Logs

É possível exibir os logs do aplicativo enquanto ele estiver em execução, para isso basta digitar o comando.

```
react-native log-android
```
