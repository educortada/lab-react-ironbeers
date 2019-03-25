import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Components

export class Home extends Component {
  render() {
    return (
      <React.Fragment>
          <div className="container">
            <div className="field is-grouped">
              <p className="control">
                <Link className="button is-link is-rounded" to={'/beers'}>Beers</Link>
              </p>
              <p className="control">
                <Link className="button is-link is-rounded" to={'/random-beer'}>Random beers</Link>
              </p>
              <p className="control">
                <Link className="button is-link is-rounded" to={'/new-beer'}>New beer</Link>
              </p>
            </div>
          </div>
      </React.Fragment>
    )
  }
}

export default Home
