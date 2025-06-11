import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, Linking, Platform, Image } from 'react-native';
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

  // Mock discount types for the merchant
  const discountTypes = [
    { type: 'Regular', description: '10% off on all items', icon: 'local-offer' },
    { type: 'Weekend Special', description: '15% off on weekends', icon: 'event' },
    { type: 'Family Package', description: '20% off for family visits', icon: 'people' },
    { type: 'Student Discount', description: '12% off with student ID', icon: 'school' },
  ];

  // Mock operating hours
  const operatingHours = [
    { day: 'Monday - Friday', hours: '10:00 AM - 9:00 PM' },
    { day: 'Saturday - Sunday', hours: '11:00 AM - 10:00 PM' },
  ];

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
        <View style={styles.merchantHeader}>
          <View style={styles.merchantIconContainer}>
            <Text style={styles.merchantIconText}>{merchant.name.charAt(0)}</Text>
          </View>
          <Text style={styles.merchantName}>{merchant.name}</Text>
          <View style={styles.ratingContainer}>
            <MaterialIcons name="star" size={20} color={Colors.warning} />
            <Text style={styles.rating}>{merchant.rating.toFixed(1)}</Text>
          </View>
          
          <View style={styles.discountBadge}>
            <MaterialIcons name="local-offer" size={20} color="white" />
            <Text style={styles.discountText}>{merchant.discount}</Text>
          </View>
        </View>
        
        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.quickActionButton} onPress={handleCall}>
            <View style={[styles.quickActionIcon, { backgroundColor: `${Colors.primary}15` }]}>
              <MaterialIcons name="phone" size={22} color={Colors.primary} />
            </View>
            <Text style={styles.quickActionText}>Call</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.quickActionButton} onPress={handleMap}>
            <View style={[styles.quickActionIcon, { backgroundColor: `${Colors.secondary}15` }]}>
              <MaterialIcons name="map" size={22} color={Colors.secondary} />
            </View>
            <Text style={styles.quickActionText}>Directions</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.quickActionButton}>
            <View style={[styles.quickActionIcon, { backgroundColor: `${Colors.info}15` }]}>
              <MaterialIcons name="share" size={22} color={Colors.info} />
            </View>
            <Text style={styles.quickActionText}>Share</Text>
          </TouchableOpacity>
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
              <MaterialIcons name="local-offer" size={20} color={Colors.primary} />
              <Text style={styles.sectionTitle}>Discount Types</Text>
            </View>
            <View style={styles.discountTypesContainer}>
              {discountTypes.map((discount, index) => (
                <View key={index} style={styles.discountTypeCard}>
                  <View style={styles.discountTypeIconContainer}>
                    <MaterialIcons name={discount.icon as any} size={20} color={Colors.primary} />
                  </View>
                  <View style={styles.discountTypeContent}>
                    <Text style={styles.discountTypeTitle}>{discount.type}</Text>
                    <Text style={styles.discountTypeDescription}>{discount.description}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
          
          <View style={styles.divider} />
          
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <MaterialIcons name="access-time" size={20} color={Colors.primary} />
              <Text style={styles.sectionTitle}>Operating Hours</Text>
            </View>
            <View style={styles.hoursContainer}>
              {operatingHours.map((item, index) => (
                <View key={index} style={styles.hoursItem}>
                  <Text style={styles.hoursDay}>{item.day}</Text>
                  <Text style={styles.hoursTime}>{item.hours}</Text>
                </View>
              ))}
            </View>
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
  merchantHeader: {
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  merchantIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 24,
    backgroundColor: `${Colors.primary}15`,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  merchantIconText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  merchantName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 8,
    textAlign: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: `${Colors.warning}15`,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    marginBottom: 12,
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
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    marginHorizontal: 16,
    backgroundColor: Colors.card,
    borderRadius: 16,
    marginBottom: 16,
    ...Platform.select({
      ios: {
        shadowColor: Colors.cardShadow,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  quickActionButton: {
    alignItems: 'center',
  },
  quickActionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  quickActionText: {
    fontSize: 12,
    color: Colors.text,
    fontWeight: '500',
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
  discountTypesContainer: {
    marginTop: 8,
  },
  discountTypeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: `${Colors.background}80`,
    padding: 12,
    borderRadius: 12,
    marginBottom: 8,
  },
  discountTypeIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: `${Colors.primary}10`,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  discountTypeContent: {
    flex: 1,
  },
  discountTypeTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 4,
  },
  discountTypeDescription: {
    fontSize: 13,
    color: Colors.textLight,
  },
  hoursContainer: {
    backgroundColor: `${Colors.background}80`,
    borderRadius: 12,
    padding: 12,
  },
  hoursItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: `${Colors.border}50`,
  },
  hoursDay: {
    fontSize: 14,
    color: Colors.text,
    fontWeight: '500',
  },
  hoursTime: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: '500',
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
