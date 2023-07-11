import { View, Text, Image } from "react-native";
import { Link, Stack, useSearchParams } from "expo-router";
import Course from "../(tabs)/profile/Course";
import AntDesign from "react-native-vector-icons/AntDesign";
import Index from "../(tabs)/profile";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DetailsPage = () => {
  const { id } = useSearchParams();
  const [page, setPage] = "0";
  var harif = "<-";
  function windowAlmash() {
    if (page === "0") {
      window.location.href = "/profile";
    } else {
      window.location.href = "/profile/course";
    }
  }
  const handleChange = async () => {
    const pageStore = await AsyncStorage.getItem("page");
  };
  useEffect(() => {
    handleChange();
  }, []);
  return (
    <>
      {page == "0" ? (
        <View>
          <Stack.Screen
            options={{
              headerTitle: "Kurslar",
              headerTitleAlign: "center",
              headerLeft: () => (
                <Link href="/profile">
                  <AntDesign
                    style={{ fontSize: 30, marginLeft: 10 }}
                    name="arrowleft"
                  />
                </Link>
              ),
            }}
          />
          {id === "course" ? <Course /> : <Index />}
        </View>
      ) : (
        <View>
          {page == "1" ? (
            <View>
              <Stack.Screen
                options={{
                  headerTitle: "Kurslar12",
                  headerTitleAlign: "center",
                  headerLeft: () => (
                    <Link href="/">
                      <AntDesign
                        style={{ fontSize: 30, marginLeft: 10 }}
                        name="arrowleft"
                      />
                    </Link>
                  ),
                }}
              />
              {id === "course" ? <Course /> : <Index />}
            </View>
          ) : (
            <View>
              <Stack.Screen
                options={{
                  headerTitle: "Kurslar12",
                  headerTitleAlign: "center",
                  headerLeft: () => (
                    <Link href="/">
                      <AntDesign
                        style={{ fontSize: 30, marginLeft: 10 }}
                        name="arrowleft"
                      />
                    </Link>
                  ),
                }}
              />
              {id === "course" ? <Course /> : <Index />}
            </View>
          )}
        </View>
      )}
    </>
  );
};

export default DetailsPage;
