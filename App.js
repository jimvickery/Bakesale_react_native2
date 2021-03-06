import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { fetchInitialDeals } from './ajax';
import ajax from './ajax';
import DealList from './DealList';
import DealDetail from './DealDetail';
import SearchBar from './SearchBar';

export default class App extends React.Component {
  state = {
    deals: [],
    dealsFromSearch: [],
    currentDealId: null, 
  };
  async componentDidMount(){
    const deals = await ajax.fetchInitialDeals();
    this.setState( { deals });
  }
  searchDeals = async (searchTerm) => {
    let dealsFromSearch = [];
    if (searchTerm) {
      dealsFromSearch = await ajax.fetchDealsSearchResults(searchTerm);
    }
    this.setState({dealsFromSearch});
  };
 
  setCurrentDeal = (dealId) => {
    this.setState({
      currentDealId: dealId,
    });
  };

  unSetCurrentDeal = () => {
    this.setState({
      currentDealId: null,
    });
  };

  currentDeal = () => {
    return this.state.deals.find((deal) => deal.key === this.state.currentDealId);
  };

  render() {
    if (this.state.currentDealId) {
      return (
      <View style={styles.main}>
      <DealDetail initialDealData={this.currentDeal()} 
        onBack={this.unSetCurrentDeal}
      />
      </View>
      );
    }
    const dealsToDisplay = 
    this.state.dealsFromSearch.length > 0 
    ? this.state.dealsFromSearch
    : this.state.deals;

    if (dealsToDisplay.length > 0) {
      return (
      <View style={styles.main}>
        <SearchBar searchDeals={this.searchDeals} />
        <DealList deals={this.state.deals} onItemPress={this.setCurrentDeal} />
      </View>
      );
    }
      return (
      <View style={styles.container}>
       <Text style={styles.header}>Bakesale</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 40,
  },
  main: {
    marginTop: 30,
  },
});
