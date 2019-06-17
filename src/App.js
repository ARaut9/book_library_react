import React from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import AddBookForm from './components/AddBookForm';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.deleteBookItem = this.deleteBookItem.bind(this);
    this.toggleReadStatus = this.toggleReadStatus.bind(this);
    this.addNewBook = this.addNewBook.bind(this);

    this.state = {
      formHidden: true,
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
  }

  showForm() {
    this.setState({formHidden: false});
  }

  hideForm() {
    this.setState({formHidden: true});
  }

  deleteBookItem(index) {
    const books = this.state.books.slice();
    books.splice(index, 1);
    this.setState({books: books});
  }

  toggleReadStatus(index) {
    const books = this.state.books.slice();
    books[index].readStatus = !books[index].readStatus;
    this.setState({books: books});
  }

  // Book factory function
  BookFactory(title, author, pages, readStatus) {
    return {
      title,
      author,
      pages,
      readStatus
    };
  }

  addNewBook(e) {
    e.preventDefault();
    const books = this.state.books.slice();
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let readStatus = document.querySelector('#read').checked;
    let book = this.BookFactory(title, author, pages, readStatus);
    books.push(book);
    this.setState({books: books, formHidden: true});
  }

  render() {
    if (!this.state.formHidden) {
      return(
        <div className="App">
          <Header  showForm={this.showForm} />
          <Table 
          books={this.state.books}
          deleteBookItem={this.deleteBookItem}
          toggleReadStatus={this.toggleReadStatus}
          />
          <AddBookForm 
            hideForm={this.hideForm}
            addNewBook={this.addNewBook}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <Header showForm={this.showForm} />
        <Table 
        books={this.state.books}
        deleteBookItem={this.deleteBookItem}
        toggleReadStatus={this.toggleReadStatus}
        />
      </div>
    );
  }
}

export default App;
