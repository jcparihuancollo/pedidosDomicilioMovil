const Usuario = {
	view : "select u.* from usuario u where u.idRol in (select r.idRol from rol r where r.nombre = 'Repartidor') and nombreUsuario=? and contrasena=?;" ,
	add : 'insert into persona(nombre,ci) values ($1,$2)' ,
	edit : 'update persona set nombre=$1 , ci=$2 where id=$3',
	list : 'select * from persona',
	del : 'delete from persona where id=$1'
}


module.exports = Usuario