const Pedido = {
	view : `select *,c.nombre , c.celular , c.direccion ,
	(select GROUP_CONCAT(CONCAT(r.nombre,'-',d.unidades,'-',d.precioComision))
	from detalle d , producto r  where r.idProducto = d.idProducto and idPedido = p.idPedido) as detalle
	 from pedido p , cliente c
	 where c.idCliente = p.idCliente and p.idcliente = ? order by p.idPedido desc ` ,
	list : `select *,c.nombre , c.celular , c.direccion ,
	(select GROUP_CONCAT(CONCAT(r.nombre,'-',d.unidades,'-',d.precioComision))
	from detalle d , producto r  where r.idProducto = d.idProducto and idPedido = p.idPedido) as detalle
	 from pedido p , cliente c
	 where c.idCliente = p.idCliente and p.idOperario = ? order by p.idPedido desc` ,
	add : 'insert into pedido(descripcion,fechaHoraPedido,fechaHoraEntrega,precioTotal,estadoPedido,idRestaurante,idCliente,idOperario) values (?,?,?,?,?,?,?,null)' ,
	edit : 'update pedido set estadoPedido = ? where idPedido=?'
}


module.exports = Pedido