import React, { Component } from 'react'

class message extends Component {

    constructor() {
        super()
        this.state = {
            message: "Worm welcome to our wepage",
        }
    }

    changeMessage() {
        this.setState({
            message: "Thank you for subscribing",

        })
    }
    render() {
        return (<div>
            <h1>{this.state.message}</h1>,
            <button onClick={() => { this.changeMessage() }}>subscribe</button>
        </div >
        )
    }



}
export default message;