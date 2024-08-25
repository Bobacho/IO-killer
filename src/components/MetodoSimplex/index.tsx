import { TablaVariablesModelo } from './TablaVariablesModelo';
import { useState } from 'react';
import { Matriz } from './Matriz';


const introduction = `
	Observa bien wawita, en este seccion vas a aprender como y porque se utiliza el metodo simplex en la investigacion de operaciones.
	Primero que nada el metodo simplex es una forma de resolver problemas de programacion lineal cuando esta tiende a tener mas de 2 variables y se complica utilizar el metodo grafico, aunque este metodo tambien soporta con 2 variables pero es mas conveniente utilizar el metodo grafico.
`

const identificacionVariables = `
	Muy bien wawita, lo primero que tienes que hacer en el metodo simplex es identificar las variables y restricciones que tiene el problema, para ello tienes que realizar tu tablita.
	Para la tablita tienes que pensar en tres cosas que debes extraer del problema, los recursos , las actividades y la disponibilidad.
`

export function MetodoSimplex() {
	const [tipoFuncion, setTipoFuncion] = useState<string>("Maximizar");
	const options: string[] = ["Maximizar", "Minimizar"];
	return (
		<>
			<div className="p-introduction">
				<p>
					{introduction}
				</p>
			</div>
			<h2>
				Identificacion de variables
			</h2>
			<div className="p-identificacion">
				<p>
					{identificacionVariables}
				</p>
				<TablaVariablesModelo />
			</div>
			<div className="p-funcion-objetivo">
				<select value={tipoFuncion}
					onChange={(ev) => setTipoFuncion(ev.target.value)}>
					{options.map(o =>
						<option key={o}>
							{o}
						</option>
					)}
				</select>
				<h1>
					{`${tipoFuncion} esta funcion`}
				</h1>
			</div >
			<div className="p-desigualdades">
				<Matriz />
			</div>
		</>
	);
}
