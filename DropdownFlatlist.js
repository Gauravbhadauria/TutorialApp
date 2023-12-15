import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import DropdownItem from './DropdownItem';

const DropdownFlatlist = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    fetch('https://dmapi.ipaypro.co/app_task/categories')
      .then(res => res.json())
      .then(json => {
        console.log(json.result);
        setCategories(json.result);
      });
  };
  return (
    <View>
      <FlatList
        data={categories}
        renderItem={({item, index}) => {
          return <DropdownItem item={item}/>;
        }}
      />
    </View>
  );
};

export default DropdownFlatlist;
