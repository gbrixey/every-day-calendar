import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Colors from '../../constants/Colors';

export default class CalendarDay extends React.Component {

  handlePress = () => {
    if (!this.props.isHidden) {
      this.props.onPress(this.props.day);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.handlePress} activeOpacity={1}>
          <View style={[styles.circle, styles.circleFuture]}>
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
  },
  circleFuture: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
  },
  day: {
    color: 'black',
    fontSize: 12,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
