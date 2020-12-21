import React, { Component } from 'react';
import Mask from './Mask';

import face1 from '../style/imgs/face1.jpg';
import face2 from '../style/imgs/face2.jpg';
import face3 from '../style/imgs/face3.jpg';
import face4 from '../style/imgs/face4.jpg';
import face6 from '../style/imgs/face6.jpg';
import face7 from '../style/imgs/face7.jpg';
import pointer from '../style/icons/tringle_pointer.png';
export default class ResponsiveDesign extends Component {


    state = {
        id: null,
        time: '',
        from: '',
        text: '',
        name: ''
    }

    async componentDidMount() {
        await this.setState({
            id: this.obj.workers[1].id,
            time: this.obj.workers[1].time,
            from: this.obj.workers[1].from,
            text: this.obj.workers[1].text,
            name: this.obj.workers[1].name
        })
    }

    changeWorker = async (num) => {
        await this.setState({
            id: this.obj.workers[num].id,
            time: this.obj.workers[num].time,
            from: this.obj.workers[num].from,
            text: this.obj.workers[num].text,
            name: this.obj.workers[num].name
        })
    }

    obj = {
        workers: [
            {
                id: 1,
                name: 'John Doe',
                time: '1 year ago',
                from: 'from NY',
                text: 'this is story about John'
            },

            {
                id: 2,
                name: 'Lorem Ipsum',
                time: '2 years ago',
                from: 'Tel-Aviv, IL',
                text: 'this is story about Lorem Ipsum'
            },

            {
                id: 3,
                name: 'Lorem Doe',
                time: '3 years ago',
                from: 'Haifa, IL',
                text: 'this is story about Lorem Doe'
            },
            {
                id: 4,
                name: 'John Ipsum',
                time: '4 years ago',
                from: 'tokyo, Japan',
                text: 'this is story about John Ipsum'
            },



        ]
    }
    render() {
        const { time, from, text, name, id } = this.state

        return (
            <section className="responsive-design" >
                <div className="background-mask">
                    <div className="text">
                        <h1>FULLY RESPONSIVE DESIGN</h1>
                        <h4>ABOUT US</h4>
                        <p>----------------------------------------<span>o</span>----------------------------------------</p>
                        <p>Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tinci
                        dunt. Quisque velit nisi, pretium ut lacinia in, elemena porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lac
                    inia in, elementum id enim. Vestibulum ac diam sit anet.</p>
                    </div>

                    <div className="designers">
                        <div className="designer" onClick={() => {
                            this.changeWorker(0)
                        }}>
                            <img src={face1} alt="" />
                            <div className="about">
                                <h3>John Doe</h3>
                                <p>Creative Director</p>
                                {id === 1 ? <img className="arrow" src={pointer} alt="" /> :
                                    <img className="arrow-hidden" src={pointer} alt="" />}

                            </div>
                        </div>
                        <div className="designer" onClick={() => {
                            this.changeWorker(1)
                        }}>
                            <img src={face6} alt="" />
                            <div className="about">
                                <h3>Lorem Ipsum</h3>
                                <p>Graphic Designer</p>
                                {id === 2 ? <img className="arrow" src={pointer} alt="" /> :
                                    <img className="arrow-hidden" src={pointer} alt="" />}
                            </div>
                        </div>
                        <div className="designer" onClick={() => {
                            this.changeWorker(2)
                        }}>
                            <img src={face3} alt="" />
                            <div className="about">
                                <h3>Lorem Doe</h3>
                                <p>Web Developer</p>
                                {id === 3 ? <img className="arrow" src={pointer} alt="" /> :
                                    <img className="arrow-hidden" src={pointer} alt="" />}
                            </div>
                        </div>
                        <div className="designer" onClick={() => {
                            this.changeWorker(3)
                        }}>
                            <img src={face7} alt="" />
                            <div className="about">
                                <h3>John Ipsum</h3>
                                <p>Photographer</p>
                                {id === 4 ? <img className="arrow" src={pointer} alt="" /> :
                                    <img className="arrow-hidden" src={pointer} alt="" />}
                            </div>
                        </div>
                    </div>
                </div>



                < Mask >
                    <div className="worker">
                        <h3>{name} story</h3>
                        <p>{text}</p>
                        <div className="time-and-from">
                            <li>{time}</li>
                            <li>{from}</li>
                        </div>
                    </div>
                </Mask>

            </section>
        )
    }
}
