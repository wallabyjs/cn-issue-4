import logo from "./logo.svg"
import "./App.css"

function App() {
	let msg1 = "hello typescript"
	const flag1 = true
	if (msg1 === "hello typescript" && flag1) {
		msg1 = "hello javascript"
	}
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	)
}

export default App
