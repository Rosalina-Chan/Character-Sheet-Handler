let data = $state({
	items: { 0: { name: "Shortsword", dmg: 4 }, 1: { name: "Spear", dmg: 6 } },
	characters: {
		0: {
			name: "A",
			class: "Fighter",
			level: 3,
			lastAccessed: 0,
			items: [0],
			avatarImg: "/images/user-images/Cute Face.png"
		},
		1: {
			name: "B",
			class: "Druid",
			level: 5,
			lastAccessed: 1,
			avatarImg: "/images/user-images/Cute Face 2.png"
		},
		2: {
			name: "C",
			class: "Warrior",
			level: 8,
			lastAccessed: 2,
			avatarImg: "/images/user-images/Cute Face.png"
		},
		3: {
			name: "D",
			class: "Barbarian",
			level: 12,
			lastAccessed: 3,
			avatarImg: "/images/user-images/Cute Face 2.png"
		},
		4: {
			name: "E",
			class: "Warlock",
			level: 17,
			lastAccessed: 4,
			avatarImg: "/images/user-images/Cute Face.png"
		}
	}
});

export function getdata() {
	return data;
}
