import './SearchComponent';
import { Component} from 'react';

class SearchComponent extends Component {
  render () {
    return (
      <div className='search-area'>
        <input placeholder="Search..." />
        <section>
          {/* <button> Add Movie</button>
          <button> Add Music</button> */}
          <button> Add Book</button>
        </section>
      </div>
    );
  }
};

export default SearchComponent;
