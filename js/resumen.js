// ==========================================
// SIMULADOR DE PRESUPUESTO
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const selectAlojamiento = document.getElementById('alojamiento');
    const selectVehiculo = document.getElementById('vehiculo');
    const inputDias = document.getElementById('dias');
    const inputPersonas = document.getElementById('personas');
    const avisoZona = document.getElementById('aviso-zona');
    const itemsActividad = document.querySelectorAll('.actividad-item');

    // Nodos de resultado
    const resAlojamiento = document.getElementById('res-alojamiento');
    const resExcursiones = document.getElementById('res-excursiones');
    const resVehiculo = document.getElementById('res-vehiculo');
    const resSubtotal = document.getElementById('res-subtotal');
    const resTotal = document.getElementById('res-total');
    const btnConfirmar = document.querySelector('.btn-confirmar');

    // Filtrar actividades disponibles según la ubicación del hospedaje elegido
    function actualizarFiltroZonas() {
        const opcionSeleccionada = selectAlojamiento.options[selectAlojamiento.selectedIndex];
        const zonaSeleccionada = opcionSeleccionada.getAttribute('data-location');

        let actividadesVisibles = 0;

        itemsActividad.forEach(item => {
            const zonaItem = item.getAttribute('data-location');
            const chk = item.querySelector('input[type="checkbox"]');

            if (zonaSeleccionada !== 'none' && zonaItem === zonaSeleccionada) {
                item.style.display = 'flex';
                actividadesVisibles++;
            } else {
                item.style.display = 'none';
                if (chk) chk.checked = false; // Desmarca al cambiar de lugar
            }
        });

        if (zonaSeleccionada === 'none') {
            avisoZona.textContent = 'Seleccioná un hospedaje para ver las actividades disponibles en la zona.';
            avisoZona.style.display = 'block';
        } else if (actividadesVisibles === 0) {
            avisoZona.textContent = 'Esta localidad no cuenta con excursiones adicionales en el catálogo.';
            avisoZona.style.display = 'block';
        } else {
            avisoZona.style.display = 'none';
        }

        calcularPresupuesto();
    }

    // Cálculo general de costos
    function calcularPresupuesto() {
        const precioNocheAlojamiento = parseFloat(selectAlojamiento.value) || 0;
        const precioVehiculoDia = parseFloat(selectVehiculo.value) || 0;
        const noches = parseInt(inputDias.value) || 1;
        const pasajeros = parseInt(inputPersonas.value) || 1;

        // Totales individuales
        const totalAlojamiento = precioNocheAlojamiento * noches;
        const totalVehiculo = precioVehiculoDia * noches;

        let costoActividadesPorPersona = 0;
        itemsActividad.forEach(item => {
            const chk = item.querySelector('input[type="checkbox"]');
            if (item.style.display !== 'none' && chk && chk.checked) {
                costoActividadesPorPersona += parseFloat(chk.value) || 0;
            }
        });
        const totalExcursiones = costoActividadesPorPersona * pasajeros;

        const totalFinal = totalAlojamiento + totalExcursiones + totalVehiculo;

        // Renderizado en DOM con formato moneda argentina
        resAlojamiento.textContent = `$${totalAlojamiento.toLocaleString('es-AR')}`;
        resExcursiones.textContent = `$${totalExcursiones.toLocaleString('es-AR')}`;
        resVehiculo.textContent = `$${totalVehiculo.toLocaleString('es-AR')}`;
        resSubtotal.textContent = `$${totalFinal.toLocaleString('es-AR')}`;
        resTotal.textContent = `$${totalFinal.toLocaleString('es-AR')}`;
    }

    // Eventos
    selectAlojamiento.addEventListener('change', actualizarFiltroZonas);
    selectVehiculo.addEventListener('change', calcularPresupuesto);
    inputDias.addEventListener('input', calcularPresupuesto);
    inputPersonas.addEventListener('input', calcularPresupuesto);

    itemsActividad.forEach(item => {
        const chk = item.querySelector('input[type="checkbox"]');
        if (chk) {
            chk.addEventListener('change', calcularPresupuesto);
        }
    });

    if (btnConfirmar) {
        btnConfirmar.addEventListener('click', () => {
            const avisoExistente = document.getElementById('msg-reserva');
            if (avisoExistente) avisoExistente.remove();

            const msg = document.createElement('p');
            msg.id = 'msg-reserva';
            msg.style.marginTop = '0.8rem';
            msg.style.fontSize = '0.9rem';
            msg.style.fontWeight = '600';
            msg.style.textAlign = 'center';

            if (parseFloat(selectAlojamiento.value) === 0) {
                // Error por DOM (sin alert)
                msg.style.color = '#e74c3c';
                msg.textContent = '⚠️ Por favor, seleccioná un hospedaje primero.';
            } else {
                // Éxito por DOM (sin alert)
                msg.style.color = '#27ae60';
                msg.textContent = '¡Gracias por cotizar tu viaje con DestinoSur!';
                btnConfirmar.disabled = true;
                btnConfirmar.style.opacity = '0.7';
            }

            btnConfirmar.after(msg);
        });
    }

    // Estado inicial
    actualizarFiltroZonas();
});