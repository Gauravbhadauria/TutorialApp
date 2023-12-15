//import liraries
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';

import SelectItem from './SelectItem';

// create a component
const FlatlistSelection = () => {
  const [users, setUsers] = useState([]);
  const [showCheckbox, setShowCheckbox] = useState(false);

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        console.log(json);
        json.map(item => {
          item.isSelected = false;
        });
        setUsers(json);
      });
  };
  const onSelect = ind => {
    let temp = users;
    temp.map((item, index) => {
      if (index == ind) {
        item.isSelected = !item.isSelected;
      }
    });
    let tempData = [];
    temp.map(item => {
      tempData.push(item);
    });
    setUsers(tempData);
  };
  const clearAll = () => {
    let temp = users;
    temp.map((item, index) => {
      item.isSelected = false;
    });
    let tempData = [];
    temp.map(item => {
      tempData.push(item);
    });
    setUsers(tempData);
  };
  const selectAll = () => {
    let temp = users;
    temp.map((item, index) => {
      item.isSelected = true;
    });
    let tempData = [];
    temp.map(item => {
      tempData.push(item);
    });
    setUsers(tempData);
  };
  const getSelectedItems = () => {
    let temp = users;
    let tempData = [];
    temp.map((item, index) => {
      if (item.isSelected) {
        tempData.push(item);
      }
    });
    return tempData.length;
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      {showCheckbox && (
        <View
          style={{
            width: '100%',
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              setShowCheckbox(false);
              clearAll();
            }}>
            <Image
              source={require('./clear.png')}
              style={{width: 30, height: 30}}
            />
          </TouchableOpacity>
          <Text
            style={{
              padding: 10,
              color: 'black',
              borderWidth: 1,
              marginLeft: 20,
              borderRadius: 10,
            }}
            onPress={() => {
              selectAll();
            }}>
            Select All
          </Text>
          <Text style={{marginLeft: 20}}>
            {'selected(' + getSelectedItems() + ') items'}
          </Text>
        </View>
      )}

      <FlatList
        contentContainerStyle={{marginTop: 20}}
        data={users}
        renderItem={({item, index}) => {
          return (
            <SelectItem
              isCheckBox={showCheckbox}
              item={item}
              onLongPress={() => {
                if (showCheckbox) {
                  setShowCheckbox(false);
                  clearAll();
                } else {
                  setShowCheckbox(true);
                }
              }}
              onSelect={x => {
                onSelect(index);
              }}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

//make this component available to the app
export default FlatlistSelection;
