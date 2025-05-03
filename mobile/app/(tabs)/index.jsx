import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Image } from 'expo-image';

import { useAuthStore } from '../../store/authStore'
import { API_URL } from "../../constant/api";

import styles from "../../assets/styles/create.styles";



export default function Home() {

  const {token} = useAuthStore();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const [hasmore, setHasMore] = useState(true)

  const fetchBooks = async (pageNum = 1, refresh = false) => {
    try {
      if (refresh) setRefreshing(true);
      else if (pageNum === 1) setLoading(true);

      const response = await fetch(`${API_URL}/books?page=${pageNum}&limit=5`, {
        headers: {Authorization: `Bearer ${token}`},
      })

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "failed to fetch books");

      setBooks((prevBooks) => [...prevBooks, ...data.books]);
      
      setHasMore((pageNum) < data.totalPages);
      setPage(pageNum);

    } catch (error) {
      console.log("Error fetching books", error);
    } finally {
      if (refresh) setRefreshing(false)
      else setLoading(false);
    }
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleLoadMore = async () => {}

  const renderItem = ({item}) => (
    <View style ={styles.bookCard}>
      <View style = {styles.bookHeader}>
        <View style= {styles.userInfo}>
          <Image source ={{uri: item.user.profileImage}} style ={styles.avatar} />
          <Text style={styles.username}>{item.user.username}</Text>
        </View>
      </View>

      <View style ={styles.bookImageContainer}>
        <Image source={item.image} style={styles.bookImage} contentFit="cover"/>
      </View>
    </View>
  );


  console.log(books)



  return (
    <View>
      <FlatList
        data={books}
        renderItem = {renderItem}
        keyExtractor={(item) => item._id}
        contentContainerStyle ={styles.container}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}