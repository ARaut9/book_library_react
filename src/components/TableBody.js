import React from 'react';
import BookItem from './BookItem';

class TableBody extends React.Component {
    render() {
        const uuidv1 = require('uuid/v1');
        return (
            <tbody>
                {this.props.books.map((book, index) => 
                    <BookItem 
                        book={book}
                        index={index} 
                        key={uuidv1()} 
                        deleteBookItem={this.props.deleteBookItem}
                        toggleReadStatus={this.props.toggleReadStatus}
                    />)}
            </tbody>
        );
    }
}

export default TableBody;