import React from "react"
import "./Info.css"

class Info extends React.Component{
	render(){
		return (
			<div className="info">
				<p>按上下左右方向键控制蛇的方向</p>
				<p>按r重新初始化游戏</p>
				<p>按p开始或者暂停游戏</p>
				<p>由react,redux开发</p>
				<p><a href = "https://github.com/shareming7/ReactAndExpress-snake.git">项目代码</a></p>
				<p><a href="https://github.com/gwl002/reactSnake.git" target="_blank">代码参考github地址</a></p>
			</div>
		)
	}
}


export default Info
