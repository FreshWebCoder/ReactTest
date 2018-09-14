import React, { Component } from 'react';
import Navbar from "./components/navbar.js";
import BlankModal from "./components/blank_modal.js"
import $ from "jquery";
import './assets/styles/loading.scss'
import './App.css';

class App extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            modalShow: false,
            loading_overlay: ""
        };
    };
    modalClose = () => {
        this.setState({ modalShow: false });
    };
    modalOpen = () => {
        this.setState({loading_overlay: this.startLoading()});
        let that = this;
        setTimeout(function() {
            that.setState({loading_overlay: that.finishLoading()});
            that.setState({ modalShow: true });
        }, 2000);
    }
    startLoading = () => {
        $("body").css("overflow", "hidden");
        return (
            <div className="loading">
                <div className="fade modal-backdrop in"></div>
                <div className="battery">
                    <div className="liquid"></div>
                </div>
            </div>
        );
    };

    finishLoading = () => {
        $("body").removeAttr("style");
        return "";
    };
    render() {
        return (
            <div>
                <Navbar />

                <div className="main-content">
                    <button className="btn btn-purple" onClick={this.modalOpen}>Open Modal</button>
                </div>

                <BlankModal show={this.state.modalShow} onHide={this.modalClose} />

                {this.state.loading_overlay}
            </div>
        );
    }
}

export default App;
