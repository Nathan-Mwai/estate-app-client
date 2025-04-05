import { View, Text, Image } from "react-native";
import CustomButton from "./CustomButton";
import { icons } from "@/constants";

const OAuth = () => {
  const handleGoogleSignin = async () => {};
  return (
    <View>
      <View className="flex flex-row justify-center items-center mt-4 gap-x-3">
        <View className="flex-1 h-[1px] bg-gray-400" />
        <Text className="text-lg">Or</Text>
        <View className="flex-1 h-[1px] bg-gray-400" />
      </View>
      <CustomButton
        title="Log In With Google"
        className="mt-5 w-full shadow-none"
        IconLeft={() => (
          <Image
            source={icons.google}
            resizeMode="contain"
            className="w-5 h-5 mx-2"
          />
        )}
        onPress={handleGoogleSignin}
      />
    </View>
  );
};

export default OAuth;
