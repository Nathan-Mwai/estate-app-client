import TabBar from "@/components/TabBar";
import { icons } from "@/constants";
import { Tabs } from "expo-router";
import { Image, ImageSourcePropType, View } from "react-native";

const TabIcon = ({
  source,
  focused,
}: {
  source: ImageSourcePropType;
  focused: boolean;
}) => (
  <View
    className={`flex flex-row justify-center items-center rounded-full ${
      focused ? "bg-slate-300" : ""
    }`}
  >
    <View
      className={`rounded-full w-12 h-12 items-center justify-center ${
        focused ? "bg-slate-400" : ""
      } `}
    >
      <Image
        source={source}
        tintColor="white"
        resizeMode="contain"
        className="w-7 h-7"
      />
    </View>
  </View>
);

const TabLayout = () => (
  <Tabs
    initialRouteName="home"
    tabBar={(props) => <TabBar {...props} />}
    // screenOptions={{
    //   tabBarActiveTintColor: "white",
    //   tabBarInactiveTintColor: "white",
    //   tabBarShowLabel: false,
    //   tabBarStyle:{
    //     backgroundColor: '#333',
    //     borderTopLeftRadius:5,
    //     borderTopRightRadius:5,
    //     paddingBottom: 30,
    //     overflow:"hidden",
    //     height: 65,
    //     display: 'flex',
    //     justifyContent:'space-between',
    //     alignItems:"center",
    //     flexDirection:"row",
    //     position:"absolute"
    //   }
    // }}
  >
    <Tabs.Screen
      name="home"
      options={{
        title: "Home",
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} source={icons.home} />
        ),
      }}
    />
    <Tabs.Screen
      name="statement"
      options={{
        title: "Statements",
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} source={icons.statement} />
        ),
      }}
    />
    <Tabs.Screen
      name="profile"
      options={{
        title: "Profile",
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} source={icons.person} />
        ),
      }}
    />
  </Tabs>
);

export default TabLayout;
