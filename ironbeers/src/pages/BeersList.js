import React, { Component } from 'react'
import beersService from '../services/beers'

//  Components
import Card from '../components/Card'


class BeersList extends Component {

  state = {
    beers: [],
    status: 'isLoading',
  }

  componentDidMount = async () => {
    try {
      const data = await beersService.getAll()
      this.setState({
        beers: data,
        status: 'isLoaded',
      })
      
    } catch (error) {
      this.setState({
        status: 'hasError',
      })
      console.log(error)
    }
  }

  renderList = () => {
    return (
      this.state.beers.map(beer => (
        <Card key={beer._id} data={beer} />
      ))
    )
  }

  render() {
    const { status } = this.state;

    switch (status) {
      case 'isLoading':
        return (
          <section className="section">
            <div className="container">
              <div className="button is-info is-loading"></div>
            </div>
          </section>
        )
      case 'isLoaded':
        return (
          <section className="section">
            <div className="container">
              {this.renderList()}
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

export default BeersList
