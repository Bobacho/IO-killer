import './TablaVariablesModelo.css';

interface FilaModelo {
	recurso: string,
	actividades: string[],
	disponibilidad: string
}

export function TablaVariablesModelo() {
	const rows: FilaModelo[] = [
		{
			recurso: "Recurso 1",
			actividades: [
				"C1",
				"C2",
				"C3"
			],
			disponibilidad: "R1"
		},
		{
			recurso: "Recurso 2",
			actividades: [
				"D1",
				"D2",
				"D3"
			],
			disponibilidad: "R2"
		},
		{
			recurso: "Recurso 3",
			actividades: [
				"E1",
				"E2",
				"E3"
			],
			disponibilidad: "R3"
		}
	];
	return (
		<>
			<section className="tabla-container">
				<table>
					<tr>
						<th>
						</th>
						<th>
						</th>
						<th>
							Actividades
						</th>
						<th>
						</th>
						<th>
						</th>
						<th>
						</th>
					</tr>
					<tr>
						<th>
							Recursos
						</th>
						<th>
							Actividad 1
						</th>
						<th>
							Actividad 2
						</th>
						<th>
							Actividad 3
						</th>
						<th>
							...
						</th>
						<th>
							Disponibilidad
						</th>
					</tr>
					{rows.map(r =>
						<tr>
							<td>
								{r.recurso}
							</td>
							{r.actividades.map(a =>
								<td>
									{a}
								</td>
							)}
							<td>
								...
							</td>
							<td>
								{r.disponibilidad}
							</td>
						</tr>
					)}
					<tr>
						<td>
							Funcion Objetivo
						</td>
						<td>
							Z1
						</td>
						<td>
							Z2
						</td>
						<td>
							Z3
						</td>
						<td>
							...
						</td>
					</tr>
				</table>
			</section>
		</>);
}
