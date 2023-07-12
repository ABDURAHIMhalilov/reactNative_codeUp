import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { ListItem } from "@rneui/themed";

const Videos = () => {
  return (
    <ScrollView>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <Image
          style={{
            width: 150,
            height: 90,
          }}
          source={require("../../img/download.png")}
        />
        <View
          style={{
            width: "100%",
            marginLeft: 10,
          }}
        >
          <Text
            style={{
              width: "100%",
              fontSize: 16,
              maxWidth: "53%",
              marginBottom: 20,
            }}
          >
            1.1 Lorem ipsum dolor sit amet.
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <Text>
              <AntDesign name="clockcircleo" style={{ marginRight: 5 }} />
              20:20:20
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <Image
          style={{
            width: 150,
            height: 90,
          }}
          source={require("../../img/download.png")}
        />
        <View
          style={{
            width: "100%",
            marginLeft: 10,
          }}
        >
          <Text
            style={{
              width: "100%",
              fontSize: 16,
              maxWidth: "53%",
              marginBottom: 20,
            }}
          >
            1.1 Lorem ipsum dolor sit amet.
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <Text>
              <AntDesign name="clockcircleo" style={{ marginRight: 5 }} />
              20:20:20
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <Image
          style={{
            width: 150,
            height: 90,
          }}
          source={require("../../img/download.png")}
        />
        <View
          style={{
            width: "100%",
            marginLeft: 10,
          }}
        >
          <Text
            style={{
              width: "100%",
              fontSize: 16,
              maxWidth: "53%",
              marginBottom: 20,
            }}
          >
            1.1 Lorem ipsum dolor sit amet.
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <Text>
              <AntDesign name="clockcircleo" style={{ marginRight: 5 }} />
              20:20:20
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Videos;