import CircleButton from "@/components/CircleButton";
import CustomButton from "@/components/CustomButton";
import { useUser } from "@clerk/clerk-expo";
import { LinearGradient } from "expo-linear-gradient";
import { useCallback, useState } from "react";
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const home = () => {
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
                <Text className="font-IBM-light">Water Bill</Text>
              </View>
            </LinearGradient>
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
