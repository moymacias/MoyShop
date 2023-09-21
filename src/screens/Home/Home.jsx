import { FlatList, SafeAreaView, StatusBar, View } from 'react-native'

import { CategoryItem } from './components'
import Counter from '../../components/Counter'
import { Header } from '../../components'
import React from 'react'
import dataCategories from '../../data/dataCategories'
import styles from './Home.style'

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Counter />
      <StatusBar animated={true} barStyle={'dark-content'} />
      <Header title={'Categories'} />
      <View style={styles.listContainer}>
        <FlatList
          data={dataCategories}
          keyExtractor={category => category.title}
          renderItem={({ item }) => (
            <CategoryItem category={item.title} navigation={navigation} />
          )}
        />
      </View>
    </SafeAreaView>
  )
}

export default Home
