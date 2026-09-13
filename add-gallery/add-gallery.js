document.addEventListener("DOMContentLoaded", () => {

    const imageInput = document.getElementById("gallery-images");
    const imagesGrid = document.getElementById("images-grid");

    const saveDraftButton = document.getElementById("save-draft");
    const publishButton = document.getElementById("publish-gallery");

    const logoutLink = document.querySelector("[data-logout]");


    /* =====================================================
       IMAGE UPLOAD
    ===================================================== */

    imageInput.addEventListener("change", () => {

        const files = Array.from(imageInput.files);

        if (!files.length) {
            return;
        }

        files.forEach((file) => {

            if (!file.type.startsWith("image/")) {
                return;
            }

            const reader = new FileReader();

            reader.onload = (event) => {

                const preview = document.createElement("div");

                preview.className = "image-preview";

                preview.innerHTML = `
                    <img
                        src="${event.target.result}"
                        alt="صورة مرفوعة"
                    >

                    <button
                        type="button"
                        class="delete-image"
                    >
                        × حذف
                    </button>
                `;

                imagesGrid.appendChild(preview);

                const deleteButton =
                    preview.querySelector(".delete-image");

                deleteButton.addEventListener("click", () => {
                    preview.remove();
                });

            };

            reader.readAsDataURL(file);

        });

        imageInput.value = "";

    });


    /* =====================================================
       DELETE DEFAULT PLACEHOLDERS
    ===================================================== */

    document
        .querySelectorAll(".image-placeholder .delete-image")
        .forEach((button) => {

            button.addEventListener("click", () => {

                const card = button.closest(".image-placeholder");

                if (card) {
                    card.remove();
                }

            });

        });


    /* =====================================================
       SAVE DRAFT
    ===================================================== */

    saveDraftButton.addEventListener("click", () => {

        alert("تم حفظ الألبوم كمسودة.");

    });


    /* =====================================================
       PUBLISH
    ===================================================== */

    publishButton.addEventListener("click", () => {

        const title =
            document.getElementById("album-title").value.trim();

        if (!title) {

            alert("يرجى كتابة عنوان الألبوم أولاً.");

            document
                .getElementById("album-title")
                .focus();

            return;
        }

        alert("تم نشر الألبوم بنجاح.");

    });


    /* =====================================================
       LOGOUT
    ===================================================== */

    if (logoutLink) {

        logoutLink.addEventListener("click", (event) => {

            event.preventDefault();

            const confirmed =
                window.confirm(
                    "هل أنت متأكد من تسجيل الخروج؟"
                );

            if (!confirmed) {
                return;
            }

            // رابط تسجيل الدخول يضاف لاحقًا.

        });

    }


    /* =====================================================
       LANGUAGE SWITCH
    ===================================================== */

    const languageSwitch =
        document.querySelector(".language-switch");

    if (languageSwitch) {

        languageSwitch.addEventListener("click", () => {

            alert("تغيير اللغة سيتم ربطه لاحقًا.");

        });

    }

});