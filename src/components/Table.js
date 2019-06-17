import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';

class Table extends React.Component {
    render() {
        return (
            <div className="table-container">
                <table>
                    <TableHead />
                    <TableBody 
                    books={this.props.books}
                    deleteBookItem={this.props.deleteBookItem}
                    toggleReadStatus={this.props.toggleReadStatus}
                    />
                </table>
            </div>
        );
    }
}

export default Table;