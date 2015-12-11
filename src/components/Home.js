import React, {Component} from 'react';
import { connect } from 'react-redux';


const Home = ({styles, stargazers}) => (
	<div>
		home
	</div>
)
/**
 * Connect to Redux store.
 */
export default connect(
	state => ({})
)(Home)
