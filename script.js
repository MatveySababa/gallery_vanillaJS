"use strict";

(function () {
  class VanillaZoom {
    constructor(element) {
      this.container = element;
      this.firstSmallImage = this.container.querySelector(".small-preview");
      this.zoomedImage = this.container.querySelector(".zoomed-image");
      this.init();
      this.changePhoto();
      this.mouseEnter();
      this.mouseMove();
      this.mouseLeave();
    }
    
    init() {
      if(!this.container) {
        console.error("Нет элемента container");
      }
      if(!this.zoomedImage) {
        console.error("Нет элемента zoomedImage");
      }
      if(!this.firstSmallImage) {
        console.error("Нет элемента firstSmallImage");
      } else {
        this.zoomedImage.style.backgroundImage = "url(" + this.firstSmallImage.src + ")";
      }    
    }
    
    changePhoto() {
      this.container.addEventListener("click", (event) => {
        const elem = event.target;
        if(elem.classList.contains("small-preview")) {
          this.zoomedImage.style.backgroundImage = "url(" + elem.src + ")";
        }
      });
    }
    
    mouseEnter() {
      this.zoomedImage.addEventListener("mouseover", () => {
        this.zoomedImage.style.backgroundSize = "250%";
      });
    }
    
    mouseMove() {
      this.zoomedImage.addEventListener("mousemove", (event) => {
        let dimension = this.zoomedImage.getBoundingClientRect();
        let x = event.clientX - dimension.left;
        let y = event.clientY - dimension.top;
        let xPercent = Math.round(100 / (dimension.width / x));
        let yPercent = Math.round(100 / (dimension.width / y));
        this.zoomedImage.style.backgroundPosition = xPercent + "%" + yPercent + "%";
      });
    }
    
    
    
    mouseLeave() {
      this.zoomedImage.addEventListener("mouseleave", () => {
        this.zoomedImage.style.backgroundSize = "cover";
        this.zoomedImage.style.backgroundPosition = "center";
      });
    }
  }
  
  let zoom = document.querySelectorAll(".vanilla-zoom");
  
  zoom.forEach(item => {
    new VanillaZoom(item);
  })
  
})();










