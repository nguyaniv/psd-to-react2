import React, { Component } from 'react';
import ImageFrame from './ImageFrame';
export default class Section2 extends Component {
    render() {

        const text = 'Some Branding'
        const subText = 'Graphic Design'
        return (
            <section className="our-portfolio">
                <div className="text">
                    <h1>MODERN AND CLEAN DESIGN</h1>
                    <h4>OUR PORTFOLIO</h4>
                    <p>-------------------------------------<span>o</span>-------------------------------------</p>

                    <p>Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tinci
                    dunt. Quisque velit nisi, pretium ut lacinia in, elemena porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lac
                    inia in, elementum id enim. Vestibulum ac diam sit anet.</p>
                </div>

                <div className="buttons">
                    <button>ALL</button>
                    <button>GRAPHIC</button>
                    <button>WEB</button>
                    <button>PHOTOGRAPHY</button>
                </div>
                <ImageFrame text = {text} subText={subText}/>
                  
              

            </section>
        )
    }
}
