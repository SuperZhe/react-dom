import React, { Component } from 'react';
import logo from '../../logo.svg';
import Screen from '../../views/screening/screening'
import './header.css';

class Header extends Component {
	constructor() {
		super();
		this.state = {
			headerCenter: 'react练习',
			isShowNav: false,
			isShowScreen:false
		};
	}

	handHeader = () => {
		this.state.isShowNav ? this.setState({isShowNav: false}) : this.setState({isShowNav: true});
	};
	screenFun = () => {
		this.setState({isShowScreen: true});
	};
	hideF = (hide) => {this.setState({isShowScreen: false})};
	render() {
		let height = this.state.isShowNav === true ? '2rem' : '';
		let NavStyle = {
			position: 'absolute',
			right: '0px',
			top: '1.2rem',
			transition: 'all 0.1s',
			WebkitTransition: 'all 0.1s',
			height: height,
		};
		return (
			<div>
				<header className="headerName">
					<div className="headerLeft">
						<img src={logo} alt=""/>
					</div>
					<div className="headerCenter">{this.state.headerCenter}</div>
					<div className="headerRight" onClick={this.handHeader}>
						<i></i>
						<i></i>
						<i></i>
					</div>
					<div className="secondaryNav" style={NavStyle}>
						<span onClick={this.screenFun}>筛选</span>
						<span>搜索</span>
					</div>
				</header>
				<Screen
					ScreenMob={this.state.isShowScreen}
					hideFun = {this.hideF}
				/>
			</div>

		);
	}
}

export default Header;