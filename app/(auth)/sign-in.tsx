import { View, Text, ScrollView, Image } from "react-native";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import { useState } from "react";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import OAuth from "@/components/OAuth";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onSignInPress = async () => {};
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.getStarted} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-IBM-semibold left-5 ">
            Welcome Back
          </Text>
        </View>
        <View className="p-5">
          <InputField
            label="Email"
            placeholder="Enter Your Email"
            icon={icons.mail}
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <InputField
            label="Password"
            placeholder="Enter Your Password"
            icon={icons.lock}
            secureTextEntry={true}
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />

          <CustomButton
            title="Sign In"
            onPress={onSignInPress}
            className="mt-6"
          />

          <OAuth />

          <Link href={"/sign-up"} className="text-lg text-center text-gray-500">
            <Text>Don&apos;t have an account</Text>
            <Text className="text-[#F3D4A6]"> Sign Up</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;
