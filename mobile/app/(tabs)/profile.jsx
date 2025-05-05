import { View, Text } from 'react-native'
import React, { useState } from 'react'
import {useRouter} from "expo-router";

export default function Profile() {
  const[books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const router = useRouter();

  const fetchData = async () => {
    try {
      setIsLoading(true)
      const response = fetch(`${API_URL}/books/user`, {
        headers : { Authorization : `Bearer ${token}`},
      });

      const data = (await response).json();
      if(!response.ok) throw new Error(data.message || "Failed to fetch user books");
      setBooks(data);

    } catch (error) {
      console.error("Erorr fetching data:", error);
      Alert.alert("Error", "Failed to load profile data. Pull down to refresh.");
    } finally{
      setIsLoading(false);
    }
  };



  return (
    <View>
      <Text>Profile Tab</Text>
    </View>
  )
}