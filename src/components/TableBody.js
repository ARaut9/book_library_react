import React from 'react';
import BookItem from './BookItem';

class TableBody extends React.Component {
    constructor(props) {
        super(props);

        this.deleteBookItem = this.deleteBookItem.bind(this);
        this.toggleReadStatus = this.toggleReadStatus.bind(this);

        this.state = {
            books: [
                {  
                    id: 0,
                    title: "The Hobbit",
                    author: "J.R.R. Tolkien",
                    pages: 295,
                    readStatus: false,
                },
                {
                    id: 1,
                    title: "Harry Potter",
                    author: "J.K. Rowling",
                    pages: 150,
                    readStatus: false,
                },
            ]
        }
    }

    deleteBookItem(id) {
        const books = this.state.books.slice();
        books.splice(id, 1);
        this.setState({books: books});
    }

    toggleReadStatus(id) {
        const books = this.state.books.slice();
        books[id].readStatus = !books[id].readStatus;
        this.setState({books: books});
    }

    render() {
        return (
            <tbody>
                {this.state.books.map((book, id) => 
                    <BookItem 
                        book={book} 
                        key={id} 
                        deleteBookItem={this.deleteBookItem}
                        toggleReadStatus={this.toggleReadStatus}
                    />)}
            </tbody>
        )
    }
}

export default TableBody;