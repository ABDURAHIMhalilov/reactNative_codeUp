import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import { createDrawerNavigator } from "@react-navigation/drawer";
// import Profile from "./_layout";
import SyncStorage from "sync-storage";
import { Collapse } from "antd";

const items = [
  {
    key: "1",
    label: "1. Dasturlashga kirish va o’rnatish jarayoni",
    children: (
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 10,
        }}
      >
        <Image
          style={{
            width: 100,
            height: 60,
          }}
          source={require("../../img/download.png")}
        />
        <View
          style={{
            width: "60%",
          }}
        >
          <Text style={{ fontSize: 17 }}>1.2 Lorem ipsum dolor sit.</Text>
          <Text>
            <AntDesign name="clockcircleo" style={{ marginRight: 5 }} />
            2022:20:20
          </Text>
        </View>
      </View>
    ),
  },
  {
    key: "2",
    label: "2. Backend bo'yicha kurslar",
    children: (
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 10,
        }}
      >
        <Image
          style={{
            width: 100,
            height: 60,
          }}
          source={require("../../img/Rectangle.png")}
        />
        <View
          style={{
            width: "60%",
          }}
        >
          <Text style={{ fontSize: 17 }}>1.2 Lorem ipsum dolor sit.</Text>
          <Text>
            <AntDesign name="clockcircleo" style={{ marginRight: 5 }} />
            2022:20:20
          </Text>
        </View>
      </View>
    ),
  },
];

const index = () => {
  // const Drawer = createDrawerNavigator();
  const [final, setFinal] = useState();
  const [state, setState] = useState("none");
  // const [ page, setPage ] = useState(SyncStorage.get())
  useEffect(() => {
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
    }, 1900);
    SyncStorage.set("page", 1);
  }, []);

  return (
    <>
      {/* <Drawer.Navigator>
        <Drawer.Screen name="home" component={Profile} />
      </Drawer.Navigator> */}
      {final === null ? (
        <View
          style={{
            padding: 10,
          }}
        >
          <View
            style={{
              backgroundColor: "dodgerblue",
              width: 40,
              height: 30,
              position: "fixed",
              zIndex: 2,
              top: 420,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: 20,
              borderRadius: 10,
              right: -10,
              paddingLeft: 10,
            }}
            onClick={() => setState("flex")}
          >
            <Text
              style={{
                color: "white",
                fontSize: 25,
              }}
            >
              {"<"}
            </Text>
          </View>

          <View
            style={{
              width: "100%",
              position: "absolute",
              zIndex: 2,
              height: 600,
              padding: 10,
              display: state,
              right: 0,
              top: 0,
            }}
          >
            <View
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "white",
                position: "relative",
              }}
            >
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 20,
                }}
              >
                <Text
                  style={{
                    borderWidth: 1,
                    borderRightColor: "red",
                    borderBottomColor: "white",
                    borderLeftColor: "white",
                    borderTopColor: "white",
                    paddingRight: 10,
                    maxWidth: "60%",
                  }}
                >
                  Основы программирования на Raspberry Pi
                </Text>
                <Text>
                  24 видео
                  <br />
                  38 час
                </Text>
              </View>
              <Collapse items={items} defaultActiveKey={["1"]} />
            </View>
          </View>
          <View>
            <Image
              style={{
                width: "100%",
              }}
              source={require("../../img/download.png")}
            />
            <Text
              style={{
                fontSize: 25,
                width: "95%",
                marginTop: 10,
                marginLeft: 10,
              }}
            >
              Основы программирования на Raspberry Pi
            </Text>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <View
                style={{
                  // width: "40%",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AntDesign
                  style={{
                    fontSize: 25,
                  }}
                  name="star"
                  color="goldenrod"
                />
                <AntDesign
                  style={{
                    fontSize: 25,
                  }}
                  name="star"
                  color="goldenrod"
                />
                <AntDesign
                  style={{
                    fontSize: 25,
                  }}
                  name="star"
                  color="goldenrod"
                />
                <AntDesign
                  style={{
                    fontSize: 25,
                  }}
                  name="star"
                  color="goldenrod"
                />
                <AntDesign
                  style={{
                    fontSize: 25,
                  }}
                  name="star"
                  color="gray"
                />
              </View>
              <View
                style={{
                  backgroundColor: "dodgerblue",
                  padding: 10,
                  borderRadius: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "white",
                  }}
                >
                  <Entypo
                    style={{
                      fontSize: 20,
                      marginRight: 10,
                      color: "white",
                    }}
                    name="share"
                  />
                  Отправка
                </Text>
              </View>
            </View>
          </View>
          <View>
            {/* <View
          style={{
            width: 150,
            backgroundColor: "dodgerblue",
            padding: 5,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "white",
            }}
          >
            Dasturlash
          </Text>
        </View> */}

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
              <View
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
              </View>
            </View>
          </View>
        </View>
      ) : (
        <View>{final}</View>
      )}
    </>
  );
};

export default index;
