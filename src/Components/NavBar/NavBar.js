import './NavBar.scss';
import {Link } from "react-router-dom";

function HomePage () {
    return (
      <nav className='main-navigation'>
        <ul className='main-navigation__list'>          
          <Link to='./my-journal' className="main-navigation__links">
            <li >My Journal</li>
          </Link>
          <Link to='/new-entry' className="main-navigation__links">
            <li >Start a New Entry</li>
          </Link>

        </ul>
      </nav>
    )
}

export default HomePage;
