import React, { Component } from 'react';

class Form extends React.Component{
    render(){
        return(
            <form action="onSubmit">
                <input type="text" placeholder="Github username"></input>
                <button>Add card</button>
            </form>
        );
    }
}
export default Form