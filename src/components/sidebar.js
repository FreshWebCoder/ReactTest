import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

class SideBar extends Component {
    constructor(props, context) {
        super(props, context);
        // defining the State
        this.state = {
            sidebar_collapsed: false,
        };
    }
    toggleSidebar = () => {
        this.setState({ sidebar_collapsed: !this.state.sidebar_collapsed });
    };
    render() {
        return (
            <div className={this.state.sidebar_collapsed ? "side-nav side-nav-collapsed" : "side-nav"}>
                <div className="side-nav-content">
                    <div className="side-nav-container">
                        <div className="side-nav-wrapper">
                            <Scrollbars style={{ height: "100%" }} autoHide>
                                <div className="scrollContainer">
                                    <div className="scrollContent">
                                        <div className="side-nav-header">
                                        {this.state.sidebar_collapsed ?
                                            <figure>
                                                <svg width="20px" height="20px" version="1.1" viewBox="0 0 20 20" x="0px" y="0px">
                                                    <path d="M11.205 5c.433 0 .78.34.795.763v8.474a.793.793 0 0 1-.795.763H2.801a.795.795 0 0 1-.8-.79V5.79c0-.436.357-.79.8-.79h8.404zm6.453 1.11c.213.13.342.356.342.601v6.578a.705.705 0 0 1-.342.601.745.745 0 0 1-.705.04L14 12.834v-5.68l2.953-1.085a.747.747 0 0 1 .705.04z" fill-rule="evenodd">
                                                    </path>
                                                </svg>
                                            </figure>
                                            :
                                            <h5>Featured Channels</h5>
                                        }
                                        </div>

                                        <div className="side-nav-card">
                                            <a className="side-nav-card_link">
                                                <div className="side-nav-card_avatar">
                                                    <img src="./assets/images/bbg.png" />
                                                </div>
                                                {!this.state.sidebar_collapsed ?
                                                <div className="side-nav-card_metadata">
                                                    <div className="side-nav-card-title">
                                                        <p>BigBadGameAThon</p>
                                                    </div>

                                                    <div className="side-nav-card-info">
                                                        <span>Arabian Nights</span>
                                                    </div>
                                                </div>
                                                : "" }
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Scrollbars>
                        </div>
                        {!this.state.sidebar_collapsed ?
                            <div className="side-nav-search">
                                <div className="nav-search-input">
                                    <div className="search-icon">
                                        <figure>
                                            <svg width="20px" height="20px" version="1.1" viewBox="0 0 20 20" x="0px" y="0px">
                                                <path d="M4.16 8.552a4.397 4.397 0 0 1 4.392-4.393 4.397 4.397 0 0 1 4.391 4.393 4.396 4.396 0 0 1-4.39 4.392 4.397 4.397 0 0 1-4.394-4.392m13.546 7.732l-3.872-3.873a6.51 6.51 0 0 0 1.27-3.86A6.558 6.558 0 0 0 8.552 2 6.56 6.56 0 0 0 2 8.552a6.559 6.559 0 0 0 6.552 6.55 6.51 6.51 0 0 0 3.86-1.27l3.872 3.873a.994.994 0 0 0 .711.295 1.006 1.006 0 0 0 .71-1.716" fillRule="evenodd">
                                                </path>
                                            </svg>
                                        </figure>
                                    </div>

                                    <input type="search" placeholder="Search to Add Friends" className="search-input" />
                                </div>
                            </div> : ''
                        }
                    </div>
                </div>
                <button className="toggle-sidebar" onClick={this.toggleSidebar}>
                    <figure>
                        <svg className="arrow-left" width="20px" height="20px" version="1.1" viewBox="0 0 20 20" x="0px" y="0px">
                            <path d="M12.537 14.946a.714.714 0 0 0 .463-.66V5.714a.715.715 0 0 0-.463-.66.777.777 0 0 0-.817.155l-4.5 4.286A.696.696 0 0 0 7 10a.7.7 0 0 0 .22.505l4.5 4.286a.777.777 0 0 0 .817.155">
                            </path>
                        </svg>
                        <svg className="arrow-right" width="20px" height="20px" version="1.1" viewBox="0 0 20 20" x="0px" y="0px">
                            <path d="M7.463 5.054a.714.714 0 0 0-.463.66v8.572c0 .289.183.55.463.66.28.11.603.05.817-.155l4.5-4.286A.696.696 0 0 0 13 10a.7.7 0 0 0-.22-.505L8.28 5.21a.777.777 0 0 0-.817-.155"></path>
                        </svg>
                    </figure>
                </button>
            </div>
        )
    }
}

export default SideBar;
