import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';

class Table extends React.Component {
    state = {
        books: [
            {
              title: "The Hobbit",
              author: "J.R.R. Tolkien",
              pages: 295,
              readStatus: false,
            },
            {
              title: "Harry Potter",
              author: "J.K. Rowling",
              pages: 150,
              readStatus: false,
            },
        ]
    }
    render() {
        return (
            <div className="table-container">
                <table>
                    <TableHead />
                    <TableBody />
                </table>
            </div>
        )
    }
}

export default Table;