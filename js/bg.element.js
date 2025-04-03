const bgElement = () => {
  const elements = document.querySelectorAll(".set-bg");

  // for (let i = 0; i < elements.length; i++) {
  //   const src = elements[i].dataset.setbg;

  //   elements[i].style.backgroundImage = `url(${src})`;
  //   // console.dir(elements[i])
  // }

  elements.forEach((elem) => {
    elem.style.backgroundImage = `url(${elem.dataset.setbg})`;
  });

};

bgElement();


const perebor = () => {
  // const array = [1, 2, 3, 4, 5]
  // const newArray = array.filter((item) => {
  //   return item <= 3
  // })
  // console.log(newArray);


  // const array = [5, 4, 3, 2, 1]
  // const newArray = array.sort()
  // console.log(newArray);


  // const array = [
  //   {
  //     id: 0,
  //     value: 100
  //   },
  //   {
  //     id: 1,
  //     value: 400
  //   },
  //   {
  //     id: 0,
  //     value: 300
  //   },
  //   {
  //     id: 2,
  //     value: 200
  //   },
  // ]
  // const newArray = array.sort((a, b) => {
  //   return a.value - b.value
  // })
  // console.log(newArray);
}

