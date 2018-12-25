// const apiHost = 'https://bakesaleforgood.com';
const apiHost = 'https://www.sillysnap.com/api/v1/galleryapis?api_token=2mhvsznww3SQh3f8rqtF';


export default {
  async fetchInitialDeals() {
    try {
      // const response = await fetch(apiHost + '/api/deals');
      const response = await fetch(apiHost );
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