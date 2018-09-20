# React-native development guide

*Read in [Portuguese](dev_environment.pt-BR.md).*

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. <s> See deployment for notes on how to deploy the project on a live system</s>.

---

## Prerequisites

The setup starts with the installing of **node**, **npm** and **react-native** library.
We also need an **avd** emulator to run the app. All of that are described below.

### Installing

First we need to install the latest version of **node** and **npm**. We can get this via **nvm**. Just follow the tutorial of nodesource, [Installing Node.js Tutorial: Using nvm](https://nodesource.com/blog/installing-node-js-tutorial-using-nvm-on-mac-os-x-and-ubuntu/). We installed via nvm because it allow us, among other things, to install libraries using npm without super user permissions on terminal.

After that, install other couple of things like Java sdk and software commons. Just type the following on your terminal:

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

To run the app on an emulator we need first to download Android Studio or the command line tools only. Choose what you prefer, both are described on the oficial [Android Studio page](https://developer.android.com/studio/).

#### Android Studio

If you downloaded Android Studio, you will need to create an avd inside the IDE. You can get this easily with the interface of Android Virtual Device Manager inside Android Studio.

#### Command line tools only

If you downloaded the command line tools only, you will need to create an avd via command line. Enter the folder where you downloaded and extracted the **sdk-tools**. Enter the folder `tools`, all the commands below are executed in that folder.

First, you need to download the necessary packages of android image. Example of downloading API 23 packages for x86 emulators

```
./bin/sdkmanager "system-images;android-23;google_apis;x86"
```

Then accept the license agreement

```
./bin/sdkmanager --licenses
```

And then create your emulator

```
./bin/avdmanager create avd -n radioatividade -k "system-images;android-23;google_apis;x86"
```

Check if your avd that you have just created is available with the command

```
./bin/avdmanager list avd
```

to be continued...