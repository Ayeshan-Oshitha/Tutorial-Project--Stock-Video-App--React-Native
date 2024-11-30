import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import React from "react";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      <Text className="text-3xl font-pblack">Aora! !</Text>
      <StatusBar style="auto" />
      <Link href="/home" style={{ color: "blue" }}>
        Go to Home
      </Link>
      <Link href="/bookmark" style={{ color: "blue" }}>
        Go to Bookmark
      </Link>
    </View>
  );
}
