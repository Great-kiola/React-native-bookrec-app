import { View, Text } from "react-native";
import React from "react";
import { useAuthStore } from "../store/authStore";

export default function ProfileHeader() {
  const {user} = useAuthStore();

  return (
    <View>
      <Text>ProfileHeader</Text>
    </View>
  );
}
