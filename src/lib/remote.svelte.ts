export interface RemoteData {
	user: number;
	items: Record<number, {}>;
	characters: Record<number, CharacterData>;
}
export interface CharacterData {
	style: string;
	name: string;
	id: number;
	owner: number;
	favourited: boolean;
	class: string;
	race: string;
	level: number;

	attributes: { name: string; base: number; modifier: string }[];

	lastAccessed: number;
	items: number[];
	avatarImg: string;
}
let data = $state<RemoteData>({
	user: 0,
	items: { 0: { name: "Shortsword", dmg: 4 }, 1: { name: "Spear", dmg: 6 } },
	characters: {
		0: {
			style: "normal",
			name: "A",
			id: 0,
			owner: 0,
			favourited: false,
			class: "Fighter",
			race: "Half-Elf",
			level: 3,

			attributes: [
				{ name: "Dexterity", base: 14, modifier: "+2" },
				{ name: "Intelligence", base: 12, modifier: "+1" },
				{ name: "Strength", base: 8, modifier: "-1" },
				{ name: "Constitution", base: 7, modifier: "-2" },
				{ name: "Wisdom", base: 13, modifier: "+1" },
				{ name: "Charisma", base: 18, modifier: "+4" }
			],

			lastAccessed: 0,
			items: [0],
			avatarImg: "/images/user-images/Cute Face.png"
		},
		1: {
			style: "normal",
			name: "B",
			id: 1,
			owner: 1,
			favourited: true,
			class: "Druid",
			race: "Dark Elf",
			level: 5,
			attributes: [
				{ name: "Dexterity", base: 14, modifier: "+2" },
				{ name: "Intelligence", base: 12, modifier: "+1" },
				{ name: "Strength", base: 8, modifier: "-1" },
				{ name: "Constitution", base: 7, modifier: "-2" },
				{ name: "Wisdom", base: 13, modifier: "+1" },
				{ name: "Charisma", base: 18, modifier: "+4" }
			],
			lastAccessed: 1,
			items: [0],
			avatarImg: "/images/user-images/Cute Face 2.png"
		},
		2: {
			style: "normal",
			name: "C",
			id: 2,
			owner: 1,
			favourited: false,
			class: "Warrior",
			race: "Human",
			level: 8,
			attributes: [
				{ name: "Dexterity", base: 14, modifier: "+2" },
				{ name: "Intelligence", base: 12, modifier: "+1" },
				{ name: "Strength", base: 8, modifier: "-1" },
				{ name: "Constitution", base: 7, modifier: "-2" },
				{ name: "Wisdom", base: 13, modifier: "+1" },
				{ name: "Charisma", base: 18, modifier: "+4" }
			],
			lastAccessed: 3,
			items: [0],
			avatarImg: "/images/user-images/Cute Face.png"
		},
		3: {
			style: "normal",
			name: "D",
			id: 3,
			owner: 0,
			favourited: false,
			class: "Barbarian",
			race: "Dwarf",
			level: 12,
			attributes: [
				{ name: "Dexterity", base: 14, modifier: "+2" },
				{ name: "Intelligence", base: 12, modifier: "+1" },
				{ name: "Strength", base: 8, modifier: "-1" },
				{ name: "Constitution", base: 7, modifier: "-2" },
				{ name: "Wisdom", base: 13, modifier: "+1" },
				{ name: "Charisma", base: 18, modifier: "+4" }
			],
			lastAccessed: 5,
			items: [0],
			avatarImg: "/images/user-images/Cute Face 2.png"
		},
		4: {
			style: "normal",
			name: "Eladriel The Second Coming of VERYVERYVERYVERYLONGNAME :3",
			id: 4,
			owner: 0,
			favourited: true,
			class: "Warlock",
			race: "Tiefling",
			level: 17,
			attributes: [
				{ name: "Dexterity", base: 14, modifier: "+2" },
				{ name: "Intelligence", base: 12, modifier: "+1" },
				{ name: "Strength", base: 8, modifier: "-1" },
				{ name: "Constitution", base: 7, modifier: "-2" },
				{ name: "Wisdom", base: 13, modifier: "+1" },
				{ name: "Charisma", base: 18, modifier: "+4" }
			],
			lastAccessed: 1,
			items: [0],
			avatarImg: "/images/user-images/Cute Face.png"
		},
		5: {
			style: "normal",
			name: "F",
			id: 5,
			owner: 0,
			favourited: false,
			class: "Druid",
			race: "Dark Elf",
			level: 5,
			attributes: [
				{ name: "Dexterity", base: 14, modifier: "+2" },
				{ name: "Intelligence", base: 12, modifier: "+1" },
				{ name: "Strength", base: 8, modifier: "-1" },
				{ name: "Constitution", base: 7, modifier: "-2" },
				{ name: "Wisdom", base: 13, modifier: "+1" },
				{ name: "Charisma", base: 18, modifier: "+4" }
			],
			lastAccessed: 4,
			items: [0],
			avatarImg: "/images/user-images/Cute Face 2.png"
		},
		6: {
			style: "normal",
			name: "G",
			id: 6,
			owner: 0,
			favourited: false,
			class: "Warrior",
			race: "Human",
			level: 8,
			attributes: [
				{ name: "Dexterity", base: 14, modifier: "+2" },
				{ name: "Intelligence", base: 12, modifier: "+1" },
				{ name: "Strength", base: 8, modifier: "-1" },
				{ name: "Constitution", base: 7, modifier: "-2" },
				{ name: "Wisdom", base: 13, modifier: "+1" },
				{ name: "Charisma", base: 18, modifier: "+4" }
			],
			lastAccessed: 6,
			items: [0],
			avatarImg: "/images/user-images/Cute Face.png"
		},
		7: {
			style: "normal",
			name: "H",
			id: 7,
			owner: 0,
			favourited: false,
			class: "Barbarian",
			race: "Dwarf",
			level: 12,
			attributes: [
				{ name: "Dexterity", base: 14, modifier: "+2" },
				{ name: "Intelligence", base: 12, modifier: "+1" },
				{ name: "Strength", base: 8, modifier: "-1" },
				{ name: "Constitution", base: 7, modifier: "-2" },
				{ name: "Wisdom", base: 13, modifier: "+1" },
				{ name: "Charisma", base: 18, modifier: "+4" }
			],
			lastAccessed: 1,
			items: [0],
			avatarImg: "/images/user-images/Cute Face 2.png"
		},
		8: {
			style: "normal",
			name: "I",
			id: 8,
			owner: 1,
			favourited: false,
			class: "Warlock",
			race: "Tiefling",
			level: 17,
			attributes: [
				{ name: "Dexterity", base: 14, modifier: "+2" },
				{ name: "Intelligence", base: 12, modifier: "+1" },
				{ name: "Strength", base: 8, modifier: "-1" },
				{ name: "Constitution", base: 7, modifier: "-2" },
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
