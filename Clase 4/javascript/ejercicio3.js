const datosImagen = [
    {id:"img1", src:"../imgs/Hombre.jpg", alt:"Ropa de Hombre", width:"340"},
    {id:"img2", src:"../imgs/mujer.jpg", alt:"Ropa de mujer", width:"360"},
    {id:"img3", src:"../imgs/accesorios.jpg", alt:"accesorios", width:"340", width:"270"},
    {id:"img4", src:"../imgs/camisetas.jpg", alt:"Camisetas", width:"250"},
    {id:"img5", src:"../imgs/leggins.jpg", alt:"leggings de yoga", width:"255"},
    {id:"img6", src:"../imgs/zapatillas.jpg", alt:"zapatillas de running", width:"150"},
    {id:"img7", src:"../imgs/short.jpg", alt:"shorts", width:"150"}
];

function crearImagen(src, alt,width) { 
    return `<img src="${src}" alt="${alt}" width="${width}">`;
}