import React, { Component } from "react";
import MapView from "react-native-maps";
import { AppRegistry, StyleSheet, Text, View, Dimensions } from "react-native";
import Swiper from "react-native-swiper";

import ProfilePage from "./app/components/Profile/ProfilePage";

const styles = StyleSheet.create({
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: Dimensions.get("window").width / 5,
    height: Dimensions.get("window").height / 5
  },
  container: {
    flex: 1
  },
  slideDefault: {
    flex: 1,

    backgroundColor: "#9DD6EB"
  },
  text: {
    padding: 100,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: 30,
    fontWeight: "bold"
  }
});

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      outerScrollEnabled: true,
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
      markers: []
    };
  }

  verticalScroll = index => {
    if (index !== 1) {
      this.setState({
        outerScrollEnabled: false
      });
    } else {
      this.setState({
        outerScrollEnabled: true
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Swiper
          loop={false}
          showsPagination={false}
          index={1}
          scrollEnabled={this.state.outerScrollEnabled}
        >
          <View style={styles.slideDefault}>
            <Text style={styles.text}>Event to put here Guigui</Text>
          </View>

          <View style={styles.slideDefault}>
            <Text style={styles.text}>Home page</Text>
          </View>

          <View style={styles.slideDefault}>
            <ProfilePage />
          </View>
        </Swiper>
      </View>
      // <View>
      //   <MapView
      //     style={styles.map}
      //     initialRegion={{
      //       latitude: 37.78825,
      //       longitude: -122.4324,
      //       latitudeDelta: 0.0922,
      //       longitudeDelta: 0.0421
      //     }}
      //   />
      // </View>
    );
  }
}
