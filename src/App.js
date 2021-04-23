import React, { Component } from 'react';
import NavBar from './components/navbar'
import Counters1 from './components/counters1';
import './App.css'

// import Counter from './components/counter';

class App extends Component {

    constructor(props){
        super(props);
        console.log("constructor call in App");
    }
    
    componentDidMount(){
        console.log('mounting App')
    }

    state = { counters:[
        {id:1,value:5},
        {id:2,value:0},
        {id:3,value:6},
        {id:4,value:0}
        ]
    };

        counterCount = () =>{
        return this.state.counters.length;
    }

    handleIncrement = (counter) =>{
        const counters  = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState ({counters});
    }

    handleDecrement = (counter) =>{
        const counters  = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value--;
        this.setState ({counters});
    }

    handleReset = ()=>{
        const counters = this.state.counters.map(c=>{
            c.value = 0;
            return c;
        });
        this.setState({counters});

    }
    
    handleDelete = (CounterIdToBeDeleted) =>{ // reuturn all element of counters arry except element with given id
        const itemAfterDelete = this.state.counters.filter(counter=>counter.id!==CounterIdToBeDeleted);
        this.setState({counters:itemAfterDelete});

    }
    
    render() { 
        console.log("render App");
        return (
            <React.Fragment>
                <NavBar count = {this.state.counters.length}/>
                <main className="container">
                <Counters1
                counters = {this.state.counters}
                
                onReset = {this.handleReset}
                onIncrement = {this.handleIncrement}
                onDecrement = {this.handleDecrement}
                onDelete = {this.handleDelete}
                />
                </main>
            </React.Fragment>
         );
    }
}
 
export default App;