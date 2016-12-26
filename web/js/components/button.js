import React,{PropTypes} from "react"
import Grid from "./Grid"
import  './../../css/Snake.css'

class Button extends React.Component {
	constructor(props){
		super(props);

	}

	handleKeyDown(e){
		switch(e){
			case 37:
				if(this.props.direction!="RIGHT"&&this.props.moving){
					this.props.changeDir("LEFT")
				}
				break;
			case 38:
				if(this.props.direction!="DOWN"&&this.props.moving){
					this.props.changeDir("UP")
				}
				break;
			case 39:
				if(this.props.direction!="LEFT"&&this.props.moving){
					this.props.changeDir("RIGHT")
				}
				break;
			case 40:
				if(this.props.direction!="UP"&&this.props.moving){
					this.props.changeDir("DOWN")
				}
				break;

			case 80:
				if(!this.props.gameover){
					if(this.props.moving){
						this.props.toggleMove();
						clearInterval(this.timer)
					}else{
						this.props.toggleMove();
						this.timer=setInterval(this.props.move,this.props.speed)
					}
				}
				break;
			case 82:
				if(this.timer ){
					clearInterval(this.timer);
				}
				this.props.reStart();
				break;
			default:
				break;

		};
	}

	componentDidMount() {
		// const touchEventCatch = {}; // 对于手机操作, 触发了touchstart, 将作出记录, 不再触发后面的mouse事件
		//在鼠标触发mousedown时, 移除元素时可以不触发mouseup, 这里做一个兼容, 以mouseout模拟mouseup
		//const mouseDownEventCatch = {};
		  window.addEventListener("keydown",this.handleKeyDown);
	}

	shouldComponentUpdate(nextProps,nextState){
		let snakeArr=nextProps.snakeArr;
		let snakeBody=snakeArr.slice(0,-1);
		let head=snakeArr.last();
		let eatSelf=snakeBody.filter((item)=>{return item.equals(head)}).size>0?true:false
			if(nextProps.gameover){
				return false;
			}
		if(head.get("x")>19||head.get("x")<0||head.get("y")>19||head.get("y")<0||eatSelf){
			clearInterval(this.timer);
			this.props.becomeGameover();
			return false;
		}else{
			return true;
		}
	}

	componentWillUnmount(){
		window.removeEventListener("keydown",this.handleKeyDown);
		if(this.timer!==undefined){
			clearInterval(this.timer);
		}
	}
	render() {

		let foodArr=this.props.foodArr
		let foodStyle={left:foodArr.get("x")*20,top:foodArr.get("y")*20}

		return (

			<div className="snake" >
			<Grid cols={20} rows={20} />
			<div>
				{this.props.snakeArr.map((pos,index)=>(
						<span className="snake-body" key={pos.get("x")+"-"+pos.get("y")} style={{left:pos.get("x")*20,top:pos.get("y")*20}}></span>
						))}
			</div>
			<span className="snake-food"  style={foodStyle}></span>
			<div
			className='keyboard'
				style={{
					marginTop:'30px',
					color:'blue',
				}}
			>
				<button className="keyboard-button"
					style={{
					top:'0px',
					left:'274px',
					}}
				onClick = {(evt) => {this.handleKeyDown(38)}}

				>U</button>
				<button className="keyboard-button"
				style={{
					top:'120px',
					left:'274px',
				}}
				onClick = {(evt) => {this.handleKeyDown(40)}}
				>D</button>
				<button className="keyboard-button"
				style={{
					top:'60px',
					left:'204px',
				}}
				onClick = {(evt) => {this.handleKeyDown(37)}}
				>L</button>
				<button className="keyboard-button"
				style={{
					top:'60px',
					left:'350px',
				}}
				onClick = {(evt) => {this.handleKeyDown(39)}}
				>R</button>
				<button className="keyboard-button"
				style={{
					top:'0px',
					left:'106px',
				}}
				 onClick = {(evt) => {this.handleKeyDown(80)}}
				>P/S</button>
				<button className="keyboard-button"
				style={{
					top:'0px',
					left:'16px'
				}}
				 onClick = { (evt) => {this.handleKeyDown(82)}}
				>Restart</button>
				</div>
			</div>
		);
	}
}

export default Button
