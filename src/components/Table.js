import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';

function Table(props) {
    return (
        <div className="table-container">
            <table>
                <TableHead />
                <TableBody 
                books={props.books}
                deleteBookItem={props.deleteBookItem}
                toggleReadStatus={props.toggleReadStatus}
                />
            </table>
        </div>
    );
}

export default Table;