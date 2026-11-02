(function () {
  var root = document.documentElement;

  // Light / dark toggle (remembers the visitor's choice)
  var themeBtn = document.querySelector("[data-theme-toggle]");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var current = root.getAttribute("data-theme") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      var next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  // Mobile menu
  var menuBtn = document.querySelector("[data-menu-toggle]");
  var nav = document.getElementById("site-nav");
  if (menuBtn && nav) {
    var setOpen = function (open) {
      nav.classList.toggle("open", open);
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    };
    menuBtn.addEventListener("click", function () { setOpen(!nav.classList.contains("open")); });
    nav.addEventListener("click", function (e) { if (e.target.closest("a")) setOpen(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") setOpen(false); });
  }

  // Email links are assembled here so the address is not in the HTML as a mailto
  document.querySelectorAll("[data-email-user]").forEach(function (el) {
    el.href = "mailto:" + el.getAttribute("data-email-user") + "@" + el.getAttribute("data-email-domain");
  });

  // WeChat QR code in a dialog (falls back to opening the image)
  var dialog = document.getElementById("wechat-dialog");
  if (dialog && typeof dialog.showModal === "function") {
    document.querySelectorAll("[data-wechat]").forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        dialog.showModal();
      });
    });
    dialog.addEventListener("click", function (e) {
      if (e.target === dialog || e.target.closest("[data-close]")) dialog.close();
    });
  }

  // Highlight the nav link of the section in view
  var links = Array.prototype.slice.call(document.querySelectorAll(".nav a[href*='#']"));
  var sections = {};
  links.forEach(function (a) {
    var el = document.getElementById(a.hash.slice(1));
    if (el) sections[a.hash.slice(1)] = a;
  });
  if ("IntersectionObserver" in window && Object.keys(sections).length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) { a.classList.remove("active"); });
        sections[entry.target.id].classList.add("active");
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    Object.keys(sections).forEach(function (id) { observer.observe(document.getElementById(id)); });
  }
})();
