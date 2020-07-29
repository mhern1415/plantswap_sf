import React from 'react';

class Counter extends React.Component {

    constructor (props) {
        super(props) 
        this.state = {counter: 0}
      }

      handleOnClick(){
        this.setState({counter: this.state.counter + 1 })
    }


    render(){
        return (
            <div>
            <button onClick={(event) => this.handleOnClick()}>Likes: {this.state.counter}</button>
            </div>
        )
    }


}


export default Counter;