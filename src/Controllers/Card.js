import React, { Component } from 'react';
class Card extends Component{
    render(){
        return(
        <div style={{margin: '1rem'}}>
            <img src="https://placehold.it/75" />
            <div style={{display: 'inline-block', marginLeft: 10}}>
                <div style={{fontSize: '125%'}}>
                    Name Here....
                </div>
                <div>Company here</div>
            </div>
        </div>
        ) 
    }
}
export default Card