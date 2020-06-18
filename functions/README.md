# Pigeon-Migration (name pending)

## Setup

Cloud functions has deprecated nodejs 6 & 8, and is now [officially supporting nodejs10](https://cloud.google.com/functions/docs/concepts/nodejs-10-runtime). We will need to install node10 either by hand or using `n`.

Install `nodejs10` using `n` [via the instructions here](https://github.com/tj/n), or install it natively without `n`.

### Package Manager
This application uses `yarn`.

If you don't have yarn, [install it via the instructions here.](https://classic.yarnpkg.com/en/docs/install/#windows-stable)

### Project Setup

#### firebase-tools

Running the project locally and deploying requires `firebase-tools`. This means that you require access to the firebase project.

Install [firebase-tools using these instructions.](https://firebase.google.com/docs/cli)

After installing, you should be able to login using `firebase-login`. Be sure to login to the account with the right permissions to the firebase project.

#### Installing dependencies
Run the following commands:

```
yarn
```


## Running the project

In debug mode:
```
npm run serve:dev
```

## VSCode Prettier/Eslint Configuration for automatic code formatting & error checking

### Install Plugins

* [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
* [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)


### Add to `settings.json` in VSCode:

```json
  "eslint.alwaysShowStatus": true,
  "[typescript]": {
      "editor.formatOnPaste": true,
      "editor.defaultFormatter": "esbenp.prettier-vscode",
      "editor.insertSpaces": true,
      "editor.tabSize": 2,
      "editor.formatOnSave": true
  },
,
```
