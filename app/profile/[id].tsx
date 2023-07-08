import { View, Text, Image } from "react-native";
import { Link, Stack, useSearchParams } from "expo-router";
import Course from "../(tabs)/profile/Course";
import AntDesign from "react-native-vector-icons/AntDesign";
import Index from "../(tabs)/profile";
import { useState } from "react";
import SyncStorage from "sync-storage";

const DetailsPage = () => {
  const { id } = useSearchParams();
  const [page, setPage] = useState(SyncStorage.get("page"));
  var harif = "<-";
  function windowAlmash() {
    if (page == 0) {
      window.location.href = "/profile/course";
    } else {
      window.location.href = "/profile";
    }
  }
  return (
    <View>
      <Stack.Screen
        options={{
          headerTitle: "Kurslar",
          headerTitleAlign: "center",
          headerLeft: () => (
            <View onClick={() => windowAlmash()}>
              {/* <Link href="/profile"> */}
              <AntDesign
                style={{ fontSize: 30, marginLeft: 10 }}
                name="arrowleft"
              />
              {/* </Link> */}
            </View>
          ),
        }}
      />
      {/* <Text>My Details for: {id}</Text> */}
      {id === "course" ? <Course /> : <Index />}
    </View>
  );
};

export default DetailsPage;
