import React, {Component} from 'react';
import {Animated, Easing, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native';

export default class ReferenceDrawing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
      step: 0,
    };

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);

    console.log(this.props.route.params);
    this.data = this.props.route.params.item;
  }

  next() {
    if (this.state.step === this.data.steps.length - 1) {
      return;
    }
    this.setState({step: this.state.step + 1}, () => {
      Animated.timing(this.state.progress, {
        toValue: this.data.steps[this.state.step],
        duration: 6000,
        useNativeDriver: true,
        easing: Easing.linear,
      }).start();
    });
  }

  previous() {
    if (this.state.step === 0) {
      return;
    }
    this.setState({step: this.state.step - 1}, () => {
      Animated.timing(this.state.progress, {
        toValue: this.data.steps[this.state.step],
        duration: 6000,
        useNativeDriver: true,
        easing: Easing.linear,
      }).start();
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.svgContainer}>
          <LottieView
            source={this.data.animationUri}
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
            <TouchableOpacity style={styles.button} onPress={this.next}>
              <View style={styles.textBox2}>
                <Text>Continue</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
    padding: 20,
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
  },
  textBox2: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
