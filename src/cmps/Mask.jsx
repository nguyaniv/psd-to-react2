import React, { Component } from 'react'

export default class Mask extends Component {
  render() {
    return (
      <div className="mask">
        {this.props.children}
      </div>
    )
  }
}
