import React, { Component } from 'react';
import Mask from './Mask';
import customers from '../style/icons/customers.png';
import award from '../style/icons/award.png';
import completed_project from '../style/icons/completed_project.png';
import followers from '../style/icons/followers.png';

export default class Skills extends Component {
    render() {
        return (
            <section className="skills">
                <div className="title-text">

                    <h1>WE HAVE SKILLS</h1>
                    <p>Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tinci
                        dunt. Quisque velit nisi, pretium ut lacinia in, elemena porttitor accumsan tincidun.</p>

                </div>

                <div className="company-skills">
                    <div className="company">
                        <h3>Our Company</h3>
                        <p>Cras ultricies ligula sed magna dictum porta. Curabitur arcu erat, accumsan id imperdiet
                        et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat. Nulla porttitor accum
                        san tincidunt. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi,
                        pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in,
                        elementum id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                        posuere cubilia Curae; Donec velit neque, auctor situr arcu erat, accumsan id imperdiet
                        et, porttitor at sem.</p>

                        <button>Read More</button>
                    </div>

                    <div className="skills-graph">
                        <h3>Our Skills</h3>
                        <div className="skill html">
                            <p>Html&Css</p>
                        </div>
                        <div className="skill javascript">
                            <p>Javascript</p>
                        </div>
                        <div className="skill graphic-design">
                            <p>Graphic Design</p>
                        </div>
                        <div className="skill photography">
                            <p>Photography</p>
                        </div>
                    </div>
                </div>

                <Mask>
                    <div className="m3">
                        <div className="m3-symbol">
                            <img src={customers} alt="" />
                            <div className="text">
                                <h2>230</h2>
                                <p>Customers</p>
                            </div>

                        </div>
                        <div className="m3-symbol">

                            <img src={award} alt="" />
                            <div className="text">
                                <h2>22</h2>
                                <p>Awards</p>
                            </div>
                        </div>

                        <div className="m3-symbol">

                        <img src={completed_project} alt="" />
                        <div className="text">
                                <h2>2380</h2>
                                <p>Completed Projects</p>
                            </div>
                        </div>

                        <div className="m3-symbol">
                        <img src={followers} alt="" />
                            <div className="text">
                                <h2>50890</h2>
                                <p>Followers</p>
                            </div>
                        </div>
                    </div>

                </Mask>
            </section>
        )
    }
}
