// IMPORTANT: Replace with the business WhatsApp number, digits only, e.g. 919876543210.
const WHATSAPP_NUMBER = "917078890096";
const waLink = (message) => {
  if (WHATSAPP_NUMBER === "YOUR_WHATSAPP_NUMBER" || !/^\d{10,15}$/.test(WHATSAPP_NUMBER)) {
    alert("पहले app.js में YOUR_WHATSAPP_NUMBER की जगह केंद्र का सही WhatsApp नंबर डालें।");
    return null;
  }
  return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
};
document.querySelectorAll("[data-wa]").forEach((el) => {
  el.addEventListener("click", (event) => {
    const url = waLink("नमस्ते, मुझे श्री बालाजी ज्योतिष केंद्र की सेवाओं के बारे में जानकारी चाहिए।");
    if (url) { event.preventDefault(); window.open(url, "_blank", "noopener"); }
    else event.preventDefault();
  });
});
document.querySelectorAll("[data-product]").forEach((el) => {
  el.addEventListener("click", (event) => {
    const url = waLink("नमस्ते, मुझे " + el.dataset.product + " के वजन, कीमत, उपलब्धता और यदि उपलब्ध हो तो लैब रिपोर्ट के बारे में जानकारी चाहिए।");
    if (url) { event.preventDefault(); window.open(url, "_blank", "noopener"); }
    else event.preventDefault();
  });
});
document.querySelectorAll("[data-service]").forEach((el) => {
  el.addEventListener("click", (event) => {
    const url = waLink("नमस्ते, मुझे " + el.dataset.service + " के समय और शुल्क की जानकारी चाहिए।");
    if (url) { event.preventDefault(); window.open(url, "_blank", "noopener"); }
    else event.preventDefault();
  });
});
document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("customerName").value.trim();
  const interest = document.getElementById("interest").value;
  const message = document.getElementById("customerMessage").value.trim();
  const url = waLink("नमस्ते, मेरा नाम " + name + " है। विषय: " + interest + "। संदेश: " + (message || "कृपया अधिक जानकारी दें।"));
  if (url) window.open(url, "_blank", "noopener");
});
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
document.getElementById("year").textContent = new Date().getFullYear();
if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./service-worker.js").catch(() => {}));
}
