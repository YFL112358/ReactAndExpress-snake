import React from "react"
import Info from "./Info"
import ControlBoard from "../containers/ControlBoard"
import LiveSnake2 from "../containers/LiveSnake2"

const App=()=>{
	return (
		<div className="app">
			<LiveSnake2 />
			<Info />
			<ControlBoard />
			
		</div>
	)
	
}

export default App
