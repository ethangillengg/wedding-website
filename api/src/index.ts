import express from "express";
import { google } from "googleapis";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(bodyParser.json());

const spreadsheetId = process.env.SPREADSHEET_ID;

// Initialize the Sheets API client
const auth = new google.auth.GoogleAuth({
	keyFilename: "wedding-website-409308-182a9541cc9a.json",
	scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

async function verifyServiceAccount() {
	// verify credentials
	const authClient = await auth.getClient();
	const accessToken = await authClient.getAccessToken();

	if (accessToken) {
		console.log("Successfully authenticated with service account!");
		console.log("Access Token:", accessToken);
	} else {
		console.error("Failed to authenticate. Access token not found.");
	}
}
verifyServiceAccount();

const sheets = google.sheets({ version: "v4", auth });

app.post("/write-to-sheet", async (req, res) => {
	const { name, partySize } = req.body;

	if (typeof name !== "string" || typeof partySize !== "number") {
		return res.status(400).send("Invalid input data");
	}

	try {
		await sheets.spreadsheets.values.append({
			spreadsheetId,
			range: "A:B", // Assumes you are writing to columns A and B
			valueInputOption: "USER_ENTERED",
			requestBody: {
				values: [[name, partySize]],
			},
		});

		res.status(200).send("Data written to sheet");
	} catch (error) {
		console.error(error);
		res.status(500).send("Error writing to sheet");
	}
});

sheets.spreadsheets.get({ spreadsheetId }).then((res) => {
	console.log(res);
});
// sheets.spreadsheets.values
// 	.append({
// 		spreadsheetId,
// 		range: "A:B", // Assumes you are writing to columns A and B
// 		valueInputOption: "USER_ENTERED",
// 		requestBody: {
// 			values: [["ethan gill", 22]],
// 		},
// 	})
// 	.then((res) => {
// 		console.log(res);
// 		console.log("Success!!");
// 	})
// 	.catch((err) => {
// 		console.error(err);
// 	});
//
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
