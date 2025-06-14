INSERT INTO TEACHER (birth_date, name, card_id) VALUES
('1980-01-15', 'Carlos Pérez', 1001),
('1979-02-20', 'Luisa Gómez', 1002),
('1982-03-10', 'Jorge Ramírez', 1003),
('1975-07-25', 'Diana Rodríguez', 1004),
('1984-11-30', 'Felipe Acosta', 1005),
('1990-06-18', 'Ana Morales', 1006),
('1987-09-14', 'Camilo Torres', 1007),
('1985-04-22', 'Natalia Herrera', 1008),
('1983-12-08', 'Óscar Ruiz', 1009),
('1978-05-03', 'Marcela Gómez', 1010),
('1991-08-26', 'Esteban Díaz', 1011),
('1986-10-07', 'Verónica Salazar', 1012),
('1981-03-12', 'Iván Mendoza', 1013),
('1988-07-29', 'Sandra Castro', 1014),
('1977-01-09', 'Andrés López', 1015);


INSERT INTO SCHOOL (name, address, city, phone_number, email, website, is_public) VALUES
('Colegio Nueva Generación', 'Calle 10 #23-45', 'Bogotá', '3001234567', 'info@nuevagen.edu', 'nuevagen.edu', TRUE),
('Instituto Futuro', 'Carrera 7 #45-67', 'Bogotá', '3002345678', 'contacto@futuro.edu', 'futuro.edu', FALSE),
('Liceo del Norte', 'Av 15 #56-78', 'Bogotá', '3003456789', 'admin@liceonorte.edu', 'liceonorte.edu', TRUE),
('Escuela Progreso', 'Diagonal 8 #11-33', 'Bogotá', '3004567890', 'contacto@progreso.edu', 'progreso.edu', TRUE),
('Colegio Internacional', 'Calle 100 #50-20', 'Bogotá', '3005678901', 'info@internacional.edu', 'internacional.edu', FALSE);

INSERT INTO TEACHER_SCHOOL (teacher_id, school_id, contract_start, contract_finish) VALUES
(1, 1, '2015-01-01', '2020-12-31'),
(2, 1, '2016-02-01', '2022-12-31'),
(3, 2, '2017-03-01', '2023-03-01'),
(4, 2, '2018-04-01', '2024-04-01'),
(5, 3, '2019-05-01', '2025-05-01'),
(6, 3, '2017-06-01', '2022-06-01'),
(7, 4, '2016-07-01', '2023-07-01'),
(8, 4, '2015-08-01', '2021-08-01'),
(9, 5, '2019-09-01', '2024-09-01'),
(10, 5, '2018-10-01', '2023-10-01'),
(11, 1, '2016-11-01', '2022-11-01'),
(12, 2, '2017-12-01', '2023-12-01'),
(13, 3, '2015-01-01', '2020-01-01'),
(14, 4, '2016-02-01', '2021-02-01'),
(15, 5, '2018-03-01', '2023-03-01');


INSERT INTO STUDENT (name, birth_date, gender, school_id) VALUES
-- Colegio Nueva Generación (id = 1)
('Juan Pérez', '2010-05-10', 'Masculino', 1),
('María López', '2011-06-12', 'Femenino', 1),
('Carlos Ruiz', '2010-08-15', 'Masculino', 1),
('Ana Torres', '2011-07-18', 'Femenino', 1),
('Luis Gómez', '2010-04-22', 'Masculino', 1),

-- Instituto Futuro (id = 2)
('Laura Castro', '2011-02-14', 'Femenino', 2),
('Mateo Díaz', '2010-03-19', 'Masculino', 2),
('Daniela Mora', '2011-11-21', 'Femenino', 2),
('Andrés Silva', '2010-01-30', 'Masculino', 2),
('Valentina Ríos', '2011-12-05', 'Femenino', 2),

-- Liceo del Norte (id = 3)
('Camila Herrera', '2011-09-08', 'Femenino', 3),
('Diego Martínez', '2010-10-03', 'Masculino', 3),
('Sofía Cárdenas', '2011-05-25', 'Femenino', 3),
('David Reyes', '2010-12-11', 'Masculino', 3),
('Sara Peña', '2011-07-07', 'Femenino', 3),

-- Escuela Progreso (id = 4)
('Juliana Pardo', '2011-04-19', 'Femenino', 4),
('Santiago Vargas', '2010-06-06', 'Masculino', 4),
('Natalia Romero', '2011-01-17', 'Femenino', 4),
('Emilio Cabrera', '2010-08-13', 'Masculino', 4),
('Isabela Gil', '2011-03-30', 'Femenino', 4),

