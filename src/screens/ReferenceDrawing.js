import React, {Component} from 'react';
import {Animated, Easing, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native';
import animations from '../animations';
import {GlobalContext} from '../contexts/global';

export default class ReferenceDrawing extends Component {
  static contextType = GlobalContext;

  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
      step: 0,
    };

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.onFinish = this.onFinish.bind(this);

    console.log(this.props.route.params);
    this.data = this.props.route.params.item;
  }

  next() {
    if (this.state.step === this.data.steps.length - 1) {
      return this.state.progress.setValue(1);
    }
    const prevValue = this.data.steps[this.state.step][0];
    this.setState({step: this.state.step + 1}, () => {
      this.state.progress.setValue(prevValue);
      Animated.timing(this.state.progress, {
        toValue: this.data.steps[this.state.step][0],
        duration: this.data.steps[this.state.step - 1][1] * 1000,
        isInteraction: false,
        useNativeDriver: true,
        easing: Easing.linear,
      }).start();
    });
  }

  previous() {
    if (this.state.step === 0) {
      return this.state.progress.setValue(0);
    }
    const prevValue = this.data.steps[this.state.step][0];
    this.setState({step: this.state.step - 1}, () => {
      this.state.progress.setValue(prevValue);
      Animated.timing(this.state.progress, {
        toValue: this.data.steps[this.state.step][0],
        duration: this.data.steps[this.state.step][1] * 1000,
        useNativeDriver: true,
        easing: Easing.linear,
      }).start();
    });
  }

  async onFinish() {
    console.log(await this.context.drawings.isFinished(this.data.name));
    this.context.drawings.addFinished(this.data);
    this.props.navigation.navigate('Home', {
      screen: 'Main',
    });
  }

  render() {
    return (
      <GlobalContext.Consumer>
        {({drawings}) => (
          <View style={styles.container}>
            <Text style={styles.info}>Name: {this.data.name}</Text>
            <Text style={styles.info}>
              Step: {this.state.step + 1} / {this.data.steps.length}
            </Text>
            <Text style={styles.info}>
              Finished: {drawings.isFinished(this.data.name).toString()}
            </Text>
            <View style={styles.svgContainer}>
              <LottieView
                source={animations[this.data.name]}
                progress={this.state.progress}
              />
            </View>
            <View style={styles.buttonContainer}>
              <View style={styles.backgroundContainer}>
                <TouchableOpacity
                  style={styles.buttonBorder}
                  onPress={this.previous}>
                  <View style={styles.textBox}>
                    <Text>Back</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.backgroundContainer2}>
                {this.state.step === this.data.steps.length - 1 ? (
                  <TouchableOpacity
                    style={styles.button}
                    onPress={this.onFinish}>
                    <View style={styles.textBox2}>
                      <Text style={styles.whiteText}>Finish</Text>
                    </View>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity style={styles.button} onPress={this.next}>
                    <View style={styles.textBox2}>
                      <Text style={styles.whiteText}>Continue</Text>
                    </View>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        )}
      </GlobalContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FCF2F6',
  },
  buttonContainer: {
    flex: 0.15,
    flexDirection: 'row',
    paddingVertical: 20,
  },
  svgContainer: {
    flex: 0.85,
    padding: 15,
    margin: 15,
    borderWidth: 1,
    borderColor: '#20232a',
    borderRadius: 15,
  },
  backgroundContainer: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  backgroundContainer2: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  buttonBorder: {
    height: 50,
    borderWidth: 2,
    borderColor: '#330000',
    borderRadius: 20,
  },
  textBox: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 50,
    backgroundColor: '#FE6767',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#FE6767',
  },
  textBox2: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteText: {
    color: 'white',
  },
  info: {
    textAlign: 'center',
    fontSize: 20,
  },
});
