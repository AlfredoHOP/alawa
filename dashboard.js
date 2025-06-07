
const params = [
  { nombre: 'DBO5', valor: 320, limite: 250 },
  { nombre: 'N. Amoniacal', valor: 12, limite: 10 },
  { nombre: 'Aceites y Grasas', valor: 8, limite: 10 }
];

document.querySelector("#siteInfo").innerText = "Sitio: Planta Norte | Fecha: 2025-06-08 | Lab: BioControl";

const tbody = document.querySelector("#tablaParametros tbody");
params.forEach(p => {
  const estado = p.valor > p.limite ? '🔴 Alarma' : p.valor > (0.9 * p.limite) ? '🟡 Observación' : '🟢 OK';
  const fila = `<tr><td>${p.nombre}</td><td>${p.valor}</td><td>${p.limite}</td><td>${estado}</td></tr>`;
  tbody.innerHTML += fila;
});
