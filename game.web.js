import React from "react"
import {render} from "react-dom"
import App from "./web/js/components/App"
//const App = require('./web/components/App')
import "./web/css/index.css"
import {createStore,compose} from "redux"
import reducer from "./web/js/reducers"
import {Provider} from "react-redux"

let store=createStore(reducer)
render(
	<Provider store={store}>
		<div>
			<App />
		</div>
	</Provider>,
document.getElementById("boardDiv"))
