// const apiHost = 'https://bakesaleforgood.com';
const apiHost = 'http://www.sillysnap.com';


export default {
  async fetchInitialDeals() {
    try {
      // const response = await fetch(apiHost + '/api/deals');
      const response = await fetch(apiHost + '/api/v1/galleryapis?api_token=of4HNsRnesbbESdLHtgV');
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  },
  async fetchlDealDetail(dealId) {
    try {
      // const response = await fetch(apiHost + '/api/deals/' + dealId);
      const response = await fetch(apiHost);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  },
  async fetchDealsSearchResults(searchTerm) {
    try {
      const response = await fetch(apiHost + '/api/deals?searchTerm=' + searchTerm);
      // const response = await fetch(apiHost);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  }
};