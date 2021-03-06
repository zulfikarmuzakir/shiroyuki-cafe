var menuCafe = [{
		img: "img/yakiniku.jpg",
		namaMenu: "Yakiniku",
		harga: "Rp 40.000",
		typeMenu: "Food"
	},
	{
		img: "img/greentea.jpg",
		namaMenu: "Green Tea",
		harga: "Rp 12.000",
		typeMenu: "Drink"
	},
	{
		img: "img/sushi.jpg",
		namaMenu: "Sushi",
		harga: "Rp 28.000",
		typeMenu: "Food"
	},
	{
		img: "img/onigiri.jpg",
		namaMenu: "Onigiri",
		harga: "Rp 10.000",
		typeMenu: "Food"
	},
	{
		img: "img/ramen.jpg",
		namaMenu: "Ramen Noodles",
		harga: "Rp 25.000",
		typeMenu: "Food"
	},
	{
		img: "img/takoyaki.jpg",
		namaMenu: "Takoyaki",
		harga: "Rp 20.000",
		typeMenu: "Food"
	},
	{
		img: "img/coffee.jpg",
		namaMenu: "Coffee",
		harga: "Rp 15.000",
		typeMenu: "Drink"
	},
	{
		img: "img/chicken-katsu.jpg",
		namaMenu: "Chicken Katsu",
		harga: "Rp 38.000",
		typeMenu: "Food"
	},
	{
		img: "img/mochi.jpg",
		namaMenu: "Mochi",
		harga: "Rp 15.000",
		typeMenu: "Food"
	},
	{
		img: "img/karaage.jpg",
		namaMenu: "Karaage",
		harga: "Rp 15.000",
		typeMenu: "Food"
	},
	{
		img: "img/curry-rice.jpg",
		namaMenu: "Curry Rice",
		harga: "Rp 20.000",
		typeMenu: "Food"
	},
	{
		img: "img/milktea.jpg",
		namaMenu: "Milk Tea",
		harga: "Rp 10.000",
		typeMenu: "Drink"
	}
];


//Data
var daftarMenu = (menu) => {
	const daftarMenu = document.querySelector(".menunya");

	daftarMenu.innerHTML += `<div class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
								<a href="#">
									<img class="hover:grow hover:shadow-lg" src="${menu.img}">
									<div class="pt-3 flex items-center justify-between">
										<p class="">${menu.namaMenu}</p>
										<p class="type-menu">${menu.typeMenu}</p>
									</div>
									<p class="pt-1 text-gray-900">${menu.harga}</p>
								</a>
								<button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mt-2 rounded beli-makanan">
  								Add to Cart
								</button>
							</div>`;
}
menuCafe.map(daftarMenu);

//search data use filter
var searchData = document.querySelector(".search");
searchData.addEventListener('keyup', () => {
	const search = menuCafe.filter((menu) => {
		const input = document.querySelector(".search");
		const namaMenu = menu.namaMenu.toLowerCase();
		const typeInput = input.value.toLowerCase();

		return namaMenu.includes(typeInput);
	})

	document.querySelector(".menunya").innerHTML = ``;
	search.map(daftarMenu);
});


//all menu
const allMenu = document.querySelector(".all-menu");
allMenu.addEventListener('click', () => {
	document.querySelector(".menunya").innerHTML = ``;
	menuCafe.map(daftarMenu);
});


// filter for food
const tipeMakanan = document.querySelector(".food-menu");
tipeMakanan.addEventListener('click', () => {
	const food = menuCafe.filter((menu) => {
		const tipeMenu = menu.typeMenu;
		const typeFood = "Food";

		return tipeMenu.includes(typeFood);
	})

	document.querySelector(".menunya").innerHTML = '';
	food.map(daftarMenu);
});

//filter for drink
const tipeMinuman = document.querySelector(".drink-menu");
tipeMinuman.addEventListener('click', () => {
	const drink = menuCafe.filter((menu) => {
		const tipeMenu = menu.typeMenu;
		const typeDrink = "Drink";

		return tipeMenu.includes(typeDrink);
	})

	document.querySelector(".menunya").innerHTML = '';
	drink.map(daftarMenu);
});