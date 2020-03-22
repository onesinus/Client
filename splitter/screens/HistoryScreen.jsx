import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, Modal } from 'react-native'
import Constants from 'expo-constants';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

import payment from '../assets/images/payment.jpg'
import pay from '../assets/images/pay.png'

import { CustomCard, BackButton } from '../components'


function HistoryScreen() {
  return (
    <View style={styles.container} >
      <View style={styles.head}>
        <BackButton />
        <Image source={pay} style={styles.image}/>
        <View style={styles.title}>
          <Text style={styles.totalBill}>HISTORY</Text>
          <View style={styles.boxAmount}>
            <Text style={styles.amount}>Transactions</Text>
          </View>
        </View>
      </View>
      <View style={styles.box}>
        <ScrollView>
          <CustomCard />
        </ScrollView>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(101, 151, 160)',
    flex: 1,
  },
  head: {
    paddingLeft: 10,
    flexDirection: 'row',
  },
  title: {
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 20
  },
  image: {
    height: 150,
    width: 100,
    marginLeft: 10
  },
  totalBill: {
    marginTop: 20,
    color: 'white',
    fontSize: 30,
  },
  boxAmount: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 15,
    shadowRadius: 2,
    elevation: 2
  },
  amount: {
    color: 'rgb(101, 151, 160)',
    fontSize: 14,
    letterSpacing: 2,
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  box: {
    backgroundColor: 'white',
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 15,
    shadowRadius: 15,
    elevation: 10,
  },
  next: {
    height: 20,
  }
});


export default HistoryScreen