export const sheet = [
	{
		// Attributes
		widget: "box",
		colour: "normalDark",
		flexDirection: "column",
		padding: "10px",
		borderRadius: "15px",
		align: "center",
		gap: "5px",
		children: [
			{
				// Strength
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
						widget: "box",
						borderRadius: "5px",
						padding: "5px",
						children: [
							{
								widget: "text",
								textSize: "15px",
								content: "Strength"
							}
						]
					},
					{
						widget: "box",
						colour: "normalLight",
						borderRadius: "0px",
						padding: "5px",
						children: [
							{
								widget: "value",
								textSize: "25px",
								path: ["character", "attributes", "str"]
							}
						]
					},
					{
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
								path: ["character", "modifiers", "str"]
							}
						]
					}
				]
			},
			{
				// Dexterity
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
						widget: "box",
						borderRadius: "5px",
						padding: "5px",
						children: [
							{
								widget: "text",
								textSize: "15px",
								content: "Dexterity"
							}
						]
					},
					{
						widget: "box",
						colour: "normalLight",
						borderRadius: "0px",
						padding: "5px",
						children: [
							{
								widget: "value",
								textSize: "25px",
								path: ["character", "attributes", "dex"]
							}
						]
					},
					{
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
								path: ["character", "modifiers", "dex"]
							}
						]
					}
				]
			},
			{
				// Constitution
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
						widget: "box",
						borderRadius: "5px",
						padding: "5px",
						children: [
							{
								widget: "text",
								textSize: "15px",
								content: "Constitution"
							}
						]
					},
					{
						widget: "box",
						colour: "normalLight",
						borderRadius: "0px",
						padding: "5px",
						children: [
							{
								widget: "value",
								textSize: "25px",
								path: ["character", "attributes", "con"]
							}
						]
					},
					{
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
								path: ["character", "modifiers", "con"]
							}
						]
					}
				]
			},
			{
				// Intelligence
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
						widget: "box",
						borderRadius: "5px",
						padding: "5px",
						children: [
							{
								widget: "text",
								textSize: "15px",
								content: "Intelligence"
							}
						]
					},
					{
						widget: "box",
						colour: "normalLight",
						borderRadius: "0px",
						padding: "5px",
						children: [
							{
								widget: "value",
								textSize: "25px",
								path: ["character", "attributes", "int"]
							}
						]
					},
					{
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
								path: ["character", "modifiers", "int"]
							}
						]
					}
				]
			},
			{
				// Wisdom
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
						widget: "box",
						borderRadius: "5px",
						padding: "5px",
						children: [
							{
								widget: "text",
								textSize: "15px",
								content: "Wisdom"
							}
						]
					},
					{
						widget: "box",
						colour: "normalLight",
						borderRadius: "0px",
						padding: "5px",
						children: [
							{
								widget: "value",
								textSize: "25px",
								path: ["character", "attributes", "wis"]
							}
						]
					},
					{
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
								path: ["character", "modifiers", "wis"]
							}
						]
					}
				]
			},
			{
				// Charisma
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
						widget: "box",
						borderRadius: "5px",
						padding: "5px",
						children: [
							{
								widget: "text",
								textSize: "15px",
								content: "Charisma"
							}
						]
					},
					{
						widget: "box",
						colour: "normalLight",
						borderRadius: "0px",
						padding: "5px",
						children: [
							{
								widget: "value",
								textSize: "25px",
								path: ["character", "attributes", "cha"]
							}
						]
					},
					{
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
								path: ["character", "modifiers", "cha"]
							}
						]
					}
				]
			}, // End of Attributes
			{
				// Charisma
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
						widget: "loop",
						variable: "pointer",
						items: [
							{ name: "Apple", fish: "Bass Pro Fishing" },
							{ name: "Orange", fish: "Cod of Duty" }
						],
						children: [
							{
								widget: "value",
								path: ["pointer", "name"]
							},
							{
								widget: "value",
								path: ["pointer", "fish"]
							}
						]
					}
				]
			} // End of Attributes
		]
	}
];
