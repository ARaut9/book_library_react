import React from 'react';

function BookItem(props) {
    return (
        <tr>
            <td>{props.index + 1}</td>
            <td>{props.book.title}</td>
            <td>{props.book.author}</td>
            <td>{props.book.pages}</td>
            <td>
                <button onClick={() => props.toggleReadStatus(props.index)}>
                    {
                        props.book.readStatus ? 
                        <img src="/icons/toggle-on.png" alt="read"/> : 
                        <img src="/icons/toggle-off.png" alt="not read"/>
                    }
                </button>
            </td>
            <td>
                <button onClick={() => props.deleteBookItem(props.index)}>
                    <img src="/icons/delete.png" alt="delete"/>
                </button>
            </td>
        </tr> 
    );
}

export default BookItem;