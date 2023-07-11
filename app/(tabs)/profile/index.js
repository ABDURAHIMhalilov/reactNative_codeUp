import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Videos from "./Videos";
import Question from "./Question";
import { Button, Space } from "antd";

const index = () => {
  const [final, setFinal] = useState();
  const Tab = createMaterialTopTabNavigator();

  useEffect(() => {
    AsyncStorage.setItem("page", "1");
    setFinal(
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 40,
        }}
      >
        <Image
          style={{
            width: 80,
            height: 80,
          }}
          source={require("../../img/Loading.gif")}
        />
      </View>
    );
    setTimeout(() => {
      setFinal(null);
    }, 1000);
  }, []);

  return (
    <ScrollView>
      {final === null ? (
        <View
          style={{
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
              <Button>Подписаться</Button>
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
          <Tab.Navigator>
            <Tab.Screen name="Вопрос" component={Question} />
            <Tab.Screen name="Видео" component={Videos} />
          </Tab.Navigator>
        </View>
      ) : (
        <View>{final}</View>
      )}
    </ScrollView>
  );
};

export default index;
