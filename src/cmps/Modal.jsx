import React, { Component } from 'react'
import { connect } from 'react-redux';
import { toggleModal } from '../store/actions/appActions';


class _Modal extends Component {

    toggleModalOn = async () => {
        const { modal } = this.props.modal
        let boo = true
        if (modal === false) boo = true
        if (modal === true) boo = false
        await this.props.toggleModal(boo)
    }

    render() {
        const { modal } = this.props.modal
        return (
            <div className={modal === true ? `modal active` : 'modal'}>
                <div className="container">
                    <div className="logo-close">
                        <h1>Artica</h1>
                        <button onClick={this.toggleModalOn}>X</button>
                    </div>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Portfolio</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Clients</li>
                    <li>Contact</li>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    modal: state.modal

});
const mapDispatchToProps = {
    toggleModal
};

export const Modal = connect(mapStateToProps, mapDispatchToProps)(_Modal);