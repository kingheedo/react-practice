import React, { Component } from 'react';

class Header extends Component {
    main = (e) => {
        e.preventDefault();
    }


    render() {
        return (
            <div>
                <a href="subject" onClick={this.main}>
                    "My Todo List"
                </a>
            </div >
        );
    }
}

export default Header;