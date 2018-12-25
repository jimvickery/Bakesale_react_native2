import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import PropTypes from 'prop-types';
import DealItem from './DealItem';

class DealList extends React.Component {
  static propTypes = {
    deals: PropTypes.array.isRequired,
    onItemPress: PropTypes.func.isRequired,
  };
  render(){
    return(
      <View style={styles.list}>
      <FlatList
        data={this.props.deals}
        renderItem={({item}) => <DealItem 
        id={item.id}
        deal={item} onPress={this.props.onItemPress} />}
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