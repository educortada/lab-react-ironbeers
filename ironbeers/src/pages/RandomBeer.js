import React, { Component } from 'react'
import beersService from '../services/beers'

import Detail from '../components/Detail'

export class RandomBeer extends Component {

  state = {
    randomBeer: [],
    status: 'isLoading',
  }

  componentDidMount = async () => {
    try {
      const data = await beersService.randomBeer()
      this.setState({
        randomBeer: data[0],
        status: 'isLoaded',
      })

    } catch (error) {
      this.setState({
        status: 'hasError',
      })
      console.log(error)
    }
  }
  render() {
    const { status } = this.state;

    switch (status) {
      case 'isLoading':
        return (
          <section className="section">
            <div className="container">
              <div className="button is-info is-loading">Loading...</div>
            </div>
          </section>
        )
      case 'isLoaded':
        return (
          <section className="section">
            <div className="container">
              <Detail data={this.state.randomBeer} />
            </div>
          </section>
        )
      case 'hasError':
        return 'Error!'
      default:
        break
    }
  }
}

export default RandomBeer
