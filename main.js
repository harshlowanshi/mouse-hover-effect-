const body = document.querySelector("body")

const colorChange=() => {
      
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    document.body.style.backgroundColor = randomColor;
  }
  

  body.addEventListener("mousemove",colorChange)