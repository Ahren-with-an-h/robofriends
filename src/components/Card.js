import React from 'react';

const Card = ({ id, name, email }) => {
	const cSize = 250; // card size
	return(
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={ `https://robohash.org/${id}?size=${cSize}x${cSize}` } />
			<div>
				<h2>{ name }</h2>
				<p>{ email }</p>
			</div>
		</div>
	);
}

export default Card;
