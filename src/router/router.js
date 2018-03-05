import React, { Component } from 'react';
import { BrowserRouter, Route ,Switch} from 'react-router-dom';

import AppOne from '../component/App';
import Index from '../views/index/index';
import Cookies from '../views/cookies/cookies';

//引入脚部导航

class RouterContent extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<BrowserRouter>
				<div>
					<Route exact path="/" component={AppOne}>
						<Route path="" component={Index}/>
						<Route path="/cookies" component={Cookies}/>
					</Route>
				</div>
			</BrowserRouter>
		);
	}
}

export default RouterContent;