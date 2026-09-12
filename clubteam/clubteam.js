"use strict";

document.addEventListener("DOMContentLoaded", () => {
	const members = [
		{ name: "راكان محمد الجهني", role: "President" },
		{ name: "أصالة عمر الجهني", role: "Vice President" },
		{ name: "جوري عبدالجبار الجهني", role: "Program Chairperson" },
		{ name: "لمار وليد العباسي", role: "Membership Chairperson" },
		{ name: "جمانة عبدالعزيز الجهني", role: "Webmaster" },
	];
	const editModal = document.querySelector('[data-modal="edit"]');
	const permissionsModal = document.querySelector('[data-modal="permissions"]');
	const editForm = document.querySelector("[data-edit-form]");
	const memberName = document.querySelector("#member-name");
	const memberRole = document.querySelector("#member-role");
	const toast = document.querySelector(".toast");
	let selectedMemberIndex = null;
	let toastTimer;

	const showToast = (message) => {
		toast.textContent = message;
		toast.classList.add("is-visible");
		window.clearTimeout(toastTimer);
		toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2800);
	};

	const openModal = (modal) => {
		modal.hidden = false;
		document.body.style.overflow = "hidden";
	};

	const closeModal = (modal) => {
		modal.hidden = true;
		if (editModal.hidden && permissionsModal.hidden) document.body.style.overflow = "";
	};

	document.querySelectorAll("[data-edit-member]").forEach((button) => {
		button.addEventListener("click", () => {
			selectedMemberIndex = Number(button.dataset.editMember);
			memberName.value = members[selectedMemberIndex].name;
			memberRole.value = members[selectedMemberIndex].role;
			openModal(editModal);
			memberName.focus();
		});
	});

	editForm.addEventListener("submit", (event) => {
		event.preventDefault();
		const name = memberName.value.trim();
		if (!name || selectedMemberIndex === null) {
			memberName.focus();
			return;
		}
		members[selectedMemberIndex] = { name, role: memberRole.value };
		const row = document.querySelector(`[data-member-index="${selectedMemberIndex}"]`);
		row.querySelector("strong").textContent = name;
		row.querySelector("span").textContent = memberRole.value;
		closeModal(editModal);
	});

	document.querySelectorAll("[data-open-permissions]").forEach((button) => {
		button.addEventListener("click", () => openModal(permissionsModal));
	});

	document.querySelector("[data-permissions-form]").addEventListener("submit", (event) => {
		event.preventDefault();
		closeModal(permissionsModal);
		showToast("تم حفظ الصلاحيات بنجاح");
	});

	document.querySelectorAll("[data-close-modal]").forEach((button) => {
		button.addEventListener("click", () => closeModal(button.closest(".modal-backdrop")));
	});

	document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
		backdrop.addEventListener("click", (event) => {
			if (event.target === backdrop) closeModal(backdrop);
		});
	});

	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape") {
			document.querySelectorAll(".modal-backdrop:not([hidden])").forEach(closeModal);
		}
	});

	document.querySelector("[data-logout]").addEventListener("click", (event) => {
		event.preventDefault();
		if (!window.confirm("هل أنت متأكد من تسجيل الخروج؟")) return;
		// أضف مسار صفحة تسجيل الدخول هنا عند توفرها.
	});
});
