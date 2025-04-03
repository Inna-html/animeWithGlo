modal = () => {
  const modal = document.querySelector(".search-model");
  const modalBtn = document.querySelector(".icon_search");
  const modalClose = modal.querySelector(".search-close-switch");

  modalBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });

  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // DZ

  // - Повесить обработчик события на поле ввода в модальном окне Поиска
  // - При вводе данных в поле ввода выводить значение поля в консоль

  const searchModelForm = modal.querySelector(".search-model-form");
  const searchInput = searchModelForm.querySelector("#search-input");

  searchInput.addEventListener("input", () => {
    console.log(searchInput.value);
  });
};

modal();
