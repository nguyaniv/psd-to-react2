import React, { Component } from 'react';
import clock from '../style/icons/mini_clock.png';
import people from '../style/icons/mini_people.png';
import tool from '../style/icons/mini_tool.png';
import work from '../style/imgs/work.jpg';
export default class Section3 extends Component {
    render() {
        return (
            <section className="center-section">
                <div className="container">
                    <img src={work} alt="" />
                    <div className="content">
                        <h3>LOREM IPSUM IMAGE</h3>
                        <p>Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit.
                        Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elemena port
                        titor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Ves
                        tibulum ac diam sit anet.
                        Oitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit. Nulla portti
                        tor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elemena porttitor accum
                        san tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac
                        diam sit anet.</p>

                        <div className="lorem-list">
                            <li><span><img src={clock} alt="" /> </span> March 2013</li>
                            <li><span><img src={people} alt="" /> </span>Lorem Studio,NY</li>
                            <li><span><img src={tool} alt="" /> </span> AI,PS Design</li>
                        </div>

                        <button>View In Action</button>
                    </div>
                </div>
            </section>
        )
    }
}
