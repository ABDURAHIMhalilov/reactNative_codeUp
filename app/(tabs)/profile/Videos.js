import { View, Text, ScrollView, Image } from "react-native";
import React from "react";

const Videos = () => {
  return (
    <ScrollView>
      <View
        style={{
          width: "100%",
        }}
      >
        <Image source={require("../../img/download.png")} />
      </View>
    </ScrollView>
  );
};

export default Videos;
