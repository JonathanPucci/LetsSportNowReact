import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import SportStat from "./SportStat";

export default class Stats extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.line}>
          <EntypoIcon
            style={styles.icon}
            name="sports-club"
            size={30}
            color="white"
          />
          <Text style={(styles.text, styles.header)}>Niveau </Text>
        </View>

        <View style={styles.line}>
          <View style={styles.indentedLevelSport}>
            <SportStat sport="basketball" />
          </View>
          <View style={styles.indentedLevelSport}>
            <SportStat sport="football" />
          </View>
        </View>
        <View style={styles.line}>
          <View style={styles.indentedLevelSport}>
            <SportStat sport="tennisball" />
          </View>
          <View style={styles.indentedLevelSport}>
            <SportStat sport="basketball-outline" />
          </View>
        </View>

        <View style={styles.line}>
          <MaterialCommunityIcon
            style={styles.icon}
            name="human-handsup"
            size={30}
            color="white"
          />
          <Text style={(styles.text, styles.header)}>Stats </Text>
        </View>
        <View style={styles.indented}>
          <View style={styles.line}>
            <Text style={styles.text}>Participations </Text>
            <Text style={styles.text}>25</Text>
          </View>
          <View style={styles.line}>
            <Text style={styles.text}>Organisations </Text>
            <Text style={styles.text}>12</Text>
          </View>
          <View style={styles.line}>
            <Text style={styles.text}>Incrusts </Text>
            <Text style={(styles.text, styles.incrustIndent)}> 3</Text>
          </View>
        </View>
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
  indented: {
    marginLeft: 30
  },
  indentedLevelSport: {
    paddingLeft: 50
  },
  text: {
    color: "white",
    padding: 10
    //left: 30
    //top: 5
  },
  icon: {
    //left: 20
    padding: 5
  },
  header: {
    color: "white",
    fontWeight: "bold",
    padding: 10,
    fontSize: 20
  },
  incrustIndent: {
    color: "white",
    left: 43,
    top: 10
  }
});
