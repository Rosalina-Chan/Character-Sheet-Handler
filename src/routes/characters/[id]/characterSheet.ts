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
						height: "45px",
						width: "400px",
						padding: "10px",
						marginLeft: "50px",
						marginRight: "20px",
						marginTop: "100px",
						marginBottom: "50px",

						flexDirection: "column",
						align: "start",

						borderRadius: "8px",
						borderStyle: "solid",
						borderColour: "dark",
						borderWidth: "2px",
						gap: "8px",
						children: [
							{
								// Name
								widget: "value",
								textSize: "25px",
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
						gap: "20px",

						borderStyle: "solid",
						borderWidth: "2px",
						borderColour: "dark",
						borderRadius: "10px",
						marginTop: "60px",
						paddingBottom: "15px",
						paddingLeft: "15px",
						paddingRight: "15px",

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
												padding: "4px",
												marginBottom: "2px",
												marginTop: "8px",
												width: "200px",

												borderRadius: "4px",
												borderStyle: "solid",
												borderColour: "normal",
												borderWidth: "0px",
												borderBottomWidth: "3px",
												height: "34px",

												children: [
													{
														widget: "value",
														textSize: "20px",
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
												padding: "4px",
												marginBottom: "2px",
												marginTop: "8px",
												width: "200px",

												borderRadius: "4px",
												borderStyle: "solid",
												borderColour: "normal",
												borderWidth: "0px",
												borderBottomWidth: "3px",
												height: "34px",

												children: [
													{
														widget: "value",
														textSize: "20px",
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
												padding: "4px",
												marginBottom: "2px",
												marginTop: "8px",
												width: "200px",

												borderRadius: "4px",
												borderStyle: "solid",
												borderColour: "normal",
												borderWidth: "0px",
												borderBottomWidth: "3px",
												height: "34px",

												children: [
													{
														widget: "value",
														textSize: "20px",
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
												padding: "4px",
												marginBottom: "2px",
												marginTop: "8px",
												width: "200px",

												borderRadius: "4px",
												borderStyle: "solid",
												borderColour: "normal",
												borderWidth: "0px",
												borderBottomWidth: "3px",
												height: "34px",

												children: [
													{
														widget: "value",
														textSize: "20px",
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
												padding: "4px",
												marginBottom: "2px",
												marginTop: "8px",
												width: "200px",

												borderRadius: "4px",
												borderStyle: "solid",
												borderColour: "normal",
												borderWidth: "0px",
												borderBottomWidth: "3px",
												height: "34px",

												children: [
													{
														widget: "value",
														textSize: "20px",
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
												padding: "4px",
												marginBottom: "2px",
												marginTop: "8px",
												width: "200px",

												borderRadius: "4px",
												borderStyle: "solid",
												borderColour: "normal",
												borderWidth: "0px",
												borderBottomWidth: "3px",
												height: "34px",

												children: [
													{
														widget: "value",
														textSize: "20px",
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
				]
			}
		]
	}
];
