![react-native-slang](https://raw.githubusercontent.com/SlangLabs/react-native-slang-playground/master/js/assets/logo.png)

# React Native Slang Fitness Assistant Playground

Demo app to help developers understand [slang-fitness-assistant](https://www.npmjs.com/package/@slanglabs/slang-conva-react-native-fitness-assistant) in a react native app.

### Getting Started

3 steps to get started with this project

#### Step 1: First download this code locally

`$ git clone https://github.com/SlangLabs/react-native-slang-fitness-assistant-playground.git`

`$ cd react-native-slang-fitness-assistant-playground/`

#### Step 2: Install dependencies and launch the app

`$ yarn`

OR

`$ npm install`

After successful installation of node packages attach your Android device and run

`$ adb devices`

To get your device ID example: ER45TBZM1D64Q.

Now run the following command to build and run on your device

`$ react-native run-android --deviceId=<your-device-ID>`

#### Step 3: Start developing

In the code, the component that initializes slang is in [src/main.js](https://github.com/SlangLabs/react-native-slang-fitness-assistant-playground/blob/master/src/main.js)

Open it in your favorite text editor and make changes to load your buddy when the component mounts.

```
    // Slang is initialised with the below function
    // Add your assistant Id and API key to this function and run your app
    try {
      SlangFitnessAssistant.initialize({
        requestedLocales: ['en-IN', 'hi-IN'],
        assistantId: "YourAssistantId",
        apiKey: "YourApiKey",
        enableCustomTrigger: true,
        triggerPosition: {
          baseUIPosition: AssistantUIPosition.BaseUIPosition.BOTTOM_RIGHT,
          offsetY: -20,
          offsetX: -20,
          draggable: false,
          forcedAtStartup: true
        },
      });
      // callback function once slang initialises successfully
      SlangFitnessAssistant.setAction(fitnessAssistantListener);
    } catch (error) {
      console.error(error);
    }
```

##### Documentation

Find documentation [here](https://www.npmjs.com/package/@slanglabs/slang-conva-react-native-fitness-assistant).

##### Contact

For any queries contact us support@slanglabs.in
