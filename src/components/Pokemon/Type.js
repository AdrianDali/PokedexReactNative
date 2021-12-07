import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { map, capitalize } from "lodash";
import { PickerItem } from "react-native/Libraries/Components/Picker/Picker";
import getColorByPokemonType from "../../utils/getColorByPokemonType";

export default function Type(props) {
  const { types,type } = props;



  //console.log("SDASDS" + types.name);
  return (
    <View style={styles.content}>
      {map(types,(item,index) => (
          <View key={index} style={{...styles.pill, backgroundColor: getColorByPokemonType(item.type.name) }}>
          <Text>{item.type.name}</Text>
        </View>
      ))}
      
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"center"

  },
  //pildora
  pill:{
      paddingHorizontal:30,
      paddingVertical:5,
      borderRadius:20,
      marginHorizontal:10

  }
});
