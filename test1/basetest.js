/*var pet = {
  words: '...',
  speak: function(say){
      console.log(say + ' ' + this.words);
  },
  place: 'aaa',
  run: function(dest){
    console.log("place :" + this.place);
  }
}

var dog = {
  words:'wang',
  place:'xian'
}

pet.run.call(dog, 'place');
pet.speak.apply(dog,['Speak']);   // Speak wang
*/
function Pet(words, dest){
  this.words = words;
  this.place = dest;
  this.speak = function(){
      console.log('speak :' + this.words);
  }
  this.run = function(){
    console.log('run :' + this.place);
  }
}

function Dog(words, place){
  //Pet.call(this,words);  // Pet中的this指向当前的Dog,使Dog拥有Pet的方法
  Pet.apply(this,[words, place]);
}

var dog = new Dog('wang','xian');
dog.speak();
dog.run();