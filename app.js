// Metody Massiva 17
// filter ,  map,  reduce , sort,  find, includes , at, forEach, reverse, join , concat, slice 
// pop, push, unshift, shift, 

// toSorted

const phonePrice = [
    {
        name: 'redmi 9c',
        price: 10000
    },
    {
        name: 'samsung A54',
        price: 27000
    },
    {
        name: 'iphone 11',
        price: 35000
    },
    {
        name: 'google pixel 8pro',
        price: 75000
    },
    {
        name: 'iphone 15',
        price: 80000
    },
]

const div= document.getElementById('phones')
const buttons=document.querySelectorAll('span button')

buttons[0].onclick=()=>{
    const sortedPhones =phonePrice.sort((a,b)=>a.price-b.price)
    div.innerHTML=sortedPhones.map(ph=>{
        return` <h4>${ph.name}</h4>
         <h6>${ph.price} сом</h6>
        `
    }

    )
}
for (const ph of phonePrice) {
    div.innerHTML+=`
   <h4>${ph.name}</h4>
    <h6>${ph.price} сом</h6>
    `
}
 
