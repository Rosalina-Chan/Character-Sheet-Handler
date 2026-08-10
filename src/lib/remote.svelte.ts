export interface RemoteData {
	user: number;
	items: Record<number, {}>;
	characters: Record<number, CharacterData>;
}
export interface CharacterData {
	id: number;
	// Unique character identifier (Read only)
	campaignId: number;
	// Unique campaign identifier (Updated via serverside functions)
	owner: number;
	// Unique owner identifier (Read only)
	lastAccessed: number;
	// Last time in Unix Epoch (Likely) (Updated via serverside functions)
	favourited: boolean;
	// Tracks if a character is favourited, appears at the top of the character list (Only the character list should set this)
	style: string;
	// Determines how the character looks on the character list
	displayKeys: { data: string; icon: string }[];
	// Defines what information is displayed on the character list ("data" being the key and "icon" being a preset icon name)
	source: string;
	// Used to tell players if characters in the same campaign are compatible, soft warning as naming conventions on the "source" may change, e.g "D&D", "DND", "D&D 5e", "D&D-5e", etc
	avatarImg: string;
	// A url to the character's image on the server (Updated via serverside functions)
	items: number[];
	// Can be empty, used to access data from an external "items" database. This is a list of unique ids corresponding to specific items, cross-source items are allowed (UI defaults to own source, but can be modified by end user to view any source)

