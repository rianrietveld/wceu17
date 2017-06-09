var React = require('react');
var NavLink = require('react-router-dom').NavLink;

function Nav () {
    return (
        <ul className='nav'>
            <li>
                <NavLink exact activeClassName='active' to='/wceu17/wceu-app/build/'>Home</NavLink>
            </li>
            <li>
                <NavLink activeClassName='active' to='/wceu17/wceu-app/build/mytabs'>House pets</NavLink>
            </li>
            <li>
                <NavLink activeClassName='active' to='/wceu17/wceu-app/build/a11ytabs'>House pets with ARIA</NavLink>
            </li>
        </ul>
    )
}

module.exports = Nav;