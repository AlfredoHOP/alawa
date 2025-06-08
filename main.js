
function mostrarSeccion(id) {
  document.querySelectorAll('.seccion').forEach(seccion => {
    seccion.style.display = 'none';
  });
  document.getElementById(id).style.display = 'block';
}

// Datos de prueba conectados a Supabase simulada
const datos = [
  { parametro: 'DBO5', valor: 280, limite: 250 },
  { parametro: 'N. Amoniacal', valor: 12, limite: 10 },
  { parametro: 'Aceites y Grasas', valor: 9, limite: 10 }
];

function cargarDashboard() {
  const div = document.getElementById('datosDashboard');
  let html = "<table><tr><th>Parámetro</th><th>Valor</th><th>Límite</th><th>Estado</th></tr>";
  datos.forEach(p => {
    let estado = '🟢 OK';
    if (p.valor > p.limite) estado = '🔴 Alarma';
    else if (p.valor > 0.9 * p.limite) estado = '🟡 Observación';
    html += `<tr><td>${p.parametro}</td><td>${p.valor}</td><td>${p.limite}</td><td>${estado}</td></tr>`;
  });
  html += "</table>";
  div.innerHTML = html;
}

cargarDashboard();
