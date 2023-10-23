import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Trang1({navigation}) {
  
  var data = [
    {
      id: 1,
      image: require("../img/donut_yellow 1.png"),
      name: "Tasty Donut",
      title: "Spicy tasty donut family",
      price: "$10.00",
    },
    {
      id: 2,
      image: require("../img/pink_donut.png"),
      name: "Pink Donut",
      title: "Spicy tasty donut family",
      price: "$20.00",
    },
    {
      id: 3,
      image: require("../img/green_donut 1.png"),
      name: "Floating Donut",
      title: "Spicy tasty donut family",
      price: "$30.00",
    },
    {
      id: 4,
      image: require("../img/tasty_donut 1.png"),
      name: "Red Donut",
      title: "Spicy tasty donut family",
      price: "$10.00",
    },
    {
      id: 5,
      image: "donut_red 1.png",
      name: "Blue Donut",
      title: "Spicy tasty donut family",
      price: "$10.00",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={{ flex: 3, justifyContent: "space-around" }}>
        <View style={{ flex: 1, marginTop: 10, marginLeft: 20 }}>
          <Text style={{ marginBottom: 10, fontSize: 15 }}>Welcome, Jala!</Text>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            Choice you Best food
          </Text>
        </View>

        <View style={{ flex: 1, marginTop: 30, marginLeft: 20 }}>
          <TextInput
            style={{ height: 40, width: 250 }}
            placeholder="Search food"
          ></TextInput>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            style={{
              height: 30,
              width: 95,
              alignItems: "center",
              backgroundColor: "#F1B000",
            }}
          >
            <Text>Donut</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 30,
              width: 95,
              alignItems: "center",
              borderColor: "#c4c4c4",
              borderWidth: 1,
            }}
          >
            <Text>Pink Donut</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 30,
              width: 95,
              alignItems: "center",
              borderColor: "#c4c4c4",
              borderWidth: 1,
            }}
          >
            <Text>Floating</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 7 }}>
        <ScrollView style={{ height: "100%" }} nestedScrollEnabled>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    flexDirection: "row",
                    height: 100,
                    width: "90%",
                    alignItems: "center",
                    backgroundColor: "#F4DDDD",
                    marginLeft: 20,
                    marginBottom: 10,
                    borderRadius: 8,
                  }}
                >
                  <Image
                    source={item.image}
                    style={{
                      height: "90%",
                      width: 100,
                      borderRadius: 10,
                      margin: 5,
                    }}
                  ></Image>
                  <View style={{ flexDirection: "column" }}>
                    <Text> {item.name}</Text>
                    <Text>{item.title}</Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text>{item.price}</Text>
                      <TouchableOpacity
                        style={{
                          borderRadius: 20,
                          borderTopLeftRadius: "100%",
                          position: "absolute",
                          bottom: -23,
                          right: -95,
                          borderColor: "#fff",
                          borderWidth: 1,
                          backgroundColor:"#f1b000"
                        }}
                        onPress={() => {
                          navigation.navigate( {
                            name: "screen2",
                            params :{
                                  image: item.image,
                                  name: item.name,
                                  title: item.title,
                                  price: item.price,
                            }

                          }
                           
                          
                          );
                        }}
                      >
                        <AntDesign name="plus" size={50} color="#fff" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            }}
          ></FlatList>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
