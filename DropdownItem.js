import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';

const DropdownItem = ({item}) => {
  const [showData, setShowData] = useState(false);
  return (
    <View>
    
      <Dropdown
        data={item.sub_cateries}
        labelField={'name'}
        valueField={'name'}
        placeholder={item.category_name}
        style={{
          width: '90%',
          height: 50,
          borderWidth: 1,
          alignSelf: 'center',
          marginTop: 20,
          paddingLeft: 10,
          paddingRight: 10,
        }}
        onChange={item => {
          console.log(item);
        }}
      />
    </View>
  );
};

export default DropdownItem;
