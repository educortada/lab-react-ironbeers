import React, { Component } from 'react'
import beersService from '../services/beers'

import Detail from '../components/Detail'

export class BeerDetail extends Component {

  state = {
    singleBeer: {},
    status: 'isLoading',
  }

  componentDidMount = async () => {
    try {
      const id = this.props.match.params.id
      const data = await beersService.singleBeer(id)
      this.setState({
        singleBeer: data,
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
            <Detail data={this.state.singleBeer} />
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

export default BeerDetail
