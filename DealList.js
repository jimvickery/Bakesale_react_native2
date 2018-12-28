import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import PropTypes from 'prop-types';
import DealItem from './DealItem';

class DealList extends React.Component {
  static propTypes = {
    deals: PropTypes.array.isRequired,
    onItemPress: PropTypes.func.isRequired,
  };

  _returnKey(item) {
    return item.toString();
  };

  render(){
    return(
      <View style={styles.list}>
      <FlatList
        data={this.props.deals}
        keyExtractor={(x,i) => i}
        renderItem={({item}) => <DealItem deal={item} onPress={this.props.onItemPress} />}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor:  '#eee',
    width: '100%',
  },
});

export default DealList;