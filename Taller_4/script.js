console.log("Script cargado");

const apellidos = document.getElementById('apellidos');
const nombres = document.getElementById('nombres');
const cedula = document.getElementById('cedula');
const direccion = document.getElementById('direccion');
const telefono = document.getElementById('telefono');
const correo = document.getElementById('mail');
const facultad = document.getElementById('facu');
const nivel = document.getElementById('nivel');
const paralelo = document.getElementById('paralelo');

const registrar = document.getElementById('btn');
registrar.addEventListener('click', (e) => {
    e.preventDefault();
});
registrar.addEventListener('click', () => {

    const regexTexto = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    const regexCedula = /^\d{10}$/;
    const regexTelefono = /^09\d{8}$/;
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexParalelo = /^[A-Z]$/;

    if (
        apellidos.value.trim() === '' ||
        nombres.value.trim() === '' ||
        cedula.value.trim() === '' ||
        direccion.value.trim() === '' ||
        telefono.value.trim() === '' ||
        correo.value.trim() === '' ||
        facultad.value.trim() === '' ||
        nivel.value.trim() === '' ||
        paralelo.value.trim() === ''
    ) {
        alert('Todos los campos son obligatorios');
        return;
    }

    if (!regexTexto.test(apellidos.value.trim())) {
        alert('Apellidos inválidos');
        return;
    }
    if (!regexTexto.test(nombres.value.trim())) {
        alert('Nombres inválidos');
        return;
    }
    if (!regexCedula.test(cedula.value.trim())) {
        alert('La cédula debe tener 10 dígitos');
        return;
    }
    if (!regexTelefono.test(telefono.value.trim())) {
        alert('El teléfono debe comenzar con 09 y tener 10 dígitos');
        return;
    }
    if (!regexCorreo.test(correo.value.trim())) {
        alert('Correo electrónico inválido');
        return;
    }

    if (!regexParalelo.test(paralelo.value.trim().toUpperCase())) {
        alert('El paralelo debe ser una sola letra (A, B, C...)');
        return;
    }
    const estudiante = {
        cedula: cedula.value.trim(),
        apellidos: apellidos.value.trim(),
        nombres: nombres.value.trim(),
        direccion: direccion.value.trim(),
        telefono: telefono.value.trim(),
        correo: correo.value.trim(),
        facultad: facultad.value.trim(),
        nivel: nivel.value.trim(),
        paralelo: paralelo.value.trim().toUpperCase()
    };

    let registros = JSON.parse(localStorage.getItem('registros')) || [];

    const existe = registros.some(
        registro => registro.cedula === estudiante.cedula
    );

    if (existe) {
        alert('Ya existe un estudiante registrado con esa cédula');
        return;
    }


    registros.push(estudiante);

    localStorage.setItem(
        'registros',
        JSON.stringify(registros)
    );

    alert('Registro guardado correctamente');

    document.querySelectorAll('input').forEach(input => {
        input.value = '';
    });
});