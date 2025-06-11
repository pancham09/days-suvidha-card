import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import Header from '../components/Header';
import Colors from '../constants/Colors';
import { Merchant } from '../constants/MockData';

type MerchantDetailRouteParams = {
  merchant: Merchant;
};

const MerchantDetailScreen = () => {
  const route = useRoute<RouteProp<Record<string, MerchantDetailRouteParams>, string>>();
  const { merchant } = route.params;

  const handleCall = () => {
    Linking.openURL(`tel:${merchant.contact}`);
  };

  const handleMap = () => {
    const address = encodeURIComponent(merchant.address);
    Linking.openURL(`https://maps.google.com/?q=${address}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.card} barStyle="dark-content" />
      <Header title={merchant.name} showBackButton />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <View style={styles.ratingContainer}>
            <MaterialIcons name="star" size={20} color={Colors.warning} />
            <Text style={styles.rating}>{merchant.rating.toFixed(1)}</Text>
          </View>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Discount Offer</Text>
            <View style={styles.discountContainer}>
              <MaterialIcons name="local-offer" size={20} color={Colors.secondary} />
              <Text style={styles.discount}>{merchant.discount}</Text>
            </View>
          </View>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.description}>{merchant.description}</Text>
          </View>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Address</Text>
            <TouchableOpacity style={styles.addressContainer} onPress={handleMap}>
              <MaterialIcons name="location-on" size={20} color={Colors.textLight} />
              <Text style={styles.address}>{merchant.address}</Text>
              <MaterialIcons name="open-in-new" size={16} color={Colors.primary} />
            </TouchableOpacity>
          </View>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Contact</Text>
            <TouchableOpacity style={styles.contactContainer} onPress={handleCall}>
              <MaterialIcons name="phone" size={20} color={Colors.primary} />
              <Text style={styles.contact}>{merchant.contact}</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.actionButtons}>
          <TouchableOpacity style={[styles.button, styles.callButton]} onPress={handleCall}>
            <MaterialIcons name="phone" size={20} color="white" />
            <Text style={styles.buttonText}>Call</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.button, styles.mapButton]} onPress={handleMap}>
            <MaterialIcons name="map" size={20} color="white" />
            <Text style={styles.buttonText}>View on Map</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollView: {
    flex: 1,
  },
  card: {
    backgroundColor: Colors.card,
    borderRadius: 12,
    padding: 16,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: `${Colors.warning}15`,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 16,
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  rating: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.warning,
    marginLeft: 4,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 8,
  },
  discountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: `${Colors.secondary}15`,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
  },
  discount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.secondary,
    marginLeft: 8,
  },
  description: {
    fontSize: 15,
    color: Colors.text,
    lineHeight: 22,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: `${Colors.textLight}10`,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
  },
  address: {
    fontSize: 15,
    color: Colors.text,
    marginLeft: 8,
    flex: 1,
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: `${Colors.primary}10`,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
  },
  contact: {
    fontSize: 15,
    color: Colors.primary,
    marginLeft: 8,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginBottom: 24,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 6,
  },
  callButton: {
    backgroundColor: Colors.primary,
  },
  mapButton: {
    backgroundColor: Colors.secondary,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default MerchantDetailScreen;