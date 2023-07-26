"use strict";

// variables for navbar menu toggle
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const navbarMenuBtn = document.querySelector(".navbar-menu-btn");

// variables for navbar search toggle
const navbarForm = document.querySelector(".navbar-form");
const navbarFormCloseBtn = document.querySelector(".navbar-form-close");
const navbarSearchBtn = document.querySelector(".navbar-search-btn");

// navbar menu toggle function
function navIsActive() {
  header.classList.toggle("active");
  nav.classList.toggle("active");
  navbarMenuBtn.classList.toggle("active");
}

navbarMenuBtn.addEventListener("click", navIsActive);

// navbar search toggle function
const searchBarIsActive = () => navbarForm.classList.toggle("active");

navbarSearchBtn.addEventListener("click", searchBarIsActive);
navbarFormCloseBtn.addEventListener("click", searchBarIsActive);

/*==================== FILTER ====================*/

function show(anything, year) {
  if (anything == "filter-year") {
    document.getElementById("filter-year").value = year;
    return;
  }

  return (document.querySelector(".textBox").value = anything);
}

let dropdown = document.querySelector(".dropdown");
dropdown.onclick = function () {
  dropdown.classList.toggle("active");
};

let dropdownYear = document.querySelector(".filter-year");
dropdownYear.onclick = function () {
  dropdownYear.classList.toggle("active");
};

function handleFilterByCategory(categorySelected, titleSelected) {
  if (titleSelected == "filter-year") {
    filterPosts(categorySelected);
    show(titleSelected, categorySelected);
    return;
  }

  filterPosts(categorySelected);
  show(titleSelected);
}

var allCategoryPosts = document.querySelectorAll(".all");
const categoryTitle = document.querySelectorAll(".category-title");

function filterPosts(item) {
  for (let i = 0; i < allCategoryPosts.length; i++) {
    if (allCategoryPosts[i].classList.contains(item)) {
      allCategoryPosts[i].style.display = "block";
    } else {
      allCategoryPosts[i].style.display = "none";
      console.log(allCategoryPosts[i].classList);
    }
  }
}

//////// Test ///////
jQuery.expr[":"].contains = function (a, i, m) {
  return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
};

$("#ascending").click(function () {
  $(".movies-grid .all")
    .sort(function (a, b) {
      return $(a).find(".card-title").text() > $(b).find(".card-title").text()
        ? 1
        : -1;
    })
    .appendTo(".movies-grid");
});
