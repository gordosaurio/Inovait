Proyecto Inovait - Guía de Instalación y Ejecución

Este proyecto cuenta con tres componentes principales:

Frontend (Angular)

Backend (Django)

Base de Datos (PostgreSQL con Docker)


Esta guía te ayudará a instalar y ejecutar cada uno de estos componentes paso a paso.


---

Casos de Uso y Endpoints

A continuación se listan los principales casos de uso del Backend y cómo consumir sus endpoints REST:

Descripción	Método	URL	Parámetros	Respuesta

Obtener todos los estudiantes	GET	/student/getStudents	-	Lista de objetos estudiante
Obtener estudiante por ID	GET	/student/getStudentById	id (query)	Objeto estudiante
Obtener estudiantes por colegio	GET	/student/getStudentBySchool	school_id (query)	Lista de estudiantes
Obtener estudiantes por año	GET	/student/getStudentsByYear	year (query)	Lista con group_name y datos
Obtener estudiantes por grado	GET	/student/getStudentsByGrade	grade (query)	Lista con group_name y datos
Crear nuevo estudiante	POST	/student/create_student	Payload JSON de estudiante	Objeto estudiante creado
Obtener todos los docentes	GET	/student/getTeachers	-	Lista de objetos docente
Obtener todas las escuelas	GET	/student/getSchools	-	Lista de objetos escuela
Obtener grupos de alumnos	GET	/student/getStudentGroup	-	Lista de entidades StudentGroup
Obtener StudentGroup por Group ID	GET	/student/getStudentGroupsByGroupId	group (query)	Lista de StudentGroup
Obtener todas las GroupT	GET	/student/getGroupT	-	Lista de GroupT
Obtener GroupT por grado	GET	/student/getGroupTByGrade	grade (query)	Lista de GroupT
Obtener GroupT por año	GET	/student/getGroupByYear	year (query)	Lista de GroupT



---

Requisitos previos

Asegúrate de tener instalados los siguientes programas en tu computador antes de comenzar:

Generales

Git

Node.js (versión recomendada: 18+)

Python (versión 3.10 o superior)

Docker

Angular CLI: instalar con el comando:

npm install -g @angular/cli

PostgreSQL client opcional para administrar la base de datos visualmente



---

Casos de Uso y Endpoints

A continuación se listan los principales casos de uso del Backend y cómo consumir sus endpoints REST:

Descripción	Método	URL	Parámetros	Respuesta

Obtener todos los estudiantes	GET	/student/getStudents	-	Lista de objetos estudiante
Obtener estudiante por ID	GET	/student/getStudentById	id (query)	Objeto estudiante
Obtener estudiantes por colegio	GET	/student/getStudentBySchool	school_id (query)	Lista de estudiantes
Obtener estudiantes por año	GET	/student/getStudentsByYear	year (query)	Lista con group_name y datos
Obtener estudiantes por grado	GET	/student/getStudentsByGrade	grade (query)	Lista con group_name y datos
Crear nuevo estudiante	POST	/student/create_student	Payload JSON de estudiante	Objeto estudiante creado
Obtener todos los docentes	GET	/student/getTeachers	-	Lista de objetos docente
Obtener todas las escuelas	GET	/student/getSchools	-	Lista de objetos escuela
Obtener grupos de alumnos	GET	/student/getStudentGroup	-	Lista de entidades StudentGroup
Obtener StudentGroup por Group ID	GET	/student/getStudentGroupsByGroupId	group (query)	Lista de StudentGroup
Obtener todas las GroupT	GET	/student/getGroupT	-	Lista de GroupT
Obtener GroupT por grado	GET	/student/getGroupTByGrade	grade (query)	Lista de GroupT
Obtener GroupT por año	GET	/student/getGroupByYear	year (query)	Lista de GroupT



---

Paso 1: Clonar el repositorio

git clone https://github.com/gordosaurio/Inovait.git
cd <carpeta_del_repositorio>


---

Casos de Uso y Endpoints

A continuación se listan los principales casos de uso del Backend y cómo consumir sus endpoints REST:

Descripción	Método	URL	Parámetros	Respuesta

Obtener todos los estudiantes	GET	/student/getStudents	-	Lista de objetos estudiante
Obtener estudiante por ID	GET	/student/getStudentById	id (query)	Objeto estudiante
Obtener estudiantes por colegio	GET	/student/getStudentBySchool	school_id (query)	Lista de estudiantes
Obtener estudiantes por año	GET	/student/getStudentsByYear	year (query)	Lista con group_name y datos
Obtener estudiantes por grado	GET	/student/getStudentsByGrade	grade (query)	Lista con group_name y datos
Crear nuevo estudiante	POST	/student/create_student	Payload JSON de estudiante	Objeto estudiante creado
Obtener todos los docentes	GET	/student/getTeachers	-	Lista de objetos docente
Obtener todas las escuelas	GET	/student/getSchools	-	Lista de objetos escuela
Obtener grupos de alumnos	GET	/student/getStudentGroup	-	Lista de entidades StudentGroup
Obtener StudentGroup por Group ID	GET	/student/getStudentGroupsByGroupId	group (query)	Lista de StudentGroup
Obtener todas las GroupT	GET	/student/getGroupT	-	Lista de GroupT
Obtener GroupT por grado	GET	/student/getGroupTByGrade	grade (query)	Lista de GroupT
Obtener GroupT por año	GET	/student/getGroupByYear	year (query)	Lista de GroupT



