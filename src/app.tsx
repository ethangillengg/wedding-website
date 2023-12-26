export function App() {
	const submit = () => {};
	return (
		<>
			<div class="flex flex-col gap-4 w-min mx-auto py-8">
				<h3>RSVP Form</h3>
				<input placeholder="Name" />
				<input placeholder="Party size" type="number" min="0" max="15" />
				<button>Submit</button>
			</div>
		</>
	);
}
