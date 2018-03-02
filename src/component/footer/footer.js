import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import './footer.css'
//我需要用到link进行连接
class Footer extends Component {
	constructor() {
		super();
	}

	render() {
		//声明一个数据用来当脚部导航
		const footerNav = [
			{name: '首页', link: '/'},
			{name: '烘焙', link: '/a'},
			{name: '商城', link: '/b'},
			{name: '我的', link: '/c'},

		];
		return (
			<div className="footerNav">
				<ul>
					{
						footerNav.map((v, i) => {
							return <li key={i}>
								{i === 0?<NavLink exact to={v.link} activeClassName="active">
									{v.name}
								</NavLink>:<NavLink to={v.link} activeClassName="active">
									{v.name}
								</NavLink>}
								</li>;
						})
					}
				</ul>
			</div>
		);
	}
}
export default Footer