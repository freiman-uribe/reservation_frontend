# Reservation System Frontend

## Objetivo

Crear una aplicación de reservas adecuada para restaurantes u hoteles. La aplicación permite a los usuarios realizar, modificar, cancelar y ver reservas de manera eficiente.

## Arquitectura de la Aplicación

### Backend (Node.js + Express.js + MongoDB)

- **API REST**: Proporciona operaciones CRUD (crear, leer, actualizar y eliminar) para las reservas.
- **Base de Datos**: MongoDB se utiliza para el almacenamiento de datos debido a su flexibilidad y manejo de relaciones complejas.

### Frontend (Vue.js)

- **Interfaz de Usuario**: Proporciona una interfaz amigable para interactuar con la API del backend.
- **Consumo de API**: Se comunica con el backend para mostrar los datos y realizar operaciones sobre las reservas.

### Base de Datos (MongoDB)

- **Colecciones**:
  - **Reservas**: Información sobre las reservas realizadas.
  - **Clientes**: Información de los clientes que realizan reservas.
  - **Servicios**: Información sobre los servicios ofrecidos.

## Diagrama de Arquitectura

- **Frontend (Vue.js)** interactúa con el **Backend (Node.js)** a través de una **API REST**.
- El **Backend (Node.js)** maneja la lógica de negocio y gestiona las peticiones del frontend.
- **MongoDB** almacena los datos de reservas, clientes y servicios.

## Instalación

1. **Clona el Repositorio**

   ```bash
   git clone https://github.com/ElkinNocuaDev/reservation_frontend.git
   cd reservation_frontend
