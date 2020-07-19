// var Player ={
//     name: 'Ram',
//     team: 'RCB'
// }



// console.log(Player.__proto__)



var num = [1,2,3,4]
// console.log(num.prototype) (returns undefined)
// console.log(__proto__)

function Player(){

}

Player.prototype.hello = function(){
    return "Hello World I finally figured out proto and prototype"
}

// console.log(Player.prototype.hello())


const ram = new Player
// console.log(ram.__proto__)
//console.log(ram.hello())


//Conclusion : Every function has prototype but not pure objects and array  . Pure objects only have __proto__, this was hellava mind 
// Also, when object is created using new with  function , object created does not have prototype only proto