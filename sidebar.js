"use strict";

(function () {
  const scriptUrl = document.currentScript && document.currentScript.src;
  const rootUrl = scriptUrl ? new URL("./", scriptUrl) : new URL("./", window.location.href);
  const languageKey = "speAdminLanguage";
  const translations = {
    ar: {
      dashboard: "لوحة التحكم",
      events: "الفعاليات",
      registration: "التسجيل والحضور",
      members: "الأعضاء",
      content: "إضافة محتوى",
      gallery: "المعرض",
      team: "فريق النادي",
      certificates: "الشهادات",
      notifications: "الإشعارات",
      permissions: "الصلاحيات",
      settings: "الإعدادات",
      platform: "إدارة منصة النادي",
      role: "مدير النظام",
      logout: "تسجيل الخروج",
    },
    en: {
      dashboard: "Dashboard",
      events: "Events",
      registration: "Registration & Attendance",
      members: "Members",
      content: "Add Content",
      gallery: "Gallery",
      team: "Club Team",
      certificates: "Certificates",
      notifications: "Notifications",
      permissions: "Permissions",
      settings: "Settings",
      platform: "Club Platform Management",
      role: "System Administrator",
      logout: "Sign Out",
    },
  };
  const pageTranslations = {
    "إدارة وتشكيل منصة SPE بجامعة طيبة": "Managing and building the SPE platform at Taibah University",
    "إدارة وتشغيل منصة SPE بجامعة طيبة": "Manage and operate the SPE platform at Taibah University",
    "إدارة منصة النادي": "Club Platform Management",
    "القائمة الرئيسية": "Main navigation",
    "روابط لوحة التحكم": "Dashboard links",
    "لوحة التحكم": "Dashboard",
    "تفاصيل الحضور": "Attendance Details",
    "إصدار الشهادات": "Issue Certificates",
    "إصدار شهادات": "Issue Certificates",
    "إرسال إشعار": "Send Notification",
    "إعدادات منصة SPE": "SPE Platform Settings",
    "الشهادات الصادرة": "Issued Certificates",
    "42 بانتظار الإصدار": "42 awaiting issue",
    "تسجيلات الفعاليات": "Event Registrations",
    "+18% عن الشهر الماضي": "+18% from last month",
    "الفعاليات القادمة": "Upcoming Events",
    "3 تسجيلات مفتوح": "3 registrations open",
    "إجمالي الأعضاء": "Total Members",
    "+12 هذا الشهر": "+12 this month",
    "إنشاء فعالية": "Create Event",
    "إضافة خبر": "Add News",
    "التسجيل مفتوح": "Registration Open",
    "مستقبل الأمن السيبراني": "Future of Cybersecurity",
    "في المملكة": "in the Kingdom",
    "10:00 ص": "10:00 AM",
    "تم إنشاء فعالية «مستقبل الطاقة»": "Event “Future of Energy” was created",
    "منذ قليل": "Just now",
    "تم تسجيل 24 عضوًا في ورشة الأمن": "24 members registered for the security workshop",
    "تم نشر خبر جديد": "A new news item was published",
    "تم إصدار 38 شهادة حضور": "38 attendance certificates were issued",
    "تم تحديث بيانات عضو": "Member data was updated",
    "+ إنشاء فعالية جديدة": "+ Create New Event",
    "الحالة": "Status",
    "المسجلون": "Registrants",
    "الإجراءات": "Actions",
    "29 مايو": "May 29",
    "تعديل": "Edit",
    "ملتقى الطاقة السنوي": "Annual Energy Forum",
    "12 يونيو": "June 12",
    "زيارة ميدانية": "Field Visit",
    "20 يونيو": "June 20",
    "انتظار": "Pending",
    "ورشة كتابة السيرة": "CV Writing Workshop",
    "3 يوليو": "July 3",
    "مسودة": "Draft",
    "18 يوليو": "July 18",
    "مغلق": "Closed",
    "قائمة الانتظار": "Waitlist",
    "تم الحضور": "Attended",
    "إجمالي المسجلين": "Total Registrants",
    "كل الفعاليات": "All Events",
    "120 مسجل": "120 registrants",
    "150 مسجل": "150 registrants",
    "40 مسجل": "40 registrants",
    "60 مسجل": "60 registrants",
    "قائمة المسجلين": "Registrant List",
    "عرض": "View",
    "مسجل": "Registered",
    "ملتقى الطاقة": "Energy Forum",
    "تصدير Excel": "Export Excel",
    "قائمة الحضور لفعالية (مستقبل الأمن السيبراني)": "Attendance list for the event (Future of Cybersecurity)",
    "تتحدث الحالة تلقائياً بعد تأكيد المنظم لدخول المشارك": "Status updates automatically after the organizer confirms the participant's entry",
    "لم يحضروا": "Did not attend",
    "الحاضرون": "Attendees",
    "الكل": "All",
    "الاسم": "Name",
    "رقم التسجيل": "Registration Number",
    "10:02 ص": "10:02 AM",
    "10:00 ص": "10:00 AM",
    "9:58 ص": "9:58 AM",
    "9:57 ص": "9:57 AM",
    "9:55 ص": "9:55 AM",
    "تصدير القائمة": "Export List",
    "عرض الحاضرين فقط": "Show attendees only",
    "الحاضر = تم تأكيد دخوله من شاشة المنظمين | لم يحضر = مسجل في الفعالية ولم يتم تأكيد دخوله بعد": "Attended = entry confirmed from the organizers' screen | Did not attend = registered for the event but entry has not been confirmed",
    "إدارة ما يظهر في الموقع للمستخدمين": "Manage what users see on the website",
    "الأخبار": "News",
    "12 منشور": "12 posts",
    "المجلة": "Magazine",
    "4 أعداد": "4 issues",
    "إضافة عدد": "Add Issue",
    "المعرض": "Gallery",
    "86 صورة": "86 images",
    "إدارة الصور": "Manage Images",
    "الإنجازات": "Achievements",
    "18 إنجاز": "18 achievements",
    "إضافة إنجاز": "Add Achievement",
    "المحتوى بانتظار المراجعة": "Content awaiting review",
    "مراجعة ونشر": "Review and Publish",
    "إنشاء خبر ثم مراجعته قبل النشر": "Create news, then review it before publishing",
    "عنوان الخبر": "News Title",
    "الكاتب / القسم": "Author / Department",
    "تاريخ النشر": "Publication Date",
    "محتوى الخبر": "News Content",
    "الصورة الرئيسية": "Main Image",
    "الصورة التي ستظهر في صفحة الأخبار": "The image shown on the news page",
    "إعدادات النشر": "Publishing Settings",
    "يظهر في الصفحة الرئيسية": "Show on the home page",
    "خبر مثبت": "Pinned News",
    "نشر الآن": "Publish Now",
    "إرسال للمراجعة": "Send for Review",
    "معاينة الخبر": "Preview News",
    "ارفع الصور واربطها بالفعالية أو التصنيف المناسب": "Upload images and link them to the appropriate event or category",
    "عنوان الألبوم": "Album Title",
    "الفعالية المرتبطة": "Related Event",
    "اختر فعالية": "Select an event",
    "الملتقى السنوي 2026": "Annual Forum 2026",
    "ورشة العمل": "Workshop",
    "المسابقة الطلابية": "Student Competition",
    "تاريخ الألبوم": "Album Date",
    "اسحب الصور هنا أو اضغط للرفع": "Drag images here or click to upload",
    "يمكن رفع عدة صور — PNG / JPG / WebP": "Multiple images can be uploaded — PNG / JPG / WebP",
    "الصور المرفوعة": "Uploaded Images",
    "صورة مرفوعة": "Uploaded image",
    "معاينة صورة 1": "Image Preview 1",
    "معاينة صورة 2": "Image Preview 2",
    "معاينة صورة 3": "Image Preview 3",
    "معاينة صورة 4": "Image Preview 4",
    "× حذف": "× Delete",
    "إظهار الألبوم في صفحة المعرض": "Show the album on the gallery page",
    "نشر الألبوم": "Publish Album",
    "فريق النادي": "Club Team",
    "+ إضافة عضو": "+ Add Member",
    "تحديد ما يستطيع كل منصب إدارته": "Define what each position can manage",
    "كل الصلاحيات": "All permissions",
    "إدارة + متابعة": "Management + Follow-up",
    "الموقع + التقنية": "Website + Technology",
    "الأخبار + المعرض": "News + Gallery",
    "الأعضاء + التسجيل": "Members + Registration",
    "تعديل العضو": "Edit Member",
    "حفظ التعديلات": "Save Changes",
    "يمكنك تحديد صلاحيات كل منصب.": "You can define permissions for each position.",
    "حفظ الصلاحيات": "Save Permissions",
    "— حضر": "— Attended",
    "— لم يحضر": "— Did not attend",
    "تحديد كل الحاضرين": "Select all attendees",
    "تشهد بأن": "This certifies that",
    "[اسم العضو]": "[Member Name]",
    "قد حضر فعالية [اسم الفعالية]": "attended the event [Event Name]",
    "تاريخ الإصدار": "Issue Date",
    "إرسال الشهادة بالبريد بعد الإصدار": "Email the certificate after issuing",
    "حدد الجمهور والقناة ووقت الإرسال": "Select the audience, channel, and send time",
    "الرسالة": "Message",
    "قنوات الإرسال": "Delivery Channels",
    "إشعار داخل المنصة": "In-platform Notification",
    "بريد إلكتروني": "Email",
    "رسالة SMS": "SMS",
    "معاينة الإشعار": "Notification Preview",
    "نوع الإشعار": "Notification Type",
    "فعالية": "Event",
    "خبر": "News",
    "تنبيه عام": "General Alert",
    "كل الأعضاء": "All Members",
    "المسجلون في فعالية محددة": "Registrants for a specific event",
    "أعضاء فريق النادي": "Club Team Members",
    "مجموعة مخصصة": "Custom Group",
    "جدولة الإرسال": "Schedule Sending",
    "إضافة محتوى": "Add Content",
    "إضافة صور للمعرض": "Add Gallery Images",
    "إضافة خبر جديد": "Add News",
    "إضافة عضو للفريق": "Add Team Member",
    "أضف بيانات العضو وحدد منصبه وصلاحياته": "Add the member's details, position, and permissions",
    "بيانات العضو": "Member Details",
    "الاسم الكامل": "Full Name",
    "اسم العضو": "Member name",
    "المنصب": "Position",
    "اختر المنصب": "Select a position",
    "البريد الجامعي": "University Email",
    "الاسم بالإنجليزية": "English Name",
    "Full Name": "Full Name",
    "القسم / اللجنة": "Department / Committee",
    "التقنية والموقع": "Technology and Website",
    "حالة العضو": "Member Status",
    "نشط": "Active",
    "غير نشط": "Inactive",
    "إدارة الفعاليات": "Manage Events",
    "إدارة الأخبار والمحتوى": "Manage News & Content",
    "إصدار الشهادات": "Issue Certificates",
    "إدارة فريق النادي": "Manage Club Team",
    "إدارة الأعضاء": "Manage Members",
    "إدارة المعرض": "Manage Gallery",
    "إرسال الإشعارات": "Send Notifications",
    "إدارة الصلاحيات": "Manage Permissions",
    "الصلاحيات": "Permissions",
    "ملاحظة: يمكن إعطاء العضو صلاحيات حسب منصبه فقط.": "Note: Members can only receive permissions based on their position.",
    "إضافة العضو": "Add Member",
    "إلغاء": "Cancel",
    "الفعاليات": "Events",
    "إنشاء فعالية جديدة": "Create New Event",
    "أدخل جميع تفاصيل الفعالية قبل النشر": "Enter all event details before publishing",
    "المعلومات الأساسية": "Basic Information",
    "اسم الفعالية": "Event Name",
    "اسم الفعالية *": "Event Name *",
    "مثال: مستقبل الأمن السيبراني": "Example: Future of Cybersecurity",
    "التصنيف": "Category",
    "التصنيف *": "Category *",
    "ورشة عمل / زيارة / مسابقة": "Workshop / Visit / Competition",
    "وصف مختصر": "Short Description",
    "وصف مختصر *": "Short Description *",
    "اكتب وصفاً يظهر في بطاقة الفعالية": "Write a description shown on the event card",
    "المسؤول عن الفعالية": "Event Coordinator",
    "اختر من فريق النادي": "Choose from the club team",
    "الوقت": "Time",
    "الوقت *": "Time *",
    "10:00 ص - 2:00 م": "10:00 AM - 2:00 PM",
    "التاريخ": "Date",
    "التاريخ *": "Date *",
    "29 مايو 2026": "May 29, 2026",
    "الموقع": "Location",
    "الموقع *": "Location *",
    "جامعة طيبة - المدينة المنورة": "Taibah University - Madinah",
    "عدد المقاعد": "Number of Seats",
    "عدد المقاعد *": "Number of Seats *",
    "إغلاق التسجيل": "Registration Closes",
    "قبل الفعالية بـ 24 ساعة": "24 hours before the event",
    "حالة التسجيل": "Registration Status",
    "مفتوح": "Open",
    "صورة غلاف الفعالية": "Event Cover Image",
    "يفضل 16:9 — PNG / JPG": "16:9 preferred — PNG / JPG",
    "خيارات التسجيل": "Registration Options",
    "إنشاء لكل مسجل": "Create for each registrant",
    "إرسال تذكرة بالبريد": "Send a ticket by email",
    "تفعيل قائمة الانتظار": "Enable waitlist",
    "نشر الفعالية": "Publish Event",
    "معاينة": "Preview",
    "حفظ كمسودة": "Save as Draft",
    "التسجيل والحضور": "Registration & Attendance",
    "الحضور": "Attendance",
    "تفاصيل الحضور": "Attendance Details",
    "عرض المسجلين الذين دخلوا والذين لم يحضروا حتى الآن": "View registrants who attended and those who have not yet attended",
    "إصدار شهادات الحضور": "Issue Attendance Certificates",
    "إصدار الشهادات": "Issue Certificates",
    "اختر الفعالية والمستحقين ثم راجع الشهادة قبل الإصدار": "Choose the event and recipients, then review the certificate before issuing",
    "الفعالية": "Event",
    "الفعالية *": "Event *",
    "نوع الشهادة": "Certificate Type",
    "نوع الشهادة *": "Certificate Type *",
    "شهادة حضور": "Attendance Certificate",
    "أدخل اسم الفعالية": "Enter the event name",
    "أدخل نوع الشهادة": "Enter the certificate type",
    "المستحقون": "Recipients",
    "حضر": "Attended",
    "لم يحضر": "Did not attend",
    "معاينة الشهادة": "Certificate Preview",
    "إصدار الشهادة": "Issue Certificate",
    "إرسال إشعار": "Send Notification",
    "إرسال إشعار جديد": "Send New Notification",
    "عنوان الإشعار": "Notification Title",
    "رسالة الإشعار": "Notification Message",
    "الجمهور": "Audience",
    "القنوات": "Channels",
    "وقت الإرسال": "Send Time",
    "إرسال الآن": "Send Now",
    "جدولة الإشعار": "Schedule Notification",
    "حفظ الإشعار كمسودة": "Save Notification as Draft",
    "الإعدادات": "Settings",
    "إعدادات المنصة": "Platform Settings",
    "اسم النادي": "Club Name",
    "البريد الرسمي": "Official Email",
    "رابط عضوية SPE": "SPE Membership Link",
    "السنة الأكاديمية": "Academic Year",
    "حفظ التغييرات": "Save Changes",
    "لوحة التحكم": "Dashboard",
    "الإجراءات السريعة": "Quick Actions",
    "الفعالية القادمة": "Upcoming Event",
    "آخر النشاطات": "Recent Activity",
    "إدارة الفعالية": "Manage Event",
    "تم الحفظ بنجاح": "Saved successfully",
    "تسجيل الدخول": "Sign In",
    "تغيير اللغة": "Change language",
    "تغيير لغة الموقع": "Change website language",
    "أدخل التاريخ": "Enter the date",
    "01 سبتمبر 2026": "September 1, 2026",
    "رقم تحقق: SPE-2026-XXXX": "Verification number: SPE-2026-XXXX",
  };
  const runtimeTranslations = {
    "سيتم فتح صفحة إنشاء فعالية.": "The Create Event page will open.",
    "سيتم فتح صفحة إضافة خبر.": "The Add News page will open.",
    "سيتم فتح صفحة إرسال إشعار.": "The Send Notification page will open.",
    "سيتم فتح صفحة إصدار الشهادات.": "The Issue Certificates page will open.",
    "سيتم فتح صفحة إدارة الفعالية.": "The Manage Event page will open.",
    "سيتم تسجيل الخروج لاحقًا.": "Sign out will be completed later.",
    "تم حفظ الألبوم كمسودة.": "The album was saved as a draft.",
    "يرجى كتابة عنوان الألبوم أولاً.": "Please enter the album title first.",
    "تم نشر الألبوم بنجاح.": "The album was published successfully.",
    "تم اختيار الصورة الرئيسية": "The main image was selected",
    "يرجى إدخال الاسم الكامل للعضو.": "Please enter the member's full name.",
    "يرجى اختيار منصب العضو.": "Please select the member's position.",
    "يرجى إدخال بريد جامعي صحيح.": "Please enter a valid university email.",
    "تمت إضافة العضو بنجاح": "The member was added successfully",
    "تم حفظ الصلاحيات بنجاح": "Permissions saved successfully",
    "يرجى إدخال عنوان الخبر أولًا.": "Please enter the news title first.",
    "تم نشر الخبر بنجاح.": "The news was published successfully.",
    "تم إرسال الخبر للمراجعة.": "The news was sent for review.",
    "سيتم عرض معاينة الخبر هنا.": "The news preview will appear here.",
    "تم حفظ الخبر كمسودة.": "The news was saved as a draft.",
    "التسجيل في الفعالية مفتوح الآن": "Event registration is now open",
    "اضغط لعرض التفاصيل والتسجيل": "Click to view details and register",
    "يرجى إدخال عنوان الإشعار.": "Please enter the notification title.",
    "يرجى إدخال رسالة الإشعار.": "Please enter the notification message.",
    "يرجى تحديد الجمهور.": "Please select the audience.",
    "يرجى اختيار قناة إرسال واحدة على الأقل.": "Please select at least one delivery channel.",
    "يرجى تحديد تاريخ ووقت الإرسال.": "Please select a send date and time.",
    "تمت جدولة الإشعار بنجاح": "Notification scheduled successfully",
    "تم إرسال الإشعار بنجاح": "Notification sent successfully",
    "تم حفظ الإشعار كمسودة": "Notification saved as a draft",
    "يرجى تعبئة جميع الحقول المطلوبة.": "Please complete all required fields.",
    "يرجى إدخال بريد إلكتروني صحيح.": "Please enter a valid email address.",
    "تم حفظ التغييرات بنجاح": "Changes saved successfully",
    "سيتم فتح إدارة الصلاحيات هنا.": "Permission management will open here.",
    "هل أنت متأكد من تسجيل الخروج؟": "Are you sure you want to sign out?",
  };
  const navItems = [
    ["dashboard", "dashboard/dashboard.html"],
    ["events", "Events/Events.html"],
    ["registration", "Registration/Registration.html"],
    ["content", "add-content/add-content.html"],
    ["gallery", "add-gallery/add-gallery.html"],
    ["team", "clubteam/clubteam.html"],
    ["certificates", "Certificates/Certificates.html"],
    ["notifications", "send-notification/send-notification.html"],
    ["settings", "sittings/sittings.html"],
  ];

  const pageKey = () => {
    const path = window.location.pathname.toLowerCase();
    if (path.includes("dashboard")) return "dashboard";
    if (path.includes("events")) return "events";
    if (path.includes("registration")) return "registration";
    if (path.includes("add-content") || path.includes("addnews")) return "content";
    if (path.includes("add-gallery")) return "gallery";
    if (path.includes("clubteam") || path.includes("add-team-member")) return "team";
    if (path.includes("certificates")) return "certificates";
    if (path.includes("send-notification")) return "notifications";
    if (path.includes("sittings")) return "settings";
    return "";
  };

  const hrefFor = (target) => target === "#" ? "#" : new URL(target, rootUrl).href;
  const savedLanguage = () => window.localStorage.getItem(languageKey) === "en" ? "en" : "ar";
  const translateValue = (value, language) => {
    if (language === "ar") return value;
    return pageTranslations[value] || runtimeTranslations[value] || value;
  };

  const translateDocument = (language) => {
    const translateTextNode = (node) => {
      const value = node.nodeValue.trim();
      if (!value) return;
      const translated = translateValue(value, language);
      if (translated !== value) node.nodeValue = node.nodeValue.replace(value, translated);
    };
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (!node.parentElement.closest("script, style")) translateTextNode(node);
    }
    document.querySelectorAll("[placeholder], [title], [aria-label]").forEach((element) => {
      ["placeholder", "title", "aria-label"].forEach((attribute) => {
        if (element.hasAttribute(attribute)) {
          const value = element.getAttribute(attribute);
          element.setAttribute(attribute, translateValue(value, language));
        }
      });
    });
    document.querySelectorAll("input[value], option").forEach((element) => {
      const attribute = element.tagName === "INPUT" ? "value" : null;
      const value = attribute ? element.getAttribute(attribute) : element.textContent.trim();
      const translated = translateValue(value, language);
      if (translated === value) return;
      if (attribute) element.setAttribute(attribute, translated);
      else element.textContent = translated;
    });
    const title = document.title.split(" | ")[0];
    document.title = `${translateValue(title, language)} | SPE Taibah University`;
  };

  const installRuntimeTranslation = () => {
    const originalAlert = window.alert.bind(window);
    const originalConfirm = window.confirm.bind(window);
    window.alert = (message) => originalAlert(translateValue(String(message), savedLanguage()));
    window.confirm = (message) => originalConfirm(translateValue(String(message), savedLanguage()));
    const observer = new MutationObserver((mutations) => {
      if (savedLanguage() !== "en") return;
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            const translated = translateValue(node.nodeValue.trim(), "en");
            if (translated !== node.nodeValue.trim()) node.nodeValue = translated;
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT);
            let textNode;
            while ((textNode = walker.nextNode())) {
              const translated = translateValue(textNode.nodeValue.trim(), "en");
              if (translated !== textNode.nodeValue.trim()) textNode.nodeValue = translated;
            }
          }
        });
      });
    });
    observer.observe(document.body, { childList: true, characterData: true, subtree: true });
  };

  const renderSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    if (!sidebar) return;
    const activeKey = pageKey();
    sidebar.className = "sidebar spe-sidebar";
    sidebar.innerHTML = `
      <div class="spe-sidebar__top">
        <a class="spe-sidebar__brand" href="${hrefFor("dashboard/dashboard.html")}" aria-label="SPE جامعة طيبة">
          <div class="spe-sidebar__logo-wrapper">
            <img src="${hrefFor("clubteam/spe-logo.svg")}" alt="SPE Taibah University Logo" class="spe-sidebar__logo" />
          </div>
        </a>
        <p class="spe-sidebar__label" data-sidebar-label></p>
      </div>
      <nav class="spe-sidebar__nav" aria-label="روابط لوحة التحكم">
        ${navItems.map(([key, target]) => `<a class="spe-sidebar__link${key === activeKey ? " is-active" : ""}" href="${hrefFor(target)}"${key === activeKey ? " aria-current=\"page\"" : ""}><span data-nav-label="${key}"></span></a>`).join("")}
      </nav>
      <footer class="spe-sidebar__footer">
        <div class="spe-sidebar__admin">
          <div class="spe-sidebar__admin-row">
            <strong class="spe-sidebar__name">جمانة الجهني</strong>
            <button class="language-toggle language-switch" type="button" aria-label="تغيير اللغة" title="تغيير اللغة" aria-pressed="false">
              <span class="lang-ar">ع</span><span class="lang-divider">|</span><span class="lang-en">E</span>
            </button>
          </div>
          <span class="spe-sidebar__role">Webmaster <bdi>•</bdi> <span data-role-label></span></span>
        </div>
        <a class="spe-sidebar__logout" id="logoutLink" href="#logout" data-logout data-logout-label></a>
      </footer>`;

    document.querySelectorAll("[data-missing-destination]").forEach((link) => {
      link.title = "TODO: هذه الصفحة غير متوفرة بعد";
    });
  };

  const applyLanguage = (language) => {
    const selected = language === "en" ? "en" : "ar";
    document.documentElement.lang = selected;
    document.documentElement.dir = selected === "en" ? "ltr" : "rtl";
    const text = translations[selected];
    document.querySelector("[data-sidebar-label]").textContent = text.platform;
    document.querySelectorAll("[data-nav-label]").forEach((element) => {
      element.textContent = text[element.dataset.navLabel];
    });
    document.querySelector("[data-role-label]").textContent = text.role;
    document.querySelector("[data-logout-label]").textContent = text.logout;
    const toggle = document.querySelector(".language-toggle");
    toggle.setAttribute("aria-pressed", String(selected === "en"));
    toggle.querySelector(".lang-ar").setAttribute("aria-current", String(selected === "ar"));
    toggle.querySelector(".lang-en").setAttribute("aria-current", String(selected === "en"));
    translateDocument(selected);
  };

  document.addEventListener("DOMContentLoaded", () => {
    renderSidebar();
    applyLanguage(savedLanguage());
    installRuntimeTranslation();
    document.querySelector(".language-toggle").addEventListener("click", () => {
      const nextLanguage = document.documentElement.lang === "ar" ? "en" : "ar";
      window.localStorage.setItem(languageKey, nextLanguage);
      window.location.reload();
    });
  });
})();
