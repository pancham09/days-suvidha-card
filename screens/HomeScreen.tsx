import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, StatusBar, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import CategoryCard from '../components/CategoryCard';
import { categories } from '../constants/MockData';
import Colors from '../constants/Colors';
import { MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

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
        <View style={styles.bannerContent}>
          <View>
            <Text style={styles.bannerTitle}>Suvidha Card</Text>
            <Text style={styles.bannerSubtitle}>
              Exclusive discounts across Ahmedabad
            </Text>
          </View>
          <View style={styles.bannerIconContainer}>
            <MaterialIcons name="card-giftcard" size={40} color="white" />
          </View>
        </View>
      </View>
      
      <View style={styles.listHeader}>
        <Text style={styles.listHeaderTitle}>Categories</Text>
        <Text style={styles.listHeaderSubtitle}>Explore discount categories</Text>
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
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
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
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 16,
    borderRadius: 16,
    elevation: 4,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  bannerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    maxWidth: '80%',
  },
  bannerIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listHeader: {
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  listHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.text,
  },
  listHeaderSubtitle: {
    fontSize: 14,
    color: Colors.textLight,
    marginTop: 4,
  },
  listContent: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    paddingBottom: 24,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});

export default HomeScreen;
