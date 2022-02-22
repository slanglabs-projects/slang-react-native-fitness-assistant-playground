import React from "react";
import { Text, View, Alert, StyleSheet, ScrollView, Button, TouchableOpacity, Image, Modal, TouchableHighlight, Switch, SafeAreaView, StatusBar, AppState } from 'react-native';
import SlangFitnessAssistant, {
  AssistantUIPosition,
  FitnessUserJourney,
  AssistantUI,
  FoodLoggingUserJourney,
} from '@slanglabs/slang-conva-react-native-fitness-assistant';
import { throwStatement } from "@babel/types";
class Main extends React.Component {
  state = {
    intentResponse: "",
    foodLoggingModalVisible: false,
    showAppStateConditions: false,
    foodLoggingUserJourneyObj: null
  };

  toggleShowAppStateConditions = () => {
    this.setState({ showAppStateConditions: !this.state.showAppStateConditions });
  }

  setFoodLoggingModalVisible = visible => {
    this.setState({ foodLoggingModalVisible: visible });
  }

  startConversation = () => {
    SlangFitnessAssistant.startConversation(FitnessUserJourney.FOOD_LOGGING);
  };

  renderFoodLoggingViews = () => {
    const views = [];
    views.push(
      <TouchableHighlight
        key="Success"
        style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
        onPress={() => {
          this.setFoodLoggingModalVisible(!this.state.foodLoggingModalVisible);
          this.state.foodLoggingUserJourneyObj.notifyAppState(FoodLoggingUserJourney.FoodLoggingCompleteAppState(FoodLoggingUserJourney.AppStateCondition.SUCCESS));
        }}>
        <Text style={styles.textStyle}>SUCCESS</Text>
      </TouchableHighlight>
    );
    views.push(
      <TouchableHighlight
        key="Failure"
        style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
        onPress={() => {
          this.setFoodLoggingModalVisible(!this.state.foodLoggingModalVisible);
          this.state.foodLoggingUserJourneyObj.notifyAppState(FoodLoggingUserJourney.FoodLoggingCompleteAppState(FoodLoggingUserJourney.AppStateCondition.FAILURE));
        }}>
        <Text style={styles.textStyle}>FAILURE</Text>
      </TouchableHighlight>
    );
    views.push(
      <TouchableHighlight
        key="Meal type not specified"
        style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
        onPress={() => {
          this.setFoodLoggingModalVisible(!this.state.foodLoggingModalVisible);
          this.state.foodLoggingUserJourneyObj.notifyAppState(FoodLoggingUserJourney.FoodLoggingCompleteAppState(FoodLoggingUserJourney.AppStateCondition.MEAL_TYPE_NOT_SPECIFIED));
        }}>
        <Text style={styles.textStyle}>MEAL_TYPE_NOT_SPECIFIED</Text>
      </TouchableHighlight>
    );
    views.push(
      <TouchableHighlight
        key="Date not specified"
        style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
        onPress={() => {
          this.setFoodLoggingModalVisible(!this.state.foodLoggingModalVisible);
          this.state.foodLoggingUserJourneyObj.notifyAppState(FoodLoggingUserJourney.FoodLoggingCompleteAppState(FoodLoggingUserJourney.AppStateCondition.DATE_NOT_SPECIFIED));
        }}>
        <Text style={styles.textStyle}>DATE_NOT_SPECIFIED</Text>
      </TouchableHighlight>
    );
    views.push(
      <TouchableHighlight
        key="Time not specified"
        style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
        onPress={() => {
          this.setFoodLoggingModalVisible(!this.state.foodLoggingModalVisible);
          this.state.foodLoggingUserJourneyObj.notifyAppState(FoodLoggingUserJourney.FoodLoggingCompleteAppState(FoodLoggingUserJourney.AppStateCondition.TIME_NOT_SPECIFIED));
        }}>
        <Text style={styles.textStyle}>TIME_NOT_SPECIFIED</Text>
      </TouchableHighlight>
    );
    views.push(
      <TouchableHighlight
        key="Foods not specified"
        style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
        onPress={() => {
          this.setFoodLoggingModalVisible(!this.state.foodLoggingModalVisible);
          this.state.foodLoggingUserJourneyObj.notifyAppState(FoodLoggingUserJourney.FoodLoggingCompleteAppState(FoodLoggingUserJourney.AppStateCondition.FOODS_NOT_SPECIFIED));
        }}>
        <Text style={styles.textStyle}>FOODS_NOT_SPECIFIED</Text>
      </TouchableHighlight>
    );
    views.push(
      <TouchableHighlight
        key="Food List Incomplete"
        style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
        onPress={() => {
          this.setFoodLoggingModalVisible(!this.state.foodLoggingModalVisible);
          this.state.foodLoggingUserJourneyObj.notifyAppState(FoodLoggingUserJourney.FoodLoggingCompleteAppState(FoodLoggingUserJourney.AppStateCondition.FOODS_LIST_INCOMPLETE));
        }}>
        <Text style={styles.textStyle}>FOODS_LIST_INCOMPLETE</Text>
      </TouchableHighlight>
    );
    views.push(
      <TouchableHighlight
        key="Food Name Disambiguate"
        style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
        onPress={() => {
          this.setFoodLoggingModalVisible(!this.state.foodLoggingModalVisible);
          this.state.foodLoggingUserJourneyObj.notifyAppState(FoodLoggingUserJourney.FoodLoggingCompleteAppState(FoodLoggingUserJourney.AppStateCondition.FOODS_FOOD_NAME_DISAMBIGUATE));
        }}>
        <Text style={styles.textStyle}>FOODS_FOOD_NAME_DISAMBIGUATE</Text>
      </TouchableHighlight>
    );
    views.push(
      <TouchableHighlight
        key="Confirmation Required"
        style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
        onPress={() => {
          this.setFoodLoggingModalVisible(!this.state.foodLoggingModalVisible);
          this.state.foodLoggingUserJourneyObj.notifyAppState(FoodLoggingUserJourney.FoodLoggingCompleteAppState(FoodLoggingUserJourney.AppStateCondition.CONFIRMATION_REQUIRED));
        }}>
        <Text style={styles.textStyle}>CONFIRMATION_REQUIRED</Text>
      </TouchableHighlight>
    );
    views.push(
      <TouchableHighlight
        key="Confitmation Bailout"
        style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
        onPress={() => {
          this.setFoodLoggingModalVisible(!this.state.foodLoggingModalVisible);
          this.state.foodLoggingUserJourneyObj.notifyAppState(FoodLoggingUserJourney.FoodLoggingCompleteAppState(FoodLoggingUserJourney.AppStateCondition.CONFIRMATION_BAILOUT));
        }}>
        <Text style={styles.textStyle}>CONFIRMATION_BAILOUT</Text>
      </TouchableHighlight>
    );
    return views;
  };

