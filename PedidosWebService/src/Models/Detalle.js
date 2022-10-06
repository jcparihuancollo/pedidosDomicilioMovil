const Detalle = {
	view : 'select * from detalle where idPedido=?' ,
	add : 'insert into detalle(idPedido,idProducto,unidades,precioComision) values (?,?,?,?)' ,
}


module.exports = Detalle