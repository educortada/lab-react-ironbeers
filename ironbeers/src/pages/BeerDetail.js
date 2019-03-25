import React, { Component } from 'react'
import beersService from '../services/beers'

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
    const {
      name,
      description,
      image_url,
      tagline,
      contributed_by,
      attenuation_level,
      first_brewed
    } = this.state.singleBeer

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
              <div className="box">
                <article className="media">
                  <div className="media-left">
                    <figure className="image is-64x64">
                      <img src={image_url} alt={name} />
                    </figure>
                  </div>
                  <div className="media-content">
                    <div className="content">
                      <p className="title is-4">{name}</p>
                      <p className="subtitle is-6">{contributed_by}</p>
                      <p>{tagline}</p>
                      <p>{attenuation_level}</p>
                      {first_brewed}
                      <p>{description}</p>
                    </div>
                  </div>
                </article>
              </div>
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
