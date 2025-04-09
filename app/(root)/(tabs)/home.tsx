import CircleButton from "@/components/CircleButton";
import CustomButton from "@/components/CustomButton";
import { icons } from "@/constants";
import { useUser } from "@clerk/clerk-expo";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useCallback, useState } from "react";
import {
  FlatList,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const data = [
  {
    id: "1",
    date: "01/07",
    curr: "1498",
    prev: "1493",
    units: "5",
    total: "900",
  },
  {
    id: "2",
    date: "01/07",
    curr: "1498",
    prev: "1493",
    units: "5",
    total: "900",
  },
  {
    id: "3",
    curr: "2000",
    prev: "1493",
    units: "5",
    total: "900",
  },
  {
    id: "4",
    curr: "2999",
    prev: "1493",
    units: "5",
    total: "900",
  },
  {
    id: "4",
    curr: "2345",
    prev: "1493",
    units: "5",
    total: "900",
  },
];
const home = () => {
  const renderItem = ({ item }: any) => (
    <View className="flex flex-row justify-between items-center">
      <Text className="text-white">{item.date}</Text>
      <Text className="text-white">{item.curr}</Text>
      <Text className="text-white">{item.prev}</Text>
      <Text className="text-white">{item.units}</Text>
      <Text className="text-white">{item.total}</Text>
    </View>
  );
  const [refreshing, setRefreshing] = useState(false);
  const { user } = useUser();
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 h-full p-2 bg-white ">
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View>
            <View className="flex justify-between flex-row gap-x-3">
              <View>
                <View className="flex flex-row gap-x-3">
                  <CircleButton textIcon={true} />
                  <View className="font-IBM-medium">
                    <Text>Welcome Back, </Text>
                    <Text className="capitalize">
                      {user?.firstName ||
                        user?.emailAddresses[0].emailAddress.split("@")[0]}
                    </Text>
                  </View>
                </View>
              </View>
              <CircleButton logout />
            </View>
            <View>
              <LinearGradient
                colors={["#22488D", "#0459F6"]}
                style={styles.water}
              >
                <View className="py-10">
                  <Text className="font-IBM-bold text-4xl">Water Bill</Text>
                  {/* The Money on the second money */}
                  <View className="flex justify-start items-end">
                    <Text className="font-IBM-extrabold text-2xl">
                      KSH.Water Bill
                    </Text>
                  </View>
                  <Text className="font-IBM-light text-2xl">Water Bill</Text>
                </View>
              </LinearGradient>
            </View>
            <View className="flex flex-row justify-between mt-3 mx-5">
              {/* has swiper functionality to switch from water bill to service charge */}
              <Text className="font-IBM-medium text-xl underline">
                Water Bill
              </Text>
              <Text className="font-IBM-medium text-xl underline">
                Service Charge
              </Text>
            </View>
            <View>
              <LinearGradient
                colors={["#22488D", "#0459F6"]}
                style={styles.water}
              >
                <View className="py-10">
                  <Text className="font-IBM-bold text-4xl">Water Bill</Text>
                  <Text className="font-IBM-light text-2xl">Water Bill</Text>
                  <View>
                    {/* Container */}
                    <View className="">
                      {/* Headers */}
                      <View className="flex flex-row justify-between items-center px-2">
                        <Text className="flex-1 font-IBM text-white text-center">
                          Date
                        </Text>
                        <Text className="flex-1 font-IBM text-white text-center">
                          Curr.{"\n"}Reading
                        </Text>
                        <Text className=" flex-1 font-IBM text-white text-center">
                          Prev.{"\n"}Reading
                        </Text>
                        <Text className="flex-1 font-IBM text-white text-center">
                          Units{"\n"}Consumed
                        </Text>
                        <Text className="flex-1 font-IBM text-white text-center">
                          Total
                        </Text>
                      </View>
                      <View className="border border-white mt-0.5" />
                      <FlatList
                        className="mx-7"
                        data={data.slice(0, 2)}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderItem}
                      />
                    </View>
                  </View>
                  <View className="mt-4 flex items-end">
                    <Text className="text-xl">Pay Before: 01/01/2025</Text>
                  </View>
                </View>
              </LinearGradient>
            </View>
            <View className="flex flex-row justify-between items-center mx-2 px-4 mt-6">
              <CircleButton icon={icons.pay} text="Pay" />
              <CircleButton
                icon={icons.statement}
                text="Statement"
                onPress={() => {
                  router.push("/(root)/(tabs)/statement");
                }}
              />
              <CircleButton text="Calculator" icon={icons.calculator} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  water: {
    // borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
});

export default home;
