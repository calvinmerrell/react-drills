import React, { Component } from "react"

export default class Image extends Component {
   render (){
    return (
            <div>
                <img src={this.props.url} />
                <div>You know you want some!</div>
            </div>
        )
    }
}