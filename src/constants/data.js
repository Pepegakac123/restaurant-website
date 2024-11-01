import images from "./images";

const wines = [
	{
		title: "Chapel Hill Shiraz",
		price: "56 zł",
		tags: "AU | Butelka",
	},
	{
		title: "Catena Malbee",
		price: "59 zł",
		tags: "AU | Butelka",
	},
	{
		title: "La Vieillw Rose",
		price: "44 zł",
		tags: "FR | 750 ml",
	},
	{
		title: "Rhino Pale Ale",
		price: "31 zł",
		tags: "CA | 750 ml",
	},
	{
		title: "Irish Guinness",
		price: "26 zł",
		tags: "IE | 750 ml",
	},
];

const cocktails = [
	{
		title: "Aperol Spritz",
		price: "20 zł",
		tags: "Aperol | Villa Marchesi prosecco | soda | 30 ml",
	},
	{
		title: "Dark 'N' Stormy",
		price: "16 zł",
		tags: "Ciemny rum | Piwo imbirowe | Plaster limonki",
	},
	{
		title: "Daiquiri",
		price: "10 zł",
		tags: "Rum | Sok cytrusowy | Cukier",
	},
	{
		title: "Old Fashioned",
		price: "31 zł",
		tags: "Bourbon | Brązowy cukier | Angostura Bitters",
	},
	{
		title: "Negroni",
		price: "26 zł",
		tags: "Gin | Słodki wermut | Campari | Skórka pomarańczy",
	},
];

const awards = [
	{
		imgUrl: images.award02,
		title: "Znakomity Smak",
		subtitle: "Uznanie za wyjątkowe doznania smakowe i doskonałą jakość dań.",
	},
	{
		imgUrl: images.award01,
		title: "Wschodząca Gwiazda",
		subtitle:
			"Nagroda dla nowego talentu, który wnosi świeżość i pasję do kuchni.",
	},
	{
		imgUrl: images.award05,
		title: "Gościnność na Najwyższym Poziomie",
		subtitle: "Docenienie za wyjątkową obsługę i dbałość o komfort gości.",
	},
	{
		imgUrl: images.award03,
		title: "Wybitny Szef Kuchni",
		subtitle:
			"Nagroda dla szefa kuchni, który inspiruje i tworzy kulinarne dzieła.",
	},
];

const reviews = [
	{
		id: 1,
		image:
			"https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		name: "Jan Kowalski",
		text: "Jedzenie było przepyszne, a obsługa przemiła! Polecam to miejsce każdemu, kto szuka wyjątkowego doświadczenia kulinarnego.",
	},
	{
		id: 2,
		image:
			"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		name: "Anna Nowak",
		text: "Atmosfera była niesamowita, a potrawy idealnie dopracowane. Czułam się jak w najlepszej restauracji we Francji!",
	},
	{
		id: 3,
		image:
			"https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fA%3D%3D",
		name: "Aleksander Wiśniewski",
		text: "Każdy detal w przygotowaniu dań był perfekcyjny. Czuć pasję i zaangażowanie zespołu kucharzy. Na pewno wrócę!",
	},
	{
		id: 4,
		image:
			"https://plus.unsplash.com/premium_photo-1671823917954-dc943c1bd9df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx8fGVufDB8fHx8fA%3D%3D",
		name: "Emilia Dąbrowska",
		text: "Kuchnia w tym miejscu przeniosła mnie do innego świata smaków. To było coś więcej niż tylko posiłek – prawdziwa podróż kulinarna!",
	},
	{
		id: 5,
		image:
			"https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx8fGVufDB8fHx8fA%3D%3D",
		name: "Dawid Zieliński",
		text: "Jedno z najlepszych miejsc, w jakich jadłem! Widać, że tu gotuje się z sercem. Polecam każdemu smakoszowi.",
	},
];

export default { wines, cocktails, awards, reviews };
