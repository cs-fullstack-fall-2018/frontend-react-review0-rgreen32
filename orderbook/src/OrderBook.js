import React, {Component} from 'react';

import Books from './Books'
class OrderBook extends Component{
    constructor(){
        super();
        this.state = {
            booktitle:"",
            genre:"",
            books:[{booktitle:"Goose", genre:"Horror"}, {booktitle:"Duck", genre:"Comedy"}  ]
        }


        }
    updateBookTitle = (event) =>{
        this.setState({booktitle: event.target.value})
    }
    updateGenre = (event) =>{
        this.setState({genre: event.target.value})
    }
    pushBooks = (event) =>{
        let newBook = {booktitle: this.state.booktitle, genre: this.state.genre};
        this.state.books.push(newBook);
        this.setState({books: this.state.books})
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <form onSubmit={this.pushBooks}>
                    <label htmlFor="book"> Book:</label>
                        <input type="text" id="book" value={this.state.booktitle} onChange={this.updateBookTitle}/>

                <label htmlFor="genre"> Genre:</label>
                        <input type="text" id="genre" value={this.state.genre} onChange={this.updateGenre}/>
                    <button>Me</button>
                </form>
                <Books books={this.state.books}/>
            </div>
        )
    }

}
export default OrderBook;