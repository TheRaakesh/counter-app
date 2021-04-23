import React, { Component } from 'react';
import Counter from './counter'
class Counters1 extends Component {

    render() {
        console.log("render counter1s");
        return (

        <React.Fragment>
            <button onClick = {this.props.onReset} className= "btn btn-dark btn-sm m-2" >Reset</button>

            {this.props.counters.map(c => <Counter 
             key ={c.id} 
            // valueee ={c.value} // insted of having diffrent props for same c obj we can have a single c obj named counter
            // id = {c.id}
            onIncrement = {this.props.onIncrement}
            onDecrement = {this.props.onDecrement}
            onDelete = {this.props.onDelete} // onDelete is a prop which is raised by conter(child) component and it is handeled by conters1(parent) componet 
        
            counterrr = {c} // with the help of this counterrr obj we can direcly use required props as (counterrr.id or counterrr.valueee)
            />)} 
        </React.Fragment>);
    }
} 
export default Counters1;