	[key: string]: any;
}
let data = $state<RemoteData>({
	user: 0,
	items: { 0: { name: "Shortsword", dmg: 4 }, 1: { name: "Spear", dmg: 6 } },
	characters: {
		0: {
			// Required Parameters
			id: 0,
			campaignId: -1,
			owner: 0,
			lastAccessed: 0,
			favourited: false,
			style: "normal",
			displayKeys: [
				{ data: "name", icon: "nameTag" },
				{ data: "class", icon: "shield" },
				{ data: "race", icon: "person" },
				{ data: "level", icon: "stats" }
			],
			source: "D&D 5e",
			avatarImg: "/images/user-images/Cute Face.png",

			// Source Specific Parameters
			name: "A",
			class: "Fighter",
			race: "Half-Elf",
			level: "Level 3",
			attributes: [
				{ name: "Strength", base: 8, modifier: "-1" },
				{ name: "Dexterity", base: 14, modifier: "+2" },
				{ name: "Constitution", base: 7, modifier: "-2" },
				{ name: "Intelligence", base: 12, modifier: "+1" },
				{ name: "Wisdom", base: 13, modifier: "+1" },
				{ name: "Charisma", base: 18, modifier: "+4" }
			],
			items: [0]
		},
		1: {
			// Required Parameters
			id: 1,
			campaignId: -1,
			owner: 0,
			lastAccessed: 0,
			favourited: true,
			style: "parchment",
			displayKeys: [
				{ data: "name", icon: "nameTag" },
				{ data: "class", icon: "shield" },
				{ data: "ancestry", icon: "person" },
				{ data: "level", icon: "stats" }
			],
			source: "Pathfinder 2E",
			avatarImg: "/images/user-images/Cute Face 2.png",

			// Source Specific Parameters
			name: "Alice",
			class: "Alchemist",
			ancestry: "Changeling",
			level: "Level 3",
			attributes: [
				{ name: "Strength", modifier: "-1", boost: false },
				{ name: "Dexterity", modifier: "+3", boost: false },
				{ name: "Constitution", modifier: "-2", boost: false },
				{ name: "Intelligence", modifier: "+1", boost: false },
				{ name: "Wisdom", modifier: "-2", boost: false },
				{ name: "Charisma", modifier: "+2", boost: false }
			],
			items: [0]
		},
		2: {
			// Required Parameters
			id: 2,
			campaignId: -1,
			owner: 0,
			lastAccessed: 0,
			favourited: true,
			style: "dark",
			displayKeys: [
				{ data: "name", icon: "nameTag" },
				{ data: "charStyle", icon: "shield" },
				{ data: "cozyActivity", icon: "person" },
				{ data: "cozyActivity", icon: "person" },
				{ data: "cozyActivity", icon: "person" },
				{ data: "cozyActivity", icon: "person" },
				{ data: "cozyActivity", icon: "person" },
				{ data: "xpTrack", icon: "stats" }
			],
			source: "Brindlewood Bay",
			avatarImg: "/images/user-images/Cute Face 2.png",

			// Source Specific Parameters
			name: "Daisy",
			charStyle: "Jackie O",
			cozyActivity: "Knitting",
			xpTrack: "XP Track ☑☐☐☐☐",
			abilities: [
				{ name: "Vitality", score: 0 },
				{ name: "Composure", score: 1 },
				{ name: "Reason", score: 1 },
				{ name: "Presence", score: 0 },
				{ name: "Sensitivity", score: -1 }
			],
			items: []
		},
		3: {
			style: "parchment",
			displayKeys: [
				{ data: "name", icon: "nameTag" },
				{ data: "class", icon: "shield" },
				{ data: "race", icon: "person" },
				{ data: "level", icon: "stats" }
			],
			source: "D&D 5e",
			name: "D",
			id: 3,
			campaignId: -1,
			owner: 1,
			favourited: false,
			class: "Barbarian",
			race: "Dwarf",
			level: "Level 12",
			attributes: [
				{ name: "Strength", base: 8, modifier: "-1" },
				{ name: "Dexterity", base: 14, modifier: "+2" },
				{ name: "Constitution", base: 7, modifier: "-2" },
				{ name: "Intelligence", base: 12, modifier: "+1" },
				{ name: "Wisdom", base: 13, modifier: "+1" },
				{ name: "Charisma", base: 18, modifier: "+4" }
			],
			lastAccessed: 5,
			items: [0],
			avatarImg: "/images/user-images/Cute Face 2.png"
		},
		4: {
			style: "normal",
			displayKeys: [
				{ data: "name", icon: "nameTag" },
				{ data: "class", icon: "shield" },
				{ data: "race", icon: "person" },
				{ data: "level", icon: "stats" }
			],
			source: "D&D 5e",
			name: "Eladriel The Second Coming of VERYVERYVERYVERYLONGNAME :3",
			id: 4,
			campaignId: -1,
			owner: 0,
			favourited: true,
			class: "Warlock",
			race: "Tiefling",
			level: "Level 17",
			attributes: [
				{ name: "Strength", base: 8, modifier: "-1" },
				{ name: "Dexterity", base: 14, modifier: "+2" },
				{ name: "Constitution", base: 7, modifier: "-2" },
				{ name: "Intelligence", base: 12, modifier: "+1" },
				{ name: "Wisdom", base: 13, modifier: "+1" },
				{ name: "Charisma", base: 18, modifier: "+4" }
			],
			lastAccessed: 1,
			items: [0],
			avatarImg: "/images/user-images/Cute Face.png"
		},
		5: {
			style: "dark",
			displayKeys: [
				{ data: "name", icon: "nameTag" },
				{ data: "class", icon: "shield" },
				{ data: "race", icon: "person" },
				{ data: "level", icon: "stats" }
			],
			source: "D&D 5e",
			name: "F",
			id: 5,
			campaignId: -1,
			owner: 0,
			favourited: false,
			class: "Druid",
			race: "Dark Elf",
			level: "Level 5",
			attributes: [
				{ name: "Strength", base: 8, modifier: "-1" },
				{ name: "Dexterity", base: 14, modifier: "+2" },
				{ name: "Constitution", base: 7, modifier: "-2" },
				{ name: "Intelligence", base: 12, modifier: "+1" },
				{ name: "Wisdom", base: 13, modifier: "+1" },
				{ name: "Charisma", base: 18, modifier: "+4" }
			],
			lastAccessed: 4,
			items: [0],
			avatarImg: "/images/user-images/Cute Face 2.png"
		},
		6: {
			style: "normal",
			displayKeys: [
				{ data: "name", icon: "nameTag" },
				{ data: "class", icon: "shield" },
				{ data: "race", icon: "person" },
				{ data: "level", icon: "stats" }
			],
			source: "D&D 5e",
			name: "G",
			id: 6,
			campaignId: -1,
			owner: 0,
			favourited: false,
			class: "Warrior",
			race: "Human",
			level: "Level 8",
			attributes: [
				{ name: "Strength", base: 8, modifier: "-1" },
				{ name: "Dexterity", base: 14, modifier: "+2" },
				{ name: "Constitution", base: 7, modifier: "-2" },
				{ name: "Intelligence", base: 12, modifier: "+1" },
				{ name: "Wisdom", base: 13, modifier: "+1" },
				{ name: "Charisma", base: 18, modifier: "+4" }
			],
			lastAccessed: 6,
			items: [0],
			avatarImg: "/images/user-images/Cute Face.png"
		},
		7: {
			style: "normal",
			displayKeys: [
				{ data: "name", icon: "nameTag" },
				{ data: "class", icon: "shield" },
				{ data: "race", icon: "person" },
				{ data: "level", icon: "stats" }
			],
			source: "D&D 5e",
			name: "H",
			id: 7,
			campaignId: -1,
			owner: 0,
			favourited: false,
			class: "Barbarian",
			race: "Dwarf",
			level: "Level 12",
			attributes: [
				{ name: "Strength", base: 8, modifier: "-1" },
				{ name: "Dexterity", base: 14, modifier: "+2" },
				{ name: "Constitution", base: 7, modifier: "-2" },
				{ name: "Intelligence", base: 12, modifier: "+1" },
				{ name: "Wisdom", base: 13, modifier: "+1" },
				{ name: "Charisma", base: 18, modifier: "+4" }
			],
			lastAccessed: 1,
			items: [0],
			avatarImg: "/images/user-images/Cute Face 2.png"
		},
		8: {
			style: "normal",
			displayKeys: [
				{ data: "name", icon: "nameTag" },
				{ data: "class", icon: "shield" },
				{ data: "race", icon: "person" },
				{ data: "level", icon: "stats" }
			],
			source: "D&D 5e",
			name: "I",
			id: 8,
			campaignId: -1,
			owner: 1,
			favourited: false,
			class: "Warlock",
			race: "Tiefling",
			level: "Level 17",
			attributes: [
				{ name: "Strength", base: 8, modifier: "-1" },
				{ name: "Dexterity", base: 14, modifier: "+2" },
				{ name: "Constitution", base: 7, modifier: "-2" },
				{ name: "Intelligence", base: 12, modifier: "+1" },
				{ name: "Wisdom", base: 13, modifier: "+1" },
				{ name: "Charisma", base: 18, modifier: "+4" }
			],
			lastAccessed: 2,
			items: [0],
			avatarImg: "/images/user-images/Cute Face.png"
		}
	}
});

export function getdata() {
	return data;
}
