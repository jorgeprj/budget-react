import { Link, BrowserRouter as Router } from "react-router-dom"
import { AppRoutes } from './routes/index.jsx';
import Sidebar from "./components/layout/sidebar/Sidebar";

function App() {
	return (
		<div>
			<Router>
				<Sidebar/>
				<AppRoutes />
			</Router>
		</div>
	)
}

export default App
