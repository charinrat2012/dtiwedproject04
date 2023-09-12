console.log('HEllo')

// on paramater - on 

function funcA(){
    console.log('AAA')
}
funcA()
funcA()

//have parameters - no return

function funcB(data1, data2){
    console.log(`${data2} ยกกำลัง ${data2} เท่ากับ ${data1 ** data2} `)
}

funcB(10,2)
funcA()

//no parameter -  has return

function funcC(){
    console.log('Wow...')
    return 100 * 2
}
console.log(funcC( ))
x = funcC( ) - 500 
console.log ( x )

//have parameters - has return

function funcD(xx, yy, zz){
    return xx + yy +zz
}
    funcD(10, 20, 30)
//---------------------------------------
function funcE(n1, n2, n3 = 100){
    console.log(n1+n2+n3)
}
funcE(200+300) //600
funcE(200,300,400) //900
//---------------------------------------
//expression function\function expression
let a = 20

let b = function(){
    console.log('SAU 555')
    console.log('SAU 555')
    
}
//---------------------------------------
let c =()=>{
    console.log('SAU 555')
    console.log('SAU 555')
}
//---------------------------------------
let d = function(xxx){
    console.log(xxx + 20)
}
let e = (num) => num * 10
console.log(e (200))
b()
b()
c()
d(500)