document.addEventListener("DOMContentLoaded", () => {

    // ------------------------------
    // ثبت کلیک روی هرکدام از لینک‌ها (برای دیباگ/آمار در آینده)
    // ------------------------------

    const linkCards = document.querySelectorAll(".link-card, .store-link, .social-icons a");

    linkCards.forEach(link => {

        link.addEventListener("click", (e) => {

            const href = link.getAttribute("href");

            // اگر لینک هنوز تنظیم نشده (#)، از رفتن جلوگیری کن
            if (!href || href === "#") {

                e.preventDefault();

                link.style.transform = "scale(0.97)";

                setTimeout(() => {
                    link.style.transform = "";
                }, 150);

                return;
            }

        });

    });

});