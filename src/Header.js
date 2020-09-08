import React, { Component } from 'react';

class Header extends Component {
    main = (e) => {
        e.preventDefault();
    }


    render() {
        const style = {
            textDecoration: "none",
        }
        return (
            <div>
                <a href="subject" onClick={this.main} style={style} >
                    "My Todo List"
                </a>
            </div >
        );
    }
}

export default Header;