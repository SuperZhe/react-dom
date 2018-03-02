/*
 * 放置路由连接的最后一层
 * */

import React, { Component } from 'react';
import Footer from '../component/footer/footer'
import Header from '../component/header/header'
import Index from '../views/index/index'
class App extends Component {
	render() {
		return (
			<div>
				<Header/>
				<div>
					{this.props.children}
				</div>
				<Footer/>
			</div>
		);
	}
}

export default App;
