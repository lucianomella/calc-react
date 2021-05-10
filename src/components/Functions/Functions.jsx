import React from 'react'
import Button from '../Button/Button'
import PropTypes from 'prop-types'
import './Functions.css'

const Functions = ({ onContentClear, onDelete }) => {
	return (
		<div className="functions">
			<Button type="button-long-text" text="Clear" clickHandler={onContentClear} />
			<Button text="&larr;" clickHandler={onDelete} />
		</div>
	);
}

Functions.prototype = {
	onContentClear: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired
}
export default Functions;