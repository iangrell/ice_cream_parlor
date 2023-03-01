console.log('ice cream')

const iceCream = [{
    name: 'Cookie Dough',
    image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
    price: 1
}, {
    name: 'Vanilla',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
    price: 1
}, {
    name: 'Strawberry',
    image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
    price: 2
}]

const toppings = [{
    name: 'Sprinkles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
    price: 1
}, {
    name: 'Chocolate Chips',
    image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
    price: 2
}]

const containers = [{
    name: 'Waffle Cone',
    image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
    price: 2
}, {
    name: 'Waffle Bowl',
    image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
    price: 4
}]





function addIceCream(flavorName) {
    let flavor = iceCream.find(i => i.name == flavorName)
    flavor.quantity++
    console.log(flavor.name);
    drawCart()
}

function addToppings(toppingsName) {
    let topping = toppings.find(t => t.name == toppingsName)
    toppings.quantity++
    console.log(topping.name);
    drawCart()
}

function addContainer(containerName) {
    let container = containers.find(c => c.name == containerName)
    containers.quantity++
    console.log(container.name);
    drawCart()
}


function drawCart() {
    let total = 0
    let template = ''
    iceCream.forEach(i => {
        total += i.price * i.quantity
        if (i.quantity) {
            template += `
            <div class="item"><b>${i.flavorName}</b>${i.quantity} - $${(i.quantity * i.price).toFixed(2)}</div>
            `
        }
    })
    console.log('total $', total);
    document.getElementById('total').innerText = total.toFixed(2)
    document.getElementById('items').innerHTML = template
}

