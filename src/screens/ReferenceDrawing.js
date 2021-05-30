import React, {Component} from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import LottieView from 'lottie-react-native';
import animations from '../animations';
import {GlobalContext} from '../contexts/global';
import Button from '../components/button';
import Modal from 'react-native-modal';

export default class ReferenceDrawing extends Component {
  static contextType = GlobalContext;

  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
      step: 0,
      isModalVisible: false,
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
    this.setState({
      isModalVisible: true,
    });
  }

  render() {
    return (
      <GlobalContext.Consumer>
        {({drawings}) => (
          <View style={styles.container}>
            <Modal
              isVisible={this.state.isModalVisible}
              animationType="slide"
              transparent={true}>
              <View style={styles.modalContainer}>
                <Text style={styles.text}>Welldone</Text>
                <Text style={styles.text2}>
                  You have completed this practice!
                </Text>
                <TouchableOpacity
                  style={styles.pinkButton}
                  onPress={() => this.props.navigation.navigate('Practices')}>
                  <Text style={styles.pinkButtonText}>Go to Practices</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.greyButton}
                  onPress={() =>
                    this.props.navigation.navigate('Home', {
                      screen: 'Main',
                    })
                  }>
                  <Text style={styles.greyButtonText}>Go to Menu</Text>
                </TouchableOpacity>
              </View>
            </Modal>

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
                <Button
                  text={'Back'}
                  onPress={this.previous}
                  variant={'secondary'}
                />
              </View>
              <View style={styles.backgroundContainer2}>
                {this.state.step === this.data.steps.length - 1 ? (
                  <Button text={'Finish'} onPress={this.onFinish} />
                ) : (
                  <Button text={'Continue'} onPress={this.next} />
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
  info: {
    textAlign: 'center',
    fontSize: 20,
  },
  modalContainer: {
    flex: 0.3,
    backgroundColor: '#FCF2F6',
    borderRadius: 20,
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingVertical: 40,
    paddingHorizontal: 40,
  },
  text: {
    textAlign: 'center',
    color: '#330000',
    fontSize: 20,
    alignItems: 'center',
    fontWeight: 'bold',
  },
  text2: {
    textAlign: 'center',
    color: '#330000',
    fontSize: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  pinkButton: {
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#FE6767',
    marginBottom: 15,
    borderRadius: 20,
  },
  greyButton: {
    height: 50,
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#330000',
  },
  pinkButtonText: {
    fontSize: 16,
    color: '#FCF2F6',
    fontWeight: '600',
    alignSelf: 'center',
  },
  greyButtonText: {
    fontSize: 16,
    color: '#330000',
    fontWeight: '600',
    alignSelf: 'center',
  },
});
