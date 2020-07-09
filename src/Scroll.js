import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{overflowY: 'scroll', border: '10px solid black'}}>
			{props.children}
		</div>
	)
};

export default Scroll;