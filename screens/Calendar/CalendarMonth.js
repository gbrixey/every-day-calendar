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

  appearanceForDay = (day) => {
    if (this.props.filledDays.includes(day)) {
      return CalendarDay.appearances.filled;
    }
    const today = new Date();
    const date = new Date(util.currentYear(), this.props.month - 1, day);
    if (today.getMonth() == date.getMonth() && today.getDate() == date.getDate()) {
      return CalendarDay.appearances.today;
    } else if (date < today) {
      return CalendarDay.appearances.past;
    } else {
      return CalendarDay.appearances.future;
    }
  };

  render() {
    var days = [];
    const daysInMonth = util.daysInMonth(this.props.month, util.currentYear());
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <CalendarDay
          key={day}
          day={day}
          onPress={this.handleDayPress}
          appearance={this.appearanceForDay(day)}
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
