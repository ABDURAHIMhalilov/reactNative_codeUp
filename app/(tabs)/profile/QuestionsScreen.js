import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import { Link } from "expo-router";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { ScrollView } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const QuestionsScreen = () => {
  return (
    // <KeyboardAwareScrollView
    //   style={{
    //     paddingHorizontal: 10,
    //     paddingTop: 10,
    //   }}
    //   extraHeight={10}
    // >
    //   <View
    //     style={{
    //       width: "100%",
    //       flexDirection: "row",
    //       justifyContent: "space-between",
    //       alignItems: "center",
    //       marginTop: 10,
    //       marginBottom: 10,
    //     }}
    //   >
    //     <Image
    //       style={{
    //         width: 50,
    //         height: 50,
    //       }}
    //       source={require("../../img/Ellipse.png")}
    //     />
    //     <View
    //       style={{
    //         width: "100%",
    //         marginLeft: 10,
    //       }}
    //     >
    //       <Text
    //         style={{
    //           width: "100%",
    //           fontSize: 16,
    //           maxWidth: "53%",
    //           marginBottom: 5,
    //         }}
    //       >
    //         To’rayev Jafarbek
    //       </Text>
    //       <View
    //         style={{
    //           flexDirection: "row",
    //           justifyContent: "flex-start",
    //           marginBottom: 5,
    //         }}
    //       >
    //         <Text
    //           style={{
    //             maxWidth: "85%",
    //           }}
    //         >
    //           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime,
    //           quibusdam?
    //         </Text>
    //       </View>
    //       <View
    //         style={{
    //           flexDirection: "row",
    //         }}
    //       >
    //         <Text
    //           style={{
    //             color: "darkblue",
    //           }}
    //         >
    //           <Feather name="corner-up-left" style={{ marginRight: 5 }} />
    //           отвечать
    //         </Text>
    //         <Text style={{ marginLeft: 10 }}>
    //           <AntDesign name="clockcircleo" style={{ marginRight: 5 }} />
    //           16 июля. 2019
    //         </Text>
    //       </View>
    //     </View>
    //   </View>
    //   <TextInput
    //     style={{
    //       width: "100%",
    //       borderWidth: 1,
    //       borderColor: "red",
    //       height: 40,
    //       marginBottom: 20,
    //     }}
    //   />
    // </KeyboardAwareScrollView>
    <View>
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
            width: 50,
            height: 50,
          }}
          source={require("../../img/Ellipse.png")}
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
              marginBottom: 5,
            }}
          >
            To’rayev Jafarbek
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              marginBottom: 5,
            }}
          >
            <Text
              style={{
                maxWidth: "85%",
              }}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime,
              quibusdam?
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                color: "darkblue",
              }}
            >
              <Feather name="corner-up-left" style={{ marginRight: 5 }} />
              отвечать
            </Text>
            <Text style={{ marginLeft: 10 }}>
              <AntDesign name="clockcircleo" style={{ marginRight: 5 }} />
              16 июля. 2019
            </Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: "green" }} />
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}>
        <View style={{ padding: 40, backgroundColor: "white" }}>
          <TextInput
            placeholder="Email..."
            style={{
              backgroundColor: "#f2f2f2",
              borderRadius: 5,
              height: 40,
              paddingVertical: 0,
              paddingHorizontal: 10,
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
    // <ScrollView
    //   style={{
    //     padding: 5,
    //   }}
    // >
    //   <KeyboardAvoidingView>
    //     <View
    //       style={{
    //         width: "100%",
    //         flexDirection: "row",
    //         justifyContent: "space-between",
    //         alignItems: "center",
    //         marginTop: 10,
    //         marginBottom: 10,
    //       }}
    //     >
    //       <Image
    //         style={{
    //           width: 50,
    //           height: 50,
    //         }}
    //         source={require("../../img/Ellipse.png")}
    //       />
    //       <View
    //         style={{
    //           width: "100%",
    //           marginLeft: 10,
    //         }}
    //       >
    //         <Text
    //           style={{
    //             width: "100%",
    //             fontSize: 16,
    //             maxWidth: "53%",
    //             marginBottom: 5,
    //           }}
    //         >
    //           To’rayev Jafarbek
    //         </Text>
    //         <View
    //           style={{
    //             flexDirection: "row",
    //             justifyContent: "flex-start",
    //             marginBottom: 5,
    //           }}
    //         >
    //           <Text
    //             style={{
    //               maxWidth: "85%",
    //             }}
    //           >
    //             Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    //             Maxime, quibusdam?
    //           </Text>
    //         </View>
    //         <View
    //           style={{
    //             flexDirection: "row",
    //           }}
    //         >
    //           <Text
    //             style={{
    //               color: "darkblue",
    //             }}
    //           >
    //             <Feather name="corner-up-left" style={{ marginRight: 5 }} />
    //             отвечать
    //           </Text>
    //           <Text style={{ marginLeft: 10 }}>
    //             <AntDesign name="clockcircleo" style={{ marginRight: 5 }} />
    //             16 июля. 2019
    //           </Text>
    //         </View>
    //       </View>
    //     </View>
    //     <View
    //       style={{
    //         width: "100%",
    //         flexDirection: "row",
    //         justifyContent: "space-between",
    //         alignItems: "center",
    //         marginTop: 10,
    //         marginBottom: 10,
    //       }}
    //     >
    //       <Image
    //         style={{
    //           width: 50,
    //           height: 50,
    //         }}
    //         source={require("../../img/Ellipse.png")}
    //       />
    //       <View
    //         style={{
    //           width: "100%",
    //           marginLeft: 10,
    //         }}
    //       >
    //         <Text
    //           style={{
    //             width: "100%",
    //             fontSize: 16,
    //             maxWidth: "53%",
    //             marginBottom: 5,
    //           }}
    //         >
    //           To’rayev Jafarbek
    //         </Text>
    //         <View
    //           style={{
    //             flexDirection: "row",
    //             justifyContent: "flex-start",
    //             marginBottom: 5,
    //           }}
    //         >
    //           <Text
    //             style={{
    //               maxWidth: "85%",
    //             }}
    //           >
    //             Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    //             Maxime, quibusdam?
    //           </Text>
    //         </View>
    //         <View
    //           style={{
    //             flexDirection: "row",
    //           }}
    //         >
    //           <Text
    //             style={{
    //               color: "darkblue",
    //             }}
    //           >
    //             <Feather name="corner-up-left" style={{ marginRight: 5 }} />
    //             отвечать
    //           </Text>
    //           <Text style={{ marginLeft: 10 }}>
    //             <AntDesign name="clockcircleo" style={{ marginRight: 5 }} />
    //             16 июля. 2019
    //           </Text>
    //         </View>
    //       </View>
    //     </View>
    //     <View
    //     // style={{
    //     //   width: "100%",
    //     //   position: "absolute",
    //     //   bottom: -40,
    //     //   backgroundColor: "white",
    //     // }}
    //     >
    //       <View
    //         id="question"
    //         style={{
    //           position: "relative",
    //         }}
    //       >
    //         <TextInput
    //           keyboardType="numeric"
    //           style={{
    //             borderWidth: 1,
    //             borderColor: "black",
    //             height: 37,
    //             borderRadius: 6,
    //             paddingLeft: 5,
    //             // placeholderTextColor: "#483",
    //             paddingRight: 50,
    //           }}
    //           placeholder="Отвечать"
    //           onPressIn={() => {}}
    //         />
    //         <FontAwesome
    //           name="send-o"
    //           style={{
    //             fontSize: 25,
    //             position: "absolute",
    //             top: 7,
    //             right: 15,
    //           }}
    //         />
    //       </View>
    //     </View>
    //   </KeyboardAvoidingView>
    // </ScrollView>
  );
};

export default QuestionsScreen;
