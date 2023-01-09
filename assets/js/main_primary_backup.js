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

function show(anything) {
  document.querySelector(".textBox").value = anything;
}

let dropdown = document.querySelector(".dropdown");
dropdown.onclick = function () {
  dropdown.classList.toggle("active");
};

function handleFilterByCategory(categorySelected, titleSelected) {
  filterPosts(categorySelected);
  show(titleSelected);
}

const categoryTitle = document.querySelectorAll(".category-title");
const allCategoryPosts = document.querySelectorAll(".all");

function filterPosts(item) {
  for (let i = 0; i < allCategoryPosts.length; i++) {
    if (allCategoryPosts[i].classList.contains(item)) {
      allCategoryPosts[i].style.display = "block";
    } else {
      allCategoryPosts[i].style.display = "none";
    }
  }
}

/*==================== FILTER, SORT, Search ====================*/

/* var options = {
  valueNames: ["name", "city"],
};
var hackerList = new List("hacker-list", options);

// Assigning references to the filter buttons
var filterCityButton = document.getElementById("filter");
var removeFiltersButton = document.getElementById("removeFilters");

// When the filter button is clicked. The list is filtered by calling the filter function of the list object and passing in a function that accepts the list items.
filterCityButton.addEventListener("click", function () {
  hackerList.filter(function (item) {
    if (item.values().city == "Edmonton") {
      return true;
    } else {
      return false;
    }
  }); // Only items that have Edmonton as the city.
});

// When the remove filter button is clicked, the filters are removed by calling the filter function once again with no parameters.
removeFiltersButton.addEventListener("click", function () {
  hackerList.filter();
}); */

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
