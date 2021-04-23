import React, { Component } from 'react';
class Counter extends Component {
    
    componentDidUpdate(prevProps,prevState){
        console.log('prev p:', prevProps);
        console.log('prev state:', prevState);
    }
    componentWillUnmount(){
        console.log('counter-unmount');
    }
    
    render() { 
        console.log("render counter");
        return ( 
            <div className="row">
                <div className="col-1">
                    <span className={this.getBadgeClasses()}>{this.formatCount()} </span>

                </div>
                <div className="col">
                <button onClick={()=>this.props.onIncrement(this.props.counterrr)} className="btn btn-success btn-sm m-2">+</button> {/* we are not calling handelIncrement() */}
                <button onClick={()=>this.props.onDecrement(this.props.counterrr)} disabled={this.props.counterrr.value===0?"disabled":""} className="btn btn-secondary btn-sm m-2">-</button> 
                <button onClick={()=>this.props.onDelete(this.props.counterrr.id)} className="btn btn-danger btn-sm m-2" >Delete</button> {/*here onDelete is raising event*/}
                
                </div>
                {/* <ul> */}
                    {/* {this.state.tags.map(tag=><li key={tag}>{tag}</li>)} using key for uniquily identying  */}
                {/* </ul> */}
            
            </div>  
         );
    }

    formatCount () {
        const {value} = this.props.counterrr;  //it is eqivalent to this.state.value (this is also known as obj destructuring)
        return (value === 0 ? "zero" : value);
    }

    getBadgeClasses() { 
        let classes = "badge m-3 badge-";
        classes+=this.props.counterrr.value===0 ? "warning" : "primary";
        return classes;
    }
}
export default Counter;