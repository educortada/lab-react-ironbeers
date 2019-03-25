import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Card extends Component {
  render() {
    const { _id, name, description, image_url, tagline, contributed_by } = this.props.data
    return (
      <div className="card column is-half">
        <div className="card-image">
          <figure className="image is-2by3">
            <img src={image_url} alt={name} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{name}</p>
              <p className="subtitle is-6">{contributed_by}</p>
            </div>
          </div>
          <div className="content">{tagline}</div>
          <div className="content">{description}</div>
          <Link to={`/beer/${_id}`} className="button is-link is-rounded">More info</Link>
        </div>
      </div>
    )
  }
}

export default Card
