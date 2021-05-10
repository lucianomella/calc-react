/* eslint no-eval: 0*/
import React, { useState } from 'react'
import words from 'lodash.words'
import Result from './components/Result/Result'
import Numbers from './components/Numbers/Numbers'
import Functions from './components/Functions/Functions'
import './App.css'
import MatOperations from './components/MatOperations/MatOperations'

const App = () => {
	//Array Destructuring
	// const arrayTextoFuncionModificaTexto = useState("")
	// const stack = arrayTextoFuncionModificaTexto[0];
	// const setStack = arrayTextoFuncionModificaTexto[1]
	// [  variable, setVariable]
	const [stack, setStack] = useState("");
	const items = words(stack, /[^-^+^*^/]+/g);
	console.log('Rendererizado de app:', items)
	return (
		<div className="react-calculator">
			<Result value={items[items.length - 1]} />
			<Numbers onClickNumber={number => {
				console.log('onClickNumber', number)
				setStack(stack + number)
			}} />
			<Functions onContentClear={
				() => {
					console.log('onContentClear');
					setStack("");
				}}
				onDelete={
					() => {
						console.log('onDelete');
						if (stack.length > 0)
							setStack(stack.substring(0, stack.length - 1));
					}
				}
			/>
			<MatOperations
				onClickOperations={
					operation => {
						console.log('Operation:', operation);
						setStack(`${stack}${operation}`);     // uso de template literals
					}
				}
				onClickEquals={
					equal => {
						console.log('Equal:', equal);
						setStack(eval(stack.toString()));
					}
				}
			/>
		</div>
	)
}

export default App;