import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import CategoryCard from '../components/CategoryCard';
import { categories } from '../constants/MockData';
import Colors from '../constants/Colors';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleCategoryPress = (categoryId: string, categoryName: string) => {
    navigation.navigate('Category' as never, { categoryId, categoryName } as never);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.card} barStyle="dark-content" />
      <Header title="DAYS Ahmedabad" />
      
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>Suvidha Card</Text>
        <Text style={styles.bannerSubtitle}>
          Exclusive discounts across Ahmedabad
        </Text>
      </View>
      
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CategoryCard
            category={item}
            onPress={() => handleCategoryPress(item.id, item.name)}
          />
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  banner: {
    backgroundColor: Colors.primary,
    padding: 20,
    marginBottom: 8,
  },
  bannerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  bannerSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  listContent: {
    paddingVertical: 8,
  },
});

export default HomeScreen;