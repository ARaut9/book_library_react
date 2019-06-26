import React from 'react';
import toggleOnIcon from '../images/icons/toggle-on.png';
import toggleOffIcon from '../images/icons/toggle-off.png';
import deleteIcon from '../images/icons/delete.png';

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
                        <img src={toggleOnIcon} alt="read"/> : 
                        <img src={toggleOffIcon} alt="not read"/>
                    }
                </button>
            </td>
            <td>
                <button onClick={() => props.deleteBookItem(props.index)}>
                    <img src={deleteIcon} alt="delete"/>
                </button>
            </td>
        </tr> 
    );
}

export default BookItem;