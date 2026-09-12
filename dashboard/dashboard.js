"use strict";

// تفاعلات مبدئية قابلة للربط بالصفحات والخدمات لاحقًا.
document.addEventListener("DOMContentLoaded", () => {
  const toast = document.querySelector(".toast");
  const actionLabels = {
    "create-event": "سيتم فتح نموذج إنشاء فعالية.",
    "add-news": "سيتم فتح نموذج إضافة خبر.",
    "send-notification": "سيتم فتح نموذج إرسال إشعار.",
    "issue-certificates": "سيتم فتح صفحة إصدار الشهادات.",
    "manage-event": "سيتم فتح صفحة إدارة الفعالية.",
  };
  let toastTimer;

  const showToast = (message) => {
    if (!toast) return;

    window.clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add("is-visible");
    toastTimer = window.setTimeout(() => {
      toast.classList.remove("is-visible");
    }, 2800);
  };

  document.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.action;
      document.dispatchEvent(new CustomEvent("dashboard:action", { detail: { action } }));
      showToast(actionLabels[action]);
    });
  });

  // يجعل حالة الرابط واضحة في الواجهة حتى يتم ربط الصفحات الحقيقية لاحقًا.
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      document.querySelector(".nav-link.is-active")?.classList.remove("is-active");
      document.querySelector(".nav-link[aria-current='page']")?.removeAttribute("aria-current");
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
    });
  });
});
