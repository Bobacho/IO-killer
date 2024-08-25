import { useState, useEffect } from 'react'
import './Matriz.css'
import { Solucion } from './Solucion'

export function Matriz() {
	const [nroVariables, setNroVariables] = useState<number>(0)
	const [nroInecuaciones, setNroInecuaciones] = useState<number>(0)
	const [matriz, setMatriz] = useState<number[][]>([])
	const [restricciones, setRestricciones] = useState<number[]>([])
	const [objetivo, setObjetivo] = useState<number[]>([])
	const [basic, setBasic] = useState<number[]>([])
	const handleVariables = (ev: React.ChangeEvent<HTMLInputElement>) => {
		try {
			const newNroVariables = parseInt(ev.target.value);
			setNroVariables(newNroVariables);
			setNroInecuaciones(newNroVariables);
		}
		catch (ex) {
			setNroVariables(0);
		}
	};
	const handleInecuaciones = (ev: React.ChangeEvent<HTMLInputElement>) => {
		const newNroInecuaciones = parseInt(ev.target.value);
		setNroInecuaciones(newNroInecuaciones);
	};
	useEffect(() => {
		try {
			let matrix: number[][] = [];
			for (let i = 0; i < nroInecuaciones; i++) {
				let row: number[] = [];
				for (let j = 0; j < nroVariables + nroInecuaciones; j++) {
					row.push(0);
				}
				matrix.push(row);
			}
			setMatriz(matrix);
			setRestricciones(new Array(nroInecuaciones).fill(0));
			setObjetivo(new Array(nroVariables).fill(0));
			setBasic(new Array(nroInecuaciones).fill(0));
		}
		catch (ex) {
			console.error(ex)
		}
	}, [nroVariables, nroInecuaciones]);
	return (
		<>
			<div className="nro-variables">
				<p>
					Ingrese el numero de variables wawita:
				</p>
				<input
					type="number"
					value={nroVariables}
					onChange={handleVariables}
				/>
				<p>
					Ingrese el numero de inecuaciones wawita:
				</p>
				<input
					type="number"
					value={nroInecuaciones}
					onChange={handleInecuaciones}
				/>


			</div>
			{matriz.map((row, rowIndex) => (
				<div key={rowIndex} className="row-container">
					{row.map((v, colIndex) => (
						<div key={colIndex} className="variable-container">
							{colIndex !== nroVariables + nroInecuaciones - 1 ? <p>+</p> : <p></p>}
							<p>X<sub>{colIndex + 1}</sub></p>
							<input
								type="number"
								value={v}
								onChange={(ev) => {
									const newValue = parseInt(ev.target.value);
									const newMatrix = matriz.map((r, i) =>
										i === rowIndex
											? r.map((val, j) =>
												j === colIndex ? newValue : val
											)
											: r
									);
									setMatriz(newMatrix);
								}}
							/>
						</div>
					))}
					<div key={rowIndex} className="restriccion-container">
						<p>
							=
						</p>
						<input
							type="number"
							value={restricciones[rowIndex]}
							onChange={(ev) => {
								const newValue = parseInt(ev.target.value)
								const newMatrix = restricciones.map((v, i) => i === rowIndex ? newValue : v)
								setRestricciones(newMatrix)
							}}
						/>
					</div>
				</div>
			))}
			<h2>
				Funcion Objetivo
			</h2>
			<div className="row-container">
				{objetivo.map((r, i) =>
					<div className="variable-container">
						<p>
							<input
								value={r}
								type="number"
								onChange={(ev) => {
									const newValue = parseInt(ev.target.value);
									const newMatrix = objetivo.map((val, j) => j === i ? newValue : val);
									setObjetivo(newMatrix);
								}}>
							</input>
							X<sub>{i + 1}</sub>
							{i !== nroVariables - 1 ? "+" : ""}
						</p>
					</div>
				)}
			</div>
			{
				matriz.filter(m =>
					m.includes(NaN)).length === 0 ?
					<Solucion matriz={[...matriz]}
						restricciones={[...restricciones]}
						objetivo={[...objetivo]}
						basic={[...basic]} /> :
					<>
					</>
			}
		</>
	);
}
