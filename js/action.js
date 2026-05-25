    document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formSolicitud');

    formulario.addEventListener('submit', (e) => {
        // Evita que la página se recargue al enviar el formulario
        e.preventDefault();

        // Captura de los valores de los campos
        const nombre = document.getElementById('nombre').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const direccion = document.getElementById('direccion').value.trim();
        const servicio = document.getElementById('servicio').value;
        const cantidad = document.getElementById('cantidad').value;
        const fechaEntrega = document.getElementById('fechaEntrega').value;
        const observaciones = document.getElementById('observaciones').value.trim();

        // Expresión regular para validar teléfonos de RD (809, 829, 849 + 7 dígitos)
        const regexTelefono = /^(809|829|849)\d{7}$/;

        // --- VALIDACIONES ---

        if (nombre === "" || telefono === "" || direccion === "" || servicio === "" || cantidad === "" || fechaEntrega === "") {
            alert('Por favor, complete todos los campos obligatorios.');
            return;
        }

        if (!regexTelefono.test(telefono)) {
            alert('Por favor, introduce un número de teléfono dominicano válido (Ej: 8098891614, sin guiones).');
            return;
        }

        // Validación de fecha (que no sea anterior a hoy)
        const fechaSeleccionada = new Date(fechaEntrega);
        const fechaActual = new Date();
        // Resetear horas para comparar solo las fechas
        fechaActual.setHours(0,0,0,0);

        if (fechaSeleccionada < fechaActual) {
            alert('La fecha de entrega no puede ser un día anterior al de hoy.');
            return;
        }

        // --- PROCESAMIENTO DE DATOS ---

        // Creación del objeto con la información de la solicitud
        const solicitudLavanderia = {
            cliente: nombre,
            telefono: telefono,
            direccion: direccion,
            servicio: servicio,
            cantidadPrendas: cantidad,
            fechaEntrega: fechaEntrega,
            observaciones: observaciones || "Ninguna"
        };

        // Simulación de envío exitoso (puedes ver esto en la consola del navegador F12)
        console.log("¡Solicitud procesada con éxito!", solicitudLavanderia);
        
        alert(`¡Gracias ${nombre}! Tu solicitud de servicio de ${servicio} ha sido enviada con éxito.`);

        // Limpiar el formulario después del envío
        formulario.reset();
    });
});
