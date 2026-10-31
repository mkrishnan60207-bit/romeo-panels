const products = [
  {
    name: "Digital Template Pack",
    desc: "Editable design templates",
    price: 49,
    icon: "✦",
    durations: [{ label: "Standard", price: 49 }]
  },
  {
    name: "Creator Resource Kit",
    desc: "Assets for creators",
    price: 99,
    icon: "◇",
    durations: [{ label: "Standard", price: 99 }]
  },
  {
    name: "Study Planner Bundle",
    desc: "Printable planner",
    price: 149,
    icon: "▤",
    durations: [{ label: "Standard", price: 149 }]
  },
  {
    name: "Premium Wallpaper Set",
    desc: "Digital wallpapers",
    price: 199,
    icon: "✧",
    durations: [{ label: "Standard", price: 199 }]
  },
  {
    name: "Digital Training Course",
    desc: "Standalone Digital Training",
    icon: "♛",
    durations: [
      { label: "1 Hour", price: 29 },
      { label: "3 Hours", price: 59 },
      { label: "6 Hours", price: 89 },
      { label: "12 Hours", price: 119 },
      { label: "1 Day", price: 185 },
      { label: "3 Days", price: 330 },
      { label: "7 Days", price: 499 },
      { label: "15 Days", price: 930 },
      { label: "30 Days", price: 1449 }
    ]
  }
];
let balance=0, user=null, orders=[];
const grid=document.getElementById("productGrid");
function render() {
  grid.innerHTML = products.map((p, i) => `
    <article class="product">
      <div class="product-icon">${p.icon}</div>

      <h3>${p.name}</h3>
      <p class="muted">${p.desc}</p>

      <label>Select Duration:</label>

      <select class="duration-select" data-duration="${i}">
        ${p.durations.map((d, j) => `
          <option value="${j}">
            ${d.label} - ₹${d.price}
          </option>
        `).join("")}
      </select>

      <div class="price" id="price-${i}">
        ₹${p.durations[0].price}
      </div>

      <button data-buy="${i}">Buy Now</button>
    </article>
  `).join("");

  document.getElementById("balance").textContent =
    `₹${balance.toFixed(2)}`;

  document.getElementById("welcome").textContent =
    user
      ? `Signed in for this demo: ${user}`
      : "You are browsing as a guest.";

  document.getElementById("ordersText").textContent =
    orders.length
      ? orders.map(o => `${o.name} — ₹${o.price} (demo)`).join(" • ")
      : "No demo orders yet.";
}
const dlg=document.getElementById("authDialog");let mode="Login";
function openAuth(m){mode=m;document.getElementById("dialogTitle").textContent=m;dlg.showModal()}
document.getElementById("loginBtn").onclick=()=>openAuth("Login");
document.getElementById("registerBtn").onclick=()=>openAuth("Register");
document.getElementById("authSubmit").onclick=e=>{e.preventDefault();const email=document.getElementById("email").value;const pass=document.getElementById("password").value;if(!email||pass.length<8)return alert("Enter an email and password with at least 8 characters.");user=email;dlg.close();render();alert(`${mode} demo successful. This is not secure real authentication.`)};
document.getElementById("addMoney").onclick=()=>{if(!user)return alert("Register or login in the demo first.");balance+=100;render();alert("₹100 demo credit added. This is simulated only; no money moved.")};
document.getElementById("adminInfo").onclick=()=>alert("Admin panel is not enabled in this front-end demo. A secure backend with admin-only permissions is required.");
render();
