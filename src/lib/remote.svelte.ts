export interface RemoteData {
	user: number;
	items: Record<number, {}>;
	characters: Record<number, CharacterData>;
}
export interface CharacterData {
	name: string;
	id: number;
	owner: number;
	favourited: boolean;
	class: string;
	race: string;
	level: number;

	attributes: Record<string, number>;
	modifiers: Record<string, string>;

	lastAccessed: number;
	items: number[];
	avatarImg: string;
}
let data = $state<RemoteData>({
	user: 0,
	items: { 0: { name: "Shortsword", dmg: 4 }, 1: { name: "Spear", dmg: 6 } },
	characters: {
		0: {
			name: "A",
			id: 0,
			owner: 0,
			favourited: false,
			class: "Fighter",
			race: "Half-Elf",
			level: 3,

			attributes: { dex: 14, wis: 12, str: 8, con: 7, int: 13, cha: 18 },
			modifiers: { dex: "+2", wis: "+1", str: "-1", con: "-2", int: "+1", cha: "+4" },

			lastAccessed: 0,
			items: [0],
			avatarImg: "/images/user-images/Cute Face.png"
		},
		1: {
			name: "B",
			id: 1,
			owner: 1,
			favourited: true,
			class: "Druid",
			race: "Dark Elf",
			level: 5,
			attributes: { dex: 14, wis: 12, str: 8, con: 7, int: 13, cha: 18 },
			modifiers: { dex: "+2", wis: "+1", str: "-1", con: "-2", int: "+1", cha: "+4" },
			lastAccessed: 1,
			items: [0],
			avatarImg: "/images/user-images/Cute Face 2.png"
		},
		2: {
			name: "C",
			id: 2,
			owner: 1,
			favourited: false,
			class: "Warrior",
			race: "Human",
			level: 8,
			attributes: { dex: 14, wis: 12, str: 8, con: 7, int: 13, cha: 18 },
			modifiers: { dex: "+2", wis: "+1", str: "-1", con: "-2", int: "+1", cha: "+4" },
			lastAccessed: 3,
			items: [0],
			avatarImg: "/images/user-images/Cute Face.png"
		},
		3: {
			name: "D",
			id: 3,
			owner: 0,
			favourited: false,
			class: "Barbarian",
			race: "Dwarf",
			level: 12,
			attributes: { dex: 14, wis: 12, str: 8, con: 7, int: 13, cha: 18 },
			modifiers: { dex: "+2", wis: "+1", str: "-1", con: "-2", int: "+1", cha: "+4" },
			lastAccessed: 5,
			items: [0],
			avatarImg: "/images/user-images/Cute Face 2.png"
		},
		4: {
			name: "Eladriel The Second Coming of VERYVERYVERYVERYLONGNAME :3",
			id: 4,
			owner: 0,
			favourited: true,
			class: "Warlock",
			race: "Tiefling",
			level: 17,
			attributes: { dex: 14, wis: 12, str: 8, con: 7, int: 13, cha: 18 },
			modifiers: { dex: "+2", wis: "+1", str: "-1", con: "-2", int: "+1", cha: "+4" },
			lastAccessed: 1,
			items: [0],
			avatarImg: "/images/user-images/Cute Face.png"
		},
		5: {
			name: "F",
			id: 5,
			owner: 0,
			favourited: false,
			class: "Druid",
			race: "Dark Elf",
			level: 5,
			attributes: { dex: 14, wis: 12, str: 8, con: 7, int: 13, cha: 18 },
			modifiers: { dex: "+2", wis: "+1", str: "-1", con: "-2", int: "+1", cha: "+4" },
			lastAccessed: 4,
			items: [0],
			avatarImg: "/images/user-images/Cute Face 2.png"
		},
		6: {
			name: "G",
			id: 6,
			owner: 0,
			favourited: false,
			class: "Warrior",
			race: "Human",
			level: 8,
			attributes: { dex: 14, wis: 12, str: 8, con: 7, int: 13, cha: 18 },
			modifiers: { dex: "+2", wis: "+1", str: "-1", con: "-2", int: "+1", cha: "+4" },
			lastAccessed: 6,
			items: [0],
			avatarImg: "/images/user-images/Cute Face.png"
		},
		7: {
			name: "H",
			id: 7,
			owner: 0,
			favourited: false,
			class: "Barbarian",
			race: "Dwarf",
			level: 12,
			attributes: { dex: 14, wis: 12, str: 8, con: 7, int: 13, cha: 18 },
			modifiers: { dex: "+2", wis: "+1", str: "-1", con: "-2", int: "+1", cha: "+4" },
			lastAccessed: 1,
			items: [0],
			avatarImg: "/images/user-images/Cute Face 2.png"
		},
		8: {
			name: "I",
			id: 8,
			owner: 1,
			favourited: false,
			class: "Warlock",
			race: "Tiefling",
			level: 17,
			attributes: { dex: 14, wis: 12, str: 8, con: 7, int: 13, cha: 18 },
			modifiers: { dex: "+2", wis: "+1", str: "-1", con: "-2", int: "+1", cha: "+4" },
			lastAccessed: 2,
			items: [0],
			avatarImg: "/images/user-images/Cute Face.png"
		}
	}
});

export function getdata() {
	return data;
}
