import React,{PropTypes} from "react"
//import Immutable from 'immutable';
import Grid from "../Grid"
import style from './index.css';

export default class Keyboard extends React.Component {
  constructor(props){
		super(props);
		this.handleButton=this.handleButton.bind(this);
	}
  handleButton(key:number){
    switch(key){
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

      default:
        break;
    };
  }

  componentDidMount() {
    const touchEventCatch = {}; // 对于手机操作, 触发了touchstart, 将作出记录, 不再触发后面的mouse事件
     //在鼠标触发mousedown时, 移除元素时可以不触发mouseup, 这里做一个兼容, 以mouseout模拟mouseup
    const mouseDownEventCatch = {};
	}



  render() {
    return (
      <div
        className={style.keyboard}
        style={{
          marginTop:'30px',
          color:'blue',
        }}
      >
        <button
          style={{
            top:'0px',
            left:'374px'
          }}
					onClick={ this.handleButton(38) }
        >上</button>
        <button
        style={{
          top:'-180px',
          left:'374px'
        }}
					onClick={ this.handleButton(40) }
        >下</button>
        <button
        style={{
          top:'90px',
          left:'284px'
        }}
					onClick={this.handleButton(37) }

        >左</button>
        <button
        style={{
          top:'90px',
          left:'464px'
        }}
					onClick={ this.handleButton(39) }
        >右</button>
        <button
        style={{
          top:'0px',
          left:'196px'
        }}
					onClick={ this.handleButton(80) }

        >重新开始</button>
        <button
        style={{
          top:'0px',
          left:'16px'
        }}
					onClick={ this.handleButton(82) }
        >暂停/开始</button>
      </div>
    );
  }
}

Keyboard.propTypes = {
  //filling: React.PropTypes.number.isRequired,
  //keyboard: React.PropTypes.object.isRequired,
};
