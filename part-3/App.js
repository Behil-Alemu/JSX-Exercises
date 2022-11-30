const App = () => (
	<div>
		<Person name="sunny" age={8} hobbies={['sing','dance','paint']}/>
	</div>
);

ReactDOM.render(<App />, document.getElementById('root'));
