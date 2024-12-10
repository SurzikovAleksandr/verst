let aall = document.querySelectorAll('.nav a')
let al = document.querySelectorAll('span a')


for (const a of aall) {
    a.addEventListener('click',()=>{
    for(let d of aall){
        d.className = 'bnactive'
    }
for (const b of document.querySelectorAll('main>div') ){
    a.id == b.id ? b.className = 'active' : b.className = 'nactive'
    a.id == b.id ? a.className = 'bactive' : ''
}

})}

for(let a of al) {
    a.addEventListener('click', ()=>{
        alert( `Ты нажал на ${a.innerHTML}`)
    })
}