const secciones = {
  "carrera": { titulo: "Carrera", descripcion: "Lo que me interesa aprender y construir durante mi formación.", imagenes: [
    ["Universidad", "El lugar donde estudio.", "imagenes/carrera/carrera_1.jpg"],
    ["Tecnología", "Conocer herramientas que facilitan el trabajo y el aprendizaje.", "imagenes/carrera/carrera_2.jpg"],
    ["Redes", "Entender cómo se conectan los dispositivos y comparten información.", "imagenes/carrera/carrera_3.jpg"],
    ["Estudios", "Seguir aprendiendo y avanzar en mi carrera.", "imagenes/carrera/carrera_4.jpg"],
    ["Metas personales", "Prepararme para trabajar en proyectos y resolver problemas.", "imagenes/carrera/carrera_5.jpg"],
  ]},
  "suenos": { titulo: "Sueños", descripcion: "Algunas metas y experiencias que me gustaría cumplir.", imagenes: [
    ["Viajar", "Conocer nuevos lugares y culturas.", "imagenes/suenos/suenos_1.jpg"],
    ["Nuevas experiencias", "Salir de la rutina y descubrir cosas diferentes.", "imagenes/suenos/suenos_2.jpg"],
    ["Superarme", "Esforzarme para alcanzar las metas que me proponga.", "imagenes/suenos/suenos_3.jpg"],
    ["Aventura", "Vivir experiencias que recuerde por mucho tiempo.", "imagenes/suenos/suenos_4.jpg"],
    ["Un buen futuro", "Construir una vida con oportunidades y tranquilidad.", "imagenes/suenos/suenos_5.jpg"],
  ]},
  "peliculas": { titulo: "Películas", descripcion: "Algunas películas que forman parte de mis gustos.", imagenes: [
    ["Star Wars: Episodio I", "Una historia de ciencia ficción dentro del universo de Star Wars.", "imagenes/peliculas/star_wars_episodio_i.jpg"],
    ["Star Wars: Episodio III", "La mejor pelicula de ficción.", "imagenes/peliculas/star_wars.jpg"],
    ["Gone Girl", "Un thriller lleno de misterio y giros inesperados.", "imagenes/peliculas/gone_girl.jpg"],
    ["Superman", "Tenemos esperanza.", "imagenes/peliculas/superman.jpg"],
    ["LEGO Batman", "Una película animada con humor y aventuras.", "imagenes/peliculas/lego_batman.jpg"],
  ]},
  "cantantes": { titulo: "Artistas", descripcion: "Algunos artistas y bandas que escucho o me llaman la atención.", imagenes: [
    ["Kanye West", "Artista y productor conocido por su influencia en el hip-hop.", "imagenes/cantantes/kanye_west.jpg"],
    ["Oasis", "Banda británica de rock que marcó los años noventa.", "imagenes/cantantes/oasis.jpg"],
    ["Oasis", "Una imagen relacionada con la banda y su música.", "imagenes/cantantes/oasis_(2).jpg"],
    ["Liam Gallagher", "Cantante conocido por ser la voz de Oasis.", "imagenes/cantantes/liam_gallagher.jpg"],
    ["Noel Gallagher", "Músico, compositor y guitarrista de Oasis.", "imagenes/cantantes/noel_gallagher.jpg"],
  ]},
  "hobbies": { titulo: "Hobbies", descripcion: "Actividades que disfruto hacer durante mi tiempo libre.", imagenes: [
    ["Tocar la guitarra", "Escuchar canciones y descubrir nuevas notas.", "imagenes/hobbies/hobbies_1.jpg"],
    ["Salir a caminar", "Disfrutar de la actividad fisica.", "imagenes/hobbies/hobbies_2.jpg"],
    ["Ver y jugar futbol", "Dedicar un rato a este deporte.", "imagenes/hobbies/hobbies_3.jpg"],
    ["Escuchar Musica", "Probar diferentes canciones y entretenerme.", "imagenes/hobbies/hobbies_4.jpg"],
    ["Diversión", "Desconectarme un rato de las tareas y obligaciones.", "imagenes/hobbies/hobbies_5.jpg"],
  ]},
};
function mostrarSeccion(clave) {
  const seccion = secciones[clave];
  document.getElementById("titulo").textContent = seccion.titulo;
  document.getElementById("descripcion-seccion").textContent = seccion.descripcion;
  const contenedor = document.getElementById("imagenes");
  contenedor.innerHTML = "";
  seccion.imagenes.forEach(([titulo, descripcion, imagen], indice) => {
    const tarjeta = document.createElement("article");
    tarjeta.className = "tarjeta";
    tarjeta.innerHTML = `<div class="imagen-wrap"><img src="${imagen}" alt="${titulo}" loading="lazy"><span class="numero">0${indice + 1}</span></div><div class="texto"><h3>${titulo}</h3><p>${descripcion}</p></div>`;
    contenedor.appendChild(tarjeta);
  });
  document.querySelectorAll(".categoria").forEach(boton => {
    const activa = boton.dataset.categoria === clave;
    boton.classList.toggle("activa", activa);
    boton.setAttribute("aria-pressed", activa ? "true" : "false");
  });
}
document.querySelectorAll(".categoria").forEach(boton => boton.addEventListener("click", () => mostrarSeccion(boton.dataset.categoria)));
mostrarSeccion("carrera");
