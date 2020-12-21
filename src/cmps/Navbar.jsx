import React, { Component } from 'react';
import menu from './../style/icons/menu.png';
import { connect } from 'react-redux';
import { toggleModal } from '../store/actions/appActions';

class _Navbar extends Component {

    state = {
        modal: false
    }

    toggleModal = async () => {
        const { modal } = this.props.modal
        let boo = true
        if (modal === false) boo = true
        if (modal === true) boo = false
        await this.props.toggleModal(boo)
    }

    render() {
        return (
            <nav>
                <div className="container">
                    <h1>Artica</h1>
                    <img onClick={this.toggleModal} src={menu} height="25" alt="" />
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => ({
    modal: state.modal

});
const mapDispatchToProps = {
    toggleModal
};

export const Navbar = connect(mapStateToProps, mapDispatchToProps)(_Navbar);