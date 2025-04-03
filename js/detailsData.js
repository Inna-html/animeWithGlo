const detailsData = () => {
  const preloader = document.querySelector(".preloder");

  const renderGanreList = (ganres) => {
    dropdownBlock = document.querySelector(".header__menu .dropdown");

    ganres.forEach((ganre) => {
      dropdownBlock.insertAdjacentHTML(
        "beforeend",
        `
          <li><a href="./categories.html?ganre=${ganre}">${ganre}</a></li>
        `
      );
    });
  };

  const renderAnimDetails = (array, itemId) => {
    const animObj = array.find((item) => item.id == itemId);
    const imageBlock = document.querySelector(".anime__details__pic");
    const viewsBlock = imageBlock.querySelector(".view");
    const titleBlock = document.querySelector(".anime__details__title h3");
    const subtitleBlock = document.querySelector(".anime__details__title span");
    const descripBlock = document.querySelector(".anime__details__text p");
    const widgetList = document.querySelectorAll(".anime__details__widget ul li");
    const breadcrumb = document.querySelector(".breadcrumb__links span");                     

    if (animObj) {
      imageBlock.dataset.setbg = animObj.image;
      viewsBlock.insertAdjacentHTML(
        "beforeend",
        `<i class="fa fa-eye"></i>${animObj.views}</div> `
      );

      titleBlock.textContent = animObj.title;
      subtitleBlock.textContent = animObj["original-title"];
      descripBlock.textContent = animObj.description;

      widgetList[0].insertAdjacentHTML("beforeend",
        `<span>Date aired:</span> ${animObj.date}`
      )
      widgetList[1].insertAdjacentHTML("beforeend",
        `<span>Ratings:</span> ${animObj.rating}`
      )
      console.log(animObj.rating);
      widgetList[2].insertAdjacentHTML("beforeend",
        `<span>Genre:</span> ${animObj.tags.join(", ")}`
      )
      
      breadcrumb.textContent = animObj.ganre;

      document.querySelectorAll(".set-bg").forEach((elem) => {
          elem.style.backgroundImage = `url(${elem.dataset.setbg})`;
      })

      setTimeout(() => {
        preloader.classList.remove("active");
      }, 500);

    } else {
      console.log("missing anime");
    }
};

  fetch("./db.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const ganres = new Set();
      const ganreParams = new URLSearchParams(window.location.search).get(
        "itemId"
      );

      console.log(ganreParams);

      data.anime.forEach((item) => {
        ganres.add(item.ganre);
      });

      if (ganreParams) {
        renderAnimDetails(data.anime, ganreParams);
      } else {
        console.log("missing anime");
      }

      renderGanreList(ganres);

    });
};

detailsData();
