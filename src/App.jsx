import './App.css';
import { useState, useMemo, useRef, useEffect } from 'react';

function App() {
  const [questions, setQuestions] = useState(0);
  const [disable, setDisable] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [rand, setRand] = useState(0);
  const [ans, setAns] = useState("");
  const [qPer, setQPer] = useState([0, 0]);
  const [qDone, setQDone] = useState(0);
  const [cClicked, setCClicked] = useState(0);
  const [time, setTime] = useState(0.00);
  const [cDis, setCDis] = useState(false);
  const [tTime, setTTime] = useState(0.00);
  const [mis, setMis] = useState([]);
  const ansRef = useRef(null);
  function setSetQuestions(event) {
    setQuestions(Math.floor(parseInt(event.target.value)));
    if(isNaN(Math.floor(parseInt(event.target.value)))) setQuestions(0);
  };

  function setSetAns(event) {
    setAns(event.target.value);
  }
  let oneoneone = useMemo(function () {
    let x = Math.random();
    let y = Math.random();
    let solution;
    let qFormat;
    if(y > .51) {
      solution = 111*Math.round(x*99);
      qFormat = `111 x ${Math.round(x*99)}`
    }
    else if (y < .49) {
      solution = 111*Math.round(x*999);
      qFormat = `111 x ${Math.round(x*999)}`
    }
    else {
      solution = 111*Math.round(x*9999);
      qFormat = `111 x ${Math.round(x*9999)}`
    }
    return {"solution": solution, "qFormat": qFormat}
  }, [clicked]);
  let twelve = useMemo(function() {
    let x = Math.round(Math.random()*1000);
    return {"solution": x*12, "qFormat": `12 x ${x}`}
  }, [clicked]);
  let eleven = useMemo(function () {
    let x = Math.random();
    let y = Math.random();
    let solution;
    let qFormat;
    if(y > .51) {
      solution = 11*Math.round(x*99);
      qFormat = `11 x ${Math.round(x*99)}`
    }
    else if (y < .49) {
      solution = 11*Math.round(x*999);
      qFormat = `11 x ${Math.round(x*999)}`
    }
    else {
      solution = 11*Math.round(x*9999);
      qFormat = `11 x ${Math.round(x*9999)}`
    }
    return {"solution": solution, "qFormat": qFormat}
  }, [clicked]);
  let foil = useMemo(function() {
    let x = Math.round(Math.random()*100);
    let y = Math.round(Math.random()*100);
    return {"solution": x*y, "qFormat": `${x} x ${y}`};
  }, [clicked]);
  let onezeroone = useMemo(function() {
    let x = Math.random();
    let y = Math.random();
    if(y < .5) return {"solution": 101*Math.round(x*100), "qFormat": `101 x ${Math.round(x*100)}`}
    else if(y > .5) return {"solution": 101*Math.round(x*1000), "qFormat": `101 x ${Math.round(x*1000)}`}
  }, [clicked]);
  let twofive = useMemo(function() {
    let x = Math.round(Math.random()*100)*4;
    return {"solution": 25*x, "qFormat": `25 x ${x}`};
  }, [clicked]);
  let sevenfive = useMemo(function() {
    let x = Math.round(Math.random()*25)*4;
    return {"solution": 75*x, "qFormat": `75 x ${x}`}; 
  }, [clicked]);
  let fifty = useMemo(function() {
    let x = Math.round(Math.random()*500)*2;
    return {"solution": 50*x, "qFormat": `50 x ${x}`}; 
  }, [clicked]);
  //start off on 125's trick in the trickbook, it should be mult by fractions of 100 or 1000. remember to add approx(5% either way)
  let onetwofive = useMemo(function() {
    let x = Math.round(Math.random()*50)*8;
    let y = Math.random();
    let z = Math.round(Math.random()*7) + 1;
    return {"solution": 125*z*x, "qFormat": `${x} x ${125*z}`};
  }, [clicked]);
  //10th trick
  let afterhundred = useMemo(function() {
    let x = Math.round(Math.random()*15);
    let y = Math.round(Math.random()*15);
    let z = Math.random();
    if(z < .5) return {"solution": (x+100)*(y+100), "qFormat": `${x+100} x ${y+100}`};
    else if(z > .5) return {"solution": (x+1000)*(y+1000), "qFormat": `${x+1000} x ${y+1000}`};
  }, [clicked]);
  let belowhundred = useMemo(function() {
    let x = Math.round(Math.random()*10);
    let y = Math.round(Math.random()*10);
    let z = Math.random();
    if(z < .5) return {"solution": (100-x)*(100-y), "qFormat": `${100-x} x ${100-y}`};
    else if(z > .5) return {"solution": (1000-x)*(1000-y), "qFormat": `${1000-x} x ${1000-y}`};
  }, [clicked]);
  let nearhundred = useMemo(function() {
    let x = Math.round(Math.random()*10) + 100;
    let y = 100 - Math.round(Math.random()*10);
    return {"solution": x*y, "qFormat": `${x} x ${y}`};
  }, [clicked]);
  let squarefive = useMemo(function() {
    let x = Math.round(Math.random()*15)*10+5;
    return {"solution": x**2, "qFormat": `${x}^2`};
  }, [clicked]);
  let fourtytofifty = useMemo(function() {
    let x = Math.round(Math.random()*20) + 40;
    return {"solution": x**2, "qFormat": `${x}^2`};
  }, [clicked]);
  let distfromsquares = useMemo(function() {
    let x = Math.round(Math.random()*90) + 10;
    let y = Math.round(Math.random()*4);
    let nums = [x-y, x+y];
    return {"solution": nums[0]*nums[1], "qFormat": `${nums[0]} x ${nums[1]}`};
  }, [clicked]);
  //x2, x3, x7 squares
  let squarefactor = useMemo(function() {
    let x = Math.round(Math.random()*30);
    let y;
    let z = Math.random();
    if(z < .4) y = x*2;
    else if(z < .8) y = x*3;
    else if(z < 1) y = x*7;
    return {"solution": x**2+y**2, "qFormat": `${x}^2 + ${y}^2`};
  }, [clicked]);
  let diffsquares = useMemo(function() {
    let x = Math.round(Math.random()*100);
    let y;
    let z = Math.random();
    if(z < .5) y = x - 1;
    else y = x - 2;
    return {"solution": x**2-y**2, "qFormat": `${x}^2 - ${y}^2`};
  }, [clicked]);
  let twonumsendfive = useMemo(function() {
    let x = Math.round(Math.random()*90)+5;
    let y = Math.round(Math.random()*90)+5;
    return {"solution": x*y, "qFormat": `${x} x ${y}`};
  }, [clicked]);
  let mixednumsumone = useMemo(function() {
    let x = Math.round(Math.random() * 11) + 1;
    let y = Math.round(Math.random() * 4) + 1;
    let z = Math.round(Math.random() * (y-2)) + 1;
    if(z/y == .5) {
      y = 2;
      z = 1;
    } 
    if(Number.isInteger((x*y+z)/y) * ((x*y+y-z)/y)) return {"solution": ((x*y+z)/y) * ((x*y+y-z)/y), "qFormat": `${x} ${z}/${y} x ${x} ${y-z}/${y}`};
    else return {"solution": `${x*x+x} ${z*(y-z)}/${y*y}`, "qFormat": `${x} ${z}/${y} x ${x} ${y-z}/${y}`};
  }, [clicked]);
  //20th trick
  let axaoverb = useMemo(function() {
    let impArr = [7, 9, 11, 13, 17, 23];
    let a = Math.round(Math.random()*(impArr.length-1));
    let x = impArr[a];
    let y = Math.round(Math.random()*6) - 3;
    if(y == 0) {
      if(Math.random() < .5) y = -1;
      else y = 1;
    }
    return {"solution": `${x - y} ${y*y}/${x}`, "qFormat": `${x} x ${x-y}/${x} (mixed number)`};
  }, [clicked]);
  let remaindertwofoureight = useMemo(function() {
    let x = Math.round(Math.random()*100000);
    let nums = [2, 4, 8];
    let y = Math.random();
    if(y < .1) return {"solution": x%nums[0], "qFormat": `What is the remainder of ${x} divided by ${nums[0]}`};
    else if(y < .55) return {"solution": x%nums[1], "qFormat": `What is the remainder of ${x} divided by ${nums[1]}`};
    else return {"solution": x%nums[2], "qFormat": `What is the remainder of ${x} divided by ${nums[2]}`};
  }, [clicked]);
  let remainderthreenine = useMemo(function() {
    let x = Math.round(Math.random()*10000);
    let nums = [3, 9];
    let y = Math.random();
    if(y < .5) return {"solution": x%nums[0], "qFormat": `What is the remainder of ${x} divided by ${nums[0]}`};
    else return {"solution": x%nums[1], "qFormat": `What is the remainder of ${x} divided by ${nums[1]}`};
  }, [clicked]);
  let remaindereleven = useMemo(function() {
    let x = Math.round(Math.random()*100000);
    return {"solution": x%11, "qFormat": `What is the remainder of ${x} divided by 11`};
  }, [clicked]);
  let remainderexpression = useMemo(function() {
    let x = Math.round(Math.random()*7) + 1;
    let y = [];
    for(let i = 0; i <= 3; i++) {
      y.push(Math.round(Math.random()*99) + 1);
    }
    return {"solution": (y[0]+y[1]*y[2]-y[3])%x, qFormat: "What is the remainder of(" + y[0].toString() + " + " + y[1].toString() + " x " + y[2].toString() + " - " + y[3].toString() + ")/" + x};
  }, [clicked]);
  let aoverfourty = useMemo(function() {
    let x = Math.round(Math.random()*79) + 1;
    return {"solution": x/40, qFormat: `What is ${x}/40? (decimal)`}
  }, [clicked]);
  let subtractreverses = useMemo(function() {
    let x = Math.round(Math.random()*980) + 200;
    let xarr = x.toString().split("");
    let y = [];
    xarr.forEach((val, index) => {
      y.push(xarr[xarr.length - 1 - index]);
      val = val;
    });
    y = y.join("");
    x = parseInt(x);
    y = parseInt(y);
    return {"solution": x - y, "qFormat": x.toString() + " - " + y.toString()};
  }, [clicked]);
  let reciprocaladd = useMemo(function() {
    let x = Math.round(Math.random() * 6) + 4;
    let y = Math.round(Math.random() * 3) + 1;
    function check() {
      x = Math.round(Math.random() * 6) + 4;
      y = Math.round(Math.random() * 3) + 1;
      if(x == 0 || y == 0) check();
    }
    check();
    if(x < 5) y = x + y;
    else y = x - y;
    return {"solution": `2 ${((x-y)**2)}/${x*y}`, "qFormat": x + "/" + y + " + " + y + "/" + x + "(mixed number)"};
  }, [clicked]);
  let squares = useMemo(function() {
    let x = Math.round(Math.random()*20) + 10;
    return {"solution": x**2, "qFormat": x + "^2"};
  }, [clicked]);
  let cubes = useMemo(function() {
    let x = Math.round(Math.random()*14) + 1;
    return {"solution": x**3, "qFormat": x + "^3"};
  }, [clicked]);
  let powtwo = useMemo(function() {
    let x = Math.round(Math.random() * 8) + 2;
    return {"solution": 2**x, "qFormat": "2^" + x};
  }, [clicked]);
  let powthreefive = useMemo(function() {
    let x = Math.round(Math.random()*4) + 1;
    let y = Math.random();
    y < .5? y = 3 : y = 5;
    return {"solution": y**x, "qFormat": y + "^" + x};
  }, [clicked]);
  let firstnums = useMemo(function() {
    let x = Math.round(Math.random()*40) + 10;
    let y = Math.random();
    let qFormat;
    if(y < .5) qFormat = `1 + 2 + 3 + 4 ... + ${x}`;
    else qFormat = `What is the sum of the first ${x} integers`;
    return {"solution": x*(x+1)/2, "qFormat": qFormat};
  }, [clicked]);
  let firstodds = useMemo(function() {
    let x = (Math.round(Math.random()*10) + 4)*2 + 1;
    let y = Math.random();
    let qFormat;
    if(y < .5) qFormat = `1 + 3 + 5 + ... + ${x}`;
    else qFormat = `What is the sum of the first ${x/2-.5} odd integers`;
    return {"solution": ((x+1)/2)**2, "qFormat": qFormat};
  }, [clicked]);
  let firstevens = useMemo(function() {
    let x = (Math.round(Math.random()*10) + 4)*2;
    let y = Math.random();
    let qFormat;
    qFormat = y < .5? `2 + 4 + 6 + ... + ${x}` : `What is the sum of the first ${x/2} even integers`;
    return {"solution": x*(x+2)/4, "qFormat": qFormat};
  }, [clicked]);
  let firstcubes = useMemo(function() {
    let x = Math.round(Math.random()*6) + 4;
    return {"solution": (x*(x+1)/2)**2, "qFormat": `1^3 + 2^3 + ... + ${x}^3`};
  }, [clicked]);
  let numberofdiagonals = useMemo(function() {
    let x = Math.round(Math.random()*15) + 6;
    return {"solution": x*(x-3)/2, "qFormat": `How many diagonals are there in a ${x} sided polygon`};
  }, [clicked]);
  let polygonalnumbers = useMemo(function() {
    let polygons = ["triangular", "square", "pentagonal", "hexagonal", "heptagonal", "octagonal"];
    let x = Math.round(Math.random()*10) + 1;
    let y = Math.round(Math.random()*5) + 3;
    let polygon = polygons[y-3];
    if(polygon != "square") return {"solution": ((y-2)*x*(x+1-(y-4)))/2, "qFormat": `What is the ${x}th ${polygon} number`};
    else {return {"solution": x**2, "qFormat": `What is the ${x}th square number`};}
  }, [clicked]);
  let permutationcombination = useMemo(function() {
    function factorial(n) {
      let result = 1;
      for (let i = 2; i <= n; i++) result *= i;
      return result;
    }
    let x = Math.floor(Math.random() * 8) + 3;
    let y = Math.floor(Math.random() * (x - 1)) + 1;
    let z = Math.random();
    if (z < 0.5) {
      return {
        solution: factorial(x) / factorial(x - y),
        qFormat: `How many permutations of ${y} characters can be taken from ${x} total characters?`
      };
    }
    return {
      solution: factorial(x) / (factorial(y) * factorial(x - y)),
      qFormat: `How many combinations of ${y} characters can be taken from ${x} total characters?`
    }
  }, [clicked]);
  let parabolaaxisyvertex = useMemo(function() {
    let a = Math.round(Math.random()*5) + 1;
    let b = Math.round(Math.random()*5) + 1;
    let c = Math.round(Math.random()*5) + 1;
    let y = Math.random();
    if(y<.5) return {"solution": (0-b)/(a*2), "qFormat": `What is the axis of symmetry of ${a}x^2 + ${b}x + ${c} (decimal)`};
    else return {"solution": a*((0-b)/(a*2)) + b*((0-b)/(a*2)) + c, "qFormat": `If the vertex of ${a}x^2 + ${b}x + ${c} is (h,k), what is k? (decimal)`};
  }, [clicked]);
  let sumproductofroots = useMemo(function() {
    let a = Math.round(Math.random()*9) + 1;
    let b = Math.round(Math.random()*9) + 1;
    let c = Math.round(Math.random()*9) + 1;
    let y = Math.random();
    if(y<.5) return {"solution": (0-b)/a, "qFormat": `What is the sum of the roots to the equation: ${a}x^2 + ${b}x + ${c}`};
    else return {"solution": c/a, "qFormat": `What is the product of the roots to the equation: ${a}x^2 + ${b}x + ${c}`};
  }, [clicked]);
  let unitsdigit = useMemo(function() {
    let x = Math.round(Math.random()*19) + 1;
    let y = Math.round(Math.random()*8) + 2;
    return {"solution": (y**x)%10, "qFormat": `What is the units digit of ${y}^${x}`};
  }, [clicked]);
  let fourdadd = useMemo(function() {
    let x = Math.round(Math.random()*4000) + 999;
    let y = Math.round(Math.random()*4000) + 999;
    return {"solution": x+y, "qFormat": x.toString() + " + " + y.toString()};
  }, [clicked]);
  let threedsub = useMemo(function() {
    let x = Math.round(Math.random()*2000) + 500;
    let y = x - Math.round(Math.random()*500);
    return {"solution": x-y, "qFormat": x.toString() + " - " + y.toString()};
  }, [clicked]);
  let percenttofraction = useMemo(function() {
    let hundredfactors = [100, 50, 25, 20, 10, 5, 4, 2];
    let x = Math.round(Math.random()*98) + 2;
    let demoninator = 100;
    hundredfactors.forEach((factor) => {
      if(x%factor == 0) {x /= factor; demoninator /= factor};
    });
    return {"solution": x.toString() + "/" + demoninator.toString(), "qFormat": x.toString() + `% (fraction)`};
  }, [clicked]);
  let mixednumtodecimal = useMemo(function() {
    let x = Math.round(Math.random()*5) + 1;
    let z = Math.round(Math.random()*23) + 1;
    let y = Math.random() > .5? [Math.round(Math.random()*6) + 1, 8] : z%5 == 0? [(z + 1), 25] : [z, 25];
    return {"solution": x + y[0]/y[1], "qFormat": `${x} ${y[0]}/${y[1]} (decimal)`}; 
  }, [clicked]);
  let axbaxc = useMemo(function() {
    let x = Math.round(Math.random()*19) + 11;
    let y = (Math.round(Math.random())+2)*10;
    let a = y - Math.round(Math.random()*10);
    let b = y - a;
    return {"solution": x*a+x*b, "qFormat": x.toString() + " x " + a.toString() + " + " + x.toString() + " x " + b.toString()};
  }, [clicked]);
  let sametensumones = useMemo(function() {
    let x = (Math.round(Math.random()*8) + 1)*10;
    let y = 10-(Math.round(Math.random()*8) + 1);
    let z = 10 - y;
    let a = x + y;
    let b = x + z;
    return {"solution": a*b, "qFormat": a.toString() + " x " + b.toString()};
  }, [clicked]);
  let sameonessumtens = useMemo(function() {
    let x = Math.round(Math.random()*8) + 1;
    let y = Math.round(Math.random()*8) + 1;
    let z = 10-y;
    y *= 10;
    z *= 10;
    let a = y + x;
    let b = z + x;
    return {"solution": a*b, "qFormat": a.toString() + " x " + b.toString()};
  }, [clicked]);
  let percentaddition = useMemo(function() {
    let x = (Math.round(Math.random() * 8) + 1)*10;
    let y = (Math.round(Math.random() * 8) + 1)*10;
    let z = (x*y/100)%10;
    return {"solution": x*y/100-z, "qFormat": `What is ${y}% of ${x} minus ${z}`};
  }, [clicked]);
  let complementary = useMemo(function() {
    let x = Math.round(Math.random()*88) + 1;
    return {"solution": 90-x, "qFormat": `What is the measure of the angle complementary to ${x}`};
  }, [clicked]);
  let supplementary = useMemo(function() {
    let x = Math.round(Math.random()*178) + 1;
    return {"solution": 180-x, "qFormat": `What is the measure of the angle supplementary to ${x}`};
  }, [clicked]);
  let absvaladd = useMemo(function() {
    let a = Math.round(Math.random()*40) - 20;
    let b = Math.round(Math.random()*40) - 20;
    let c = Math.round(Math.random()*40) - 20;
    let d = Math.round(Math.random()*40) - 20;
    return {"solution": Math.abs(a-b) + Math.abs(c-d), "qFormat": `|${a} - ${b}| + |${c} - ${d}|`};
  }, [clicked]);
  let pythag = useMemo(function() {
    let triples = [[3, 4, 5], [5, 12, 13], [8, 15, 17]];
    let x = triples[Math.round(Math.random()*2)];
    let y = Math.round(Math.random()*2) + 1;
    x = x.map(val => val*y);
    let z = Math.round(Math.random()*2) + 1;
    if(z == 1 || z == 0) {
      x.splice(z, 1);
      let a = Math.random();
      if(a < .5) return {"solution": x[1]**2 - x[0]**2, "qFormat": `If ${x[0]} and k are legs of a triangle, and ${x[1]} is the hypotenuse, what is k^2?`};
      else return {"solution": (x[1]**2 - x[0]**2)**0.5, "qFormat": `If ${x[0]} and k are legs of a triangle, and ${x[1]} is the hypotenuse, what is k?`};
    }
    else {
      x.splice(2, 1);
      let a = Math.random();
      if(a < .5) return {"solution": x[1]**2 + x[0]**2, "qFormat": `If ${x[0]} and ${x[1]} are legs of a triangle, and k is the hypotenuse, what is k^2?`};
      else return {"solution": (x[1]**2 + x[0]**2)**0.5, "qFormat": `If ${x[0]} and ${x[1]} are legs of a triangle, and k is the hypotenuse, what is k?`};
    }
  }, [clicked]);
  let quadratic = useMemo(function() {
    let a = Math.round(Math.random()*2) + 1;
    let b = Math.round(Math.random()*5) + 1;
    let c = Math.round(Math.random()*9) + 1;
    let x = (Math.round(Math.random()*20) + 10)/10;
    return {"solution": a*x**2 + b*x + c, "qFormat": `Given f(x) = ${a}x^2 + ${b}x + ${c}, find f(${x})`};
  }, [clicked]);
  let onefourtythree = useMemo(function() {
    let x = Math.round(Math.random()*14)*7;
    let y = Math.round(Math.random()*2) + 1;
    return {"solution": x*y*143, "qFormat": `${x} x ${y*143}`};
  }, [clicked]);
  let baseaddsubmult = useMemo(function() {
  let base = Math.round(Math.random() * 7) + 2;
  let x_dec = Math.round(Math.random() * 20); 
  let y_dec = Math.round(Math.random() * 20);
  if(y_dec>x_dec) {
    let z = y_dec;
    y=x;
    x=z;
  }
  let signs = ["+", "-", "x"];
  let sign = signs[Math.floor(Math.random() * 3)];
  let sol_dec = (sign === "+") ? x_dec + y_dec : (sign === "-") ? x_dec - y_dec : x_dec * y_dec;
  function basify(num) {
    if (num < 0) return "-" + basify(Math.abs(num));
    return parseInt(num.toString(base));
  }
  return { "solution": basify(sol_dec), "qFormat": `${basify(x_dec)} ${sign} ${basify(y_dec)} (base ${base})` };
}, [clicked]);
  let means = useMemo(function() {
    let pmean = Math.round(Math.random()*10) + 10;
    let x = pmean - (Math.round(Math.random()*10)-5);
    let y = pmean - (Math.round(Math.random()*10)-5);
    let z = pmean*3-x-y;
    return {"solution": z, "qFormat": `The mean of three numbers, ${x}, ${y}, and x is ${pmean}, find x`};
  }, [clicked]);
  let mphtofps = useMemo(function() {
    let mph = Math.round(Math.random()*6)*15;
    let fps = mph/15*22;
    return {"solution": fps, "qFormat": `${mph} miles/hr = ______ ft/sec`};
  }, [clicked]);
  let ftoc = useMemo(function() {
    let f = (Math.round(Math.random() * 20) * 9) + 32; // Ensures an integer result
    return { "solution": (f - 32) * 5/9, "qFormat": `${f} degrees F is _____ degrees C` };
  }, [clicked]);
  let basetotwo = useMemo(function() {
    let y = Math.random();
    let base = y > 0.5 ? 4 : 8;
    let x = [Math.floor(Math.random() * base), Math.floor(Math.random() * base), Math.floor(Math.random() * base)];
    let value = x[0] * base**2 + x[1] * base + x[2];
    let z = value.toString(2);
    return {solution: z, qFormat: `What is ${x.join("")} (base ${base}) in base 2`};
  }, [clicked]);
  let sumabs = useMemo(function() {
    let x = Math.round(Math.random()*3) + 1;
    let y = (Math.round(Math.random()*2)+1)*x;
    let z = (Math.round(Math.random()*2)+1)*y;
    let sign = Math.random()>.5? "+" : "-";
    let nsign = sign == "+"? 1 : -1;
    let solutions = [];
    for(let i = -40; i <= 40; i++) {
      if(Math.abs(x*i+y*nsign) == z) solutions.push(i);
    }
    return {"solution": solutions[0] + solutions[1], "qFormat": `What is the sum of the solutions to |${x}x ${sign} ${y}| = ${z}`};
  }, [clicked]);
  let consecutive = useMemo(function() {
    let x = Math.round(Math.random())*69+1;
    let y = Math.random();
    if(y < .5) return {"solution": x, "qFormat": `What is the smallest of three consecutive integers if they sum to ${3*x+3}`};
    else {
      if(x%2 == 0) return {"solution": x, "qFormat": `What is the smallest of three consecutive even integers if they sum to ${3*x+6}`};
      else return {"solution": x, "qFormat": `What is the smallest of three consecutive odd integers if they sum to ${3*x+6}`};
    }
  }, [clicked]);
  let fib = useMemo(function() {
    let sequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
    let x = Math.round(Math.random()*10) + 1;
    return {"solution": sequence[x-1], "qFormat": `What is the ${x}th term of the Fibonacci sequence that starts with 0, 1, 1`};
  }, [clicked]);
  let threeseven = useMemo(function() {
    let x = (Math.round(Math.random()*3) + 1)*111;
    let y = Math.round(Math.random()*3) + 1;
    return {"solution": x/37*y, "qFormat": `${x} x ${y}/37`};
  }, [clicked]);
  let twoseven = useMemo(function() {
    let x = (Math.round(Math.random()*3) + 1)*111;
    let y = Math.round(Math.random()*3) + 1;
    let whole = 4*x/111*y;
    let fraction = x/111*y;
    whole += Math.floor(fraction/9);
    fraction = fraction%9;
    return {"solution": `${whole} ${fraction}/27`, "qFormat": `${x} x ${y}/27`};
  }, [clicked]);
  let basebtoten = useMemo(function() {
    let base = Math.round(Math.random()*9) + 2;
    if(base == 10) base -= Math.round(Math.random()*7) + 1;
    let digits = [Math.round(Math.random()*(base-2)) + 1, Math.round(Math.random()*(base-2)) + 1, Math.round(Math.random()*(base-2)) + 1];
    if(base <= 5) digits.push(Math.round(Math.random()*base) + 1);
    let solution = 0;
    digits.forEach((val, index) => {
      solution += val*(base**(digits.length-index));
    });
    digits = digits.map(val => val.toString());
    digits = parseInt(digits.join(""));
    return {"solution": solution, "qFormat": `What is ${digits}(base ${base}) in base 10`};
  }, [clicked]);
  let areaofcircleeq = useMemo(function() {
    let x = (Math.round(Math.random()*99)+1)**2;
    return {"solution": x, "qFormat": `What is the area of the figure with the equation (x - ${Math.round(Math.random()*10)})^2 + (y + ${Math.round(Math.random()*10)})^2 = ${x} in terms of pi`};
  }, [clicked]);
  let squarediagonal = useMemo(function() {
    let x = (Math.round(Math.random()*6) + 4)*2;
    return {"solution": (x**(1/2)/2**(1/2))**2, "qFormat": `What is the area of a square given sqrt(${x}) is the diagonal`};
  }, [clicked]);
  let ezdivision = useMemo(function() {
    let x = Math.round(Math.random()*3) + 5;
    let digits = [x*(Math.round(Math.random()*3)+1), x*(Math.round(Math.random()*3)+1), x*(Math.round(Math.random()*3)+1)];
    digits = digits.map((val) => val.toString());
    digits = parseInt(digits.join(""));
    return {"solution": digits/x, "qFormat": `${digits}/${x}`};
  }, [clicked]);
  let arr = [oneoneone, twelve, eleven, foil, onezeroone, twofive, sevenfive, fifty, onetwofive, afterhundred, belowhundred, nearhundred,
  squarefive, fourtytofifty, distfromsquares, squarefactor, diffsquares, twonumsendfive, mixednumsumone, axaoverb, remaindertwofoureight,
  remainderthreenine, remaindereleven, remainderexpression, aoverfourty, subtractreverses, reciprocaladd, squares, cubes, powtwo, 
  powthreefive, firstnums, firstodds, firstevens, firstcubes, numberofdiagonals, polygonalnumbers, 
  permutationcombination, parabolaaxisyvertex, sumproductofroots, unitsdigit, fourdadd, threedsub, percenttofraction,
  mixednumtodecimal, axbaxc, sametensumones, sameonessumtens, percentaddition, complementary, supplementary, absvaladd, pythag, quadratic,
  onefourtythree, baseaddsubmult, means, mphtofps, ftoc, basetotwo, sumabs, consecutive, fib, threeseven, twoseven, basebtoten,
  areaofcircleeq, squarediagonal, ezdivision
  ];
  //answer check thing softwear
  const checkAns = function() {
    console.log(rand);
    console.log([arr[rand].qFormat, rand]);
    if (ans == arr[rand].solution) {
      setQPer([qPer[0] + 1, qPer[1] + 1]);
    } else {
      setQPer([qPer[0], qPer[1] + 1]);
    }
    setQDone(qDone + 1);
  }
  const curQ = arr[rand];
  function doQ() {
    if(qDone < questions) return curQ.qFormat;
    else {
      return "You Have Done All the Questions";
    }
  };

  //clock
  useEffect(() => {
    let interval;
    if(!cDis) return;
    else {
      interval = setInterval(() => {setTime(t => Math.round((t + 0.01)*100)/100)}, 10);
    }
    return () => (clearInterval(interval));
  }, [cDis]);
  function startTimes() {
    setCDis(true);
  }
  useEffect(() => {
    let interval;
    if(!cDis) return;
    else {
      interval = setInterval(() => {setTTime(t => Math.round((t + 0.01)*100)/100)}, 10);
    }
    return () => (clearInterval(interval));
  }, [cDis]);
  function startTimes() {
    setCDis(true);
  }
  function clearTimes() {
    setCDis(false);
    setTime(0.00);
    setTTime(0.00)
  }
  //mistake breakdown
  function addAns(things) {
    setMis(prev => [...prev, things]);
  }
  const mistakes = mis.filter(item => item.Qanswer != item.Qsolution);
  return (
    <div className="App">
      <h1 className='mb-3 p-5 text-center bg-secondary rounded text-light'>Number Sense Practice Website</h1>
      <div className='container my-3'>
        <div className='row'>
          <div className='col-7 text-center'>
            <input className='form-control p-4 my-3' placeholder='How Many Questions?' type='number' onChange={setSetQuestions} disabled={disable}/>
          </div>
          <div className='col-5 d-flex align-items-center'>
            <button className='btn btn-outline-primary p-4 mx-auto w-75' onClick={() => {setMis([]); setDisable(!disable); setCClicked(cClicked+1); if(cClicked>=1) {setQPer([0, 0]); setQDone(0)}; startTimes()}} disabled={disable}>Submit</button>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='card p-4 text-center'>
          <p>Note: This website does not include conversions and certain memorizaitons.</p>
          <h3>Per Question Time: {time == 0? "" : time}</h3>
          <h4>Total Time: {tTime == 0? "" : tTime}</h4>
          <h4>Accuracy: {Math.round(isNaN(qPer[0]/qPer[1])? 0 : qPer[0]/qPer[1]*100)}%</h4>
          <h4>Questions Done - Total Questions: {qDone} - {questions}</h4>
          <br/>
          <div className=''>
            <h3 className='me-1 gap-1'>{disable ? doQ() : "No Question Yet"}:</h3>
            <input className='form-control w-50 text-center mx-auto' placeholder='Fraction Format: 1 1/4 or 5/4' onChange={setSetAns} onKeyDown={(e) => {
              if(e.key === "Enter") {
                setClicked(!clicked); checkAns(); if(qDone+1 == questions) {setDisable(false)}; ansRef.current.value = "";
                addAns({"Qanswer": ans, "Qquestion": arr[rand].qFormat, "Qsolution": arr[rand].solution, "timeTaken": time});
                setTime(0.00);
                if(qDone+1 == questions) {
                  clearTimes();
                  setDisable(false);
                };
                setRand(Math.round(Math.random()*(arr.length-1)));
              }
            }} disabled={!disable} ref={ansRef}/>
            <button className='btn btn-primary w-75 text-center mt-4 p-4' onClick={()=>{setClicked(!clicked); checkAns(); setTime(0.00); addAns({"Qanswer": ans, "Qquestion": arr[rand].qFormat, "Qsolution": arr[rand].solution, "timeTaken": time}); if(qDone+1 == questions) {setDisable(false); clearTimes();} ansRef.current.value = ""; setRand(Math.round(Math.random()*(arr.length-1)));}} disabled={!disable}>Submit</button>
            <button className='btn btn-outline-primary w-50 text-center mt-2 p-2' onClick={() => {setMis([]); setDisable(false); setQPer([0, 0]); setQDone(0); clearTimes(); setRand(Math.round(Math.random()*(arr.length-1)));}}>Reset</button>
          </div>
        </div>
      </div>
      {qDone == questions && mistakes.length > 0 && (
        <div className='container'>
          {mistakes.map((items) => (
          <div className='card text-center p-2 my-3'>
            <h3>You got <span className='text-primary'>{items.Qquestion}</span> Wrong</h3>
            <h5 className='my-2'>You answered: <span className='text-danger'>{items.Qanswer} in {items.timeTaken}s</span></h5>
            <h4>The Solution is: <span className='text-success'>{items.Qsolution}</span></h4>
          </div>
        ))}</div>
      )}
    </div>
  );
}

export default App;