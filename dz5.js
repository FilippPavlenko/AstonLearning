// Задание 1

function memoize(callback) {
  const cache = {};

  return function (...args) {
    args.sort();
    const key = JSON.stringify(args);
    console.log(key);
    console.log("cache before ", cache);

    if (cache[`${key}`] !== undefined) {
      console.log("Get from cache");
      return cache[`${key}`];
    }

    console.log("First calculation");
    const result = callback(...args);
    cache[`${key}`] = result;
    console.log("cache after ", cache);

    return result;
  };
}

// Задание 2

const add = (a) => {
  const innerAdd = (b) => {
    return add(a + b);
  };

  innerAdd.valueOf = () => a;

  return innerAdd;
};

// Задание 3

function logger() {
  console.log(`I output only external context: ${this.item}`);
}

const obj = { item: "some value" };

let bindLogger = logger.bind(obj);

bindLogger();

// Задание 4

Function.prototype.myBind = function (obj) {
  let func = this;
  return function () {
    func.apply(obj);
  };
};

let obj = {
  name: "Jack",
};

let myFunc = function () {
  console.log(`${this.name}`);
};

let binded = myFunc.myBind(obj);
binded();
