const Persona = {
	view : 'select * from persona where ci=$1' ,
	add : 'insert into persona(nombre,ci) values ($1,$2)' ,
	edit : 'update persona set nombre=$1 , ci=$2 where id=$3',
	list : 'select * from restaurante',
	del : 'delete from persona where id=$1'
}


module.exports = Persona