  componentDidMount() {

    const foodLogAppStateAlert = () =>
      Alert.alert(
        'FoodLog App State',
        'Choose An AppState',
        [
          {
            text: 'UNSUPPORTED', onPress: () => {
              this.state.foodLoggingUserJourneyObj.notifyAppState(FoodLoggingUserJourney.UnsupportedAppState());
            }
          },

          {
            text: 'FOOD_LOG_COMPLETE', onPress: () => {
              this.setFoodLoggingModalVisible(true);
            }
          },
        ],
        { cancelable: false },
      );

    const fitnessAssistantListener = {
      onFoodLog: (foodInfo, foodLoggingUserJourney) => {
        this.setState({
          intentResponse: "User Journey : onFoodLog\n\nAssociated Data :\n" + JSON.stringify(foodInfo, null, '\t'),
          foodLoggingUserJourneyObj: foodLoggingUserJourney
        });
        console.log("foodInfo" + JSON.stringify(foodInfo, null, '\t'));
        if (this.state.showAppStateConditions) {
          foodLogAppStateAlert();
          return FoodLoggingUserJourney.WaitingAppState();
        } else {
          return FoodLoggingUserJourney.FoodLoggingCompleteAppState(FoodLoggingUserJourney.AppStateCondition.SUCCESS);
        }
      },
      onNavigation: (navigationInfo, navigationUserJourney) => {

      },
    };

    const fitnessAssistantLifeCycleObserver = {
      onAssistantInitSuccess: () => {
        console.log('onAssistantInitSuccess');
      },

      onAssistantInitFailure: error => {
        console.error('onAssistantInitFailure ' + error);
      },

      onAssistantInvoked: () => {
        console.log('onAssistantInvoked');
      },

      onAssistantClosed: isCancelled => {
        console.log('onAssistantClosed ' + isCancelled);
      },

      onAssistantLocaleChanged: locale => {
        console.log(
          'onAssistantLocaleChanged ' + JSON.stringify(locale, null, '\t'),
        );
      },

      onUnrecognisedUtterance: utterance => {
        console.log('onUnrecognisedUtterance ' + utterance);
      },

      onUtteranceDetected: utterance => {
        console.log('onUtteranceDetected ' + utterance);
      },

      onOnboardingSuccess: () => {
        console.log('onOnboardingSuccess');
      },

      onOnboardingFailure: () => {
        console.log('onOnboardingFailure');
      },

      onMicPermissionDenied: () => {
        console.log('onMicPermissionDenied');
      },
    };

    console.log('Initialising Slang Fitness Assistant');
    try {
      SlangFitnessAssistant.initialize({
        requestedLocales: ['en-IN', 'hi-IN'],
        assistantId: 'a26b7f63eb1b430ca87a401eefc0456d',
        apiKey: '81aa2384c19e42b4af9a2f66703b38ab',
        enableCustomTrigger: false,
        triggerPosition: {
          baseUIPosition: AssistantUIPosition.BaseUIPosition.BOTTOM_CENTER,
          offsetY: -20,
          offsetX: -20,
          draggable: true,
          forcedAtStartup: true,
        },
        onBoardingInfoTitle: {
          'en-IN': 'This is the title',
          'hi-IN': 'यह शीर्षक है',
        },
        onBoardingInfoDescription: {
          'en-IN': 'This is the description',
          'hi-IN': 'यह विवरण है',
        }
      });
      SlangFitnessAssistant.setAction(fitnessAssistantListener);
      SlangFitnessAssistant.setLifecycleObserver(
        fitnessAssistantLifeCycleObserver,
      );
      // SlangFitnessAssistant.ui.setWaveColorGradient(['#0000A0', '#0000FF']);
      // SlangFitnessAssistant.ui.setTextHighlightColor('#0000A0');
      // SlangFitnessAssistant.ui.setSettingsButtonBackgroundColor('#0000A0');
      // SlangFitnessAssistant.ui.setControlButtonBackgroundColor('#0000A0');

      SlangFitnessAssistant.ui.showTrigger();

    } catch (error) {
      console.error(error);
    }

  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView vertical={true}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.foodLoggingModalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <ScrollView vertical={true}>
                  <Text style={styles.modalText}>Select Food Logging AppState Condition</Text>
                  {this.renderFoodLoggingViews()}
                </ScrollView>
              </View>
            </View>
          </Modal>
          <View style={styles.viewStyle1}>
            <Text style={styles.headerText}> Slang Fitness Assistant PlayGround App</Text>

            <View style={styles.viewStyle2}>
              <Text style={styles.subTitleText2}>Show App State Conditions</Text>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={this.state.showAppStateConditions ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={this.toggleShowAppStateConditions}
                value={this.state.showAppStateConditions}
              />
            </View>

            <View style={styles.viewStyle3}>
              <ScrollView vertical={true}>
                <Text style={styles.intentResponseText}>{this.state.intentResponse}</Text>
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle1: {
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
    justifyContent: 'space-between',
    marginBottom: 16,
    flexDirection: 'column',
  },
  viewStyle2: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewStyle3: {
    marginTop: 16,
    justifyContent: 'space-between',
    marginBottom: 16,
    backgroundColor: '#000000',
    flexDirection: 'column',
    minHeight: 200,
  },
  buttonStyle: {
    height: 50,
    marginRight: 8,
    marginTop: 16,
    minWidth: 70,
    alignSelf: 'flex-start',
    justifyContent: "center",
    textTransform: "lowercase"
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    padding: 16,
    marginEnd: 16,
  },
  subTitleText: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'left',
    marginTop: 16,
  },
  subTitleText2: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: "left",
  },
  intentResponseText: {
    padding: 16,
    fontSize: 16,
    textAlign: 'left',
    fontFamily: 'monospace',
    color: 'white',
  },
  triggerStyle: {
    width: 80,
    height: 80,
    alignSelf: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    marginTop: 16,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginTop: 12,
  },
});

export default Main;