import React from 'react';

function AddBookForm(props) {
    return (
        <div id="form-container">
            <div>
                <button id="cancel-btn" onClick={props.hideForm}></button>
            </div>

            <form id="add-book-form" onSubmit={props.addNewBook} >
                <input type="text" id="title" placeholder="Book Title" />

                <input type="text" id="author" placeholder="Author Name" />

                <input type="number" id="pages" placeholder="Number of Pages" />

                <div>
                    <label>Have Read?</label>
                    <input type="checkbox" id="read" name="read-status" />
                </div>

                <input type="submit" value="Add Book" />
            </form>
        </div>
    );
}

export default AddBookForm;