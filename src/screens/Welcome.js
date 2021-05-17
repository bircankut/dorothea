import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Navigation from '../components/navigation';
import Login from '../assets/login.svg';
import Button from '../components/button';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.containers}>
      <Navigation navigation={navigation} title="Welcome" />
      <View style={styles.imageBox}>
        <Login witdh="110%" height="110%" />
      </View>
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.userContainer}>
          <View style={{paddingTop: 20}}>
            <Text style={styles.text}>What should I call you?</Text>
            <Text style={styles.text2}>
              You can enter your name or you can pick yourself a nickname!
            </Text>
          </View>
          <View>
            <TextInput
              style={styles.inputStyle}
              placeholder="user name"
              keyboardType="default"
              placeholderTextColor="#ddd"
            />
          </View>
          <Button
            style={{borderRadius: 15}}
            text={'Lets Go'}
            onPress={() =>
              navigation.navigate('Home', {
                screen: 'Main',
              })
            }
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  containers: {
    flex: 5,
    backgroundColor: '#FCF2F6',
    paddingTop: 30,
  },
  scrollViewContainer: {
    flex: 4,
  },
  imageBox: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  text: {
    textAlign: 'center',
    color: '#330000',
    fontSize: 25,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  text2: {
    textAlign: 'center',
    color: '#330000',
    fontSize: 17,
  },
  inputStyle: {
    borderColor: '#ddd',
    color: '#330000',
    marginVertical: 30,
    borderWidth: 2,
    borderRadius: 15,
    paddingLeft: 15,
  },
});

export default Welcome;
