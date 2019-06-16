import React from 'react';

class BookItem extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.book.id}</td>
                <td>{this.props.book.title}</td>
                <td>{this.props.book.author}</td>
                <td>{this.props.book.pages}</td>
                <td>
                    <button onClick={() => this.props.toggleReadStatus(this.props.book.id)}>
                        {
                            this.props.book.readStatus ? 
                            <img src="/icons/toggle-on.png" alt="read"/> : 
                            <img src="/icons/toggle-off.png" alt="not read"/>
                        }
                    </button>
                </td>
                <td>
                    <button onClick={() => this.props.deleteBookItem(this.props.book.id)}>
                        <img src="/icons/delete.png" alt="delete"/>
                    </button>
                </td>
            </tr>
        )
    }
}

export default BookItem;