import React,{Component} from 'react';
import ListIcon from '../../component/listIcon/listIcon'
import Focus from '../../component/focus/focus'
class Cookies extends Component{
	constructor(){
		super()
	}
	render(){
		return(
			<div>
				<ListIcon/>
				<Focus/>
			</div>
		)
	}
}
export default Cookies;