import React, { Component } from 'react'
import { connect } from 'react-redux';

 class _Header extends Component {

    render() {
const {modal} = this.props.modal
        return (
            <header>
                <div className= 'sub-container'>

                    <div className="text-container">
                        <h1>Artica</h1>
                        <p>----------------------------------------<span>o</span>----------------------------------------</p>
                        <p>Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan
                        tincidunt. Quisque velit nisi, pretium ut lacinia in, elemena porttlit nisi, pretium ut
                     lacinia in elementumestibulum ac diam sit anet.</p>
                        <button>Purshase Theme</button>
                    </div>
                </div>
            </header>
        )
    }
}


const mapStateToProps = state => ({
    modal: state.modal

});
const mapDispatchToProps = {
    
};

export const Header = connect(mapStateToProps, mapDispatchToProps)(_Header);