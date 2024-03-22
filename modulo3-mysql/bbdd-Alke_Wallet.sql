create database if not exists Alke_Wallet character SET = utf8mb4 collate = utf8mb4_unicode_ci;

use Alke_Wallet;

create table if not exists Currency (
id int auto_increment,
name varchar(20) not null unique,
symbol varchar(20),
primary key (id)
);

create table if not exists Banks (
id int auto_increment,
name varchar(50) not null unique,
primary key (id)
);

create table if not exists Users (
id int auto_increment,
name varchar(35) not null,
lastName varchar (35) not null,
email varchar(25) unique not null,
password varchar(15) not null,
primary key (id),
index idx_email (email asc)
);

create table if not exists Accounts(
id int auto_increment,
amount int not null,
user_id int not null,
currency_id int not null,
bank_id int not null,
primary key (id),
index idx_user_id (user_id asc),
foreign key (user_id) references Users(id),
foreign key (currency_id) references Currency(id),
foreign key (bank_id) references Banks(id)
);

create table if not exists Contacts (
id int auto_increment,
user_id int not null,
contact_account_id int not null,
primary key (id),
index idx_user_id (user_id asc),
foreign key (user_id) references Users(id),
foreign key (contact_account_id) references Accounts(id)
);

create table if not exists Transactions (
id int auto_increment,
import int not null,
trans_type varchar(15) not null,
trans_date timestamp default current_timestamp,
sender_account_id int not null,
receiver_account_id int not null,
primary key (id),
index idx_sender_account_id (sender_account_id asc),
index idx_receiver_account_id (receiver_account_id asc),
foreign key (sender_account_id) references Accounts(id),
foreign key (receiver_account_id) references Accounts(id)
);

insert into Currency(name, symbol) values 
('Dólar', 'USD'),
('Euro', 'EUR'),
('Libra esterlina', 'GBP'),
('Yen', 'JPY'),
('Peso mexicano', 'MXN'),
('Franco suizo', 'CHF'),
('Dólar canadiense', 'CAD'),
('Dólar australiano', 'AUD'),
('Peso chileno', 'CLP'),
('Rupia india', 'INR');

insert into Banks(name) values
('Banco de Chile'),
('Banco Santander Chile'),
('BancoEstado'),
('Banco de Crédito e Inversiones (BCI)'),
('Scotiabank Chile'),
('Banco Itaú Chile'),
('Banco Security'),
('Banco Falabella'),
('CorpBanca'),
('Banco Internacional');

insert into Users(name, lastName, email, password) values
('Juan', 'Pérez', 'juan@example.com', 'password1'),
('María', 'García', 'maria@example.com', 'password2'),
('Luis', 'Martínez', 'luis@example.com', 'password3'),
('Ana', 'Rodríguez', 'ana@example.com', 'password4'),
('Pedro', 'López', 'pedro@example.com', 'password5'),
('Laura', 'Fernández', 'laura@example.com', 'password6'),
('Carlos', 'González', 'carlos@example.com', 'password7'),
('Sofía', 'Díaz', 'sofia@example.com', 'password8'),
('Miguel', 'Ruiz', 'miguel@example.com', 'password9'),
('Elena', 'Sánchez', 'elena@example.com', 'password10');

insert into Accounts(amount, user_id, currency_id, bank_id) values 
(1000, 1, 1, 1),  
(2000, 2, 2, 2),  
(1500, 3, 3, 3),  
(3000, 4, 4, 4),  
(2500, 5, 5, 5),  
(3500, 6, 6, 6),  
(4000, 7, 7, 7), 
(4500, 8, 8, 8), 
(5000, 9, 9, 9),  
(5500, 10, 10, 10); 

insert into Contacts(user_id, contact_account_id) values
(1, 2),  
(2, 3),  
(3, 4), 
(4, 5),  
(5, 6), 
(6, 7), 
(7, 8), 
(8, 9),  
(9, 10), 
(10, 1),
(1, 3),   
(2, 4),  
(3, 5),   
(4, 6),  
(5, 7),  
(6, 8),  
(7, 9),  
(8, 10),  
(9, 1),   
(10, 2),  
(1, 4),   
(2, 5),   
(3, 6),   
(4, 7),   
(5, 8),   
(6, 9),   
(7, 10),
(8, 1),  
(9, 2),  
(10, 3); 

insert into Transactions(import, trans_type, sender_account_id, receiver_account_id) values
(100, 'Transferencia', 1, 2),    
(200, 'Pago', 2, 3),             
(150, 'Compra', 3, 4),           
(300, 'Transferencia', 4, 5),   
(250, 'Pago', 5, 6),              
(350, 'Compra', 6, 7),            
(400, 'Transferencia', 7, 8),   
(450, 'Pago', 8, 9),             
(500, 'Compra', 9, 10),          
(550, 'Transferencia', 10, 1),  
(120, 'Transferencia', 2, 3),    
(180, 'Pago', 3, 4),              
(90, 'Compra', 4, 5),             
(220, 'Transferencia', 5, 6),     
(270, 'Pago', 6, 7),              
(320, 'Compra', 7, 8),            
(370, 'Transferencia', 8, 9),     
(420, 'Pago', 9, 10),             
(470, 'Compra', 10, 1),           
(520, 'Transferencia', 1, 2),     
(130, 'Transferencia', 3, 4),     
(190, 'Pago', 4, 5),              
(100, 'Compra', 5, 6),            
(230, 'Transferencia', 6, 7),     
(280, 'Pago', 7, 8),              
(330, 'Compra', 8, 9),            
(380, 'Transferencia', 9, 10),    
(430, 'Pago', 10, 1),             
(480, 'Compra', 1, 2),            
(530, 'Transferencia', 2, 3);   

-- obtener nombre de moneda de un usuario en especifico
select c.name, u.name 
from currency c
inner join accounts a on c.id = a.currency_id 
inner join users u on a.user_id = u.id 
where c.name = 'Peso chileno';

-- obtener todas las transacciones registradas
select * from transactions;

-- obtener todas las transacciones registradas por un usuario especifico
select *
from transactions t
inner join users u on t.sender_account_id = u.id 
where u.name = 'Juan';

-- modificar campo email de un usuario especifico
update users 
set email = "breeale200@gmail.com"
where users.id  = 2;

-- eliminar registro de una transaccion
delete from transactions 
where transactions.id = 1;