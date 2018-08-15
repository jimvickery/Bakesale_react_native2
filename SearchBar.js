import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import debounce from 'lodash.debounce';
import PropTypes from 'prop-types';


class SearchBar extends React.Component{
  static propTypes = {
    searchDeals: PropTypes.func.isRequired,
  }
  state={ 
    searchTerm: '',
  };
  debouncedSearchDeals = debounce(this.props.searchDeals, 300);
  handleChange = (searchTerm) => {
    this.setState({ searchTerm }, () => {
      this.debouncedSearchDeals(this.state.searchTerm);
    });
  };
  render() {
    // const { deal } = this.state;
    return (
      <TextInput placeholder="Search All Beals" style={styles.input}
      onChangeText={this.handleChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginHorizontal: 12,
  }
});

export default SearchBar;
