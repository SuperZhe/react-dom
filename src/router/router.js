import React, {Component} from 'react';
import {Link,BrowserRouter,Route} from 'react-router-dom';

import AppOne from '../component/App'

import Cookies from '../views/cookies/cookies'
//引入脚部导航

class RouterContent extends Component{
	constructor(){
		super()
	}
	render(){
		return(
			<BrowserRouter>
				<div>

					<Route exact path="/" component={AppOne}>
						
					</Route>
					<Route path="/cookies" component={Cookies}/>

				</div>

			</BrowserRouter>
		)
	}
}
export default RouterContent