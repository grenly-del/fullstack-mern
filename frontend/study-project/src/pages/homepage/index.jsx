import ReactDOM from 'react-dom'
import LeftSide from '../../components/home/left/leftside'
import RightSide from '../../components/home/right/rightside'

// ==== STYLE ====
import './home.css'

const Home = () => {
	return (
		<main className="home">
			<LeftSide />
			<RightSide />
		</main>
	)
}

export default Home