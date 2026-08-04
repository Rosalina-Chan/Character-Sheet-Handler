let data = $state({
	user: 0,
	items: { 0: { name: "Shortsword", dmg: 4 }, 1: { name: "Spear", dmg: 6 } },
	characters: {
		0: {
			name: "A",
			owner: 0,
			class: "Fighter",
			race: "Half-Elf",
			level: 3,
			lastAccessed: 0,
			items: [0],
			avatarImg: "/images/user-images/Cute Face.png"
		},
		1: {
			name: "B",
			owner: 1,
			class: "Druid",
			race: "Dark Elf",
			level: 5,
			lastAccessed: 1,
			avatarImg: "/images/user-images/Cute Face 2.png"
		},
		2: {
			name: "C",
			owner: 1,
			class: "Warrior",
			race: "Human",
			level: 8,
			lastAccessed: 2,
			avatarImg: "/images/user-images/Cute Face.png"
		},
		3: {
			name: "D",
			owner: 0,
			class: "Barbarian",
			race: "Dwarf",
			level: 12,
			lastAccessed: 3,
			avatarImg: "/images/user-images/Cute Face 2.png"
		},
		4: {
			name: "Eladriel The Second Coming of JESUSCHRISTCOMPELSYOUYOUSINNER",
			owner: 1,
			class: "Warlock",
			race: "Tiefling",
			level: 17,
			lastAccessed: 4,
			avatarImg: "/images/user-images/Cute Face.png"
		},
		5: {
			name: "F",
			owner: 0,
			class: "Druid",
			race: "Dark Elf",
			level: 5,
			lastAccessed: 1,
			avatarImg: "/images/user-images/Cute Face 2.png"
		},
		6: {
			name: "G",
			owner: 0,
			class: "Warrior",
			race: "Human",
			level: 8,
			lastAccessed: 2,
			avatarImg: "/images/user-images/Cute Face.png"
		},
		7: {
			name: "H",
			owner: 0,
			class: "Barbarian",
			race: "Dwarf",
			level: 12,
			lastAccessed: 3,
			avatarImg: "/images/user-images/Cute Face 2.png"
		},
		8: {
			name: "I",
			owner: 1,
			class: "Warlock",
			race: "Tiefling",
			level: 17,
			lastAccessed: 4,
			avatarImg: "/images/user-images/Cute Face.png"
		}
	}
});

export function getdata() {
	return data;
}
