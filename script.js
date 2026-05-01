window.onload = cargarPosts;

// 💾 publicar
function publicarPost() {
  let user = document.getElementById("username").value || "Anon";
  let texto = document.getElementById("postInput").value;

  if (texto.trim() === "") return;

  let posts = JSON.parse(localStorage.getItem("posts")) || [];

  let nuevo = {
    user,
    texto,
    time: new Date().toLocaleString()
  };

  posts.unshift(nuevo);
  localStorage.setItem("posts", JSON.stringify(posts));

  document.getElementById("postInput").value = "";

  document.getElementById("msgSound").play(); // 🔔 sonido

  mostrarPosts(posts);
}

// 📦 cargar
function cargarPosts() {
  let posts = JSON.parse(localStorage.getItem("posts")) || [];
  mostrarPosts(posts);
}

// 🧾 mostrar
function mostrarPosts(posts) {
  let feed = document.getElementById("feed");
  feed.innerHTML = "";

  posts.forEach(p => {
    let div = document.createElement("div");
    div.className = "post";

    div.innerHTML = `
      <b>👤 ${p.user}</b>
      <div>${p.texto}</div>
      <div style="font-size:11px;opacity:0.6;">⏱ ${p.time}</div>
    `;

    feed.appendChild(div);
  });
}

// ⌨️ escribiendo
function typing() {
  let input = document.getElementById("chatInput").value;
  let chat = document.getElementById("chatBody");

  if (input.length > 0) {
    chat.innerHTML = "💬 escribiendo...";
  } else {
    chat.innerHTML = "";
  }
}