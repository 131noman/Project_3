var c1 = document.getElementById("category-1");
var c2 = document.getElementById("category-2");
var c3 = document.getElementById("category-3");
var c4 = document.getElementById("category-4");
var c5 = document.getElementById("category-5");
var c6 = document.getElementById("category-6");
var cc1 = document.getElementById("category-card-1");
var cc2 = document.getElementById("category-card-2");
var cc3 = document.getElementById("category-card-3");
var cc4 = document.getElementById("category-card-4");
var cc5 = document.getElementById("category-card-5");
var cc6 = document.getElementById("category-card-6");
var ch = document.getElementById("content-heading");
window.addEventListener("load", function () {
  c6.style.backgroundColor = "#465054";
  c6.style.color = "#fff";
  cc6.style.display = "flex";
  cc1.style.display = "none";
  cc2.style.display = "none";
  cc3.style.display = "none";
  cc4.style.display = "none";
  cc5.style.display = "none";
});

c1.addEventListener("click", function () {
  ch.textContent = this.textContent;
  c1.style.backgroundColor = "#465054";
  c1.style.color = "#fff";
  c2.removeAttribute("style");
  c3.removeAttribute("style");
  c4.removeAttribute("style");
  c5.removeAttribute("style");
  c6.removeAttribute("style");
  cc1.style.display = "flex";
  cc2.style.display = "none";
  cc3.style.display = "none";
  cc4.style.display = "none";
  cc5.style.display = "none";
  cc6.style.display = "none";
});
c2.addEventListener("click", function () {
  ch.textContent = this.textContent;
  c2.style.backgroundColor = "#465054";
  c2.style.color = "#fff";
  c1.removeAttribute("style");
  c3.removeAttribute("style");
  c4.removeAttribute("style");
  c5.removeAttribute("style");
  c6.removeAttribute("style");
  cc1.style.display = "none";
  cc2.style.display = "flex";
  cc3.style.display = "none";
  cc4.style.display = "none";
  cc5.style.display = "none";
  cc6.style.display = "none";
});
c3.addEventListener("click", function () {
  ch.textContent = this.textContent;
  c3.style.backgroundColor = "#465054";
  c3.style.color = "#fff";
  c1.removeAttribute("style");
  c2.removeAttribute("style");
  c4.removeAttribute("style");
  c5.removeAttribute("style");
  c6.removeAttribute("style");
  cc1.style.display = "none";
  cc2.style.display = "none";
  cc3.style.display = "flex";
  cc4.style.display = "none";
  cc5.style.display = "none";
  cc6.style.display = "none";
});
c4.addEventListener("click", function () {
  ch.textContent = this.textContent;
  c4.style.backgroundColor = "#465054";
  c4.style.color = "#fff";
  c1.removeAttribute("style");
  c2.removeAttribute("style");
  c3.removeAttribute("style");
  c5.removeAttribute("style");
  c6.removeAttribute("style");
  cc1.style.display = "none";
  cc2.style.display = "none";
  cc3.style.display = "none";
  cc4.style.display = "flex";
  cc5.style.display = "none";
  cc6.style.display = "none";
});
c5.addEventListener("click", function () {
  ch.textContent = this.textContent;
  c5.style.backgroundColor = "#465054";
  c5.style.color = "#fff";
  c1.removeAttribute("style");
  c2.removeAttribute("style");
  c3.removeAttribute("style");
  c4.removeAttribute("style");
  c6.removeAttribute("style");
  cc1.style.display = "none";
  cc2.style.display = "none";
  cc3.style.display = "none";
  cc4.style.display = "none";
  cc5.style.display = "flex";
  cc6.style.display = "none";
});

c6.addEventListener("click", function () {
  ch.textContent = this.textContent;
  c6.style.backgroundColor = "#465054";
  c6.style.color = "#fff";
  c1.removeAttribute("style");
  c2.removeAttribute("style");
  c3.removeAttribute("style");
  c4.removeAttribute("style");
  c5.removeAttribute("style");
  cc1.style.display = "none";
  cc2.style.display = "none";
  cc3.style.display = "none";
  cc4.style.display = "none";
  cc5.style.display = "none";
  cc6.style.display = "flex";
});
var lsbb1 = document.getElementById("left-side-bar-box-1");
var lsbb2 = document.getElementById("left-side-bar-box-2");
var lsbb3 = document.getElementById("left-side-bar-box-3");
window.addEventListener("resize", function () {
  if (window.innerWidth < 990) {
    lsbb1.lastElementChild.style.display = "none";
    lsbb2.lastElementChild.style.display = "none";
    lsbb3.lastElementChild.style.display = "none";
    lsbb1.addEventListener("click", function () {
      if (
        this.lastElementChild.style.display == "block" &&
        window.innerWidth < 990
      ) {
        this.lastElementChild.style.display = "none";
      } else {
        this.lastElementChild.style.display = "block";
      }
    });
    lsbb2.addEventListener("click", function () {
      if (
        this.lastElementChild.style.display == "block" &&
        window.innerWidth < 990
      ) {
        this.lastElementChild.style.display = "none";
      } else {
        this.lastElementChild.style.display = "block";
      }
    });
    lsbb3.addEventListener("click", function () {
      if (
        this.lastElementChild.style.display == "block" &&
        window.innerWidth < 990
      ) {
        this.lastElementChild.style.display = "none";
      } else {
        this.lastElementChild.style.display = "block";
      }
    });
  } else if (window.innerWidth > 990) {
    lsbb1.lastElementChild.style.display = "block";
    lsbb2.lastElementChild.style.display = "block";
    lsbb3.lastElementChild.style.display = "block";
  }
});
window.addEventListener("load", function () {
  if (window.innerWidth < 990) {
    lsbb1.lastElementChild.style.display = "none";
    lsbb2.lastElementChild.style.display = "none";
    lsbb3.lastElementChild.style.display = "none";
    lsbb1.addEventListener("click", function () {
      if (
        this.lastElementChild.style.display == "block" &&
        window.innerWidth < 990
      ) {
        this.lastElementChild.style.display = "none";
      } else {
        this.lastElementChild.style.display = "block";
      }
    });
    lsbb2.addEventListener("click", function () {
      if (
        this.lastElementChild.style.display == "block" &&
        window.innerWidth < 990
      ) {
        this.lastElementChild.style.display = "none";
      } else {
        this.lastElementChild.style.display = "block";
      }
    });
    lsbb3.addEventListener("click", function () {
      if (
        this.lastElementChild.style.display == "block" &&
        window.innerWidth < 990
      ) {
        this.lastElementChild.style.display = "none";
      } else {
        this.lastElementChild.style.display = "block";
      }
    });
  } else if (window.innerWidth > 990) {
    lsbb1.lastElementChild.style.display = "block";
    lsbb2.lastElementChild.style.display = "block";
    lsbb3.lastElementChild.style.display = "block";
  }
});
