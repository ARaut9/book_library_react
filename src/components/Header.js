import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="container">
                    <h1>Your Library</h1>
                    <button>Add New Book</button>
                </div>
            </header>
        )
    }
}

export default Header;