---

Paso 2: Ejecutar la Base de Datos (Docker)

1. Entra a la carpeta bd:

cd bd


2. Ejecuta el archivo docker-compose:

docker-compose up -d


3. Verifica que el contenedor esté corriendo:

docker ps




---

Casos de Uso y Endpoints

A continuación se listan los principales casos de uso del Backend y cómo consumir sus endpoints REST:

Descripción	Método	URL	Parámetros	Respuesta

Obtener todos los estudiantes	GET	/student/getStudents	-	Lista de objetos estudiante
Obtener estudiante por ID	GET	/student/getStudentById	id (query)	Objeto estudiante
Obtener estudiantes por colegio	GET	/student/getStudentBySchool	school_id (query)	Lista de estudiantes
Obtener estudiantes por año	GET	/student/getStudentsByYear	year (query)	Lista con group_name y datos
Obtener estudiantes por grado	GET	/student/getStudentsByGrade	grade (query)	Lista con group_name y datos
Crear nuevo estudiante	POST	/student/create_student	Payload JSON de estudiante	Objeto estudiante creado
Obtener todos los docentes	GET	/student/getTeachers	-	Lista de objetos docente
Obtener todas las escuelas	GET	/student/getSchools	-	Lista de objetos escuela
Obtener grupos de alumnos	GET	/student/getStudentGroup	-	Lista de entidades StudentGroup
Obtener StudentGroup por Group ID	GET	/student/getStudentGroupsByGroupId	group (query)	Lista de StudentGroup
Obtener todas las GroupT	GET	/student/getGroupT	-	Lista de GroupT
Obtener GroupT por grado	GET	/student/getGroupTByGrade	grade (query)	Lista de GroupT
Obtener GroupT por año	GET	/student/getGroupByYear	year (query)	Lista de GroupT



---

Paso 3: Ejecutar el Backend (Django)

1. Abre una terminal y ve a la carpeta del backend:

cd ../back


2. Activa el entorno virtual (si no existe, crea uno con python -m venv venv):

En Windows:

venv\Scripts\activate

En Linux/macOS:

source venv/bin/activate



3. Ve a la carpeta inovait del backend:

cd inovait


4. Instala las dependencias necesarias:

pip install -r requirements.txt


5. Aplica las migraciones:

python manage.py migrate


6. Ejecuta el servidor:

python manage.py runserver




---

Casos de Uso y Endpoints

A continuación se listan los principales casos de uso del Backend y cómo consumir sus endpoints REST:

Descripción	Método	URL	Parámetros	Respuesta

Obtener todos los estudiantes	GET	/student/getStudents	-	Lista de objetos estudiante
Obtener estudiante por ID	GET	/student/getStudentById	id (query)	Objeto estudiante
Obtener estudiantes por colegio	GET	/student/getStudentBySchool	school_id (query)	Lista de estudiantes
Obtener estudiantes por año	GET	/student/getStudentsByYear	year (query)	Lista con group_name y datos
Obtener estudiantes por grado	GET	/student/getStudentsByGrade	grade (query)	Lista con group_name y datos
Crear nuevo estudiante	POST	/student/create_student	Payload JSON de estudiante	Objeto estudiante creado
Obtener todos los docentes	GET	/student/getTeachers	-	Lista de objetos docente
Obtener todas las escuelas	GET	/student/getSchools	-	Lista de objetos escuela
Obtener grupos de alumnos	GET	/student/getStudentGroup	-	Lista de entidades StudentGroup
Obtener StudentGroup por Group ID	GET	/student/getStudentGroupsByGroupId	group (query)	Lista de StudentGroup
Obtener todas las GroupT	GET	/student/getGroupT	-	Lista de GroupT
Obtener GroupT por grado	GET	/student/getGroupTByGrade	grade (query)	Lista de GroupT
Obtener GroupT por año	GET	/student/getGroupByYear	year (query)	Lista de GroupT



---

Paso 4: Ejecutar el Frontend (Angular)

1. Abre una nueva terminal y ve a la carpeta del frontend:

cd ../front/inovait


2. Instala las dependencias:

npm install


3. Ejecuta el servidor de desarrollo:

ng serve


4. Abre tu navegador y entra a:

http://localhost:4200




---

Casos de Uso y Endpoints

A continuación se listan los principales casos de uso del Backend y cómo consumir sus endpoints REST:

