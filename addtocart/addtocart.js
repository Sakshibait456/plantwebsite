const product = [
    {
        id: 0,
        image: 'm-aleovera.jpg',
        title: 'aleo vera plant',
        price: 120,
    },
    {
        id: 1,
        image: 'm-lemonbalm.png',
        title: 'lemon balm plant',
        price: 60,
    },
    {
        id: 2,
        image: 'm-lavender.jpg',
        title:'lavender plant',
        price: 230,
    },
    {
        id: 3,
        image: 'm-papermin.jpg',
        title: 'papeermint plant',
        price: 100,
    },
    {
        id: 4,
        image: 'm-rosemary.jpg',
        title: 'rosemary plant',
        price: 100,
    },
    {
        id: 5,
        image: 'm-turmaric.jpg',
        title: 'turmaric plant',
        price: 100,
    },
    
    {
        id: 6,
        image: 'm-tulsi.jpg',
        title: 'tulsi plant',
        price: 100,
    },
    {
        id: 7,
        image: 'm-sage.jpg',
        title: 'sage plant',
        price: 100,
    }
    ,
    {
        id: 7,
        image: 'm-sage.jpg',
        title: 'sage plant',
        price: 100,
    }
    ,
    {
        id: 7,
        image: 'shru-chinarose.jpg',
        title: 'cina rose plant',
        price: 100,
    }
    ,
    {
        id: 7,
        image: 'shru-habiscus.jpg',
        title: 'habiscus plant',
        price: 100,
    }
    ,
    {
        id: 7,
        image: 'shru-jasmin.jpg',
        title: 'jasmin plant',
        price: 100,
    }
    ,
    {
        id: 7,
        image: 'shru-mehandi.jpg',
        title: 'mehandi plant',
        price: 100,
    }
    ,
    {
        id: 7,
        image: 'm-basil.jpg',
        title: 'basil plant',
        price: 100,
    }
    ,
    {
        id: 7,
        image: 'm-ginger.jpg',
        title: 'ginger plant',
        price: 100,
    }
    ,
    {
        id: 7,
        image: 'pothos.jpg',
        title: 'pathos plant',
        price: 100,
    }
    ,
    {
        id: 7,
        image: 'bamboo.jpg',
        title: 'bamboo plant',
        price: 100,
    }
    ,
    {
        id: 7,
        image: 'monatera.jpg',
        title: 'monatera plant',
        price: 100,
    }
    ,
    {
        id: 7,
        image: 'yucca.jpg',
        title: 'yucca plant',
        price: 100,
    }
    ,
    {
        id: 7,
        image: 'snakeplant.jpg',
        title: 'snake plant',
        price: 100,
    }
    
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')


var cart =[];


function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}


function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }


    
}




const product2 = [
    {
        id: 10,
        image: 'm-aleovera.jpg',
        title: 'hi',
        price: 120,
    },
    {
        id: 11,
        image: 'm-lemonbalm.png',
        title: '',
        price: 60,
    },
    {
        id: 22,
        image: 'm-lavender.jpg',
        title: '250D DSLR Camera',
        price: 230,
    },
    {
        id: 33,
        image: 'm-papermin.jpg',
        title: 'Head Phones',
        price: 100,
    },
    {
        id: 44,
        image: 'm-rosemary.jpg',
        title: 'Head Phones',
        price: 100,
    }
    
];
const categories1 = [...new Set(product.map((item)=>
    {return item}))]
    let j=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(j++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')


var cart =[];


function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}


function displaycart(){
    let k = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (k++) +")'></i></div>"
            );
        }).join('');
    }


    
}
