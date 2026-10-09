/*
  IMPORTANT: Replace the placeholder below with the business WhatsApp number.
  Format: country code + number, digits only. Example for India: 919876543210
*/
const WHATSAPP_NUMBER = "+919058019715";

const waLink = (message) => {
  if (!/^\d{10,15}$/.test(WHATSAPP_NUMBER)) {
    alert("पहले app.js फ़ाइल में YOUR_WHATSAPP_NUMBER की जगह सही WhatsApp नंबर डालें। भारत के लिए 91 के बाद 10 अंकों का नंबर लिखें।");
    return null;
  }
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

document.querySelectorAll("[data-service]").forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById("serviceSelect").value = button.dataset.service;
    document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
  });
});
document.querySelectorAll("[data-product]").forEach(button => {
  button.addEventListener("click", () => {
    const url = waLink(`नमस्कार, मुझे ${button.dataset.product} के बारे में जानकारी, उपलब्धता, वजन, कीमत और लैब रिपोर्ट के बारे में पूछना है।`);
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  });
});

const search = document.getElementById("gemSearch");
const filter = document.getElementById("gemFilter");
function filterGems() {
  const term = search.value.trim().toLowerCase();
  document.querySelectorAll(".gem-card").forEach(card => {
    const matchesName = card.dataset.name.toLowerCase().includes(term);
    const matchesColor = filter.value === "all" || card.dataset.color === filter.value;
    card.hidden = !(matchesName && matchesColor);
  });
}
search.addEventListener("input", filterGems);
filter.addEventListener("change", filterGems);

document.getElementById("bookingForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();
  const service = document.getElementById("serviceSelect").value;
  const message = document.getElementById("customerMessage").value.trim();
  if (!name) return;
  const body = `नमस्कार श्री बालाजी ज्योतिष केंद्र,\nमेरा नाम: ${name}\nमोबाइल: ${phone || "नहीं दिया"}\nसेवा: ${service}\nसंदेश: ${message || "कृपया अधिक जानकारी दें"}\nकृपया उपलब्ध समय और शुल्क बताएं।`;
  const url = waLink(body);
  if (url) {
    document.getElementById("formNote").textContent = "WhatsApp खुल रहा है। संदेश जाँचकर खुद भेजें; बुकिंग भेजने के बाद ही केंद्र से पुष्टि लें।";
    window.open(url, "_blank", "noopener,noreferrer");
  }
});

document.getElementById("floatingWhatsApp").addEventListener("click", event => {
  if (!/^\d{10,15}$/.test(WHATSAPP_NUMBER)) {
    event.preventDefault();
    alert("WhatsApp चालू करने के लिए app.js में अपना सही नंबर सेट करें।");
  }
});

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./service-worker.js").catch(err => console.info("Service worker registration skipped:", err)));
}
