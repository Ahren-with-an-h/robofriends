import React, { Component, Fragment } from 'react';
import './App.css';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: '',
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ robots: users }));
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	}

	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		});
		return !robots.length ?
		 <h1 className='f1'>Loading</h1> :
			(
				<Fragment>
					<header className='flex justify-center'> 
						<h1 className='f1 mh4'>RoboFriends</h1>
						<SearchBox searchChange={this.onSearchChange}/>
					</header>
					<main className='tc'>
						<Scroll>
							<CardList robots={ filteredRobots } />
						</Scroll>
					</main>
				</Fragment>
			)
	}
}

export default App;
