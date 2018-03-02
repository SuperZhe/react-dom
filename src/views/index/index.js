import React,{Component} from 'react'
import Kv from '../../images/user_center_bg.png'
import ListIcon from '../../component/listIcon/listIcon'
import Focus from '../../component/focus/focus'
import './index.css'
class Index extends Component{
	render(){
		return(
			<div className="index">
				<img src={Kv} alt="kv图"/>
				<ListIcon/>
				<Focus/>
			</div>
		)
	}
}

export default Index