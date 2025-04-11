# Proyecto progresivo JavaScript

Desarrollar una aplicación web funcional que consuma datos de un API (de libre elección), los almacene mediante mecanismos como Local Storage y presente una interfaz responsiva utilizando HTML, CSS y JavaScript.

### **Requisitos del Proyecto:**

1. **Selección del API:**
    - Investigar y seleccionar un API público o con acceso gratuito.
    - Implementar el consumo de datos de dicha API.
2. **Almacenamiento Local:**
    - Guardar información relevante en Local Storage.
    - Permitir la recuperación y visualización de los datos almacenados.
3. **Interfaz Responsiva:**
    - Diseñar una UI atractiva y funcional.
    - Asegurar la adaptabilidad a diferentes tamaños de pantalla (desktop y móvil).
4. **Funcionalidad Dinámica:**
    - Implementar interacciones con JavaScript (eventos, manipulación del DOM, etc.).
    - Garantizar una navegación intuitiva y fluida.
5. **Entrega:**
    - Subir el código a un repositorio en GitHub.
    - Documentar el proyecto en un README detallado con descripción, instrucciones de uso e información del API utilizado.
    - Entregar la URL del repositorio para evaluación.

### **Criterios de Evaluación:**

- **Consumo correcto del API (20%)**: Llamados eficientes, manejo de respuestas y errores.
- **Uso adecuado de Local Storage (20%)**: Almacenamiento, recuperación y eliminación de datos.
- **Diseño responsivo (20%)**: Correcta aplicación de CSS y adaptabilidad.
- **Interactividad y funcionalidad (20%)**: Fluidez en interacciones con JavaScript.
- **Documentación y estructura del código (20%)**: Claridad y organización en el repositorio.

### **Entrega Final:**

Fecha límite: 11 de abril a las 10 a.m.

Formato de entrega: URL del repositorio en GitHub.



# 🎮 Proyecto Web: Explorador de Videojuegos con Favoritos

Este proyecto es una aplicación web desarrollada con HTML, CSS y JavaScript que permite explorar una lista de videojuegos utilizando una API pública. Los usuarios pueden agregar juegos a su lista de favoritos, la cual se almacena en el navegador utilizando LocalStorage. Además, la interfaz es completamente responsiva y funcional en distintos dispositivos.

---

## ✅ Justificación del Proyecto

Este proyecto cumple con todos los requerimientos establecidos, integrando tecnologías modernas y buenas prácticas en desarrollo frontend.

### 1. 📡 Consumo de API

Se utilizó una API pública para obtener datos actualizados sobre videojuegos. Esta API permite acceder a detalles como nombre, imagen, fecha de lanzamiento, género, etc.

- **API utilizada**: [RAWG Video Games Database API](https://rawg.io/apidocs) *(o la que hayas usado)*
- **Datos consumidos**: nombre del juego, imagen, descripción, fecha, etc.
- **Método**: `fetch()` con manejo de errores y carga dinámica de contenido.

### 2. 💾 Almacenamiento Local (LocalStorage)

Se permite a los usuarios agregar videojuegos a una sección de **favoritos**, almacenando los datos en `LocalStorage` para su persistencia entre sesiones.

- Funcionalidad para agregar y eliminar favoritos.
- Recuperación automática al recargar la página.
- Validación para evitar duplicados.

### 3. 📱 Interfaz Responsiva

La interfaz fue diseñada utilizando **Flexbox, Grid y Media Queries**, permitiendo una correcta visualización tanto en **dispositivos móviles como en pantallas de escritorio**.

- Diseño atractivo, limpio y funcional.
- Navegación clara e intuitiva.
- Adaptabilidad a distintos tamaños de pantalla.

### 4. ⚙️ Funcionalidad Dinámica

Se implementaron múltiples interacciones dinámicas con JavaScript:

- Renderizado de contenido desde la API.
- Manipulación del DOM para agregar/eliminar elementos.
- Actualización de favoritos en tiempo real.
- Transiciones suaves y comportamiento interactivo.

### 5. 📁 Estructura del Proyecto y Documentación

- Código fuente organizado y comentado.
- Repositorio público en GitHub.
- Archivo `README.md` detallado con:
  - Descripción del proyecto.
  - Instrucciones de uso.
  - Capturas de pantalla (opcional).
  - Créditos del API.
  - Tecnologías utilizadas.

---

## 🚀 Tecnologías Usadas

- HTML5
- CSS3 (Flexbox + Grid + Media Queries)
- JavaScript ES6+
- LocalStorage
- API REST

---

## 🔗 Enlace al Repositorio

[👉 Ver repositorio en GitHub](https://github.com/Mateo-Paternina-Mercado/proyec_api) 
---

## 📝 Instrucciones de Uso

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Mateo-Paternina-Mercado/proyec_api
