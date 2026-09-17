"use strict";

document.addEventListener("DOMContentLoaded", () => {

    const toast = document.querySelector(".toast");

    const actionLabels = {
        "create-event": "سيتم فتح صفحة إنشاء فعالية.",
        "add-news": "سيتم فتح صفحة إضافة خبر.",
        "send-notification": "سيتم فتح صفحة إرسال إشعار.",
        "issue-certificates": "سيتم فتح صفحة إصدار الشهادات.",
        "manage-event": "سيتم فتح صفحة إدارة الفعالية."
    };


    let toastTimer;


    function showToast(message) {

        if (!toast) return;

        window.clearTimeout(toastTimer);

        toast.textContent = message;

        toast.classList.add("is-visible");

        toastTimer = window.setTimeout(() => {

            toast.classList.remove("is-visible");

        }, 2800);
    }



    /*
     * الإجراءات السريعة
     */

    document
        .querySelectorAll("[data-action]")
        .forEach((button) => {

            button.addEventListener("click", () => {

                const action = button.dataset.action;

                const destinations = {
                    "create-event": "../Events/CreateEvent/CreateEvent.html",
                    "add-news": "../addnews/addnews.html",
                    "send-notification": "../send-notification/send-notification.html",
                    "issue-certificates": "../Certificates/Certificates.html"
                };

                if (destinations[action]) {
                    window.location.href = destinations[action];
                    return;
                }

                if (actionLabels[action]) {
                    showToast(actionLabels[action]);
                }

            });

        });



    /*
     * تسجيل الخروج
     */

    const logout = document.querySelector("[data-logout]");

    if (logout) {

        logout.addEventListener("click", (event) => {

            event.preventDefault();

            const confirmed = window.confirm(
                "هل أنت متأكد من تسجيل الخروج؟"
            );

            if (!confirmed) return;

            showToast("سيتم تسجيل الخروج لاحقًا.");

        });

    }

});