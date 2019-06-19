import React from 'react';
import BookItem from './BookItem';

function TableBody(props) {
    const uuidv1 = require('uuid/v1');
    return (
        <tbody>
            {props.books.map((book, index) => 
                <BookItem 
                    book={book}
                    index={index} 
                    key={uuidv1()} 
                    deleteBookItem={props.deleteBookItem}
                    toggleReadStatus={props.toggleReadStatus}
                />)}
        </tbody>
    );
}

export default TableBody;