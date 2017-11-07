import React, { Component } from 'react';

class Results extends Component {
  render() {
    return <ul>
      {this.props.articles.map(article => (
        <li key={article._id} className="box">
          <article className="media">
            <figure className="media-left">
                {article.multimedia.filter(media => media.subtype === 'thumbnail').map(media => (
                  <p className="image is-64x64" key={media.url}><img src={'https://nytimes.com/' + media.url} alt={article.headline.main} /></p>
                ))}
            </figure>
            <div className="media-content">
              <p>
                <a href={article.web_url}><strong className="is-size-5">{article.headline.main}</strong></a>
                <br />
                {article.snippet}
              </p>
            </div>
            <div className="media-right">
              <a className="button is-success">
                <span className="icon">
                  <i className="material-icons">note_add</i>
                </span>
              </a>
            </div>
          </article>
        </li>
      ))}
    </ul>;
  }
}

export default Results;
