import React from 'react';

const SearchBox = ({ searchfield, pp }) => {
	return(
		<div className='pa2'>
			<input 
				className= 'pa3 ba b--green bg-lightest-blue' 
				type='search' 
				placeholder='Enter Name of Robot'
				onChange={pp}
			/> 
		</div>	
	); 
}

export default SearchBox; 