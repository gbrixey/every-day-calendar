import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CalendarMonth from './CalendarMonth';

export default class CalendarScreen extends React.Component {
  static navigationOptions = ({ navigation}) => {
    const today = new Date();
    const year = today.getFullYear();
    return {
      title: String(year),
    }
  };

  handleDayPress = (month, day) => {

  };

  render() {
    var months = [];
    for (let month = 1; month < 12; month++) {
      months.push(
        <CalendarMonth
          key={month}
          month={month}
          onPress={this.handleDayPress}
          style={styles.month} />
      );
    }
    return (
      <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} maximumZoomScale={3} >
        <View style={styles.container}>
          {months}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  month: {
  },
});
