# Client

> A native mobile client

## Installation Requirement

1. [Node.js](https://nodejs.org/en/download/)

Note: Using [nvm](https://github.com/creationix/nvm), Node version manager, is highly recommended.
It is simple to install and manage your system Node version over the official Node.js installation.

2. [yarn](https://github.com/yarnpkg/yarn)

```bash
npm install -g yarn
```

3. [nativescript](https://github.com/NativeScript/NativeScript)

```bash
npm install -g nativescript
tns --version
```

4. [CocoaPods](https://docs.nativescript.org/plugins/cocoapods)

```bash
sudo gem install cocoapods
pod --version
```

## Getting start guide

```bash
# Step 1: Clone the repo
git clone https://github.com/mattma/me-client

# Step 2: Go into the repo folder
cd me-client

# Step 3: Install module dependencies
yarn

# Step 4: Launch in iOS simulator
npm start
```

## Font Icons support

1. [Font Awesome](http://fontawesome.io/icons/) Current version **v4.6.3**

Use UniCode to represent an icon. `&#x ;` wrap the actual UniCode in text property.

```html
<Button text="&#xf1e2;" class="fa"></Button>
```

2. [IonIcons](http://ionicons.com/) Current version **v2.0.1**

```html
<Button text="&#xf14b;" class="ion"></Button>
```


## Running unit tests

Coming soon!
