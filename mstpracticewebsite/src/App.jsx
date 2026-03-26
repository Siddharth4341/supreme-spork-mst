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
    if(y < .5) return {"solution": 125*z*x, "qFormat": `${x} x ${125*z}`};
    else if(y > .5) return {"solution": 125*z*x/10, "qFormat": `${x/10} x ${125*z}`};
  }, [clicked]);
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
    let x = Math.round(Math.random()*150)+5;
    return {"solution": x**2, "qFormat": `${x}^2`};
  }, [clicked]);
  let fourtytofifty = useMemo(function() {
    let x = Math.round(Math.random()*20) + 40;
    return {"solution": x**2, "qFormat": `${x}^2`};
  }, [clicked]);
  let distfromsquares = useMemo(function() {
    let x = Math.round(Math.random()*20)*5;
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
  let remainderother = useMemo(function() {
    let x = Math.round(Math.random()*10000);
    let nums = [2, 4, 8, 3, 9];
    let y = Math.round(Math.random()*4);
    let z = Math.round(Math.random()*3);
    let a = nums.splice(y, 1);
    let b = nums.splice(z, 1);
    return {"solution": x%(a*b), "qFormat": `What is the remainder of ${x} divided by ${a*b}`};
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
  let oneoveroneplusone = useMemo(function() {
    let len = Math.round(Math.random()*3) + 3;
    let x = Math.round(Math.random()*4) + 1;
    let demArr = [];
    for(let i = 0; i < len; i++) {
      demArr.push((x+i)*(x+i+1));
    }
    demArr = demArr.map(val =>  1/val);
    const solution =  demArr.reduce((a, b) => a + b, 0);
    demArr = demArr.map(val => val.toString());
    return {"solution": solution, "qFormat": `What is the sum of ` + demArr.join(" + ")};
  }, [clicked]);
  let reciprocaladd = useMemo(function() {
    let x = Math.round(Math.random() * 9) + 1;
    let y = Math.round(Math.random() * 3) + 1;
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
  let alternatingsquares = useMemo(function() {
    let x = Math.round(Math.random()*40) + 10;
    let negative = 1;
    negative = x%2 == 0? -1 : 1;
    return {"solution": negative*(x*(x+1)/2), "qFormat": `1^2 - 2^2 + 3^2 - ... ` + negative==1? "" : "-" + `${x}`};
  }, [clicked]);
  let numberofdiagonals = useMemo(function() {
    let x = Math.round(Math.random()*20) + 2;
    return {"solution": x*(x-3)/2, "qFormat": `How many diagonals are there in a ${x} sided polygon`};
  }, [clicked]);
  let polygonalnumbers = useMemo(function() {
    let polygons = ["triangular", "square", "pentagonal", "hexagonal", "heptagonal", "octagonal"];
    let x = Math.round(Math.random()*10) + 1;
    let y = Math.round(Math.random()*5) + 3;
    let polygon = polygons[y-3];
    return {"solution": ((y-2)*x*(x+1-(y-4)))/2, "qFormat": `What is the ${x}th ${polygon} number`};
  }, [clicked]);
  let permutationcombination = useMemo(function() {
    function factorial(a) {
      let b = a;
      for(let i = 0; i < b; i++) a *= a-i;
      return a;
    };
    let x = Math.round(Math.random()*10);
    let y = Math.round(Math.random()*2) + 1;
    let z = Math.random();
    if(z < .5) return {"solution": factorial(x)/factorial(x-y), "qFormat": `How many permutations of ${y} characters be taken from ${x} total characters`};
    else return {"solution": factorial(x)/(factorial(x-y)*factorial(y)), "qFormat": `How many combinations of ${y} characters be taken from ${x} total characters`}
  }, [clicked]);
  let parabolaaxisyvertex = useMemo(function() {
    let a = Math.round(Math.random()*5) + 1;
    let b = Math.round(Math.random()*5) + 1;
    let c = Math.round(Math.random()*5) + 1;
    let y = Math.random();
    if(y<.5) return {"solution": (0-b)/(a*2), "qFormat": `What is the axis of symmetry of ${a}x^2 + ${b}x + ${c}`};
    else return {"solution": a*((0-b)/(a*2)) + b*((0-b)/(a*2)) + c, "qFormat": `If the vertex of ${a}x^2 + ${b}x + ${c} is (h,k), what is k?`};
  }, [clicked]);
  let sumproductofroots = useMemo(function() {
    let a = Math.round(Math.random()*9) + 1;
    let b = Math.round(Math.random()*9) + 1;
    let c = Math.round(Math.random()*9) + 1;
    let y = Math.random();
    if(y<.5) return {"solution": (0-b)/a, "qFormat": `What is the sum of the roots to the equation: ${a}x^2 + ${b}x + ${c}`};
    else return {"solution": c/a, "qFormat": `What is the product of the roots to the equation: ${a}x^2 + ${b}x + ${c}`};
  });
  
  let arr = [oneoneone, twelve, eleven, foil, onezeroone, twofive, sevenfive, fifty, onetwofive, afterhundred, belowhundred, nearhundred,
  squarefive, fourtytofifty, distfromsquares, squarefactor, diffsquares, twonumsendfive, mixednumsumone, axaoverb, remaindertwofoureight,
  remainderthreenine, remaindereleven, remainderother, remainderexpression, aoverfourty, subtractreverses, oneoveroneplusone, reciprocaladd,
  squares, cubes, powtwo, powthreefive, firstnums, firstnums, firstodds, firstevens, firstcubes, alternatingsquares, numberofdiagonals,
  polygonalnumbers, permutationcombination, parabolaaxisyvertex, sumproductofroots
  ];
  //answer check thing softwear
  const checkAns = function() {
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