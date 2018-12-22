import React from 'react';
import './Emojis.css';

const Emojis = props =>{
	return(
	<span
	className="zone green"
	role="img"
	aria-label={ props.label?props.label:""}
	aria-hidden={ props.label?"false":"true"}
	>
	{props.symbol}
	</span>
	)}

export default Emojis;