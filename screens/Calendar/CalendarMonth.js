import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import CalendarDay from './CalendarDay';
import util from '../../util/util';

export default class CalendarMonth extends React.Component {

  handleDayPress = (day) => {
    this.props.onPress(this.props.month, day);
  };

  render() {
    var days = [];
    const today = new Date();
    const year = today.getFullYear();
    const daysInMonth = util.daysInMonth(this.props.month, year);
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <CalendarDay
          key={day}
          day={day}
          month={this.props.month}
          onPress={this.handleDayPress}
          style={styles.day} />
      );
    }
    for (let day = daysInMonth + 1; day <= 31; day++)
    {
      days.push(
        <View key={day} style={styles.spacer} />
      );
    }
    return (
      <View style={styles.container}>
        {days}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  day: {
  },
  spacer: {
    aspectRatio: 1,
    backgroundColor: 'white',
    flex: 1,
  }
});
