import "../global.css";
import { ClerkLoaded, ClerkProvider } from "@clerk/clerk-expo";
import { Slot, SplashScreen, Stack } from "expo-router";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { useFonts } from "expo-font";
import { useEffect } from "react";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "IBM-Bold": require("../assets/fonts/IBMPlexSerif-Bold.ttf"),
    "IBM-ExtraBold": require("../assets/fonts/IBMPlexSerif-BoldItalic.ttf"),
    "IBM-Light": require("../assets/fonts/IBMPlexSerif-Light.ttf"),
    "IBM-Medium": require("../assets/fonts/IBMPlexSerif-Medium.ttf"),
    "IBM-Regular": require("../assets/fonts/IBMPlexSerif-Regular.ttf"),
    "IBM-SemiBold": require("../assets/fonts/IBMPlexSerif-SemiBold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <ClerkProvider tokenCache={tokenCache}>
      {/* <ClerkLoaded> */}
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(root)" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" options={{ headerShown: false }} />
        </Stack>
      {/* </ClerkLoaded> */}
    </ClerkProvider>
  );
}
