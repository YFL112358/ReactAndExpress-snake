import React from "react"
import {render} from "react-dom"
import App from "./web/app/components/App"
import "./web/app/index.css"
import {createStore,compose} from "redux"
import reducer from "./web/app/reducers/index.js"
import {Provider} from "react-redux"

let store=createStore(reducer)
render(
	<Provider store={store}>
		<div>
			<App />
		</div>
	</Provider>,
document.getElementById("boardDiv"))
