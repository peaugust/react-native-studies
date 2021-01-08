import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer Y5iWsXQ2jjaQOdM-fAvj1XKg3LfU7-O6_uDjNfAhzXJzSWoa88g9BJLzW0WMLVpco_PJEEV7eQ9yHVrizs26zw-dxt_G9Ll-oBoFXvtlapXd6x9_RdxwMRFt4iacX3Yx',
  },
})
