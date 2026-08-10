export const sheet = [
	{
		// Page
		widget: "box",
		colour: "normalLight",
		flexDirection: "column",
		children: [
			{
				// Top 1/3 of Page
				widget: "box",
				flexDirection: "row",
				children: [
					{
						// Name Box
						widget: "box",
						colour: "normalLight",
						height: "45",
						width: "400",
						padding: "10",
						marginLeft: "50",
						marginRight: "20",
						marginTop: "100",
						marginBottom: "50",

						flexDirection: "column",
						align: "start",

						borderRadius: "8",
						borderStyle: "solid",
						borderColour: "dark",
						borderWidth: "2",
						gap: "8",
						children: [
							{
								// Name
								widget: "value",
								textSize: "25",
								path: ["character", "name"]
							},
							{
								widget: "text",
								content: "Character Name"
							}
						]
					}, // End Name Box
					{
						// Surrounding Box
						widget: "box",
						flexDirection: "row",
						gap: "20",

						borderStyle: "solid",
						borderWidth: "2",
						borderColour: "dark",
						borderRadius: "10",
						marginTop: "60",
						paddingBottom: "15",
						paddingLeft: "15",
						paddingRight: "15",

						children: [
							{
								// Class & Race Column
								widget: "box",
								flexDirection: "column",
								children: [
									{
										// Class Column
										widget: "box",
										flexDirection: "column",
										children: [
											{
												widget: "box",
												padding: "4",
												marginBottom: "2",
												marginTop: "8",
												width: "200",

												borderRadius: "4",
												borderStyle: "solid",
												borderColour: "normal",
												borderWidth: "0",
												borderBottomWidth: "3",
												height: "34",

												children: [
													{
														widget: "value",
														textSize: "20",
														path: ["character", "class"]
													}
												]
											},
											{
												widget: "text",
												content: "Class"
											}
										]
									},
									{
										// Race Column
										widget: "box",
										flexDirection: "column",
										children: [
											{
												widget: "box",
												padding: "4",
												marginBottom: "2",
												marginTop: "8",
												width: "200",

												borderRadius: "4",
												borderStyle: "solid",
												borderColour: "normal",
												borderWidth: "0",
												borderBottomWidth: "3",
												height: "34",

												children: [
													{
														widget: "value",
														textSize: "20",
														path: ["character", "race"]
													}
												]
											},
											{
												widget: "text",
												content: "Race"
											}
										]
									}
								]
							},
							{
								// Background & Alignment Column
								widget: "box",
								flexDirection: "column",
								children: [
									{
										// Background Column
										widget: "box",
										flexDirection: "column",
										children: [
											{
												widget: "box",
												padding: "4",
												marginBottom: "2",
												marginTop: "8",
												width: "200",

												borderRadius: "4",
												borderStyle: "solid",
												borderColour: "normal",
												borderWidth: "0",
												borderBottomWidth: "3",
												height: "34",

												children: [
													{
														widget: "value",
														textSize: "20",
														path: ["character", "background"]
													}
												]
											},
											{
												widget: "text",
												content: "Background"
											}
										]
									},
									{
										// Alignment Column
										widget: "box",
										flexDirection: "column",
										children: [
											{
												widget: "box",
												padding: "4",
												marginBottom: "2",
												marginTop: "8",
												width: "200",

												borderRadius: "4",
												borderStyle: "solid",
												borderColour: "normal",
												borderWidth: "0",
												borderBottomWidth: "3",
												height: "34",

												children: [
													{
														widget: "value",
														textSize: "20",
														path: ["character", "alignment"]
													}
												]
											},
											{
												widget: "text",
												content: "Alignment"
											}
										]
									}
								]
							},
							{
								// Level & EXP Column
								widget: "box",
								flexDirection: "column",
								children: [
									{
										// Level Column
										widget: "box",
										flexDirection: "column",
										children: [
											{
												widget: "box",
												padding: "4",
												marginBottom: "2",
												marginTop: "8",
												width: "200",

												borderRadius: "4",
												borderStyle: "solid",
												borderColour: "normal",
												borderWidth: "0",
												borderBottomWidth: "3",
												height: "34",

												children: [
													{
														widget: "value",
														textSize: "20",
														path: ["character", "level"]
													}
												]
											},
											{
												widget: "text",
												content: "Level"
											}
										]
									},
									{
										// EXP Column
										widget: "box",
										flexDirection: "column",
										children: [
											{
												widget: "box",
												padding: "4",
												marginBottom: "2",
												marginTop: "8",
												width: "200",

												borderRadius: "4",
												borderStyle: "solid",
												borderColour: "normal",
												borderWidth: "0",
												borderBottomWidth: "3",
												height: "34",

												children: [
													{
														widget: "value",
														textSize: "20",
														path: ["character", "exp"]
													}
												]
											},
											{
												widget: "text",
												content: "Experience Points"
											}
										]
									}
								]
							}
						]
					}
				]
			}, // End Top 1/3 of Page
			{
				// Central Page
				widget: "box",
				colour: "normal",
				flexDirection: "column",
				children: [
					{
						// Main container for the attributes
						widget: "box",
						colour: "normalDark",
						flexDirection: "column",
						padding: "10",
						borderRadius: "15",
						align: "center",
						gap: "5",
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
										borderWidth: "2",
										borderColour: "dark",
										borderStyle: "solid",
										borderRadius: "8",
										width: "98",
										align: "center",
										gap: "5",
										children: [
											{
												// Attribute Name
												widget: "box",
												borderRadius: "5",
												padding: "5",
												children: [
													{
														widget: "value",
														textSize: "15",
														path: ["attribute", "name"]
													}
												]
											},
											{
												// Attribute Base
												widget: "box",
												colour: "normalLight",
												borderRadius: "0",
												padding: "5",
												children: [
													{
														widget: "value",
														textSize: "25",
														path: ["attribute", "base"]
													}
												]
											},
											{
												// Attribute Modifier
												widget: "box",
												colour: "normalLight",
												flexDirection: "column",
												borderRadius: "999",
												borderColour: "dark",
												borderStyle: "solid",
												borderWidth: "2",
												width: "50",
												padding: "5",
												align: "center",
												children: [
													{
														widget: "value",
														textSize: "15",
														path: ["attribute", "modifier"]
													}
												]
											}
										]
									}
								] // End of Outer Box
							}
						] // End of Attributes
					}
				]
			}
		]
	}
];
