fetch("data/menu.json")
  .then(res => res.json())
  .then(menuData => {
    const menuContainer = document.getElementById("menu");

    for (const category in menuData) {
      const section = document.createElement("section");
      const title = document.createElement("h2");
      title.textContent = category;
      title.className = "text-2xl font-bold mt-4 mb-2 text-pink-400";
      section.appendChild(title);

      menuData[category].forEach(item => {
        const card = document.createElement("div");
        card.className = "card shadow-lg";
        card.innerHTML = `
          <h3 class="text-xl font-semibold">${item.name}</h3>
          <p class="text-green-400">${item.price} تومان</p>
        `;
        section.appendChild(card);
      });

      menuContainer.appendChild(section);
    }
  })
  .catch(err => {
    document.getElementById("menu").innerHTML = "<p class='text-red-500'>مشکلی در بارگذاری منو پیش آمد.</p>";
    console.error("Menu fetch error:", err);
  });
