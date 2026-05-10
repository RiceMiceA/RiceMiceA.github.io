(function () {
  const root = document.documentElement;
  const toggle = document.querySelector("#theme-toggle");
  const year = document.querySelector("#year");
  const filterButtons = Array.from(document.querySelectorAll(".filter-button"));
  const projectCards = Array.from(document.querySelectorAll(".project-card"));

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  function readStoredTheme() {
    try {
      return window.localStorage.getItem("theme");
    } catch (error) {
      return null;
    }
  }

  function storeTheme(theme) {
    try {
      window.localStorage.setItem("theme", theme);
    } catch (error) {
      /* No-op when storage is unavailable. */
    }
  }

  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
      if (toggle) {
        toggle.setAttribute("aria-pressed", "true");
        toggle.querySelector("span").textContent = "Light";
      }
    } else {
      root.removeAttribute("data-theme");
      if (toggle) {
        toggle.setAttribute("aria-pressed", "false");
        toggle.querySelector("span").textContent = "Dark";
      }
    }
  }

  const savedTheme = readStoredTheme();
  if (savedTheme) {
    applyTheme(savedTheme);
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    applyTheme("dark");
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      const nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
      storeTheme(nextTheme);
    });
  }

  function filterProjects(filter) {
    projectCards.forEach(function (card) {
      const tags = (card.getAttribute("data-tags") || "").split(" ");
      const shouldShow = filter === "all" || tags.includes(filter);
      card.hidden = !shouldShow;
    });
  }

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const filter = button.getAttribute("data-filter") || "all";
      filterButtons.forEach(function (candidate) {
        const active = candidate === button;
        candidate.classList.toggle("is-active", active);
        candidate.setAttribute("aria-pressed", String(active));
      });
      filterProjects(filter);
    });
  });
})();
