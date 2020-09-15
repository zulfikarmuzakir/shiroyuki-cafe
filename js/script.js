var menuCafe = [
{
	img: "img/yakiniku.jpg",
	namaMenu: "Yakiniku",
	harga: "Rp 40.000"
},
{	
	img: "img/sushi.jpg",
	namaMenu: "Sushi",
	harga: "Rp 28.000"
},
{
	img: "img/onigiri.jpg",
	namaMenu: "Onigiri",
	harga: "Rp 10.000"
},
{
	img: "img/greentea.jpg",
	namaMenu: "Green Tea",
	harga: "Rp 12.000"
},
{
	img: "img/ramen.jpg",
	namaMenu: "Ramen Noodles",
	harga: "Rp 25.000"
},
{
	img: "img/takoyaki.jpg",
	namaMenu: "Takoyaki",
	harga: "Rp 20.000"
},
{
	img: "img/coffee.jpg",
	namaMenu: "Coffee",
	harga: "Rp 15.000"
},
{
	img: "img/chicken-katsu.jpg",
	namaMenu: "Chicken Katsu",
	harga: "Rp 38.000"
},
{
	img: "img/mochi.jpg",
	namaMenu: "Mochi",
	harga: "Rp 15.000"
},
{
	img: "img/karaage.jpg",
	namaMenu: "Karaage",
	harga: "Rp 15.000"
},
{
	img: "img/curry-rice.jpg",
	namaMenu: "Curry Rice",
	harga: "Rp 20.000",
},
{
	img: "img/milktea.jpg",
	namaMenu: "Milk Tea",
	harga: "Rp 10.000"
}
];

menuCafe.map((menu, index)=> {
	const daftarMenu = document.querySelector(".menunya");

	daftarMenu.innerHTML += `<div class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
								<a href="#">
									<img class="hover:grow hover:shadow-lg" src="${menu.img}">
									<div class="pt-3 flex items-center justify-between">
										<p class="">${menu.namaMenu}</p>
									</div>
									<p class="pt-1 text-gray-900">${menu.harga}</p>
								</a>
							</div>`;
});
