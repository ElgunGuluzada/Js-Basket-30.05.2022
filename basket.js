let table = document.getElementById("table")
let totalPrice = document.getElementById("totalPrice")
let sumTotalPrice = 0;


if (localStorage.getItem("basket") != null) {
    let arr = JSON.parse(localStorage.getItem("basket"));


    arr.forEach(product => {
        if (product.count > 0) {
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

            let minusBtn = document.createElement("button")
            minusBtn.style.background = "transparent"
            let minus = document.createElement("input")
            minusBtn.append(minus)
            minus.setAttribute("value", "-")
            minus.style.width = "20px"
            minusBtn.style.border = "none"
            minus.style.background = "white"
            minus.style.cursor = "pointer"
            minus.style.borderRadius = "50%"
            minus.style.padding = "3px"

            let plusBtn = document.createElement("button")
            plusBtn.style.background = "transparent"
            let plus = document.createElement("input")
            plusBtn.append(plus)
            plus.setAttribute("value", "+")
            plus.style.value = "+"
            plus.style.width = "20px"
            plusBtn.style.border = "none"
            plus.style.background = "white"
            plus.style.cursor = "pointer"
            plus.style.borderRadius = "50%"
            plus.style.padding = "3px;"

            tdCount.innerHTML = `${product.count}`
            tdCount.prepend(minusBtn)
            tdCount.append(plusBtn)


            let tdSubTotal = document.createElement("td")
            tdSubTotal.innerText = product.count * product.price

            let removeBtn = document.createElement("td")
            let remove = document.createElement("button")
            remove.innerText = "X"
            remove.style.cursor = "pointer"
            removeBtn.append(remove)

            tr.append(tdImage, tdName, tdPrice, tdCount, tdSubTotal, removeBtn)
            table.append(tr)
            sumTotalPrice += product.count * product.price;
            totalPrice.innerText = sumTotalPrice;



            minus.onclick = function () {
                product.count--
                if (product.count > 0) {
                    tdCount.innerHTML = `${product.count}`
                    tdCount.prepend(minusBtn)
                    tdCount.append(plusBtn)
                    tdSubTotal.innerText = product.count * product.price;
                    sumTotalPrice -= parseFloat(product.price);
                    totalPrice.innerText = sumTotalPrice;
                    localStorage.setItem("basket", JSON.stringify(arr))
                    WriteProductCount();
                }
                else {
                    tr.remove()

                }

                localStorage.setItem("basket", JSON.stringify(arr))
                WriteProductCount();
            }

            plus.onclick = function () {
                product.count++
                tdCount.innerHTML = `${product.count}`
                tdCount.prepend(minusBtn)
                tdCount.append(plusBtn)
                tdSubTotal.innerText = product.count * product.price;
                sumTotalPrice += parseFloat(product.price);
                totalPrice.innerText = sumTotalPrice;
                localStorage.setItem("basket", JSON.stringify(arr))
                WriteProductCount();
            }

            removeBtn.onclick = function () {
                this.parentElement.remove()
                localStorage.removeItem(this.parentElement)
                sumTotalPrice -= product.count * product.price;
                product.count = 0;


                totalPrice.innerText = sumTotalPrice;
                localStorage.setItem("basket", JSON.stringify(arr));
                WriteProductCount();
            }
        }


    });
}