import React, {useContext, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {isSameDay} from 'date-fns';
import {GlobalContext} from '../contexts/global';

const randomWords = require('random-words');

const DailySubject = () => {
  const {subject} = useContext(GlobalContext);
  useEffect(() => {
    const fetchSubject = async () => {
      if (
        !(
          subject.data.value &&
          subject.data.date &&
          isSameDay(new Date(subject.data.date), new Date())
        )
      ) {
        subject.set(randomWords());
      }
    };
    fetchSubject();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerStyle}>Today's Subject</Text>
      </View>
      <View>
        <Text style={styles.subjectStyle}>{subject.data.value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingHorizontal: 50,
    backgroundColor: '#FCF2F6',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  header: {
    flex: 0.5,
    justifyContent: 'center',
    backgroundColor: '#FE6767',
    borderRadius: 20,
    bottom: 20,
  },
  headerStyle: {
    padding: 5,
    textAlign: 'center',
    color: '#FCF2F6',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subjectStyle: {
    textAlign: 'center',
    color: '#330000',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default DailySubject;
