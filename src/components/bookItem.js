//Imports
import React from "react";
import Card from 'react-bootstrap/Card';
import { Books } from "./books";

export class BookItem extends React.Component{
    render(){
        return(
            //Print out info from Array as Cards
            <Card>
                {/* Book Title */}
                <Card.Header>{this.props.book.title}</Card.Header>
                <Card.Body>
                    {/* Show Picture and author to screen */}
                    <blockquote className = "blockqoute mb-0">
                        <img src = {this.props.book.thumbnailUrl} width = "150" height = "150"></img>
                        <footer>
                            {this.props.book.authors[0]}
                        </footer>
                    </blockquote>
                </Card.Body>
          </Card>
        )
    }
}