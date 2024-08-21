import './Header.css';


interface HeaderProps {
	onSendData: (element: string) => void;
	subjects: string[]
}

export function Header(props: HeaderProps) {
	const buttons: string[] = props.subjects;
	const handleClick = (element: string) => {
		props.onSendData(element)
	}
	return (
		<>
			<div className="button-set">
				{buttons.map((e) => {
					return (
						<button onClick={() => handleClick(e)} className="button">
							{e}
						</button>
					);
				})}
			</div>
		</>
	);
}

