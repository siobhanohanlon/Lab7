import React from "react";
//Import Axios
import axios from "axios";

//Import Books
import { Books } from "./books";

export class Read extends React.Component{
    componentDidMount(){
        //Makes HTTP Request
        axios.get('http://localhost:2000/api/books')
        //When Request Completed
        .then(
            //New way of Functions
            (response)=>{
                // Update State
                this.setState({books:response.data})
            }
        )
        //If Request returns error
        .catch(
            (error)=>{
                console.log(error)
            }
        );
    }

    //Object that will hold all data for class
    state = {
        //Assign Data to Array
        books: []
    }

    render(){
        return(
            <div>
                <h3>Hello from my Read Component!</h3>
                {/* Display Book Class from Book Component & Pass in Variable */}
                <Books books = {this.state.books}></Books>
            </div>
        )
    }
}