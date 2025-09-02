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
const Productos =[
	{	titulo: 'Camisetas',
		link: 'camisetas.html',
		linkText: 'Ver más',
        img: {id:"img4", src:"../imgs/camisetas.jpg", alt:"Ropa de Hombre", width:"340"}
	},
	{
		titulo: 'Leggings de yoga',
		link: '<leggins.html',
		linkText: 'Ver más',
        img:{id:"img5", src:"../imgs/leggins.jpg", alt:"Ropa de mujer", width:"360"}
	},
	{
		titulo: 'Zapatillas de running',
		link: 'Zapatillas.html',
		linkText: 'Ver más',
        img:{id:"img6", src:"../imgs/zapatillas.jpg", alt:"accesorios", width:"340", width:"270"}

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
function crearArticulo2(Productos) {
	return `
		<article class="productos destacado">
			<h3>${Productos.titulo}</h3>
			<div class="img-productodestacado">
				<img src="${Productos.img.src}"alt="${Productos.img.alt}"width="${Productos.img.width}">
			</div>
			<a href="${Productos.link}">${Productos.linkText}</a>
		</article>
	`;	
}

