import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
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
      <View style={styles.leftSection}>
        <View style={styles.iconContainer}>
          <Text style={styles.iconText}>{merchant.name.charAt(0)}</Text>
        </View>
      </View>
      
      <View style={styles.middleSection}>
        <View style={styles.header}>
          <Text style={styles.name}>{merchant.name}</Text>
          <View style={styles.ratingContainer}>
            <MaterialIcons name="star" size={16} color={Colors.warning} />
            <Text style={styles.rating}>{merchant.rating.toFixed(1)}</Text>
          </View>
        </View>
        
        <View style={styles.discountContainer}>
          <MaterialIcons name="local-offer" size={16} color="white" />
          <Text style={styles.discount}>{merchant.discount}</Text>
        </View>
        
        <View style={styles.addressContainer}>
          <MaterialIcons name="location-on" size={14} color={Colors.textLight} />
          <Text style={styles.address} numberOfLines={1}>{merchant.address}</Text>
        </View>
      </View>
      
      <View style={styles.rightSection}>
        <View style={styles.arrowContainer}>
          <MaterialIcons name="chevron-right" size={24} color={Colors.primary} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
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
  leftSection: {
    marginRight: 16,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: `${Colors.primary}15`,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  middleSection: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
    flex: 1,
    marginRight: 8,
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
    fontWeight: '600',
    color: Colors.warning,
    marginLeft: 4,
  },
  discountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  discount: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    marginLeft: 6,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  address: {
    fontSize: 13,
    color: Colors.textLight,
    marginLeft: 4,
    flex: 1,
  },
  rightSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: `${Colors.primary}10`,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MerchantCard;
