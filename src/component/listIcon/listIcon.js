import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import icon1 from '../../images/bg_03.png'
import icon2 from '../../images/mb_03.png'
import icon3 from '../../images/dg_03.png'
import icon4 from '../../images/cd_03.png'
import './listIcon.css'
class ListIcon extends Component{
	constructor(){
		super()
	}
	render(){
		const ImgSrc = [
			{src:icon1,link:'/cookies',type:'饼干'},
			{src:icon2,link:'',type:'面包'},
			{src:icon3,link:'',type:'茶点'},
			{src:icon4,link:'',type:'蛋糕'},
		];
		return(
			<div className="listIcon">
				<ul>
					{
						ImgSrc.map((v,i) => {
							return <li key={i}>
								<Link to={v.link}>
									<div>
										<img src={v.src} alt=""/>
										<p>{v.type}</p>
									</div>
								</Link>
							</li>
						})
					}
				</ul>
			</div>
		)
	}
}
export default ListIcon