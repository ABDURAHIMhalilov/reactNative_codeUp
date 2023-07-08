import { Stack, Tabs, Link } from "expo-router";
import { Text, ScrollView, View, Image, Button, TextInput } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Feather from "react-native-vector-icons/Feather";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import StackLayout from "../home/_layout";
import settings from "../home/setting";
import Home from "./Home";
// import Course from "./Course";
import Setting from "./Setting";
import { TouchableOpacity } from "react-native-gesture-handler";
import Mentor from "./Mentor";

const Course = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <View style={{ width: "100%", height: "100%" }}>
      {/* <View> */}
      <Tab.Navigator>
        <Tab.Screen
          style={{
            fontSize: "8 !important",
          }}
          fontSize={8}
          name="Мои курсы"
          component={Home}
        />
        {/* <Tab.Screen name="Sertifikatlarim" component={Course} /> */}
        <Tab.Screen name="Cертификаты" component={Setting} />
        <Tab.Screen name="Hаставники" component={Mentor} />
      </Tab.Navigator>
      {/* </View> */}
    </View>
  );
};

export default Course;
