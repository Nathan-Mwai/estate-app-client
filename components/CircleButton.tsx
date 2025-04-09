import { icons } from "@/constants";
import { IconProps } from "@/types/type";
import { useUser } from "@clerk/clerk-expo";
import { router } from "expo-router";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CircleButton = ({
  back,
  logout,
  icon,
  textIcon,
  backgroundColor,
  onPress,
  text,
  ...props
}: IconProps) => {
  const { user } = useUser();

  const handleSignOut = () => {};

  return (
    <SafeAreaView className="bg-white">
      <View>
        {back && (
          <TouchableOpacity
            onPress={() => router.back()}
            className={`justify-center items-center w-10 h-10 border border-gray-400 rounded-full bg-white ${backgroundColor}`}
          >
            {/* <Image source={icons.backArrow} className="w-5 h-5" /> */}
          </TouchableOpacity>
        )}
        {logout && (
          <TouchableOpacity
            onPress={handleSignOut}
            className={`justify-center items-center w-10 h-10 border border-gray-400 rounded-full bg-white ${backgroundColor}`}
          >
            <Image source={icons.logout} className="h-4 w-4" />
          </TouchableOpacity>
        )}
        {icon && (
          <>
            <TouchableOpacity
              onPress={onPress}
              className={`justify-center items-center w-16 h-16  bg-[#F3D4A6] rounded-full`}
            >
              <Image source={icon} className="h-7 w-7" />
            </TouchableOpacity>
            <View className="flex items-center justify-center">
              <Text className="text-lg font-IBM-medium">{text}</Text>
            </View>
          </>
        )}
        {textIcon && (
          <TouchableOpacity
            onPress={() => router.replace("/(root)/(tabs)/profile")}
            className="justify-center items-center w-11 h-11 border border-gray-400 rounded-full"
          >
            <Text className="text-4xl font-medium capitalize">
              {user?.firstName ||
                user?.emailAddresses[0].emailAddress.split("@")[0].charAt(0)}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default CircleButton;
