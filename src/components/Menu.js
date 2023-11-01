import React, { useEffect } from "react";

function Menu({ title, menuObject }) {
  // Effect to handle menu item click events
  useEffect(() => {
    // Select all list items inside the menu container
    const allLi = document
      .querySelector(".menuContainer ul")
      .querySelectorAll("li");

    // Function to change the active menu item
    function changeMenuActive() {
      allLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    // Add click event listeners to all list items
    allLi.forEach((n) => n.addEventListener("click", changeMenuActive));
  }, []);

  return (
    <div className="menuContainer">
      {/* Title of the Menu */}
      <p className="title">{title}</p>

      {/* Menu List */}
      <ul>
        {menuObject &&
          menuObject.map((menu) => (
            <li key={menu.id}>
              {/* Menu Item */}
              <a href="#">
                <i>{menu.icon}</i>
                <span>{menu.name}</span>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export { Menu };
