drop database if exists KioscoLaVentanitaDB;

Create database KioscoLaVentanitaDB;

use KioscoLaVentanitaDB;

create table usuario (
	id int auto_increment not null,
    usuario varchar(255) not null unique,
    contraseña varchar(255) not null,
    primary key(id)
);

create table producto (
	id int auto_increment not null,
    nombre varchar(255) not null unique,
    descripcion varchar(255) not null,
	cantidad int not null,
	precio decimal(6, 2) unsigned not null,
    primary key (id)
);

create table venta (
	id int not null auto_increment,
    id_producto int not null,
    id_usuario int not null,
    cantidad int not null,
    total decimal(6,2) unsigned not null,
    fecha date not null,
	primary key(id),
    foreign key (id_producto) references producto(id),
    foreign key (id_usuario) references usuario(id)
);

-- insert de los productos
insert into producto (nombre, descripcion, cantidad, precio) Values
("Cerveza", "Refrescante cerveza con un equilibrio perfecto de amargor y suavidad", 180, 180.00),
("Refresco", "Bebida refrescante con burbujas y sabores naturales", 90, 90.00),
("Chocolate", "Tableta de chocolate premium para satisfacer tus antojos dulces", 105, 105.00),
("Papas Fritas", "Papas fritas extra crujientes, perfectas para picar en cualquier momento", 108, 108.00),
("Agua Mineral", "Agua mineral pura y cristalina para mantenerte hidratado", 60, 60.00),
("Cigarrillos", "Cigarrillos de alta calidad para disfrutar de un momento de relax", 270, 270.00),
("Caramelos", "Caramelos suaves y deliciosos en una variedad de sabores", 30, 30.00),
("Pan", "Pan fresco y esponjoso, ideal para acompañar tus comidas", 120, 120.00),
("Jugo", "Jugo natural lleno de vitaminas y sabor refrescante", 132, 132.00),
("Chicles", "Chicles para mantener tu aliento fresco con un toque de menta", 15, 15.00),
("Revista", "Revista con las últimas tendencias y artículos interesantes", 105, 105.00),
("Café", "Café aromático y robusto para empezar tu día con energía", 108, 108.00),
("Yogur", "Yogur cremoso y nutritivo en una variedad de sabores deliciosos", 90, 90.00),
("Cereal", "Cereal crujiente y lleno de fibra para un desayuno saludable", 210, 210.00),
("Toallitas", "Toallitas húmedas suaves y resistentes para la limpieza diaria", 120, 120.00),
("Cepillo de Dientes", "Cepillo de dientes de alta calidad para una sonrisa brillante", 75, 75.00),
("Papel Higiénico", "Papel higiénico suave y absorbente para una experiencia cómoda", 108, 108.00),
("Baterías", "Baterías duraderas para alimentar tus dispositivos electrónicos", 150, 150.00),
("Pañuelos", "Pañuelos de papel delicados y suaves para cualquier ocasión", 60, 60.00)
;

select * from producto;
insert into usuario (usuario, contraseña) values ("admin", "123");
select * from venta;
insert into venta (id_producto, id_usuario, cantidad, total, fecha) values (10, 1, 2, 264.00, "2023-12-10");

-- trigger after insert venta
-- drop trigger if exists despues_De_Agregar_Una_Venta;

create trigger despues_De_Agregar_Una_Venta
after insert on venta 
for each row 
update producto
set cantidad = cantidad - new.cantidad
where id = new.id_producto;

-- PERFECTO :3
