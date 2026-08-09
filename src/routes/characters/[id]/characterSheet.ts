export const sheet = [
	{
		// Main container for the attributes
		widget: "box",
		colour: "normalDark",
		flexDirection: "column",
		padding: "10px",
		borderRadius: "15px",
		align: "center",
		gap: "5px",
		children: [
			{
				// Loops through all attributes (6) and creates appropriate slots for them
				widget: "loop",
				variable: "attribute",
				path: ["character", "attributes"],
				children: [
					{
						// Outer Attribute Box
						widget: "box",
						colour: "normalLight",
						flexDirection: "column",
						borderWidth: "2px",
						borderColour: "dark",
						borderStyle: "solid",
						borderRadius: "8px",
						width: "98px",
						align: "center",
						gap: "5px",
						children: [
							{
								// Attribute Name
								widget: "box",
								borderRadius: "5px",
								padding: "5px",
								children: [
									{
										widget: "value",
										textSize: "15px",
										path: ["attribute", "name"]
									}
								]
							},
							{
								// Attribute Base
								widget: "box",
								colour: "normalLight",
								borderRadius: "0px",
								padding: "5px",
								children: [
									{
										widget: "value",
										textSize: "25px",
										path: ["attribute", "base"]
									}
								]
							},
							{
								// Attribute Modifier
								widget: "box",
								colour: "normalLight",
								flexDirection: "column",
								borderRadius: "100%",
								borderColour: "dark",
								borderStyle: "solid",
								borderWidth: "2px",
								width: "50px",
								padding: "5px",
								align: "center",
								children: [
									{
										widget: "value",
										textSize: "15px",
										path: ["attribute", "modifier"]
									}
								]
							}
						] // End of Children
					}
				] // End of Outer Box
			}
		] // End of Attributes
	}
];
