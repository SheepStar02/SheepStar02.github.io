var v=Object.defineProperty;var w=(n,a,e)=>a in n?v(n,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[a]=e;var u=(n,a,e)=>(w(n,typeof a!="symbol"?a+"":a,e),e);import{R as c,j as o,a as l,c as C}from"./client-552142d5.js";function N(){const[n,a]=c.useState(!1),[e,t]=c.useState([]),i=c.useRef(null);return l("div",{className:"content-wrap solver-scroll",children:o("div",{className:"main-container",children:[l(S,{setSolved:a,solved:n,setSteps:t,showStep:i,steps:e}),l(I,{solved:n,steps:e,showStep:i})]})})}class S extends c.Component{constructor(e){super(e);u(this,"animationDetails",["None","Basic","Detailed","Everything"]);u(this,"coordinateValues",[["A","B","C","D","E","F","G","H","I"],["1","2","3","4","5","6","7","8","9"]]);u(this,"toggleCoordinates",()=>{this.setState({showCoordinates:!this.state.showCoordinates})});u(this,"togglePossible",()=>{this.setState({showPossible:!this.state.showPossible})});u(this,"toggleSpeed",e=>{this.setState({speed:e})});u(this,"toggleDetails",()=>{this.state.details<this.animationDetails.length-1?this.setState({details:this.state.details+1}):this.setState({details:0})});u(this,"toggleAnimate",()=>{this.setState({animate:!this.state.animate})});u(this,"cancel",e=>{this.setState({solving:!1}),e&&this.loadBoardStep(this.props.steps)});u(this,"clear",()=>{this.setState({board:new Array(9).fill().map(()=>new Array(9).fill(0)),originalIndex:[],errorCells:[],errorValues:[]})});u(this,"solveBoard",()=>{let e=this.state.board.map(function(h){return h.slice()}),t=this.state.board.map(function(h){return h.slice()}),i=[];if(!this.legalBoard(e)){this.addWarning.current("Illegal Puzzle","Careful checking that each box, row, and column contains no duplicate values.");return}e.forEach((h,d)=>{h.forEach((g,m)=>{g!==0&&i.push(d*e.length+m)})}),this.setState({originalIndex:i,solving:this.state.animate});let s=[],r=this.solve([0],e,s);if(r)this.state.animate?this.animateSolution(s):this.setState({board:r}),this.setState({originalBoard:t}),this.props.setSolved(!0),this.props.setSteps(s);else{this.addWarning.current("Unsolvable Puzzle","This puzzle has no solution. Make sure you've entered the correct values."),this.setState({solving:!1});return}});u(this,"loadBoardStep",(e,t)=>{let i=this.state.originalBoard.map(function(r){return r.slice()}),s=[].concat(...e);isNaN(t)&&(t=s.length-1);for(let r=0;r<=t;r++)s[r].type==="backtrack"?i=s[r].board:this.changeCell(s[r].cellNum,s[r].value,i);this.cancel(!1),this.setState({board:i}),this.state.boardRef.current.scrollIntoView({block:"end",behavior:"smooth"})});u(this,"isAllowed",(e,t,i,s)=>(i||(i=this.state.board),!this.getLine("ROW",this.getLineNum("ROW",e),i).includes(t)&&!this.getLine("COL",this.getLineNum("COL",e),i).includes(t)&&!this.getLine("BOX",Math.floor(e/9),i).includes(t)&&(i[Math.floor(e/9)][e%9]===0||s)));this.state={board:new Array(9).fill().map(()=>new Array(9).fill(0)),activeCell:-1,originalIndex:[],originalBoard:new Array(9).fill().map(()=>new Array(9).fill(0)),animate:!1,details:1,speed:50,showPossible:!1,showCoordinates:!1,errorCells:[],errorValues:[],solving:!1,boardRef:c.createRef(null)},this.addWarning=c.createRef(null),this.props.showStep.current=this.loadBoardStep,window.onkeydown=t=>{if(this.state.activeCell===-1)return;if(t.key==="Delete"||t.key==="Backspace"){this.changeCell(this.state.activeCell,0,!1);return}if(isNaN(t.key))return;let i=parseInt(t.key),s=this.state.activeCell,r=this.findDuplicate(s,i,this.state.board);if(this.changeCell(this.state.activeCell,parseInt(t.key),!1),r){this.updateErrors(r.type,r.lineNum,r.index,s);return}else this.clearErrors()},window.onmousedown=t=>{t.target.dataset.cellnum&&this.setState({activeCell:parseInt(t.target.dataset.cellnum)})}}animateSolution(e){let t=[].concat(...e);if(t.length===0){this.setState({solving:!1});return}let i=-1;const s=setInterval(()=>{if(i++,i>=t.length&&this.setState({solving:!1}),i>=t.length||!this.state.solving){this.props.solved||this.props.setSolved(!0),clearInterval(s);return}if(t[i].type==="backtrack")this.setState({board:t[i].board});else{let r=this.state.board.map(function(h){return h.slice()});this.changeCell(t[i].cellNum,t[i].value,r),this.setState({board:r})}},1010-this.state.speed*10)}updateErrors(e,t,i,s){this.setState({errorCells:this.getLineIndexes(e,t),errorValues:i.concat(s)})}legalBoard(e){let t=e.map(function(i){return i.slice()});for(let i=0;i<t.length**2;i++){let s=t[Math.floor(i/9)][i%9];if(this.changeCell(i,0,t),this.findDuplicate(i,s,t,!0))return!1;this.changeCell(i,s,t)}return!0}clearErrors(){this.setState({errorCells:[],errorValues:[]})}changeCell(e,t,i){if(i){i[Math.floor(e/i.length)][e%i.length]=t;return}let s=this.state.board;s[Math.floor(e/s.length)][e%s.length]=t,this.setState({board:s})}getPossibleValues(e,t){let i=[];for(let s=1;s<e.length+1;s++)this.isAllowed(t,s,e,!1)&&i.push(s);return i}eliminationMethod(e,t){for(let i=0;i<e.length**2;i++){if(e[Math.floor(i/e.length)][i%e.length]!==0)continue;let s=this.getPossibleValues(e,i);if(s.length===1)return this.changeCell(i,s[0],e),this.addStep(t,{type:"elimination",cellNum:i,value:s[0]}),i;if(s.length===0)return 0}}insertionMethod(e,t){for(let i of["ROW","COL","BOX"])for(let s=0;s<e.length;s++)for(let r=1;r<e.length+1;r++){let h=[];for(let d of this.getLineIndexes(i,s))this.isAllowed(d,r,e,!1)&&h.push(d);if(h.length===1)return this.changeCell(h[0],r,e),this.addStep(t,{type:"insert",cellNum:h[0],value:r,lineType:i,linNum:s}),h[0]}}solve(e,t,i){do{let r=this.eliminationMethod(t,i);if(r===0)return!1;if(r!==void 0||this.insertionMethod(t,i)!==void 0)continue;if(this.boardSolved(t))return t;let h=t.map(function(p){return p.slice()}),d=this.newPredict(e,h,i),g=t.map(function(p){return p.slice()}),m;if(g[Math.floor(e[e.length-1]/t.length)][e[e.length-1]%t.length]=h[Math.floor(e[e.length-1]/t.length)][e[e.length-1]%t.length],d)return d;do{this.addStep(i,{type:"backtrack",board:t,cellNum:e[e.length-1]}),m&&(m[Math.floor(e[e.length-1]/t.length)][e[e.length-1]%t.length]=g[Math.floor(e[e.length-1]/t.length)][e[e.length-1]%t.length],g=m.map(function(f){return f.slice()})),m=g.map(function(f){return f.slice()});var s=this.predict(e[e.length-1],e,g,i);let p=this.solve(e,g,i);if(s&&p)return p}while(s);return e.pop(),!1}while(!0)}newPredict(e,t,i){let s=t.length,r=0;for(let h=0;h<t.length**2;h++)e.includes(h)||t[Math.floor(h/t.length)][h%t.length]!==0||this.getPossibleValues(t,h).length<s&&(r=h,s=this.getPossibleValues(t,h).length);return this.predict(r,e,t,i)?this.solve(e,t,i):!1}predict(e,t,i,s){for(let r=i[Math.floor(e/i.length)][e%i.length]+1;r<i.length+1;r++)if(this.isAllowed(e,r,i,!0))return this.changeCell(e,r,i),this.addStep(s,{type:"predict",cellNum:e,value:r}),t.includes(e)||t.push(e),!0;return!1}boardSolved(e){for(let t of e)if(t.includes(0))return!1;return!0}addStep(e,t){if(e.length===0?t.stepNum=0:t.stepNum=e[e.length-1][e[e.length-1].length-1].stepNum+1,e.length===0||e[e.length-1][e[e.length-1].length-1].type!==t.type){e.push([t]);return}e[e.length-1].push(t)}getLine(e,t,i){return e==="BOX"?i[t]:i.filter((s,r)=>Math.floor(t/3)===(e==="ROW"?Math.floor(r/3):r%3)).reduce((s,r)=>s.concat(r.filter((h,d)=>Math.floor(t%3)===(e==="ROW"?Math.floor(d/3):d%3))),[])}getLineNum(e,t){switch(e){case"ROW":return Math.floor(t/27)*3+Math.floor(t%9/3);case"COL":return Math.floor(t/9)%3*3+Math.floor(t%3)}}getLineIndexes(e,t){return new Array(9).fill().map((i,s)=>{switch(e){case"BOX":return s+t*9;case"ROW":return s%3+Math.floor(s/3)*9+t%3*3+Math.floor(t/3)*27;case"COL":return s%3*3+Math.floor(s/3)*27+Math.floor(t/3)*9+t%3}})}findDuplicate(e,t,i){return t===0?!1:this.getLine("ROW",this.getLineNum("ROW",e),i).includes(t)?{type:"ROW",lineNum:this.getLineNum("ROW",e),index:this.getLineIndexes("ROW",this.getLineNum("ROW",e),i).reduce((s,r)=>(this.state.board[Math.floor(r/9)][r%9]===t&&s.push(r),s),[])}:this.getLine("COL",this.getLineNum("COL",e),i).includes(t)?{type:"COL",lineNum:this.getLineNum("COL",e),index:this.getLineIndexes("COL",this.getLineNum("COL",e),i).reduce((s,r)=>(this.state.board[Math.floor(r/9)][r%9]===t&&s.push(r),s),[])}:this.getLine("BOX",Math.floor(e/9),i).includes(t)?{type:"BOX",lineNum:Math.floor(e/9),index:this.getLineIndexes("BOX",Math.floor(e/9),i).reduce((s,r)=>(this.state.board[Math.floor(r/9)][r%9]===t&&s.push(r),s),[])}:!1}render(){return o("div",{className:"sudoku",ref:this.state.boardRef,children:[l(M,{solve:this.solveBoard,clear:this.clear,cancel:this.cancel,toggleAnimate:this.toggleAnimate,toggleDetails:this.toggleDetails,solving:this.state.solving,animate:this.state.animate,toggleSpeed:this.toggleSpeed,togglePossible:this.togglePossible,details:this.state.details,animationDetails:this.animationDetails,speed:this.state.speed,showPossible:this.state.showPossible,toggleCoordinates:this.toggleCoordinates}),o("div",{className:"sudoku-board-container",children:[l("div",{className:"sudoku-board-wrap",children:l("div",{className:`sudoku-board${!this.state.showPossible&&" hide-possible-values"||""}`,children:this.state.board.map((e,t)=>l(k,{values:e,group:t,active:this.state.activeCell,originalIndex:this.state.originalIndex,errorCells:this.state.errorCells,errorValues:this.state.errorValues,isAllowed:this.isAllowed}))})}),l("div",{className:`sudoku-coordinates horizontal-coordinates${this.state.showCoordinates&&" show"||""}`,children:this.coordinateValues[0].map(e=>l("span",{children:e}))}),l("div",{className:`sudoku-coordinates verticle-coordinates${this.state.showCoordinates&&" show"||""}`,children:this.coordinateValues[1].map(e=>l("span",{children:e}))})]}),l(y,{addWarning:this.addWarning})]})}}function k(n){return l("div",{className:"sudoku-group",children:n.values.map((a,e)=>l(b,{value:a,active:n.active,cellNum:n.group*9+e,originalIndex:n.originalIndex,errorCells:n.errorCells,errorValues:n.errorValues,isAllowed:n.isAllowed}))})}function b(n){return o("div",{className:`sudoku-cell${n.cellNum===n.active&&" active"||""}${n.errorCells.includes(n.cellNum)&&" error-cell"||""}${n.value!==0&&" filled"||""}`,"data-cellnum":n.cellNum,children:[l("span",{className:`sudoku-value${n.originalIndex.includes(n.cellNum)&&" original"||""}${n.errorValues.includes(n.cellNum)&&" error-value"||""}`,children:n.value!==0&&n.value||""}),l("div",{className:"possible-values",children:Array(9).fill().map((a,e)=>{if(n.isAllowed(n.cellNum,e+1,!1,!1))return l("span",{children:e+1})})})]})}function y({addWarning:n}){const[a,e]=c.useState([]),[t,i]=c.useState([]);c.useEffect(()=>{n.current=s});function s(h,d){e([...a,{type:h,message:d}])}const r=h=>{i([...t,h]),setTimeout(()=>{i(t.filter(d=>d!==h)),e(a.filter(d=>d!==h))},200)};return l("div",{className:"warning-container",children:a.map(h=>o("div",{className:`warning${t.includes(h)&&" fade-out"||""}`,children:[o("div",{className:"warning-content",children:[l("h3",{children:h.type}),l("p",{children:h.message})]}),o("button",{className:"close-warning",onClick:()=>{r(h)},children:[l("div",{}),l("div",{})]})]}))})}class M extends c.Component{constructor(a){super(a)}render(){return o("div",{className:`solver-options solver-scroll${this.props.solving&&" solving"||""}`,children:[l("h1",{children:"Sudoku Solver"}),l("p",{children:"Visualize the algorithm behind the classic japanese logic puzzle"}),o("div",{className:"solver-methods",children:[l("button",{className:"solve-board",onClick:()=>{this.props.solve()},children:"Solve"}),l("button",{className:"clear-board",onClick:()=>{this.props.clear()},children:"Clear"}),l("button",{className:"cancel-solve",onClick:()=>{this.props.cancel(!0)},children:"Skip Animation"})]}),l("h1",{children:"Advanced Settings"}),o("div",{className:"animation-setting-container disable-while-solving",children:[o("label",{className:"setting-wrap",children:[l("span",{children:"Possible Values"}),o("label",{className:"toggle-button toggle-possible",children:[l("input",{type:"checkbox",onClick:()=>{this.props.togglePossible()}}),l("span",{className:"checkbox"})]})]}),o("label",{className:"setting-wrap",children:[l("span",{children:"Coordinates"}),o("label",{className:"toggle-button toggle-coordinates",children:[l("input",{type:"checkbox",onClick:()=>{this.props.toggleCoordinates()}}),l("span",{className:"checkbox"})]})]}),o("label",{className:"setting-wrap disable-while-solving",children:[l("span",{children:"Animate"}),o("label",{className:"toggle-button toggle-animate",children:[l("input",{type:"checkbox",checked:this.props.animate,onClick:()=>{this.props.toggleAnimate()}}),l("span",{className:"checkbox"})]})]}),o("div",{className:`animation-settings${this.props.animate&&" show"||""}`,children:[l("hr",{}),o("div",{className:"setting-wrap disable-while-solving",children:["Animation Speed ",`(${this.props.speed}%)`,o("div",{children:[l("span",{children:"slow"}),l("input",{className:"animation-speed",type:"range",max:"100",min:"1",defaultValue:"50",onChange:a=>{this.props.toggleSpeed(parseInt(a.target.value))}}),l("span",{children:"fast"})]})]}),o("div",{className:"setting-wrap disable-while-solving",children:["Animation Details",l("button",{className:"highlight-cells",onClick:()=>{this.props.toggleDetails()},children:this.props.animationDetails[this.props.details]})]})]})]})]})}}class I extends c.Component{constructor(e){super(e);u(this,"stepsPerPage",50);this.state={pageNum:1}}getCoordinates(e,t){let i=[["A","B","C","D","E","F","G","H","I"][Math.floor(e/9)%3*3+Math.floor(e%3)],Math.floor(e/27)*3+Math.floor(e%9/3)+1];return t?i[0]+i[1]:i}createCellRef(e){return l("span",{"data-cell":this.getCoordinates(e,!0),children:this.getCoordinates(e,!0)})}getBreakdown(){let e={elimination:0,insert:0,predict:0,backtrack:0},t=[].concat(...this.props.steps);for(let i of t)e[i.type]++;return`Unique Steps: ${t.length} | Elimination: ${e.elimination} | Insertion: ${e.insert} | Prediction: ${e.predict} `}render(){return o("div",{className:"solution",children:[o("div",{className:`description${!this.props.solved&&" show"||""}`,children:[l("h1",{className:"title",children:l("span",{children:"How It Works"})}),o("ul",{children:[l("li",{children:"This sukoku solver is created with the purpose to demonstrate the algorithm behind the solution of the classic japanese puzzle game: sudoku."}),l("li",{children:"There are 3 methods used by this solver and is relatively optimzed to solve every puzzle within 3 seconds"}),l("li",{children:"The animation will highlight the technique used to solve each individual cell and described in the report to better understand why each method was used."})]}),l("h2",{className:"title",children:l("span",{children:"Solving Methods"})}),o("div",{className:"solving-methods",children:[o("div",{children:[l("h4",{children:"Elimination"}),l("p",{children:"Every cell is evaluated for which numbers that can exist. If any given cell can only have one possible value, it must be the correct value. However, not always will there be a cell with only one solution and another method will be required."})]}),o("div",{children:[l("h4",{children:"Insertion"}),l("p",{children:"Each row, column and box is evaluated for which cells each number (1-9) can exist. If any number is only allowed in one cell, it must be the correct value. Think of this as the opposite of elimination method."})]}),o("div",{children:[l("h4",{children:"Recursion"}),l("p",{children:"Recursion is one of the more challenge concepts in algorithms. To make this simple, a prediction is made when none of the other methods can be used. If said prediction leads to an impossible solution, the method creates a new prediction until the puzzle is solved."})]})]}),l("p",{className:"footer",children:"Disclaimer: Algorithms used in this solver is not 100% optimized but created with the intent to demonstrate and simplify the solution. ©"})]}),o("div",{className:`report${this.props.solved&&" show"||""}`,children:[l("h1",{className:"title",children:l("span",{children:"Solution Report"})}),l("h2",{children:this.getBreakdown()}),l("ol",{className:"report-tree",children:this.props.steps.map((e,t)=>{if(!(t>=this.stepsPerPage*this.state.pageNum))return l("li",{className:`step${e.length!==1&&" step-tree"||""}`,children:o("h3",{children:[l("h4",{"data-type":e[0].type,onClick:()=>{this.props.showStep.current(this.props.steps,e[0].stepNum)},children:l(L,{step:e,showStep:this.props.showStep,getCoordinates:this.getCoordinates})}),e.length!==1&&l("ol",{className:"substep",children:e.map((i,s)=>{if(e.length!==1)return l("li",{onClick:()=>{this.props.showStep.current(this.props.steps,i.stepNum)},children:l(R,{substep:i,showStep:this.props.showStep,getCoordinates:this.getCoordinates})})})})]})})})}),o("div",{className:"footer",children:[l("button",{className:`increase-page${this.state.pageNum*this.stepsPerPage>=this.props.steps.length&&" hide"||""}`,onClick:()=>{this.setState({pageNum:this.state.pageNum+1})},children:"Show More"}),l("button",{className:`decrease-page${this.state.pageNum<=1&&" hide"||""}`,onClick:()=>{this.setState({pageNum:this.state.pageNum-1})},children:"Show Less"})]})]})]})}}function L(n){let a=n.step;switch(a[0].type){case"elimination":return a.length===1&&o(c.Fragment,{children:[l("span",{children:"Cell "}),l("span",{onClick:()=>{n.showStep.current(n.steps,a[0].stepNum)},className:"cellRef","data-cell":n.getCoordinates(a[0].cellNum,!0),children:n.getCoordinates(a[0].cellNum,!0)}),o("span",{children:[" ","was filled in with value ",a[0].value," using Elimination method."]})]})||o("span",{children:[a.length," Cells were filled in using Elimination method."]});case"insert":return a.length===1&&o(c.Fragment,{children:[l("span",{children:"Cell "}),l("span",{onClick:()=>{n.showStep.current(n.steps,a[0].stepNum)},className:"cellRef","data-cell":n.getCoordinates(a[0].cellNum,!0),children:n.getCoordinates(a[0].cellNum,!0)}),o("span",{children:[" ","was filled in with value ",a[0].value," using Insertion method."]})]})||o("span",{children:[a.length," Cells were filled in using Insertion method."]});case"predict":return a.length===1&&o(c.Fragment,{children:[l("span",{children:"Cell "}),l("span",{onClick:()=>{n.showStep.current(n.steps,a[0].stepNum)},className:"cellRef","data-cell":n.getCoordinates(a[0].cellNum,!0),children:n.getCoordinates(a[0].cellNum,!0)}),o("span",{children:[" was predicted with value ",a[0].value,"."]})]})||o("span",{children:[a.length," predictions were created."]});case"backtrack":return a.length===1&&o(c.Fragment,{children:[l("span",{children:"Cell "}),l("span",{onClick:()=>{n.showStep.current(n.steps,a[0].stepNum)},className:"cellRef","data-cell":n.getCoordinates(a[0].cellNum,!0),children:n.getCoordinates(a[0].cellNum,!0)}),o("span",{children:[" ","had an incorrect prediction, all associated values were removed."]})]})||o("span",{children:[a.length," predictions were incorrect. Subsequent values were removed."]})}}function R(n){let a=n.substep;switch(a.type){case"elimination":return o(c.Fragment,{children:[l("span",{children:"Cell "}),l("span",{onClick:()=>{n.showStep.current(n.steps,a.stepNum)},className:"cellRef","data-cell":n.getCoordinates(a.cellNum,!0),children:n.getCoordinates(a.cellNum,!0)}),o("span",{children:[" was filled in with value ",a.value,"."]})]});case"insert":return o(c.Fragment,{children:[o("span",{children:["The value ",a.value," was filled into cell "]}),o("span",{onClick:()=>{n.showStep.current(n.steps,a.stepNum)},className:"cellRef","data-cell":n.getCoordinates(a.cellNum,!0),children:[n.getCoordinates(a.cellNum,!0),"."]})]});case"predict":return o(c.Fragment,{children:[l("span",{children:"Cell "}),l("span",{onClick:()=>{n.showStep.current(n.steps,a.stepNum)},className:"cellRef","data-cell":n.getCoordinates(a.cellNum,!0),children:n.getCoordinates(a.cellNum,!0)}),o("span",{children:[" was predicted with value ",a.value,"."]})]});case"backtrack":return o(c.Fragment,{children:[l("span",{children:"Prediction on cell "}),l("span",{onClick:()=>{n.showStep.current(n.steps,a.stepNum)},className:"cellRef","data-cell":n.getCoordinates(a.cellNum,!0),children:n.getCoordinates(a.cellNum,!0)}),l("span",{children:" was incorrect and associated values were removed."})]})}}function A(){return l(N,{})}C.createRoot(document.getElementById("root")).render(l(c.StrictMode,{children:l(A,{})}));