Descripción	Método	URL	Parámetros	Respuesta

Obtener todos los estudiantes	GET	/student/getStudents	-	Lista de objetos estudiante
Obtener estudiante por ID	GET	/student/getStudentById	id (query)	Objeto estudiante
Obtener estudiantes por colegio	GET	/student/getStudentBySchool	school_id (query)	Lista de estudiantes
Obtener estudiantes por año	GET	/student/getStudentsByYear	year (query)	Lista con group_name y datos
Obtener estudiantes por grado	GET	/student/getStudentsByGrade	grade (query)	Lista con group_name y datos
Crear nuevo estudiante	POST	/student/create_student	Payload JSON de estudiante	Objeto estudiante creado
Obtener todos los docentes	GET	/student/getTeachers	-	Lista de objetos docente
Obtener todas las escuelas	GET	/student/getSchools	-	Lista de objetos escuela
Obtener grupos de alumnos	GET	/student/getStudentGroup	-	Lista de entidades StudentGroup
Obtener StudentGroup por Group ID	GET	/student/getStudentGroupsByGroupId	group (query)	Lista de StudentGroup
Obtener todas las GroupT	GET	/student/getGroupT	-	Lista de GroupT
Obtener GroupT por grado	GET	/student/getGroupTByGrade	grade (query)	Lista de GroupT
Obtener GroupT por año	GET	/student/getGroupByYear	year (query)	Lista de GroupT



---

Notas adicionales

Asegúrate de que los puertos necesarios estén libres:

Angular (4200)

Django (8000)

PostgreSQL Docker (5432)


Si quieres detener el contenedor de la base de datos:

docker-compose down



---

Casos de Uso y Endpoints

A continuación se listan los principales casos de uso del Backend y cómo consumir sus endpoints REST:

Descripción	Método	URL	Parámetros	Respuesta

Obtener todos los estudiantes	GET	/student/getStudents	-	Lista de objetos estudiante
Obtener estudiante por ID	GET	/student/getStudentById	id (query)	Objeto estudiante
Obtener estudiantes por colegio	GET	/student/getStudentBySchool	school_id (query)	Lista de estudiantes
Obtener estudiantes por año	GET	/student/getStudentsByYear	year (query)	Lista con group_name y datos
Obtener estudiantes por grado	GET	/student/getStudentsByGrade	grade (query)	Lista con group_name y datos
Crear nuevo estudiante	POST	/student/create_student	Payload JSON de estudiante	Objeto estudiante creado
Obtener todos los docentes	GET	/student/getTeachers	-	Lista de objetos docente
Obtener todas las escuelas	GET	/student/getSchools	-	Lista de objetos escuela
Obtener grupos de alumnos	GET	/student/getStudentGroup	-	Lista de entidades StudentGroup
Obtener StudentGroup por Group ID	GET	/student/getStudentGroupsByGroupId	group (query)	Lista de StudentGroup
Obtener todas las GroupT	GET	/student/getGroupT	-	Lista de GroupT
Obtener GroupT por grado	GET	/student/getGroupTByGrade	grade (query)	Lista de GroupT
Obtener GroupT por año	GET	/student/getGroupByYear	year (query)	Lista de GroupT



---

Soporte

Si tienes problemas con la instalación o ejecución, por favor comunícate con el equipo de desarrollo o abre un issue en este repositorio.


---

Casos de Uso y Endpoints

A continuación se listan los principales casos de uso del Backend y cómo consumir sus endpoints REST:

Descripción	Método	URL	Parámetros	Respuesta

Obtener todos los estudiantes	GET	/student/getStudents	-	Lista de objetos estudiante
Obtener estudiante por ID	GET	/student/getStudentById	id (query)	Objeto estudiante
Obtener estudiantes por colegio	GET	/student/getStudentBySchool	school_id (query)	Lista de estudiantes
Obtener estudiantes por año	GET	/student/getStudentsByYear	year (query)	Lista con group_name y datos
Obtener estudiantes por grado	GET	/student/getStudentsByGrade	grade (query)	Lista con group_name y datos
Crear nuevo estudiante	POST	/student/create_student	Payload JSON de estudiante	Objeto estudiante creado
Obtener todos los docentes	GET	/student/getTeachers	-	Lista de objetos docente
Obtener todas las escuelas	GET	/student/getSchools	-	Lista de objetos escuela
Obtener grupos de alumnos	GET	/student/getStudentGroup	-	Lista de entidades StudentGroup
Obtener StudentGroup por Group ID	GET	/student/getStudentGroupsByGroupId	group (query)	Lista de StudentGroup
Obtener todas las GroupT	GET	/student/getGroupT	-	Lista de GroupT
Obtener GroupT por grado	GET	/student/getGroupTByGrade	grade (query)	Lista de GroupT
Obtener GroupT por año	GET	/student/getGroupByYear	year (query)	Lista de GroupT



---

© Inovait - 2025