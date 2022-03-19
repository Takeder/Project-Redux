
import React from 'react';
import PostsRedux from '../posts-redux';

import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='app'>
				<h1>Hello!</h1>
				<PostsRedux />
			</div>
		)
	}
}

export default App;
