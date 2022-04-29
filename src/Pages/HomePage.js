import './HomePage';
import {Link } from "react-router-dom";

function HomePage () {
    return (
      <nav>
        <ul>
          <Link to='/new-entry'>
            <li>Start a New Journal Entry</li>
          </Link>
          <Link to='./old-entries'>
            <li>Open an old Entry</li>
          </Link>
          
        </ul>
      </nav>
    )
}

export default HomePage;
