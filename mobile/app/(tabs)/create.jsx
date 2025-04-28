import { View, Text, KeyboardAvoidingView, Platform, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router'
import styles from "../../assets/styles/create.styles"
import { Ionicons } from '@expo/vector-icons'
import COLORS from "../../constant/colors"

export default function Create() {

  const [title, setTitle] = useState("")
  const [caption, setCaption] = useState("")
  const [rating, setRating] = useState(3)
  const [image, setImage] = useState(null)
  const [imageBase64, setImageBase64] = useState(null)
  const [loading, setLoading] = useState(false)
  

  const router = useRouter()
  const pickImage = async () => {}
  const handleSubmit = async () => {}
  
  return (
    <KeyboardAvoidingView
      style ={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle ={styles.container}
        style={styles.scrollViewStyle}
      >
        <View
          style = {styles.card}
        >
          {/* Header */}
          <View style ={styles.header}>
            <Text style={styles.title}>Add Book Recommendation</Text>
            <Text style={styles.subtitle}>Share your favourite reads with others</Text>
          </View>

          <View styles={styles.form}>
            {/* BOOK TITLE */}
            <View style={styles.formGroup}>
              <Text style= {styles.label}>Book Title</Text>
              <View style={styles.inputContainer}>
                <Ionicons
                  name="book-outline"
                  size={20}
                  color={COLORS.textSecondary}
                  style={styles.inputIcon}
                />
                <TextInput
                  style={styles.input}
                  placeholder='Enter book title'
                  placeholderTextColor={COLORS.placeholderText}
                />

              </View>
            </View>
          </View>
        </View>
        
      </ScrollView>
    </KeyboardAvoidingView>
  )
}