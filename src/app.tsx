import { useState } from "preact/hooks";

export function App() {
	const [name, setName] = useState("");
	const [partySize, setPartySize] = useState(0);

	const handleNameChange = (e: Event) => {
		setName((e.target as HTMLInputElement).value);
	};

	const handlePartyChange = (e: Event) => {
		setPartySize(Number.parseInt((e.target as HTMLInputElement).value));
	};

	const submit = () => {
		console.log("Submitting...");
		console.log("Party size:", partySize);
		console.log("Name:", name);
	};
	return (
		<>
			<div class="flex flex-col gap-4 w-min mx-auto py-8">
				<h3>RSVP Form</h3>
				<input onChange={handleNameChange} placeholder="Name" type="text" />
				<input
					onChange={handlePartyChange}
					placeholder="Party size"
					type="number"
					min="0"
					max="15"
				/>
				<button onClick={submit}>Submit</button>
			</div>
		</>
	);
}
