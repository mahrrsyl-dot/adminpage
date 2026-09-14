"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const storageKey = "spe-team-members";
  const form = document.querySelector(".member-form");
  const error = document.querySelector(".form-error");
  const toast = document.querySelector(".toast");
  let toastTimer;

  const showToast = (message) => {
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2800);
  };

  const readMembers = () => {
    try { return JSON.parse(localStorage.getItem(storageKey)) || []; } catch { return []; }
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const arabicName = document.querySelector("#arabic-name").value.trim();
    const role = document.querySelector("#member-role").value;
    const email = document.querySelector("#university-email");

    if (!arabicName) { error.textContent = "يرجى إدخال الاسم الكامل للعضو."; return; }
    if (!role) { error.textContent = "يرجى اختيار منصب العضو."; return; }
    if (email.value.trim() && !email.validity.valid) { error.textContent = "يرجى إدخال بريد جامعي صحيح."; email.focus(); return; }

    const member = {
      arabicName,
      englishName: document.querySelector("#english-name").value.trim(),
      role,
      department: document.querySelector("#department").value.trim(),
      email: email.value.trim(),
      status: document.querySelector("#member-status").value,
      permissions: [...document.querySelectorAll('input[name="permissions"]:checked')].map((input) => input.value),
    };
    const members = readMembers();
    members.push(member);
    localStorage.setItem(storageKey, JSON.stringify(members));
    error.textContent = "";
    showToast("تمت إضافة العضو بنجاح");
    window.setTimeout(() => { window.location.href = "../clubteam/clubteam.html"; }, 850);
  });

  document.querySelector("[data-logout]").addEventListener("click", (event) => {
    event.preventDefault();
    if (!window.confirm("هل أنت متأكد من تسجيل الخروج؟")) return;
    // أضف مسار صفحة تسجيل الدخول هنا عند توفرها.
  });
});
