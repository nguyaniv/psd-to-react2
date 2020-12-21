import React, { Component } from 'react'

export default class ImageFrame extends Component {
    render() {
        return (
            <div className="image-frame">
                <div className="box">
                    <div className="text">
                    <p>{this.props.text}</p>
                    <p>{this.props.subText}</p>
                    </div>
                </div>
                <div className="box">
                    <div className="text">
                    <p>{this.props.text}</p>
                    <p>{this.props.subText}</p>
                    </div>
                </div>
                <div className="box">
                    <div className="text">
                    <p>{this.props.text}</p>
                    <p>{this.props.subText}</p>
                    </div>
                </div>
                <div className="box">
                    <div className="text">
                    <p>{this.props.text}</p>
                    <p>{this.props.subText}</p>
                    </div>
                </div>
               
            </div>
        )
    }
}
