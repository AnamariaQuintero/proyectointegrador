let selectedRole = '';

function selectRole(role) {
    selectedRole = role;
    console.log('Rol seleccionado:', selectedRole);
}

function login() {
    if (selectedRole === '') {
        alert('Por favor selecciona un rol antes de iniciar sesión.');
    } else {
        switch(selectedRole) {
            case 'profesor':
                window.location.href = 'profesor/profesor.html';
                break;
            case 'estudiante':
                window.location.href = 'estudiante/estudiante.html';
                break;
            case 'admin':
                window.location.href = 'admi/admin.html';
                break;
            default:
                alert('Rol no válido');
        }
    }
}