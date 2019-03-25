import axios from 'axios';

class BeersService {
  constructor(){
    this.api = axios.create({
      baseURL: 'https://ironbeer-api.herokuapp.com/beers',
    });
  }

  getAll() {
    return this.api.get('/all')
      .then(({data}) => data)
  }

  singleBeer() {
    return this.api.get('/single/:id')
      .then(({data}) => data)
  }

  randomBeer() {
    return this.api.get('/random')
      .then(({data}) => data)
  }
}

const beersService = new BeersService();
export default beersService;

// try {
//   const response = await axios.get('url');
//   console.log(response);
// } catch (error) {
//   console.error(error);
// }