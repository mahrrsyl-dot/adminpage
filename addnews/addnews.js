"use strict";

document.addEventListener("DOMContentLoaded", () => {

    const imageUploadButton =
        document.querySelector("#imageUploadButton");

    const imageInput =
        document.querySelector("#imageInput");

    const publishButton =
        document.querySelector("#publishButton");

    const reviewButton =
        document.querySelector("#reviewButton");

    const previewButton =
        document.querySelector("#previewButton");

    const draftButton =
        document.querySelector("#draftButton");

    const logoutLink =
        document.querySelector("#logoutLink");


    /* ================= IMAGE UPLOAD ================= */

    imageUploadButton.addEventListener("click", () => {
        imageInput.click();
    });


    imageInput.addEventListener("change", () => {

        const file = imageInput.files[0];

        if (!file) {
            return;
        }

        imageUploadButton.querySelector("strong").textContent =
            file.name;

        imageUploadButton.querySelector("span").textContent =
            "تم اختيار الصورة الرئيسية";
    });


    /* ================= BUTTONS ================= */

    publishButton.addEventListener("click", () => {

        const title =
            document.querySelector("#newsTitle").value.trim();

        if (!title) {
            alert("يرجى كتابة عنوان الخبر أولًا.");
            return;
        }

        alert("تم نشر الخبر بنجاح.");
    });


    reviewButton.addEventListener("click", () => {

        alert("تم إرسال الخبر للمراجعة.");
    });


    previewButton.addEventListener("click", () => {

        alert("سيتم عرض معاينة الخبر هنا.");
    });


    draftButton.addEventListener("click", () => {

        alert("تم حفظ الخبر كمسودة.");
    });


    /* ================= LOGOUT ================= */

    logoutLink.addEventListener("click", (event) => {

        event.preventDefault();

        const confirmed =
            window.confirm("هل أنت متأكد من تسجيل الخروج؟");

        if (!confirmed) {
            return;
        }

        // أضف مسار صفحة تسجيل الدخول هنا عند توفرها.
    });

});