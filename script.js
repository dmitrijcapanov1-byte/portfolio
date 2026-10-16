document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Валидация
    if (!name || !email || !message) {
      alert("Пожалуйста, заполните все поля!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Введите корректный email!");
      return;
    }

    // Успех (по ТЗ)
    alert("Спасибо! Мы свяжемся с вами.");
    form.reset();
  });
});
