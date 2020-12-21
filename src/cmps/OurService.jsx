import React, { Component } from 'react'
import html from '../style/icons/html.png'
import design from '../style/icons/design.png'
import weel from '../style/icons/weel.png'
import clock from '../style/icons/clock.png'
export default class Section1 extends Component {
    render() {
        return (
            <section className="our-service">

                <div className="text-container">

                    <div className="text">
                        <h1>FULLY LAYERED AND CUSTOMIZABLE TEMPLATE</h1>
                        <h4>OUR SERVICES</h4>
                        <p>----------------------------------------<span>o</span>----------------------------------------</p>

                        <p>Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tinci
                        dunt. Quisque velit nisi, pretium ut lacinia in, elemena porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lac
                    inia in, elementum id enim. Vestibulum ac diam sit anet.</p>
                    </div>
                </div>
                <div className="icons">
                    <div className="icon">
                        <div className="circle">
                            <img src={html} alt="" />
                        </div>
                        <h3>HTML&CSS</h3>
                        <p>Donec sollicitudin molestie malesuada.
                        Curabitur aliquet quam id dui posuere
                        blandit. Nulla porttitor.</p>
                    </div>
                    <div className="icon">
                        <div className="circle">
                            <img src={design} alt="" />
                        </div>
                        <h3>GRAPHIC DESIGN</h3>
                        <p>Donec sollicitudin molestie malesuada.
                        Curabitur aliquet quam id dui posuere
                        blandit. Nulla porttitor.</p>
                    </div>
                    <div className="icon">
                        <div className="circle">
                            <img src={clock} alt="" />
                        </div>
                        <h3>GRAPHIC DESIGNON</h3>
                        <p>Donec sollicitudin molestie malesuada.
                        Curabitur aliquet quam id dui posuere
                        blandit. Nulla porttitor.</p>
                    </div>
                    <div className="icon">
                        <div className="circle">
                            <img src={weel} alt="" />
                        </div>
                        <h3>ON TIME PROJECTS</h3>
                        <p>Donec sollicitudin molestie malesuada.
                        Curabitur aliquet quam id dui posuere
                        blandit. Nulla porttitor.</p>
                    </div>

                </div>
            </section>
        )
    }
}
