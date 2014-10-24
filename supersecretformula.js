function calculatePrice() {
    var price = parseFloat(document.getElementById("price").value);
    var vat = parseFloat(document.getElementById("vat").value);
    var tax = parseFloat(document.getElementById("tax").value);
    var actualPrice = price * (price / (price + (price * (vat / 100)))) * ((100 - tax) / 100);
    showResult(actualPrice);
}

function showResult(actualPrice) {
    document.getElementById("actualPrice").innerHTML = actualPrice;
    document.getElementById("result").style.display = "";
}