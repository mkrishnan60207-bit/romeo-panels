const products=[
 {name:"Digital Template Pack",desc:"Editable design templates",price:49,icon:"✦"},
 {name:"Creator Resource Kit",desc:"Assets for content creators",price:99,icon:"◇"},
 {name:"Study Planner Bundle",desc:"Printable planning resources",price:149,icon:"▤"},
 {name:"Premium Wallpaper Set",desc:"Original digital wallpapers",price:199,icon:"✧"}
];
let balance=0, user=null, orders=[];
const grid=document.getElementById("productGrid");
function render(){grid.innerHTML=products.map((p,i)=>`<article class="product"><div class="product-icon">${p.icon}</div><h3>${p.name}</h3><p class="muted">${p.desc}</p><div class="price">₹${p.price}</div><button data-buy="${i}">Buy Now</button></article>`).join("");document.getElementById("balance").textContent=`₹${balance.toFixed(2)}`;document.getElementById("welcome").textContent=user?`Signed in for this demo: ${user}`:"You are browsing as a guest.";document.getElementById("ordersText").textContent=orders.length?orders.map(o=>`${o.name} — ₹${o.price} (demo)`).join(" • "):"No demo orders yet."}
grid.addEventListener("click",e=>{const i=e.target.dataset.buy;if(i===undefined)return;const p=products[Number(i)];if(!user){alert("Please use Register or Login first (demo only).");return}if(balance<p.price){alert("Demo wallet balance is too low. Use Try demo top-up.");return}balance-=p.price;orders.push(p);render();alert("Demo order recorded. No real product or payment was processed.")});
const dlg=document.getElementById("authDialog");let mode="Login";
function openAuth(m){mode=m;document.getElementById("dialogTitle").textContent=m;dlg.showModal()}
document.getElementById("loginBtn").onclick=()=>openAuth("Login");
document.getElementById("registerBtn").onclick=()=>openAuth("Register");
document.getElementById("authSubmit").onclick=e=>{e.preventDefault();const email=document.getElementById("email").value;const pass=document.getElementById("password").value;if(!email||pass.length<8)return alert("Enter an email and password with at least 8 characters.");user=email;dlg.close();render();alert(`${mode} demo successful. This is not secure real authentication.`)};
document.getElementById("addMoney").onclick=()=>{if(!user)return alert("Register or login in the demo first.");balance+=100;render();alert("₹100 demo credit added. This is simulated only; no money moved.")};
document.getElementById("adminInfo").onclick=()=>alert("Admin panel is not enabled in this front-end demo. A secure backend with admin-only permissions is required.");
render();
