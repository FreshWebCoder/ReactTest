import React, { Component } from 'react';
import $ from "jquery";

class Navbar extends Component {
    constructor(props, context) {
        super(props, context);
        // defining the State
        this.state = {
            nav_logo_hover: false,
            show_ellipsis_menu: false
        };
        this.hideEllipsis = this.hideEllipsis.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.hideEllipsis);
    }
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.hideEllipsis);
    }

    nav_logo_hoverOn = () => {
        this.setState({ nav_logo_hover: true });
    };
    nav_logo_hoverOff = () => {
        this.setState({ nav_logo_hover: false });
    };
    onClickEllipsis = () => {
        this.setState({ show_ellipsis_menu: !this.state.show_ellipsis_menu });
    };
    hideEllipsis = (e) => {
        if ($(e.target).closest('.ellipsis-button').length === 0)
            this.setState({ show_ellipsis_menu: false });
    }
    render() {
        return (
            <nav className="top-nav">
                <div className="top-nav-menu">
                    <a className="top-nav-homeLink" href="/">
                        <div className="top-nav-logo" onMouseEnter={this.nav_logo_hoverOn} onMouseLeave={this.nav_logo_hoverOff}>
                            <figure>
                                <svg overflow="visible" width="30px" height="30px" version="1.1" viewBox="0 0 30 30" x="0px" y="0px">
                                    <g className={this.state.nav_logo_hover ? 'logo-animated-mouse-enter top-nav-logo__body' : 'logo-animated-mouse-leave top-nav-logo__body'}>
                                        <path d="M4,7 L5.56799,3 L27,3 L27,18 L21,24 L16,24 L12.88599,27 L9,27 L9,24 L4,24 L4,7 Z M21,20 L25,16 L25,5 L8,5 L8,20 L12,20 L12,23 L15,20 L21,20 Z"></path>
                                        <g className={this.state.nav_logo_hover ? 'logo__eyes-animated-mouse-enter top-nav-logo__eyes' : 'top-nav-logo__eyes'}>
                                            <polygon points="21 9 19 9 19 15 21 15"></polygon>
                                            <polygon points="16 9 14 9 14 15 16 15"></polygon>
                                        </g>
                                    </g>
                                </svg>
                            </figure>
                        </div>
                    </a>

                    <div className="top-menu-items-container">
                        <div className="top-menu-items">
                            <a className="top-menu-item" href="#">Browse</a>
                            <a className="top-menu-item" href="#">Get Desktop</a>
                            <a className="top-menu-item" href="#">Try Prime</a>
                            <a className="top-menu-item" href="#">Store</a>
                        </div>
                        <div className="top-menu-ellipsis">
                            <div className="p-relative">
                                <div className="ellipsis-menu-button">
                                    <button className="ellipsis-button" onClick={this.onClickEllipsis}>
                                        <figure>
                                            <svg width="20px" height="20px" version="1.1" viewBox="0 0 20 20" x="0px" y="0px">
                                                <path d="M4 8a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm6 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm6 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" fillRule="evenodd"></path>
                                            </svg>
                                        </figure>
                                    </button>
                                </div>

                                <div className={this.state.show_ellipsis_menu ? "ellipsis-menu-list" : "hide" }>
                                    <div className="menu-balloon-tail"><span></span></div>

                                    <div className="ellipsis-menu-items">
                                        <a className="ellipsis-menu-item"><div>About</div></a>
                                        <a className="ellipsis-menu-item"><div>Ad Choices</div></a>
                                        <a className="ellipsis-menu-item"><div>Advertisers</div></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="top-nav-search">
                            <div className="nav-search-input">
                                <div className="search-icon">
                                    <figure>
                                        <svg width="20px" height="20px" version="1.1" viewBox="0 0 20 20" x="0px" y="0px">
                                            <path d="M4.16 8.552a4.397 4.397 0 0 1 4.392-4.393 4.397 4.397 0 0 1 4.391 4.393 4.396 4.396 0 0 1-4.39 4.392 4.397 4.397 0 0 1-4.394-4.392m13.546 7.732l-3.872-3.873a6.51 6.51 0 0 0 1.27-3.86A6.558 6.558 0 0 0 8.552 2 6.56 6.56 0 0 0 2 8.552a6.559 6.559 0 0 0 6.552 6.55 6.51 6.51 0 0 0 3.86-1.27l3.872 3.873a.994.994 0 0 0 .711.295 1.006 1.006 0 0 0 .71-1.716" fillRule="evenodd">
                                            </path>
                                        </svg>
                                    </figure>
                                </div>

                                <input type="search" placeholder="Search" className="search-input" />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
