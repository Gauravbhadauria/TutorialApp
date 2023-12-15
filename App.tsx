//import liraries
import React, { Component, useRef, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, Image, SafeAreaView, TouchableOpacity } from 'react-native';

type DataTypes = {
  image: string;
  id: number;
  title: string;
  description: string;
}
const App = () => {
  const [data, setData] = useState<DataTypes[]>([
    { image: require("./images/slide1.jpg"), title: "Slide 1", id: 1, description: "Dummy Data 1" },
    { image: require("./images/slide2.jpg"), title: "Slide 2", id: 2, description: "Dummy Data 2" },
    { image: require("./images/slide3.jpg"), title: "Slide 3", id: 3, description: "Dummy Data 3" },
    { image: require("./images/slide4.jpg"), title: "Slide 4", id: 4, description: "Dummy Data 4" },
    { image: require("./images/slide5.jpg"), title: "Slide 5", id: 5, description: "Dummy Data 5" }
  ])

  const [currentIndex, setCurrent] = useState<number>(0)
  const ref = useRef<FlatList>()
  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View>
        <FlatList ref={ref} onScroll={e => {
          setCurrent((e.nativeEvent.contentOffset.x / Dimensions.get("window").width).toFixed(0))
        }} showsHorizontalScrollIndicator={false} horizontal pagingEnabled data={data} renderItem={({ item, index }) => {
          return (
            <View style={{
              width: Dimensions.get("window").width,
              height: Dimensions.get("window").height - 300, justifyContent: 'center', alignItems: 'center'
            }}>
              <Image source={item.image} style={{ width: 250, height: 300 }} />
              <Text style={{ fontSize: 35, fontWeight: '700', marginTop: 20 }}>{item.title}</Text>
              <Text style={{ fontSize: 16, width: '80%', marginTop: 10, textAlign: 'justify' }}>{"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using"}</Text>
            </View>
          )
        }} />

      </View>
      <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 50 }}>
        {
          data.map((item, index) => {
            return <View style={{ width: currentIndex == index ? 20 : 5, borderRadius: 5, height: 5, backgroundColor: currentIndex == index ? "red" : 'black', marginLeft: 10 }}>

            </View>
          })
        }
      </View>
      <View style={{ width: '100%', marginTop: 80, justifyContent: 'space-between' }}>
        {currentIndex == 0 &&
          <TouchableOpacity style={{ width: '90%', height: 50, backgroundColor: 'black', borderRadius: 10, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}
            onPress={() => {
              setCurrent(currentIndex + 1)
              ref.current?.scrollToIndex({ animated: true, index: parseInt(currentIndex) + 1 })
            }}>
            <Text style={{ color: 'white' }}>{"Let's Start"}</Text>
          </TouchableOpacity>}
        {currentIndex > 0 && currentIndex < data.length - 1 ? <View style={{ width: '90%', alignSelf: 'center', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
          <TouchableOpacity style={{ width: '30%', height: 50, backgroundColor: 'black', borderRadius: 10, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}
            onPress={() => {

              setCurrent(currentIndex - 1)
              ref.current?.scrollToIndex({ animated: true, index: parseInt(currentIndex) - 1 })
            }}>
            <Text style={{ color: 'white' }}>{"Previous"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: '30%', height: 50, backgroundColor: 'black', borderRadius: 10, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}
            onPress={() => {
              if (data.length - 1 > currentIndex) {
                ref.current?.scrollToIndex({ animated: true, index: parseInt(currentIndex) + 1 })
                setCurrent(currentIndex + 1)
              }

            }}>
            <Text style={{ color: 'white' }}>{"Next"}</Text>
          </TouchableOpacity>
        </View > : null}
        {currentIndex == data.length - 1 &&
          <TouchableOpacity style={{ width: '90%', height: 50, backgroundColor: 'black', borderRadius: 10, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}
            onPress={() => {


            }}>
            <Text style={{ color: 'white' }}>{"Go To Dashboard"}</Text>
          </TouchableOpacity>}
      </View>

    </SafeAreaView>
  );
};




//make this component available to the app
export default App;


