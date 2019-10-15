export function saludar(nombre) {
	return `Hola ${nombre}`;
}

export function despedir(nombre) {
	return `Hasta ${luego()} ${nombre}`;
}

function luego() {
	return 'luego';
}