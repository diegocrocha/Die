'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario',{
			
		nome: {
			field: 'nome_usuario',
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			field: 'email_usuario',
			type: DataTypes.STRING,
			allowNull: false
		},
		telefone: {
			field: 'telefone_usuario',
			type: DataTypes.STRING,
			allowNull: false
		},
		 mensagem : {
		 	field: 'mensagem_usuario',
		 	type: DataTypes.STRING,
		 	allowNull: true
		 }
	}, 
	{
		tableName: 'usuario', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Usuario;
};
