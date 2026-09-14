"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const storageKey = "spe-notification-draft";
  const form = document.querySelector(".notification-form");
  const title = document.querySelector("#notification-title");
  const message = document.querySelector("#notification-message");
  const date = document.querySelector("#send-date");
  const time = document.querySelector("#send-time");
  const error = document.querySelector(".form-error");
  const toast = document.querySelector(".toast");
  const previewTitle = document.querySelector("[data-preview-title]");
  const previewMessage = document.querySelector("[data-preview-message]");
  let toastTimer;

  const showToast = (text) => {
    toast.textContent = text;
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2800);
  };

  const updatePreview = () => {
    previewTitle.textContent = title.value.trim() || "التسجيل في الفعالية مفتوح الآن";
    previewMessage.textContent = message.value.trim() || "اضغط لعرض التفاصيل والتسجيل";
  };

  const updateDateTimeState = () => {
    const scheduled = document.querySelector('input[name="sendTiming"]:checked').value === "schedule";
    date.disabled = !scheduled;
    time.disabled = !scheduled;
  };

  const readDraft = () => ({
    type: document.querySelector("#notification-type").value,
    title: title.value,
    message: message.value,
    audience: document.querySelector('input[name="audience"]:checked')?.value,
    channels: [...document.querySelectorAll('input[name="channels"]:checked')].map((input) => input.value),
    sendTiming: document.querySelector('input[name="sendTiming"]:checked').value,
    date: date.value,
    time: time.value,
  });

  const restoreDraft = () => {
    try {
      const draft = JSON.parse(localStorage.getItem(storageKey));
      if (!draft) return;
      document.querySelector("#notification-type").value = draft.type || "event";
      title.value = draft.title || "";
      message.value = draft.message || "";
      document.querySelector(`input[name="audience"][value="${draft.audience || "all"}"]`).checked = true;
      document.querySelectorAll('input[name="channels"]').forEach((input) => { input.checked = draft.channels?.includes(input.value) ?? input.checked; });
      document.querySelector(`input[name="sendTiming"][value="${draft.sendTiming || "schedule"}"]`).checked = true;
      date.value = draft.date || date.value;
      time.value = draft.time || time.value;
    } catch {
      localStorage.removeItem(storageKey);
    }
  };

  const validate = () => {
    if (!title.value.trim()) return "يرجى إدخال عنوان الإشعار.";
    if (!message.value.trim()) return "يرجى إدخال رسالة الإشعار.";
    if (!document.querySelector('input[name="audience"]:checked')) return "يرجى تحديد الجمهور.";
    if (!document.querySelector('input[name="channels"]:checked')) return "يرجى اختيار قناة إرسال واحدة على الأقل.";
    if (document.querySelector('input[name="sendTiming"]:checked').value === "schedule" && (!date.value.trim() || !time.value.trim())) return "يرجى تحديد تاريخ ووقت الإرسال.";
    return "";
  };

  [title, message].forEach((input) => input.addEventListener("input", updatePreview));
  document.querySelectorAll('input[name="sendTiming"]').forEach((input) => input.addEventListener("change", updateDateTimeState));

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const validationMessage = validate();
    if (validationMessage) { error.textContent = validationMessage; return; }
    error.textContent = "";
    showToast(document.querySelector('input[name="sendTiming"]:checked').value === "schedule" ? "تمت جدولة الإشعار بنجاح" : "تم إرسال الإشعار بنجاح");
  });

  document.querySelector(".draft-button").addEventListener("click", () => {
    localStorage.setItem(storageKey, JSON.stringify(readDraft()));
    error.textContent = "";
    showToast("تم حفظ الإشعار كمسودة");
  });

  document.querySelector("[data-logout]").addEventListener("click", (event) => {
    event.preventDefault();
    if (!window.confirm("هل أنت متأكد من تسجيل الخروج؟")) return;
    // أضف مسار صفحة تسجيل الدخول هنا عند توفرها.
  });

  restoreDraft();
  updatePreview();
  updateDateTimeState();
});
