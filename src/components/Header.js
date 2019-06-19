import React from 'react';

function Header(props) {
    return (
        <header>
            <div className="container">
                <h1>Your Library</h1>
                <button onClick={props.showForm}>Add New Book</button>
            </div>
        </header>
    );
}

export default Header;