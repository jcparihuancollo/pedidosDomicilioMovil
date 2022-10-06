const Cliente = {
	view : 'select * from cliente where usuario=? and contrasena=?' ,
	add : 'insert into cliente (nombre,usuario,email,contrasena,celular,direccion,estado,fechaRegistro,fechaActualizacion) values (?,?,?,?,?,?,1,current_timestamp,current_timestamp)' ,
	edit : 'update persona set nombre=$1 , ci=$2 where id=$3',
	list : 'select * from producto where idRestaurante=?',
	del : 'delete from persona where id=$1'
}


module.exports = Cliente