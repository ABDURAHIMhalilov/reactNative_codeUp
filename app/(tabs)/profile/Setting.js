import { View, Text, Image, Button } from "react-native";
import React from "react";

export default function Setting() {
  return (
    <View
      style={{
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        border: 1,
        borderColor: "balck",
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          shadowColor: "#000",
          shadowOffset: { width: 3, height: 3 },
          shadowOpacity: 0.3,
          shadowRadius: 3.84,
          borderRadius: 5,
          marginTop: 10,
          padding: 5,
        }}
      >
        <Image
          source={require("../../img/MaskGroup.png")}
          style={{
            width: "100%",
            borderRadius: 5,
          }}
        />
      </View>

      <View
        style={{
          backgroundColor: "white",
          shadowColor: "#000",
          shadowOffset: { width: 3, height: 3 },
          shadowOpacity: 0.3,
          shadowRadius: 3.84,
          borderRadius: 5,
          marginTop: 10,
          padding: 5,
        }}
      >
        <Image
          source={require("../../img/MaskGroup.png")}
          style={{
            width: "100%",
            borderRadius: 5,
          }}
        />
        <Text
          style={{
            fontSize: 12,
            color: "black",
            padding: 3,
          }}
        >
          Основы программирования на Raspberry Pi
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: "#9DA7BB",
            paddingLeft: 3,
            paddingBottom: 15,
          }}
        >
          20-июнь, 2019 г
        </Text>
        <View
          style={{
            backgroundColor: "#10C8A0",
            width: 110,
            padding: 5,
            borderRadius: 3,
            position: "absolute",
            bottom: 10,
            right: 10,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 10,
            }}
          >
            Программирование
          </Text>
        </View>
      </View>
    </View>
  );
}
