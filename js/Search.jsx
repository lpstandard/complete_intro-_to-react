const React = require('react')
const ShowCard = require('./ShowCard')
const data = require('../public/data')

const Search = React.createClass ({
  getInitialState() {
     return {
      searchTerm: '',
    }
  },
  handleSearchTermEvent(event){
    this.setState({ searchTerm: event.target.value })
  },
  render(){
    return (
      <div className='container'>
        <header className='header'>
          <h1 className='brand '>svideo</h1>
          <input value={this.state.searchTerm} onChange={this.handleSearchTermEvent} 
            className='search-inout' type='text' placeholder='Search' />
        </header>
        <div className='shows'>
          {data.shows
            .filter((s) => `${s.title} ${s.description}`.toUpperCase()
              .indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map((s) => (<ShowCard {...s} key={s.imdbID} />))}
          <ShowCard />
        </div>
      </div>
    )
  }
})


module.exports = Search
