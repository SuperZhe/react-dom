import React, {Component} from 'react';
import './screen.css'
class Screening extends Component{
	constructor(props){
		super(props);
		this.state = {
			isScreen:false
		}
	}
	isHide = () => {
		this.props.hideFun('hide')
	};
	render(){
		//接收父元素的传值交互
		let isShow = this.props.ScreenMob;
		//通过传值来判断是否要显示
		let ScreenShow = 'block';
		let ScreenHide = 'none',
			transfrom = 'translateY(100%)',
			transfromShow = 'translateY(0%)';
		let maskShow = isShow?ScreenShow:ScreenHide;
		let listShow2 = isShow?transfromShow:transfrom;
		let maskStyle = {
			display:maskShow
		};
		let listShow = {
			transform: listShow2,
			WebkitTtransform: listShow2,
			transition:"transform 0.3s",
			WebkitTransition:"-webkit-transform 0.3s",
			MozTransition:"-moz-transform 0.3s",
			// display:maskShow
		}
		return(
			<div>
				<div className="mask" style={maskStyle} onClick={this.isHide}></div>
				<div className="list" style={listShow}>
					<div>浏览购买原料的教程</div>
					<div>浏览购买原料的教程</div>
					<div>浏览购买原料的教程</div>
				</div>
			</div>


		)
	}
}
export default Screening