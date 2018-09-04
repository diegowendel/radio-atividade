# React-native development guide

*Read in [Portuguese](development.pt-BR.md).*

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

---

## Prerequisites

The setup starts with the installing of **node**, **npm** and **react-native** library.
We also need an **avd** emulator to run the app. All of that are described below.

### Installing

First we need to install the latest version of **node** and **npm**, we can do this via **nvm**. Just follow the tutorial of nodesource: [Installing Node.js Tutorial: Using nvm](https://nodesource.com/blog/installing-node-js-tutorial-using-nvm-on-mac-os-x-and-ubuntu/).

We install it via nvm because it allow us, among other things, to install libraries using npm without super user permissions on terminal. After that, install other couple of things like Java sdk and software commons. Just type the following on your terminal:

```
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:webupd8team/java
sudo apt-get update
sudo apt-get install oracle-java8-installer
```

Install the react-native command line interface:

```
npm install -g react-native-cli
```

### Emulator

To run the app on an emulator we need first to download and install Android Studio.

#### Android Studio

Get the software on [Android Studio page](https://developer.android.com/studio/) and follow the instructions of installing.

#### AVD Manager

After installed Android Studio correctly, configure the AVD Manager, that is, the manager of the emulator that will be used. Inside Android Studio IDE, search for AVD Manager or just look up the following icon:

![Image of avd manager](https://wtcindia.files.wordpress.com/2015/07/screen-shot-2015-07-23-at-2-49-36-pm.png)

Follow the step-by-step process and download an image of any API if you haven't have any of those.

---

## Pull the project

Pull the radio-atividade project on a folder of your choice.

```
git clone https://github.com/diegowendel/radio-atividade.git
```

Enter the folder `radio-atividade/radioAtividadeApp` where is the react-native code. Run the following command to install dependencies.

```
npm install
```

---

## Running the application

First start the emulator previously configured on Android Studio.

Next run the following command on `radioAtividadeApp` folder.

```
react-native run-android
```

### Logs

You can view the logs of react-native, while the application is running, typing the command.

```
react-native log-android
```
