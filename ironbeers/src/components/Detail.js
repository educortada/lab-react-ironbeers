import React, { Component } from 'react'

export class Detail extends Component {
  render() {
    const {
      name,
      description,
      image_url,
      tagline,
      contributed_by,
      attenuation_level,
      first_brewed
    } = this.props.data
    return (
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

    )
  }
}

export default Detail
