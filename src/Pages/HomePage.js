import './HomePage';
import {Link } from "react-router-dom";

function HomePage () {
    return (
      <nav>
        <ul>
          <Link to='/new-entry'>
            <li className="main-navigation">Start a New Journal Entry</li>
          </Link>
          <Link to='./old-entries'>
            <li className="main-navigation">Open an old Entry</li>
          </Link>
          
        </ul>
      </nav>
    )
}

export default HomePage;
