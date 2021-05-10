import React from 'react'
import Button from '../Button/Button'
import PropTypes from 'prop-types'
import './MatOperations.css'

const MatOperations = ({ onClickOperations, onClickEquals }) => {
	return (
		<div className="math-operations">
			<Button text="+" clickHandler={onClickOperations} />
			<Button text="-" clickHandler={onClickOperations} />
			<Button text="*" clickHandler={onClickOperations} />
			<Button text="/" clickHandler={onClickOperations} />
			<Button text="=" clickHandler={onClickEquals} />
		</div >
	);
}

MatOperations.prototype = {
	onClickEquals: PropTypes.func.isRequired,
	onClickOperations: PropTypes.func.isRequired
}

export default MatOperations;