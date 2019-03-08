import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Colors from '../../constants/Colors';

export default class CalendarDay extends React.Component {

  static appearances = {
    past: 'past',
    today: 'today',
    future: 'future',
    filled: 'filled'
  };

  handlePress = () => {
    this.props.onPress(this.props.day);
  };

  circleStyles = () => {
    var circleStyles = [styles.circle];
    switch (this.props.appearance) {
      case CalendarDay.appearances.past:
        circleStyles.push(styles.circlePast);
        break;
      case CalendarDay.appearances.today:
        circleStyles.push(styles.circleToday);
        break;
      case CalendarDay.appearances.future:
        circleStyles.push(styles.circleFuture);
        break;
      case CalendarDay.appearances.filled:
        circleStyles.push(styles.circleFilled);
        break;
    }
    return circleStyles;
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.handlePress} activeOpacity={1}>
          <View style={this.circleStyles()}>
            <Text style={styles.day}>
              {this.props.day}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    aspectRatio: 1,
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    flex: 0.9,
    height: '90%',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    borderColor: 'black',
    borderWidth: 1,
  },
  circlePast: {
    backgroundColor: Colors.gray,
  },
  circleToday: {
    backgroundColor: Colors.blue,
  },
  circleFuture: {
    backgroundColor: 'white',
  },
  circleFilled: {
    backgroundColor: Colors.yellow,
  },
  day: {
    color: 'black',
    fontSize: 12,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
