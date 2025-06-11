import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
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
            <Text style={styles.subtitle}>Key Benefits:</Text>
            <View style={styles.benefitItem}>
              <MaterialIcons name="check-circle" size={20} color={Colors.secondary} />
              <Text style={styles.benefitText}>Exclusive discounts at 100+ merchants</Text>
            </View>
            <View style={styles.benefitItem}>
              <MaterialIcons name="check-circle" size={20} color={Colors.secondary} />
              <Text style={styles.benefitText}>Valid for the entire family</Text>
            </View>
            <View style={styles.benefitItem}>
              <MaterialIcons name="check-circle" size={20} color={Colors.secondary} />
              <Text style={styles.benefitText}>One-year validity</Text>
            </View>
            <View style={styles.benefitItem}>
              <MaterialIcons name="check-circle" size={20} color={Colors.secondary} />
              <Text style={styles.benefitText}>No usage limits</Text>
            </View>
            <View style={styles.benefitItem}>
              <MaterialIcons name="check-circle" size={20} color={Colors.secondary} />
              <Text style={styles.benefitText}>New merchants added regularly</Text>
            </View>
          </View>
          
          <View style={styles.howToUseContainer}>
            <Text style={styles.subtitle}>How to Use:</Text>
            <Text style={styles.description}>
              Simply present your DAYS Suvidha Card at participating establishments before 
              making a payment to avail the discount. The merchant will verify your card 
              and apply the discount as per their offer.
            </Text>
          </View>
          
          <View style={styles.contactContainer}>
            <Text style={styles.subtitle}>Contact Us:</Text>
            <TouchableOpacity style={styles.contactItem} onPress={handleContact}>
              <MaterialIcons name="phone" size={20} color={Colors.primary} />
              <Text style={styles.contactText}>+91 9876543210</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contactItem} onPress={handleWebsite}>
              <MaterialIcons name="language" size={20} color={Colors.primary} />
              <Text style={styles.contactText}>www.daysahmedabad.com</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contactItem}>
              <MaterialIcons name="email" size={20} color={Colors.primary} />
              <Text style={styles.contactText}>info@daysahmedabad.com</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contactItem}>
              <MaterialIcons name="location-on" size={20} color={Colors.primary} />
              <Text style={styles.contactText}>123 SG Highway, Ahmedabad, Gujarat</Text>
            </TouchableOpacity>
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
    borderRadius: 50,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
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
    marginTop: 8,
  },
  card: {
    backgroundColor: Colors.card,
    borderRadius: 12,
    padding: 20,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 12,
    marginTop: 8,
  },
  description: {
    fontSize: 15,
    color: Colors.text,
    lineHeight: 22,
    marginBottom: 16,
  },
  benefitsContainer: {
    marginVertical: 8,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  benefitText: {
    fontSize: 15,
    color: Colors.text,
    marginLeft: 8,
  },
  howToUseContainer: {
    marginVertical: 8,
  },
  contactContainer: {
    marginVertical: 8,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  contactText: {
    fontSize: 15,
    color: Colors.primary,
    marginLeft: 8,
  },
  websiteButton: {
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 8,
    marginHorizontal: 16,
    marginBottom: 24,
  },
  websiteButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 8,
  },
});

export default AboutScreen;