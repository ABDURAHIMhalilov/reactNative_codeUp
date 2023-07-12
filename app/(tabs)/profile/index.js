import {
  View,
  Text,
  Image,
  ScrollView,
  Button,
  Dimensions,
  Animated,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import VideoScreen from "./Videos";
import QuestionScreen from "./QuestionsScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import KeyboardAwareScrollView from "react-native-keyboard-aware-scroll-view";
const Tab = createMaterialTopTabNavigator();
const { width, height } = Dimensions.get("screen");

// const images = {
//   videoScreen: VideoScreen,
//   QuestionScreen: QuestionScreen,
// };
// const data = Object.keys(images).map((i) => ({
//   key: i,
//   title: i,
//   image: images[i],
// }));

const index = () => {
  return (
    <ScrollView
      style={{
        width: "100%",
        height: "100%",
        padding: 10,
      }}
    >
      <View>
        <Image
          style={{
            width: "100%",
          }}
          source={require("../../img/download.png")}
        />
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: "gray",
              }}
            >
              Стоимость курса
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: "black",
              }}
            >
              250.000 uzs
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: "gray",
              }}
            >
              Размер поля
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: "black",
              }}
            >
              38 час
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 30,
          }}
        >
          <View
            style={{
              width: "50%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                width: 40,
                height: 40,
              }}
              source={require("../../img/Ellipse.png")}
            />
            <Text
              style={{
                fontSize: 17,
              }}
            >
              Halilov abdurahim
            </Text>
          </View>
          <Button title="obuna" />
          {/* <View
                    style={{
                      backgroundColor: "dodgerblue",
                      padding: 10,
                      borderRadius: 10,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 15,
                        color: "white",
                      }}
                    >
                      Подписаться
                    </Text>
                  </View> */}
        </View>
      </View>
      <QuestionScreen />
      {/* <View
        style={{
          width: "100%",
          height: "100%",
          marginTop: 20,
        }}
      >
        <Tab.Navigator
          style={{
            backgroundColor: "red",
          }}
        >
          <Tab.Screen name="Question" component={QuestionScreen} />
          <Tab.Screen name="Videos" component={VideoScreen} />
        </Tab.Navigator>
      </View> */}
      {/* <Animated.FlatList
        data={data}
        keyExtractor={(item) => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({ item }) => {
          return <View style={{ width, height }}>{item.videoScreen}</View>;
        }}
      ></Animated.FlatList> */}
    </ScrollView>
  );
};

export default index;
