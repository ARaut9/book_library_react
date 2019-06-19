import React from 'react';

function TableHead() {
    return (
        <thead>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Author Name</th>
                <th>Pages</th>
                <th>Read?</th>
                <th>Delete</th>
            </tr>
        </thead>
    );
}

export default TableHead;