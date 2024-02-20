const allBtn = document.getElementsByClassName("add-btn");

for (const btn of allBtn) {
  btn.addEventListener("click", function (event) {
    const name = event.target.parentNode.childNodes[1].innerText;
    const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
    const category =
      event.target.parentNode.childNodes[5].childNodes[1].innerText;
    const selectedContainer = document.getElementById(
      "selected-players-container"
    );

    event.target.setAttribute("disabled", false);

    if (
      getValueById("budget") - parseInt(price) < 0 ||
      getValueById("cart") + 1 > 6 ||
      getValueById("left") - 0 < 0
    ) {
      alert("Tomar Budget or Cart Or players er Limit sesh");
      return;
    }

    event.target.parentNode.style.backgroundColor = "gray";
    event.target.parentNode.style.color = "white";

    const div = document.createElement("div");
    div.classList.add("selected-players");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    p1.innerText = name;
    p2.innerText = price;
    p3.innerText = category;
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    selectedContainer.appendChild(div);
    updateBudget(price);
    updateLeftPlayer();
    updateTotalCost(price);
    updateGrandTotal();
    updateCartCount();
  });
}

function updateTotalCost(price) {
  const previousTotal = document.getElementById("total-cost").innerText;
  const convertedTotal = parseInt(previousTotal);
  const convertedPrice = parseInt(price);
  const sum = convertedTotal + convertedPrice;
  document.getElementById("total-cost").innerText = sum;
}

function updateGrandTotal(control) {
  const previousTotal = document.getElementById("total-cost").innerText;
  const convertedTotal = parseInt(previousTotal);
  const couponCode = document.getElementById("coupon-code").value;
  if (control) {
    if (couponCode == "Hero20") {
      const discount = convertedTotal * 0.2;
      document.getElementById("grand-total").innerText =
        convertedTotal - discount;
    } else {
      alert("Invalid Coupon Code No Discount");
      return;
    }
  } else {
    document.getElementById("grand-total").innerText = convertedTotal;
  }
}

function updateBudget(value) {
  const defaultBudget = document.getElementById("budget").innerText;
  const convertDefaultBudget = parseInt(defaultBudget);
  document.getElementById("budget").innerText =
    convertDefaultBudget - parseInt(value);
}

function updateLeftPlayer() {
  const defaultLeft = document.getElementById("left").innerText;
  const convertDefaultLeft = parseInt(defaultLeft);
  document.getElementById("left").innerText = convertDefaultLeft - 1;
}

function updateCartCount() {
  const defaultCartCount = document.getElementById("cart").innerText;

  const convertDefaultCartCount = parseInt(defaultCartCount);
  document.getElementById("cart").innerText = convertDefaultCartCount + 1;
}

function getValueById(id) {
  const targetElement = document.getElementById(id).innerText;
  return parseInt(targetElement);
}
