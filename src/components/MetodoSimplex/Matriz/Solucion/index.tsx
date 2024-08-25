import { useState } from 'react';
import "./Solucion.css";

interface TablaSimplex {
	matriz: number[][];
	restricciones: number[];
	objetivo: number[];
	basic: number[];
}

export function Solucion(props: TablaSimplex) {
	const [result, setResult] = useState<TablaSimplex[]>([]);

	const fetchData = async (): Promise<TablaSimplex[]> => {
		const response = await fetch("http://localhost:8000/metodo_simplex", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(props)
		});

		if (!response.ok) {
			throw new Error(`Error fetching data: ${response.status}`); // Handle errors gracefully
		}

		const data = await response.json();
		return data;
	};

	return (
		<>
			<button onClick={() => {
				fetchData()
					.then(r => {
						setResult(r);
						console.log(r);
					})
					.catch(error => console.error(error));
			}}>
				Operar
			</button>
			<div className="result-container">
				{result.length > 0 ? result.map((r, index) => (
					<div key={index} className="table-container">
						<div className="basic-container">
							<table>
								<tr><td>Z</td></tr>
								{r.basic.map((b, i) => (
									<tr key={i}>
										<td>
											X<sub>{b + 1}</sub>
										</td>
									</tr>
								))}
							</table>
						</div>
						<div className="objetivo-matriz-container">
							<div className="objetivo-result-container">
								<table>
									<tr>
										{r.objetivo.map((o) => (
											<td>
												{o}
											</td>
										))}
									</tr>
								</table>
							</div>
							<div className="matriz-restricciones-container">
								<table>
									<tbody>
										{r.matriz.map((row, i) => (
											<tr key={i}>
												{row.map((v, j) => (
													<td key={j}>{v}</td>
												))}
											</tr>
										))}
									</tbody>
								</table>
							</div>

						</div>
						<div className="restricciones-container">
							<table>
								<tr>
									<td>
									</td>
								</tr>
								{r.restricciones.map((row, i) =>
									<tr key={i}>
										<td>
											{row}
										</td>
									</tr>
								)}
							</table>
						</div>
					</div>
				)) : null}
			</div>
		</>
	);
}

