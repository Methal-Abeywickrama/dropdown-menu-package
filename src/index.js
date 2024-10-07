import "./styles.css";

const dropdownMenu = () => {
  const menuContainers = document.querySelectorAll('.dropdown-menu')
  menuContainers.forEach(menuContainer => {

    const menuContent = menuContainer.querySelectorAll(".menu-item");
    const menuCaption = document.createElement('div')
    
    menuCaption.textContent = menuContainer.id
    menuCaption.classList.add("menu-line")
    menuContainer.prepend(menuCaption)
  
    menuContent.forEach((element) => {
      element.classList.add("menu-line");
      element.classList.add("hidden");
  
    });

    const hideElement = (element) =>{
      element.classList.add('hidden')
    }
    const unhideElement = (element) =>{
      element.classList.remove('hidden')
    }
  
    // Controlling how the overall menu works with the mouse
    menuContainer.addEventListener('mouseover', () => {
      menuContent.forEach(element => unhideElement(element));
    })
    menuContainer.addEventListener('mouseout', () => {
      menuContent.forEach(element => hideElement(element));
    })
  
    //Controlling how each menu item works with the mouse
    menuContent.forEach(item => {
      //hovering over the item
      item.addEventListener('mouseover', () => {
        item.classList.add('hovering-item')
      })
  
      item.addEventListener('mouseout', () => {
        item.classList.remove('hovering-item')
      })
  
      //selecting the item while hovering 
      item.addEventListener('click', () => {
        menuCaption.textContent = item.textContent
      })
    })
  })
} 
dropdownMenu();

export  { dropdownMenu }