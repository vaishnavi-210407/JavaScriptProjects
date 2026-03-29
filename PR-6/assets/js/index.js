const form = document.getElementById("form");
  const list = document.getElementById("list");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const user = { name, email };

    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    form.reset();
    displayData();
  });

  function displayData() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    list.innerHTML = "";

    users.forEach((user, index) => {
      const li = document.createElement("li");

      li.innerHTML = `
        ${user.name} - ${user.email}
        <button class="delete" onclick="deleteUser(${index})">X</button>
      `;

      list.appendChild(li);
    });
  }

  function deleteUser(index) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));
    displayData();
  }

  window.onload = displayData;
