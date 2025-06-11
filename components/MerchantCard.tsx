import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { Merchant } from '../constants/MockData';

interface MerchantCardProps {
  merchant: Merchant;
  onPress: () => void;
}

const MerchantCard: React.FC<MerchantCardProps> = ({ merchant, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.header}>
        <Text style={styles.name}>{merchant.name}</Text>
        <View style={styles.ratingContainer}>
          <MaterialIcons name="star" size={16} color={Colors.warning} />
          <Text style={styles.rating}>{merchant.rating.toFixed(1)}</Text>
        </View>
      </View>
      
      <View style={styles.discountContainer}>
        <MaterialIcons name="local-offer" size={16} color={Colors.secondary} />
        <Text style={styles.discount}>{merchant.discount}</Text>
      </View>
      
      <View style={styles.addressContainer}>
        <MaterialIcons name="location-on" size={16} color={Colors.textLight} />
        <Text style={styles.address} numberOfLines={1}>{merchant.address}</Text>
      </View>
      
      <View style={styles.footer}>
        <View style={styles.contactContainer}>
          <MaterialIcons name="phone" size={16} color={Colors.primary} />
          <Text style={styles.contact}>{merchant.contact}</Text>
        </View>
        <MaterialIcons name="chevron-right" size={20} color={Colors.textLight} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.text,
    flex: 1,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: `${Colors.warning}15`,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  rating: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.warning,
    marginLeft: 4,
  },
  discountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: `${Colors.secondary}15`,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 8,
    marginBottom: 12,
    alignSelf: 'flex-start',
  },
  discount: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.secondary,
    marginLeft: 4,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  address: {
    fontSize: 14,
    color: Colors.textLight,
    marginLeft: 4,
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contact: {
    fontSize: 14,
    color: Colors.primary,
    marginLeft: 4,
  },
});

export default MerchantCard;