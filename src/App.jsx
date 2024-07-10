import Layout from './Layout'
import Home from './pages/Home'
import About from './pages/About'
import Pricing from './pages/Pricing'

import { Routes, Route } from 'react-router-dom'
function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />}></Route>
					<Route path="docs" element={<About />}></Route>
					<Route path="pricing" element={<Pricing />}></Route>
					<Route path="about-us" element={<About />}></Route>
				</Route>
			</Routes>
		</>
	)
}

export default App
