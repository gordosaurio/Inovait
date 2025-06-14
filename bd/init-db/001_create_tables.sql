CREATE TABLE TEACHER (
    id                SERIAL PRIMARY KEY,
    birth_date        DATE,
    name              VARCHAR(100),
    card_id           INTEGER UNIQUE,

);

CREATE TABLE TEACHER_SCHOOL (
    id                SERIAL PRIMARY KEY,
    teacher_id        INTEGER REFERENCES TEACHER(id),
    school_id         INTEGER REFERENCES SCHOOL(id),
    contract_start    DATE,
    contract_finish   DATE
);

CREATE TABLE SCHOOL (
    id                SERIAL PRIMARY KEY,
    name              VARCHAR(100),
    address           VARCHAR(255),
    city              VARCHAR(100),
    phone_number      VARCHAR(20),
    email             VARCHAR(100),
    website           VARCHAR(100),
    is_public         BOOLEAN,
);

CREATE TABLE STUDENT (
    id                SERIAL PRIMARY KEY,
    name              VARCHAR(100),
    birth_date        DATE,
    gender            VARCHAR(10),
    school_id         INTEGER REFERENCES SCHOOL(id)
);

CREATE TABLE STUDENT_GROUP (
    id                SERIAL PRIMARY KEY,
    student_id        INTEGER REFERENCES STUDENT(id),
    group_id         INTEGER REFERENCES GROUP(id)
);

CREATE TABLE GROUP (
    id                SERIAL PRIMARY KEY,
    grade             INTEGER,
    name              VARCHAR(100),
    year              INTEGER,
    school_id         INTEGER REFERENCES SCHOOL(id)
);

CREATE TABLE CLASS_STUDENT (
    id                SERIAL PRIMARY KEY,
    student_id        INTEGER REFERENCES STUDENT(id),
    class_id          INTEGER REFERENCES CLASS(id),
);

CREATE TABLE CLASS (
    id                SERIAL PRIMARY KEY,
    name              VARCHAR(100),
    grade             INTEGER,
    week_day          VARCHAR(50),
    start_time        VARCHAR(5),
    end_time          VARCHAR(5),
    year              INTEGER,
    classroom         VARCHAR(50),
    teacher_id        INTEGER REFERENCES TEACHER(id),
    school_id         INTEGER REFERENCES SCHOOL(id),
);

CREATE TABLE ENROLLMENT_FEE (
    id                SERIAL PRIMARY KEY,
    student_id        INTEGER REFERENCES STUDENT(id),
    school_id         INTEGER REFERENCES SCHOOL(id),
    due_date          DATE,
    payment_date      DATE,
    status            BOOLEAN,
    year              INTEGER,
    value             FLOAT,
);