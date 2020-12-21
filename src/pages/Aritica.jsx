import React, { Component } from 'react';
import { Navbar } from '../cmps/Navbar';
import { Header } from '../cmps/Header';
import { connect } from 'react-redux';
import { toggleModal } from '../store/actions/appActions';

import { Modal } from '../cmps/Modal';
import OurService from '../cmps/OurService';
import OurPortfolio from '../cmps/OurPortfolio';
import Center from '../cmps/Center';
import LoveOurWork from '../cmps/LoveOurWork';
import ResponsiveDesign from '../cmps/ResponsiveDesign';
import Mask from '../cmps/Mask';
import Skills from '../cmps/Skills';
import Testimonials from '../cmps/Testimonials';
import ContactUs from '../cmps/ContactUs';
import GridReady from '../cmps/GridReady';
import half_studio from '../style/icons/half_studio.png';
import jupiter from '../style/icons/jupiter.png';
import mars from '../style/icons/mars.png';
import moonpic from '../style/icons/moonpic.png';
import rocket from '../style/icons/rocket.png';



class _Aritica extends Component {

    //i put navbar and modal at the bottom beacuse of header opacity which doesnt work well with 
    //z-index and position fixed.
    render() {

        return (
            <main className="main-page-container">
                <Header />
                <OurService />
                <Mask>
                    <div className="m1">
                        <p>Design must reflect the practical and aesthetic in business but above all...
                        good design must primarily serve people.</p>
                        <p>Thomas J. Watson </p>
                    </div>
                </Mask>
                <OurPortfolio />
                <Center />
                <LoveOurWork />
                <ResponsiveDesign />
                <Skills />
                <GridReady />
                <Mask>
                    <div className="m4">
                        <h1>OUR CUSTOMERS</h1>
                        <p>Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tinci
                        dunt. Quisque velit nisi, pretium ut lacinia in, elemena porttitor accumsan tincidun.</p>

                        <div className="customers">
                            <img src={half_studio} alt="" />
                            <img src={jupiter} alt="" />
                            <img src={rocket} alt="" />
                            <img src={mars} alt="" />
                            <img src={moonpic} alt="" />
                            <img src={jupiter} alt="" />
                        </div>
                    </div>
                </Mask>
                <Testimonials />
                <ContactUs />
                <Navbar />
                <Modal />
            </main>
        )
    }
}

const mapStateToProps = state => ({
    modal: state.modal.modal

});
const mapDispatchToProps = {
    toggleModal: toggleModal
};

export const Aritica = connect(mapStateToProps, mapDispatchToProps)(_Aritica);