# DestinoSur Patagonia

## 🏔️ Descripción Breve
DestinoSur Patagonia es un portal web institucional e interactivo diseñado para promocionar y planificar viajes por el sur argentino. El sitio ofrece una experiencia integral donde los usuarios pueden conocer los principales destinos de la región, explorar un catálogo completo de servicios (hospedajes, excursiones y alquiler de vehículos), simular su presupuesto en tiempo real según la localidad elegida y realizar consultas a través de un formulario con validación dinámica.

## 👤 Estudiantes:
- Genaro Abba
- Federico Fernández

## 📖 Instrucciones Básicas de Uso
El sitio web es totalmente navegable a través del menú superior presente en la cabecera de todas las páginas:

1. **Página de Inicio (`index.html`):**
   - **Carrusel de postales:** Utilizá los botones laterales para recorrer las imágenes destacadas de la Patagonia. El carrusel funciona de manera circular e infinita.
   - **Información general:** Explorá los circuitos sugeridos y los destinos principales.

2. **Catálogo de Servicios (`servicios.html`):**
   - Consultá las tarjetas con la oferta completa de alojamientos, excursiones guiadas y vehículos de alta montaña disponibles.
   - Cada tarjeta incluye imagen, tipo de servicio, ubicación y tarifa de referencia.

3. **Simulador "Mi Viaje" (`resumen.html`):**
   - **Selección de hospedaje:** En el menú desplegable, elegí el alojamiento de la localidad que deseás visitar (Bariloche, San Martín de los Andes, Ushuaia o El Chaltén).
   - **Filtrado por zona:** Al seleccionar un hospedaje, se habilitarán automáticamente en pantalla solo las excursiones y actividades de esa región geográfica.
   - **Configuración del paquete:** Indicá la cantidad de noches de alojamiento, los días específicos de alquiler del vehículo y la cantidad de personas que realizarán cada actividad seleccionada.
   - **Desglose dinámico:** El panel de la derecha recalculará y actualizará al instante los costos totales del viaje a medida que modifiques tus selecciones.
   - **Confirmación de reserva:** Hacé clic en "Confirmar Reserva" para validar los datos mediante manipulación del DOM sin utilizar alertas nativas del navegador.

4. **Contacto (`contacto.html`):**
   - Completá los campos obligatorios del formulario (Correo electrónico, Teléfono y campo adicional).
   - Si cometés un error en el formato, el sistema mostrará un aviso detallado debajo del campo correspondiente mediante manipulación del DOM.
   - Al enviar correctamente la consulta, se generarán de forma dinámica los elementos con el resumen completo de los datos enviados.

## 🌐 Enlace al Sitio Publicado
- **Sitio Web en GitHub Pages:** https://fedefernandez93.github.io/TPI-WebUno/index.html