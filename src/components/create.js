import axios from "axios";
import React from "react";

export class Create extends React.Component{
    //Constructor
    constructor(){
        super();

        //Bind to Event
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onChangeBookCover = this.onChangeBookCover.bind(this);
        this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);

        //Set Value to blank
        this.state = {
            title: '', 
            cover: '',
            author: ''
        }
    }

    //Submit
    handleSubmit(e){
        e.preventDefault();

        //Print to Console
        console.log(`Button Clicked\n${this.state.title}\n${this.state.cover}\n${this.state.author}`);
        
        const book = {
            title: this.state.title,
            cover: this.state.cover,
            author: this.state.author
        }

        //Generate HTTP Request 
        axios.post('http://localhost:2000/api/books', book)
        .then()
        .catch();

        //Reset to blank
        this.setState = {
            title: '', 
            cover: '',
            author: ''
        }
    }

    //Change Title
    onChangeBookTitle(e){
        this.setState({
            title: e.target.value
        })
    }

    //Change Cover
    onChangeBookCover(e){
        this.setState({
            cover: e.target.value
        })
    }

    //Change Author
    onChangeBookAuthor(e){
        this.setState({
            author: e.target.value
        })
    }

    render(){
        return(
            <div>
                {/* Print to screen */}
                <h3>Hello from my Create Component!</h3>

                {/* Form to Add Book to Array */}
                <form onSubmit={this.handleSubmit}>
                    <div className = "form-group">
                        <label>Add Book Title: </label>
                        <input type = "text" className="form-control" value={this.state.title} onChange={this.onChangeBookTitle}/>
                    </div>
                    <div className = "form-group">
                        <label>Add Book Cover: </label>
                        <input type = "text" className="form-control" value={this.state.cover} onChange={this.onChangeBookCover}/>
                    </div>
                    <div className = "form-group">
                        <label>Add Book Author: </label>
                        <input type = "text" className="form-control" value={this.state.author} onChange={this.onChangeBookAuthor}/>
                    </div>

                    {/* Submit Button */}
                    <input type="submit" value="Add Book"/>
                </form>
            </div>
        )
    }
}