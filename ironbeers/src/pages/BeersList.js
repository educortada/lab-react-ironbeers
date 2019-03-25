import React, { Component } from 'react'
import beersService from '../services/beers'

//  Components
import Card from '../components/Card'

class BeersList extends Component {

  state = {
    beers: [],
    status: 'isLoading',
    searchWord: '',
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

  handleInput = async (event) => {
    await this.setState({
      searchWord: event.target.value,
      status: 'isLoading',
    })

    try {
      // Prevent error when searchWord is empty
      if (this.state.searchWord.length > 0) {
        const data = await beersService.searchBeers(this.state.searchWord)
        console.log(data);
        this.setState({
          beers: data,
          status: 'isLoaded',
        })
        // When searchWord is empty show all beers
      } else {
        const data = await beersService.getAll()
        this.setState({
          beers: data,
          status: 'isLoaded',
        })
      }

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
              <div className="button is-info is-loading"></div>
            </div>
          </section>
        )
      case 'isLoaded':
        return (
          <React.Fragment>
            <section className="section">
              <div className="container">
                <input
                  onChange={this.handleInput}
                  className="input is-rounded"
                  name="serachWord"
                  type="text"
                  placeholder="Search beer..."
                  value={this.state.searchWord}
                ></input>
              </div>
            </section>
            <section className="section">
              <div className="container">
                {this.renderList()}
              </div>
            </section>
          </React.Fragment>
        )
      case 'hasError':
        return 'Error!'
      default:
        break
    }

  }
}

export default BeersList
