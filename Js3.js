// JavaScript Document
alert ("Bienvenidos a mi página");

function ConfirmarMensaje()
{
	return confirm ("¿Estás seguro de abrir esta página?");
}

function ver_imagen()
	{
		if (!document.images)
			return
		document.images.img.src=
			document.imagenes.imagen.options[document.imagenes.imagen.selectedIndex].value;
	
	}