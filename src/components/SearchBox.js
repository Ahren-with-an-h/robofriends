import React from 'react';

const SearchBox = ({searchChange}) => {
	return (
		<div className='flex flex-column-reverse'>
			<input 
				className='mv2 mh2 pa3 ba b--green bg-lightest-blue'
				type='search' 
				placeholder='search robots' 
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;
