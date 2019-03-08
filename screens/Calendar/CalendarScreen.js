import React from 'react';
import {
  AsyncStorage,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CalendarMonth from './CalendarMonth';
import util from '../../util/util';

export default class CalendarScreen extends React.Component {
  static navigationOptions = ({ navigation}) => {
    return {
      title: String(util.currentYear()),
    }
  };

  constructor(props) {
    super(props);
    this.state = {filledDates: {}};
  }

  handleDayPress = (month, day) => {
    var filledDates = this.state.filledDates;
    if (filledDates[month]) {
      const indexOfFilledDate = filledDates[month].indexOf(day);
      if (indexOfFilledDate >= 0) {
        filledDates[month].splice(indexOfFilledDate, 1);
      } else {
        filledDates[month].push(day);
      }
    } else {
      filledDates[month] = [day];
    }
    this.setState({filledDates: filledDates}, this.saveFilledDates);
  };

  componentDidMount() {
    this.loadFilledDates();
  }

  loadFilledDates = async () => {
    try {
      // Only load stored dates if the years match.
      // i.e. If we have entered a new year, start over with a blank calendar.
      const year = await AsyncStorage.getItem('year');
      const currentYear = util.currentYear().toString();
      if (year == currentYear) {
        const filledDates = await AsyncStorage.getItem('filledDates') || '';
        this.setState({filledDates: JSON.parse(filledDates)});
      } else {
        const filledDates = {};
        await AsyncStorage.setItem('filledDates', JSON.stringify(filledDates));
        await AsyncStorage.setItem('year', currentYear);
        this.setState({filledDates: filledDates});
      }
    } catch(error) {
      console.error(error);
    }
  };

  saveFilledDates = async () => {
    try {
      await AsyncStorage.setItem('filledDates', JSON.stringify(this.state.filledDates));
    } catch(error) {
      console.error(error);
    }
  };

  render() {
    var months = [];
    for (let month = 1; month <= 12; month++) {
      months.push(
        <CalendarMonth
          key={month}
          month={month}
          onPress={this.handleDayPress}
          filledDays={this.state.filledDates[month] || []}
          style={styles.month} />
      );
    }
    return (
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        maximumZoomScale={3}
        contentInsetAdjustmentBehavior={'automatic'} >
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
