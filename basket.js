let table = document.getElementById("table")
let totalPrice = document.getElementById("totalPrice")
let sumTotalPrice = 0;


if (localStorage.getItem("basket") != null) {
    let arr = JSON.parse(localStorage.getItem("basket"));

    arr.forEach(product => {
        let tr = document.createElement("tr")
        let tdImage = document.createElement("td")
        let image = document.createElement("img")
        image.src = product.imageUrl
        image.style.width = "150px"
        tdImage.append(image)
        let tdName = document.createElement("td")
        tdName.innerText = product.name
        let tdPrice = document.createElement("td")
        tdPrice.innerText = product.price
        let tdCount = document.createElement("td")

        let minus = document.createElement("button")
        minus.innerText = " - "
        minus.style.borderRadius = "50%"
        minus.style.padding = "2px;5px"
        let plus = document.createElement("button")
        plus.style.borderRadius = "50%"
        plus.style.padding = "2px;5px"
        plus.innerText = " + "
        tdCount.append(minus)
        tdCount.append(product.count)
        tdCount.append(plus)

        let tdSubTotal = document.createElement("td")
        tdSubTotal = product.count * product.price


        tr.append(tdImage, tdName, tdPrice, tdCount,tdSubTotal)
        table.append(tr)
        sumTotalPrice += product.count * product.price;
        totalPrice.innerText = sumTotalPrice;
    });
}