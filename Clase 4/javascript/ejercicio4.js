const categorias = [
	{
		titulo: 'Ropa para Hombre',
		link: 'hombres.html',
		linkText: 'Ver más',
        img: {id:"img1", src:"../imgs/Hombre.jpg", alt:"Ropa de Hombre", width:"340"}
	},
	{
		titulo: 'Ropa para Mujeres',
		link: 'mujeres.html',
		linkText: 'Ver más',
        img:{id:"img2", src:"../imgs/mujer.jpg", alt:"Ropa de mujer", width:"360"}
	},
	{
		titulo: 'Accesorios',
		link: 'accesorios.html',	
		linkText: 'Ver más',
        img:{id:"img3", src:"../imgs/accesorios.jpg", alt:"accesorios", width:"340", width:"270"}
	}
];
const Producto =[
	{	titulo: 'Camisetas',
		link: 'camisetas.html',
		precio:'84.99',
		linkText: 'Ver más',
        img: {id:"img4", src:"../imgs/camisetas.jpg", alt:"Camisetas", width:"250"}
	},
	{
		titulo: 'Leggings de yoga',
		link: '<leggins.html',
		precio:'39.99',
		linkText: 'Ver más',
        img:{id:"img5", src:"../imgs/leggins.jpg", alt:"Leggins de yoga", width:"255"}
	},
	{
		titulo: 'Zapatillas de running',
		link: 'Zapatillas.html',
		precio:'149.99',
		linkText: 'Ver más',
        img:{id:"img6", src:"../imgs/zapatillas.jpg", alt:"Zapatillas de running", width:"150"}

	},
	{
		titulo: 'Shorts Deportivos',
		link: 'Shorts.html',
		precio:'149.99',
		linkText: 'Ver más',
        img:{id:"img7", src:"../imgs/short.jpg", alt:"Shorts deportivos",width:"150"}

	}
];

function crearArticulo(categoria) {
	return `
		<article class="categoria">
			<h3>${categoria.titulo}</h3>
			<div class="img-categoria">
				<img src="${categoria.img.src}"alt="${categoria.img.alt}"width="${categoria.img.width}">
			</div>
			<a href="${categoria.link}">${categoria.linkText}</a>
		</article>
	`;
}
function crearArticulo2(Producto) {
	return `
		<article class="productos destacado">
			<h3>${Producto.titulo}</h3>
			<div class="img-productodestacado">
				<img src="${Producto.img.src}"alt="${Producto.img.alt}"width="${Producto.img.width}">
			</div>
			<p class="precio">${Producto.precio}</p>
			<a href="${Producto.link}">${Producto.linkText}</a>
			<button>Añadir al carrito</button>
		</article>
	`;	
}

