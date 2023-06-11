// fonction standard 
function func(){
  console.log("Salut")
}

func();


// fonction invoquée immédiatement 
(function func2(){
  console.log("salut")
})();


const username = "Quentin";

// les fonctions invoquées immédiatement permettent d'ajouter un contexte supplémentaire au contexte global du script 
(function func3(){
  const username = "Paul"
  console.log(username)
})();

console.log(username);

// fonction invoquée immédiatement avec récursion
(function func4(num){
  console.log(num);
  num++;
  num !== 10 && func4(num)
})(0);

// fonction fléchée anonyme invoquée immédiatement avec closure 
(() => {
    let num = 0;
    return increment = () => {
      num++;
      console.log(num)
    }
})();

increment();
increment();
increment();

// module # syntaxe 1
const myModule = (() => {
  let num = 0;
  return {
    get: () => {console.log(num)},
    set: (value) => {num = value},
    increment: () => {num++},
    reset: () => {num = 0}
  }
})();

// module # syntaxe 2
const myModule2 = (() => {
  let num = 0;
  const get = () => {console.log(num)};
  const set = (value) => {num = value};
  const increment = () => {num++};
  const reset = () => {num = 0};
  return {
    get,
    set, 
    increment,
    reset
  }
})();

myModule.set(3);
myModule.increment();
myModule.get();

// fonction asynchrone invoquée immédiatement 
(async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data)
})();









