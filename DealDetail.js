import React from 'react';
import PropTypes from 'prop-types';
import ajax from './ajax';
import { StyleSheet, Text, Image, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import {priceDisplay} from './util';

class DealDetail extends React.Component{
  static propTypes = {
    initialDealData: PropTypes.object.isRequired,
    onBack: PropTypes.func.isRequired,
  };
  state = {
    deal: this.props.initialDealData,
  };
  async componentDidMount(){
    const fullDeal = await ajax.fetchlDealDetail(this.state.deal.key);
    console.log(fullDeal);
    this.setState({
      deal: fullDeal,
    });
  }
  render() {
    const { deal } = this.state;
    return (
      <View style={styles.deal}>
      <TouchableOpacity onPress={this.props.onBack}>
        <Text style={styles.backLink}>Back</Text>
      </TouchableOpacity>
        <Image source={{ uri: deal.media[0] }}  style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.title}>{deal.title} </Text>
          <View style={styles.footer}>
            <Text style={styles.cause}>{deal.cause.name}</Text>
            <Text style={styles.price}>{priceDisplay(deal.price)}</Text>
          </View>
        </View>
       {deal.user && ( 
        <View>
            <Image source={{uri: deal.user.avatar}} style={styles.avatar} />
            <Text style={styles.description}>{deal.user.name} </Text>
          </View>
      )}
        <View style={styles.description}>
          <Text>{deal.description} </Text>
        </View>
      </View>
  );
  }
}

const styles = StyleSheet.create({
  deal: {
    marginTop: 10,
    marginHorizontal: 8,  
  },
  backLink: {
    marginBottom: 5,
    color: '#22f',
    marginLeft: 10,
  },
  detail: {
    borderColor: '#bbb',
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: 150,
    backgroundColor: '#ccc',
  },
  title: {
    fontSize: 16,
    padding: 10,
    fontWeight: 'bold',
    backgroundColor: 'rgba(237, 149, 45, 0.4)',
    width: '100%', 
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 15,
  },
  info: {
    alignItems: 'center',
  },
  user: {
    alignItems: 'center',
  },
  cause: {
    marginVertical: 10,
  },
  price: {
    fontWeight: 'bold',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    margin: 8,
  },
  description: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderStyle: 'dotted',
    margin: 10,
    padding: 10,
  },
});

export default DealDetail;