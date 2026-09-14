"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const storageKey = "spe-platform-settings";
  const form = document.querySelector(".settings-form");
  const error = document.querySelector(".form-error");
  const toast = document.querySelector(".toast");
  const inputs = {
    clubName: document.querySelector("#club-name"),
    officialEmail: document.querySelector("#official-email"),
    membershipLink: document.querySelector("#membership-link"),
    academicYear: document.querySelector("#academic-year"),
  };
  let toastTimer;

  const showToast = (message) => {
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2800);
  };

  const loadSettings = () => {
    try {
      const savedSettings = JSON.parse(localStorage.getItem(storageKey));
      if (!savedSettings) return;
      Object.entries(inputs).forEach(([key, input]) => {
        if (typeof savedSettings[key] === "string") input.value = savedSettings[key];
      });
    } catch {
      localStorage.removeItem(storageKey);
    }
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const settings = Object.fromEntries(Object.entries(inputs).map(([key, input]) => [key, input.value.trim()]));

    if (!settings.clubName || !settings.officialEmail || !settings.membershipLink || !settings.academicYear) {
      error.textContent = "يرجى تعبئة جميع الحقول المطلوبة.";
      return;
    }

    if (!inputs.officialEmail.validity.valid) {
      error.textContent = "يرجى إدخال بريد إلكتروني صحيح.";
      inputs.officialEmail.focus();
      return;
    }

    localStorage.setItem(storageKey, JSON.stringify(settings));
    error.textContent = "";
    showToast("تم حفظ التغييرات بنجاح");
  });

  document.querySelector("[data-logout]").addEventListener("click", (event) => {
    event.preventDefault();
    if (!window.confirm("هل أنت متأكد من تسجيل الخروج؟")) return;
    // أضف مسار صفحة تسجيل الدخول هنا عند توفرها.
  });

  document.querySelector("[data-permissions]").addEventListener("click", () => {
    showToast("سيتم فتح إدارة الصلاحيات هنا.");
  });

  loadSettings();
});
