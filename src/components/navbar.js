import React, { Component } from 'react';


class NavBar extends Component {


    render() { 
        console.log('render navbar')
        return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="www.google.com">
                Number of Counters : {this.props.count} 
            </a>
        </nav>);
    }
}
 
export default NavBar;