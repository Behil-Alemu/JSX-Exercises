const App = () => (
	<div>
		<Tweet username="sis" name="Nani" date={'09/11/1998'} message="Hello World" />
		<Tweet username="skip" name="Cat" date={'09/11/1996'} message="Hello Cat" />
		<Tweet username="snip" name="Dog" date={'09/11/1999'} message="Hello Dog" />
	</div>
);

ReactDOM.render(<App />, document.getElementById('root'));
