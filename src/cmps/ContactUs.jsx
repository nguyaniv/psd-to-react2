import React, { Component } from 'react'
import home from '../style/icons/home.png';
import phone from '../style/icons/phone.png';
import msg from '../style/icons/msg.png';
export default class ContactUs extends Component {
    render() {
        return (
            <section className="contact-us">
                <div className="text">
                    <h1>FEEL FREE TO ASK US ANYTHING</h1>
                    <h4>CONTACT US</h4>
                    <p>------------------------------------<span>o</span>------------------------------------</p>
                    <p>Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tinci
                    dunt. Quisque velit nisi, pretium ut lacinia in, elemena porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lac
                    inia in, elementum id enim. Vestibulum ac diam sit anet.</p>


                    <div className="info">
                        <div className="text-img">
                            <img src={home} alt="" />
                            <p>ADDRESSE</p>
                            <p>Awesome Street 234,NY</p>
                        </div>

                        <div className="text-img">
                            <img src={msg} alt="" />
                            <p>MAIL</p>
                            <p>articamail@mail.com</p>
                        </div>

                        <div className="text-img">
                            <img src={home} alt="" />
                            <p>PHONE</p>
                            <p>(000)123-456-789</p>
                        </div>
                    </div>

                </div>


                <div className="contact-grid">
                    <div className="adress">


                        <input type="text" placeholder="Enter Name" />
                    </div>
                    <div className="mail">


                        <input type="text" placeholder="Enter Mail" />
                    </div>
                    <div className="phone">

                        <input type="text" placeholder="Enter Subject" />
                    </div>

                    <div className="message">
                        <textarea placeholder="Enter Message"></textarea>
                    </div>
                </div>
                <button>Send Message</button>

            </section>
        )
    }
}
