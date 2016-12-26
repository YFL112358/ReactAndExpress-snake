import Snake2 from "../components/button"
import {connect} from "react-redux"
import {moveForward,changeDir,toggleMove,reStart,becomeGameover} from "../action"


const mapStateToProps=(state)=>{
	return {
		snakeArr:state.get("snakeArr"),
		foodArr:state.get("foodArr"),
		speed:state.get("speed"),
		moving:state.get("moving"),
		direction:state.get("direction"),
		gameover:state.get("gameover")
	}
}

const mapDispatchToProps=(dispatch)=>{
	return {
		move:()=>{dispatch(moveForward())},
		changeDir:(direction)=>{dispatch(changeDir(direction))},
		toggleMove:()=>{dispatch(toggleMove())},
		reStart:()=>{dispatch(reStart())},
		becomeGameover:()=>{dispatch(becomeGameover())}
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(Snake2)
