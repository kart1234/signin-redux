import React, {Component, cloneElement} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

/*
 * Main view colors.
 */
const colors = {
	white: '#BEBEBE',
	pink: '#D381C3',
	blue: '#6FB3D2',
	green: '#A1C659',
	darkGrey: '#2A2F3A',
	lightGrey: '#4F5A65'

}
/**
 * Main view styles.
 */
const styles = {
	base: {
		fontFamily: 'sans-serif',
		color: colors.white,
		padding: '10px 30px 30px',
		width: '380px',
		margin: '0 auto 10px',
		background: colors.darkGrey,
		boxShadow: '15px 5px ' + colors.lightGrey
	},
	link: {
		color: colors.white,
		textDecoration: 'none',
	},
	navLink: {
		fontFamily: 'sans-serif',
		color: colors.lightGrey,
		textDecoration: 'none',
		padding: '0 30px'
	},
	nav: {
		height: 40,
		width: '380px',
		margin: '10px auto 0',
		padding: '10px 30px 30px',
		color: 'white',
		backgroundColor: colors.blue,
		boxShadow: '15px 5px ' + colors.lightGrey,
		textTransform: 'uppercase'
	},
	list: {
		display: 'inline-block',
		listStyle: 'none',
	},
	feature: {
		color: colors.pink,
	},
	github: {
		position: 'absolute',
		top: 0,
		right: 0,
		border: 0,
	},
	avatar: {
		borderRadius: '50%',
		width: 32,
		height: 32,
		margin: '0 2px 2px 0',
	},

};


/**
 * Main component
 */
export default ({children}) => (
	<div>
		<div style={styles.nav}>
			<ul>
				<li style={styles.list}><Link style={styles.navLink} to="/" activeClassName="active">Home</Link></li>
				<li style={styles.list}><Link style={styles.navLink}  to="/about" activeClassName="active">About</Link></li>
			</ul>
		</div>
		
	</div>
)
