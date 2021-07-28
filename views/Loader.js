import React from "react";
import { View, useWindowDimensions, StatusBar, StyleSheet } from "react-native";
import { View as MotiView } from "moti";

export const Loader = () => {
  const { width, height } = useWindowDimensions();

  const radius = 80;
  const border = Math.round(radius / 10);

  return (
    <>
      <StatusBar hidden />
      <View style={styles.topContainer}>
        <MotiView
          from={{
            borderWidth: 0,
            width: radius,
            height: radius,
            opacity: 0,
            shadowOpacity: 0.5,
          }}
          animate={{
            borderWidth: border,
            width: radius + 12,
            height: radius + 12,
            opacity: 1,
            shadowOpacity: 1,
          }}
          transition={{
            type: "timing",
            duration: 1000,
            loop: true,
          }}
          style={{
            width: radius,
            height: radius,
            borderRadius: radius,
            borderWidth: border,
            borderColor: "#fff",
            shadowColor: "#fff",
            shadowRadius: 10,
            shadowOffset: {
              width: 0,
              height: 0,
            },
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#010100",
  },
});
