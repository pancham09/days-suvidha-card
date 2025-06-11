import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, Linking, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Header from '../components/Header';
import Colors from '../constants/Colors';

const AboutScreen = () => {
  const handleWebsite = () => {
    Linking.openURL('https://daysahmedabad.com');
  };

  const handleContact = () => {
    Linking.openURL('tel:+919876543210');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.card} barStyle="dark-content" />
      <Header title="About DAYS Suvidha Card" showBackButton />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.logoContainer}>
          <View style={styles.logoBackground}>
            <Text style={styles.logoText}>DAYS</Text>
          </View>
          <Text style={styles.logoSubtitle}>Ahmedabad</Text>
        </View>
        
        <View style={styles.card}>
          <Text style={styles.title}>What is DAYS Suvidha Card?</Text>
          <Text style={styles.description}>
            The DAYS Suvidha Card is a premium discount card that offers exclusive benefits and 
            special offers at various establishments across Ahmedabad. From restaurants and 
            healthcare to shopping and entertainment, the card provides significant savings 
            for individuals and families.
          </Text>
          
          <View style={styles.benefitsContainer}>
            <Text style={styles.subtitle}>Key Benefits</Text>
            <View style={styles.benefitsList}>
              {[
                'Exclusive discounts at 100+ merchants',
                'Valid for the entire family',
                'One-year validity',
                'No usage limits',
                'New merchants added regularly'
              ].map((benefit, index) => (
                <View key={index} style={styles.benefitItem}>
                  <View style={styles.benefitIcon}>
                    <MaterialIcons name="check" size={16} color="white" />
                  </View>
                  <Text style={styles.benefitText}>{benefit}</Text>
                </View>
              ))}
            </View>
          </View>
          
          <View style={styles.divider} />
          
          <View style={styles.howToUseContainer}>
            <Text style={styles.subtitle}>How to Use</Text>
            <Text style={styles.description}>
              Simply present your DAYS Suvidha Card at participating establishments before 
              making a payment to avail the discount. The merchant will verify your card 
              and apply the discount as per their offer.
            </Text>
          </View>
          
          <View style={styles.divider} />
          
          <View style={styles.contactContainer}>
            <Text style={styles.subtitle}>Contact Us</Text>
            <View style={styles.contactList}>
              {[
                { icon: 'phone', text: '+91 9876543210', action: handleContact },
                { icon: 'language', text: 'www.daysahmedabad.com', action: handleWebsite },
                { icon: 'email', text: 'info@daysahmedabad.com', action: null },
                { icon: 'location-on', text: '123 SG Highway, Ahmedabad, Gujarat', action: null }
              ].map((item, index) => (
                <TouchableOpacity 
                  key={index} 
                  style={styles.contactItem}
                  onPress={item.action}
                  disabled={!item.action}
                >
                  <View style={[styles.contactIcon, { backgroundColor: `${Colors.primary}15` }]}>
                    <MaterialIcons name={item.icon as any} size={18} color={Colors.primary} />
                  </View>
                  <Text style={styles.contactText}>{item.text}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
        
        <TouchableOpacity style={styles.websiteButton} onPress={handleWebsite}>
          <Text style={styles.websiteButtonText}>Visit Our Website</Text>
          <MaterialIcons name="arrow-forward" size={20} color="white" />
        </TouchableOpacity>
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
  logoContainer: {
    alignItems: 'center',
    marginVertical: 24,
  },
  logoBackground: {
    width: 100,
    height: 100,
    borderRadius: 24,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  logoText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  logoSubtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
    marginTop: 12,
  },
  card: {
    backgroundColor: Colors.card,
    borderRadius: 16,
    padding: 24,
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
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 16,
  },
  description: {
    fontSize: 15,
    color: Colors.text,
    lineHeight: 24,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginVertical: 24,
  },
  benefitsContainer: {
    marginTop: 24,
  },
  benefitsList: {
    marginTop: 8,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  benefitIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  benefitText: {
    fontSize: 15,
    color: Colors.text,
    flex: 1,
  },
  howToUseContainer: {
  },
  contactContainer: {
  },
  contactList: {
    marginTop: 8,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  contactIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  contactText: {
    fontSize: 15,
    color: Colors.text,
  },
  websiteButton: {
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 24,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  websiteButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    marginRight: 8,
  },
});

export default AboutScreen;
