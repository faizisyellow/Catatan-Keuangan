const tables = document.getElementById("table");

//add new lists
const buttonAddNewList = document.getElementById("button");
buttonAddNewList.addEventListener("click", () => {
  let amount = document.getElementById("jumlah-form");
  let type = document.getElementById("tipe-form");
  let description = document.getElementById("deskripsi-form");

  if (amount.value == "" || type.value == "" || description == "") {
    alert("you have to fill all of them");
  } else {
    let newList = ` <tr>
    <td>${description.value}</td>
    <td>Rp ${amount.value}</td>
    <td>${type.value}</td>
  </tr>`;

    tables.insertAdjacentHTML("beforeend", newList);

    //reload new lists
    amount.value = "";
    type.value = "";
    description.value = "";
  }
});
