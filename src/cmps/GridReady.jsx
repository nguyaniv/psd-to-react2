import React, { Component } from 'react'
import party1 from '../style/imgs/party1.jpg'
import party2 from '../style/imgs/party2.jpg'
import studio from '../style/imgs/studio.jpg'
import arrowDown from '../style/icons/down_arrow.png';

export default class GridReady extends Component {
    render() {
        return (
            <section className="grid-ready">
                <div className="about-grid">
                    <h1>BOOTSTRAP GRID READY</h1>
                    <h4>OUR BLOG</h4>
                    <p>----------------------------------------<span>o</span>----------------------------------------</p>
                    <p>Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tinci
                    dunt. Quisque velit nisi, pretium ut lacinia in, elemena porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lac
                        inia in, elementum id enim. Vestibulum ac diam sit anet.</p>
                    <div className="btns">
                        <button>ALL</button>
                        <button>NEWEST</button>
                        <button>OLDEST</button>
                        <button>MOST POPULAR</button>
                    </div>
                </div>


                <div className="grid">
                    <div className="col-1-4">
                        <div className="party">
                            <img src={party1} alt="" />
                            <div className="text">
                                <h3>Great party we have there</h3>
                                <p>Published by: John Doe</p>
                                <p>Donec sollicitudin molestie male
                                suada. Curabitur aliquet quam id
                                dui posuere blandit. Nulla porttitor
                                accumsan tincidunt. Quisque velit
                                nisi, pretium ut lacinia in, elemena
                                porttitor accumsan tincidunt.
                                Quisque velit nid enim. Vestibulum
                                    ac diam sit anet.</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-4-7">
                        <div className="party">
                            <img src={party2} alt="" />
                            <div className="text">
                                <h3>Great party we have there</h3>
                                <p>Published by: John Doe</p>
                                <p>Donec sollicitudin molestie male
                                suada. Curabitur aliquet quam id
                                dui posuere blandit. Nulla porttitor
                                accumsan tincidunt. Quisque velit
                                nisi, pretium ut lacinia in, elemena
                                porttitor accumsan tincidunt.
                                Quisque velit nid enim. Vestibulum
                                    ac diam sit anet.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row-2-3">
                        <div className="great-day">

                            <h3>Great-day</h3>
                            <p>Published by: John Doe</p>
                            <p>Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan
                            tincidunt. Quisque velit nisi, pretium ut lacinia in, elemena porttitor accumsan tincidunt. Quisque velit nid enim.
                            Vestibulum ac diam sit anet.Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt.
                            Quisque velit nisi, pretium ut lacinia in, elemena porttitor accumsan tincidunt. Quisque velit nid enim. Vestibu
                            lum ac diam sit anet.

                            Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan
                            tincidunt. Quisque velit nisi, pretium ut lacinia in, elemena porttitor accumsan tincidunt. Quisque velit nid enim.
                        Vestibulum ac diam sit anet. </p>
                        </div>
                    </div>
                    <div className="row-2-3 col-2-5">
                        <div className="say-hello">
                            <img src={studio} alt="" />
                            <div className="text">
                                <h3>Say hello to our new studio</h3>
                                <p>Published by: John Doe</p>
                                <p>Donec sollicitudin molestie malesuada. Cura
                                bitur aliquet quam id dui posuere blandit. Nulla
                                porttitor accumsan tincidunt. Quisque velit nisi,
                                pretium ut lacinia in, elemena porttitor accum
                                san tincidunt. Quisque velit nid enim. Vestibu
                                lum ac diam sit anet.
                                Quisque velit nisi, pretium ut lacinia in, elemena
                                porttitor accumsan tincidunt. Quisque velit nid
                                enim. Vestibulum ac diam sit anet.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row3-4 col-1-3">
                        <div className="new-design">
                            <h3>New design</h3>
                            <p>Published by: John Doe</p>
                            <p>Donec sollicitudin molestie malesuada. Cura
                            bitur aliquet quam id dui posuere blandit. Nulla
                            porttitor accumsan tincidunt. Quisque velit nisi,
                            pretium ut lacinia in, elemena porttitor accum
                            san tincidunt. Quisque velit nid enim. Vestibu
                            lum ac diam sit anet.
                            Quisque velit nisi, pretium ut lacinia in, elemena
                            porttitor accumsan tincidunt. Quisque velit nid
                            enim. Vestibulum ac diam sit anet.</p>
                        </div>
                    </div>
                    <div className="row3-4 col-3-5">
                        <div className="new-design">
                            <h3>New design</h3>
                            <p>Published by: John Doe</p>
                            <p>
                                Donec sollicitudin molestie malesuada. Cura
                                bitur aliquet quam id dui posuere blandit. Nulla
                                porttitor accumsan tincidunt. Quisque velit nisi,
                                pretium ut lacinia in, elemena porttitor accum
                                san tincidunt. Quisque velit nid enim. Vestibu
                                lum ac diam sit anet.
                                Quisque velit nisi, pretium ut lacinia in, elemena
                                porttitor accumsan tincidunt. Quisque velit nid
                                enim. Vestibulum ac diam sit anet.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="subscribe">
                    <img src={arrowDown} />
                    <div className="text">
                        <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
                        <p>Donec sollicitudin molestie malesuada. Curabitur aliquet
                         quam id dui posuere blandit. Nulla porttitor accumsan tinci
                         dunt. Quisque velit nisi, pretium ut lacinia in, elemena porttitor accumsan tincidun.</p>
                    </div>

                    <div className="input-btn">
                        <input placeholder="Your Mail" type="text"/>
                        <button>Subscribe</button>
                    </div>
                </div>

            </section>
        )
    }
}