-- Colegio Internacional (id = 5)
('Sebastián Torres', '2010-02-22', 'Masculino', 5),
('Lucía Acosta', '2011-10-09', 'Femenino', 5),
('Tomás Navarro', '2010-11-01', 'Masculino', 5),
('Gabriela Mejía', '2011-06-28', 'Femenino', 5),
('Martín Franco', '2010-09-15', 'Masculino', 5);

INSERT INTO GROUP_T (grade, name, year, school_id) VALUES
(5, '5A', 2024, 1),
(5, '5B', 2024, 2),
(5, '5C', 2024, 3),
(5, '5D', 2024, 4),
(5, '5E', 2024, 5);

INSERT INTO STUDENT_GROUP (student_id, group_id) VALUES
-- Grupo 1
(1,1), (2,1), (3,1), (4,1), (5,1),
-- Grupo 2
(6,2), (7,2), (8,2), (9,2), (10,2),
-- Grupo 3
(11,3), (12,3), (13,3), (14,3), (15,3),
-- Grupo 4
(16,4), (17,4), (18,4), (19,4), (20,4),
-- Grupo 5
(21,5), (22,5), (23,5), (24,5), (25,5);

INSERT INTO CLASS (name, grade, week_day, start_time, end_time, year, classroom, teacher_id, school_id) VALUES
('Matemáticas', 5, 'Lunes', '08:00', '09:30', 2024, 'Aula 101', 1, 1),
('Ciencias', 5, 'Martes', '09:00', '10:30', 2024, 'Aula 202', 3, 2),
('Lenguaje', 5, 'Miércoles', '10:00', '11:30', 2024, 'Aula 303', 5, 3),
('Historia', 5, 'Jueves', '08:30', '10:00', 2024, 'Aula 404', 7, 4),
('Arte', 5, 'Viernes', '10:00', '11:30', 2024, 'Aula 505', 9, 5);


INSERT INTO CLASS_STUDENT (student_id, class_id) VALUES
-- Clase 1
(1,1), (2,1), (3,1), (4,1), (5,1),
-- Clase 2
(6,2), (7,2), (8,2), (9,2), (10,2),
-- Clase 3
(11,3), (12,3), (13,3), (14,3), (15,3),
-- Clase 4
(16,4), (17,4), (18,4), (19,4), (20,4),
-- Clase 5
(21,5), (22,5), (23,5), (24,5), (25,5);


INSERT INTO ENROLLMENT_FEE (student_id, school_id, due_date, payment_date, status, year, value) VALUES
(1,1,'2024-01-10','2024-01-15',TRUE,2024,500000),
(2,1,'2024-01-10','2024-01-20',TRUE,2024,500000),
(3,1,'2024-01-10',NULL,FALSE,2024,500000),
(4,1,'2024-01-10','2024-01-14',TRUE,2024,500000),
(5,1,'2024-01-10','2024-01-13',TRUE,2024,500000),

(6,2,'2024-01-11','2024-01-12',TRUE,2024,480000),
(7,2,'2024-01-11',NULL,FALSE,2024,480000),
(8,2,'2024-01-11','2024-01-13',TRUE,2024,480000),
(9,2,'2024-01-11','2024-01-14',TRUE,2024,480000),
(10,2,'2024-01-11','2024-01-13',TRUE,2024,480000),

(11,3,'2024-01-12','2024-01-16',TRUE,2024,450000),
(12,3,'2024-01-12','2024-01-17',TRUE,2024,450000),
(13,3,'2024-01-12','2024-01-19',TRUE,2024,450000),
(14,3,'2024-01-12',NULL,FALSE,2024,450000),
(15,3,'2024-01-12','2024-01-15',TRUE,2024,450000),

(16,4,'2024-01-13','2024-01-18',TRUE,2024,400000),
(17,4,'2024-01-13',NULL,FALSE,2024,400000),
(18,4,'2024-01-13','2024-01-14',TRUE,2024,400000),
(19,4,'2024-01-13','2024-01-14',TRUE,2024,400000),
(20,4,'2024-01-13','2024-01-15',TRUE,2024,400000),

(21,5,'2024-01-14','2024-01-16',TRUE,2024,600000),
(22,5,'2024-01-14','2024-01-16',TRUE,2024,600000),
(23,5,'2024-01-14',NULL,FALSE,2024,600000),
(24,5,'2024-01-14','2024-01-17',TRUE,2024,600000),
(25,5,'2024-01-14','2024-01-18',TRUE,2024,600000);


