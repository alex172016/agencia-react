create database Autoestima;
use Autoestima;

create table cadastro (

nome varchar(50) not null,
telefone varchar(50) not null,
email varchar(50),
id_cpf int primary key not null,
rg int (10),
estado varchar (50),
dataCompra date,
tipoCompra varchar(2)
);




select *from cadastro;

ALTER table cadastro  drop column cpf;
alter table cadastro Add column id int auto_increment primary key;
drop table reserva;

create table reserva (

nome varchar(50) not null,
telefone varchar(50) not null,
email varchar(50),
id int primary key not null
);




 
 

 
 

