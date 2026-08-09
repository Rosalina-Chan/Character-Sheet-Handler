export interface RemoteData {
	user: number;
	items: Record<number, {}>;
	characters: Record<number, CharacterData>;
}
export interface CharacterData {
	style: string;
	displayKeys: { data: string; icon: string }[];
	id: number;
	owner: number;
	favourited: boolean;
	source: string;
	lastAccessed: number;
	avatarImg: string;

	[key: string]: any;
}
let data = $state<RemoteData>({
	user: 0,
	items: { 0: { name: "Shortsword", dmg: 4 }, 1: { name: "Spear", dmg: 6 } },
	characters: {
		0: {
			style: "normal",
			displayKeys: [
				{ data: "name", icon: "nameTag" },
				{ data: "class", icon: "shield" },
				{ data: "race", icon: "person" },
				{ data: "level", icon: "stats" }
			],
			source: "D&D 5e",
			name: "A",
			id: 0,
			owner: 0,
			favourited: false,
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

			lastAccessed: 0,
			items: [0],
			avatarImg: "/images/user-images/Cute Face.png"
		},
		1: {
			style: "normal",
			displayKeys: [
				{ data: "name", icon: "nameTag" },
				{ data: "class", icon: "shield" },
				{ data: "race", icon: "person" },
				{ data: "level", icon: "stats" }
			],
			source: "D&D 5e",
			name: "B",
			id: 1,
			owner: 1,
			favourited: true,
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
			lastAccessed: 1,
			items: [0],
			avatarImg: "/images/user-images/Cute Face 2.png"
		},
		2: {
			style: "normal",
			displayKeys: [
				{ data: "name", icon: "nameTag" },
				{ data: "class", icon: "shield" },
				{ data: "race", icon: "person" },
				{ data: "level", icon: "stats" }
			],
			source: "D&D 5e",
			name: "C",
			id: 2,
			owner: 1,
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
			lastAccessed: 3,
			items: [0],
			avatarImg: "/images/user-images/Cute Face.png"
		},
		3: {
			style: "normal",
			displayKeys: [
				{ data: "name", icon: "nameTag" },
				{ data: "class", icon: "shield" },
				{ data: "race", icon: "person" },
				{ data: "level", icon: "stats" }
			],
			source: "D&D 5e",
			name: "D",
			id: 3,
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
			style: "normal",
			displayKeys: [
				{ data: "name", icon: "nameTag" },
				{ data: "class", icon: "shield" },
				{ data: "race", icon: "person" },
				{ data: "level", icon: "stats" }
			],
			source: "D&D 5e",
			name: "F",
			id: 5,
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
