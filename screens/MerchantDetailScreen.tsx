import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, Linking, Platform } from 'react-native';
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
        <View style={styles.headerSection}>
          <View style={styles.ratingContainer}>
            <MaterialIcons name="star" size={20} color={Colors.warning} />
            <Text style={styles.rating}>{merchant.rating.toFixed(1)}</Text>
          </View>
          
          <View style={styles.discountBadge}>
            <MaterialIcons name="local-offer" size={20} color="white" />
            <Text style={styles.discountText}>{merchant.discount}</Text>
          </View>
        </View>
        
        <View style={styles.card}>
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <MaterialIcons name="info-outline" size={20} color={Colors.primary} />
              <Text style={styles.sectionTitle}>About</Text>
            </View>
            <Text style={styles.description}>{merchant.description}</Text>
          </View>
          
          <View style={styles.divider} />
          
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <MaterialIcons name="location-on" size={20} color={Colors.primary} />
              <Text style={styles.sectionTitle}>Address</Text>
            </View>
            <TouchableOpacity style={styles.addressContainer} onPress={handleMap}>
              <Text style={styles.address}>{merchant.address}</Text>
              <View style={styles.mapButton}>
                <MaterialIcons name="map" size={16} color={Colors.primary} />
                <Text style={styles.mapButtonText}>View Map</Text>
              </View>
            </TouchableOpacity>
          </View>
          
          <View style={styles.divider} />
          
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <MaterialIcons name="phone" size={20} color={Colors.primary} />
              <Text style={styles.sectionTitle}>Contact</Text>
            </View>
            <TouchableOpacity style={styles.contactContainer} onPress={handleCall}>
              <Text style={styles.contact}>{merchant.contact}</Text>
              <View style={styles.callButton}>
                <MaterialIcons name="call" size={16} color={Colors.primary} />
                <Text style={styles.callButtonText}>Call Now</Text>
              </View>
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
  headerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginVertical: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: `${Colors.warning}15`,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
  },
  rating: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.warning,
    marginLeft: 6,
  },
  discountBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
  },
  discountText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    marginLeft: 6,
  },
  card: {
    backgroundColor: Colors.card,
    borderRadius: 16,
    padding: 20,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowColor: Colors.cardShadow,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  section: {
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginLeft: 8,
  },
  description: {
    fontSize: 15,
    color: Colors.text,
    lineHeight: 22,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginVertical: 16,
  },
  addressContainer: {
    backgroundColor: `${Colors.textLight}08`,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
  },
  address: {
    fontSize: 15,
    color: Colors.text,
    marginBottom: 8,
  },
  mapButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: `${Colors.primary}10`,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  mapButtonText: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: '500',
    marginLeft: 4,
  },
  contactContainer: {
    backgroundColor: `${Colors.primary}08`,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
  },
  contact: {
    fontSize: 15,
    color: Colors.text,
    marginBottom: 8,
  },
  callButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: `${Colors.primary}10`,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  callButtonText: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: '500',
    marginLeft: 4,
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
    paddingVertical: 14,
    borderRadius: 12,
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
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 8,
  },
});

export default MerchantDetailScreen;
