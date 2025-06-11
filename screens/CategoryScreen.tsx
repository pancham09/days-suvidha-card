import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, SafeAreaView, StatusBar } from 'react-native';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import MerchantCard from '../components/MerchantCard';
import { merchants, Merchant } from '../constants/MockData';
import Colors from '../constants/Colors';

type CategoryRouteParams = {
  categoryId: string;
  categoryName: string;
};

const CategoryScreen = () => {
  const route = useRoute<RouteProp<Record<string, CategoryRouteParams>, string>>();
  const navigation = useNavigation();
  const { categoryId, categoryName } = route.params;
  const [categoryMerchants, setCategoryMerchants] = useState<Merchant[]>([]);

  useEffect(() => {
    // Filter merchants by category
    const filteredMerchants = merchants.filter(
      (merchant) => merchant.category === categoryId
    );
    setCategoryMerchants(filteredMerchants);
  }, [categoryId]);

  const handleMerchantPress = (merchant: Merchant) => {
    navigation.navigate('MerchantDetail' as never, { merchant } as never);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.card} barStyle="dark-content" />
      <Header title={categoryName} showBackButton />
      
      <FlatList
        data={categoryMerchants}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MerchantCard
            merchant={item}
            onPress={() => handleMerchantPress(item)}
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
  listContent: {
    paddingVertical: 8,
  },
});

export default CategoryScreen;