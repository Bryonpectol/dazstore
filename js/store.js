import { storeData } from "../js/storedata.js";

const mainContainer = document.createElement("div");
mainContainer.className = "container";

const allCars = storeData.map(myCar => {
  let carsYeah = storeData.find(CAR => {
    return CAR.name === myCar.name;
  });

  return {
    // this is how the script finds the item in the array.
    //   nAME: myCar.name,
    mAKE: carsYeah.name,
    Link: carsYeah.storelink,
    image: carsYeah.img
  };
});

allCars.forEach(myCar => {
  
  
    // this section is to create the html elements.
    let makeElement = document.createElement("div");
    
    let imageElement = document.createElement("img");
    
    let linkElement = document.createElement("a");

    makeElement.className = "make";
    
    imageElement.className = "image";

    linkElement.className = "link";
  
  
    makeElement.textContent = myCar.mAKE;

    linkElement.textContent = "Buy Now";
   
    imageElement.src = myCar.image;
    linkElement.href = myCar.Link;
    
      
    mainContainer.appendChild(makeElement);
    
    makeElement.appendChild(imageElement);
    makeElement.appendChild(linkElement);
  
    
    
  });
  
  document.body.appendChild(mainContainer);
  
  console.log(storeData);