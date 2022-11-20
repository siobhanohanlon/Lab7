import React from "react";

//Import Book Item
import { BookItem } from './bookItem'

export class Books extends React.Component {
    render() {
        //Return Book Array by map function
        return this.props.books.map(
            (book) => {
                // assign it the book variable and assign a unique id for each
                return <BookItem book={book} key={book._id}></BookItem>
            }
        );

        //Access variable from parent Read 
        //props is short for properties
        //console.log(this.props.books)
    }
}