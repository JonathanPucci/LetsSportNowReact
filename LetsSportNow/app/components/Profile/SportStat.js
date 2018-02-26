import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { Rating, AirbnbRating } from "react-native-ratings";

export default class SportStat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sporticon: "ios-" + props.sport
    };
    if (props.sport == "running") this.state.sporticon = "run-fast";
  }

  render() {
    return (
      <View style={(styles.levels, styles.line)}>
        <IonIcon
          style={styles.icon}
          name={this.state.sporticon}
          size={30}
          color="white"
        />
        <AirbnbRating
          count={5}
          reviews={[
            "Terrible",
            "Bad",
            "Meh",
            "OK",
            "Good",
            "Hmm...",
            "Very Good",
            "Wow"
          ]}
          defaultRating={5}
          size={10}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  line: {
    flexDirection: "row"
  },
  text: {
    color: "white",
    padding: 10
    //left: 30
    //top: 5
  },
  icon: {
    //left: 20
    padding: 0
  },
  levels: {
    padding: 0
  },
  header: {
    color: "white",
    fontWeight: "bold",
    padding: 10
  }
});
