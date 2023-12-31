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
import HomeScreen from "./Home";
// import Course from "./Course";
import SettingScreen from "./Setting";
import { TouchableOpacity } from "react-native-gesture-handler";
import MentorScreen from "./Mentor";

const Course = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <Tab.Navigator>
        <Tab.Screen
          style={{
            fontSize: "8 !important",
          }}
          name="Мои курсы"
          component={HomeScreen}
        />
        <Tab.Screen name="Cертификаты" component={SettingScreen} />
        <Tab.Screen name="Hаставники" component={MentorScreen} />
      </Tab.Navigator>
    </View>
  );
};

export default Course;
