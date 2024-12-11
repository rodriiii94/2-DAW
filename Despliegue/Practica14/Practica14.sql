CREATE TABLE Agencia (
    id INT PRIMARY KEY,
    direcc VARCHAR(50),
    telef INT
);

INSERT INTO Agencia (id, direcc, telef) VALUES
(1, 'Calle Mayor, 45', 987654321),
(2, 'Avenida del Sol, 12', 912345678),
(3, 'Plaza Nueva, 3', 622334455);


CREATE TABLE Coche (
    matricula VARCHAR(10) PRIMARY KEY,
    marca VARCHAR(20),
    modelo VARCHAR(20),
    fecha_matriculacion DATE,
    precio_dia DECIMAL(10,2),
    num_kms INT,
    id_agencia INT,
    FOREIGN KEY (id_agencia) REFERENCES Agencia(id)
);

INSERT INTO Coche (matricula, marca, modelo, fecha_matriculacion, precio_dia, num_kms, id_agencia) VALUES
('1234ABC', 'Toyota', 'Corolla', '2020-05-15', 50.00, 30000, 1),
('5678DEF', 'Ford', 'Focus', '2018-07-20', 45.00, 50000, 2),
('9101GHI', 'Volkswagen', 'Golf', '2022-03-10', 60.00, 15000, 1),
('2345JKL', 'Honda', 'Civic', '2019-11-25', 55.00, 25000, 3);


CREATE TABLE Cliente (
    dni VARCHAR(10) PRIMARY KEY,
    nombre VARCHAR(20),
    telef INT
);

INSERT INTO Cliente (dni, nombre, telef) VALUES
('12345678A', 'Juan Pérez', 611223344),
('87654321B', 'María Gómez', 699887766),
('45678901C', 'Luis Rodríguez', 622445566),
('10987654D', 'Ana López', 688223344);


CREATE TABLE Reserva (
    id INT PRIMARY KEY,
    fec_ini DATE,
    fec_fin DATE,
    dni_cliente VARCHAR(10),
    matricula_coche VARCHAR(10),
    FOREIGN KEY (dni_cliente) REFERENCES Cliente(dni),
    FOREIGN KEY (matricula_coche) REFERENCES Coche(matricula)
);

INSERT INTO Reserva (id, fec_ini, fec_fin, dni_cliente, matricula_coche) VALUES
(1, '2024-11-01', '2024-11-10', '12345678A', '1234ABC'),
(2, '2024-12-15', '2024-12-20', '87654321B', '5678DEF'),
(3, '2025-01-05', '2025-01-12', '45678901C', '9101GHI'),
(4, '2025-02-01', '2025-02-07', '10987654D', '2345JKL');