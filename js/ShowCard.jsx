const React = require('react')

const ShowCard = (props) => (
  <div className='show-card'>
    <img src={`public/img/posters/${props.poster}`} className='show-card-img' />
    <div className='props.show-card-text'>
      <h3 className='props.show-card-title'>{props.title}</h3>
      <h4 className='props.show-card-year'>({props.year})</h4>
      <p className='props.show-card-description'>{props.description}</p>
    </div>             
  </div>
)

const { string } = React.PropTypes // const string = React.PropTypes.string

ShowCard.PropTypes = {
  title: string.isRequired,
  description: string.isRequired,
  year: string.isRequired,
  poster: string.isRequired
}

module.exports = ShowCard
