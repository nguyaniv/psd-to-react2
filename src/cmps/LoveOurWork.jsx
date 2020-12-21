import React, { Component } from 'react';
import arrowDown from '../style/icons/down_arrow.png';
import ImageFrame from './ImageFrame';


export default class Section4 extends Component {
    render() {
        const text = 'Some Branding'
        const subText = 'Graphic Design'
        return (
            <section className="love-our-work">
                <div className="container">
                    <ImageFrame text={text} subText={subText} />
                    <img src={arrowDown} />
                </div>
                <div className="s2-text">
                    <p>WE LOVE OUR WORK</p>
                    <p>
                        Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tinci
                    dunt. Quisque velit nisi, pretium ut lacinia in, elemena porttitor accumsan tincidun.</p>
                </div>
                <button>Purshase Theme</button>
            </section>

        )
    }
}
