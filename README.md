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

5. Install latest xCode

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

## Upgrade Path

- Upgrade `NativeScript` binary (optional)

You do not need to update the binary every time. If I upgrade our project to a newer version of `NativeScript` binary, you need to do this step.

Note: Open terminal app, execute the command below. Then follow the on-screen questionnaire, it has many questions that you need to answer. In general, it will take around 3 to 5 minutes, so please be patient.

```bash
npm install -g nativescript
```

- Get latest application

Note: Anything with `#` is the command description, you should copy the command and paste into `terminal` app to execute it one by one.

```bash
# It should be whatever the folder that contains the application
cd ~/desktop/client

# Get the latest commit from Github repository
git pull origin master

# Cleanup the folder, always start from the clean state
npm run clean

# Install all required packages
yarn

# Start the iOS simulator. Application should be bootstrapped and opened in your iOS simulator
npm start
```

## Running unit tests

Coming soon!
