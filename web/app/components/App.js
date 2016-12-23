import React from "react"
import Info from "./Info"
import ControlBoard from "../containers/ControlBoard"
import LiveSnake from "../containers/LiveSnake"
import KeyBoard from "./keyboard/index.js"

const App=()=>{
	return (
		<div className="app">
			<LiveSnake />
			<Info />
			<ControlBoard />
			<KeyBoard />
		</div>
	)
	
}

export default App
