const Person = (props) => {
	let msg;
	if (props.age < 18) {
		msg = 'you must be 18';
	} else {
		msg = 'please go vote';
	}
	// let voteText = props.age >= 18 ? "Go vote!" : "Go study!"; then return this in h3

	return (
		<div>
			<p>Learn some information about this person</p>
			<ul>
				<li>Name: {props.name.slice(0, 6)}</li>
				<li>Age: {props.age}</li>
			</ul>
			<h3>{msg}</h3>

            <h3>Hobbies</h3>
			<ul>
				{props.hobbies.map((h) => (
					<li>
						<b>{h}</b>
					</li>
				))}
			</ul>
		</div>
	);
};
