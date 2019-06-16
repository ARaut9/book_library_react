import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';

class Table extends React.Component {
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