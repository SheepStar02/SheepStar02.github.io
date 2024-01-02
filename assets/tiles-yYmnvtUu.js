import{a as s,r as m,j as d,c as E,R as B}from"./client-9V6QpHqO.js";/* empty css              */const M=({value:c,transition:h})=>{const w=()=>`${3.5-(Math.pow(2,c).toString().length-1)*.5}rem`,u=["rgb(205,193,180)","rgb(238,228,218)","rgb(237,224,200)","rgb(242,177,121)","rgb(245,149,99)","rgb(246,124,96)","rgb(246,94,59)","rgb(237,207,115)","rgb(237,204,98)","rgb(237,200,80)","rgb(237,197,63)","rgb(237,194,45)"];return s("div",{style:{backgroundColor:u[0]},children:s("div",{className:"w-24 h-24 bg-neutral-800 flex items-center justify-center font-bold",style:{backgroundColor:u[c]||"black",color:c<=2?"rgb(119,110,101)":"white",transform:h,transitionDuration:h===""?void 0:"0.1s",fontSize:w()},children:c===0?"":Math.pow(2,c)})})},D=()=>{const[w,u]=m.useState(!1),[g,b]=m.useState(0),[p,S]=m.useState(0);m.useEffect(()=>{const r=JSON.parse(localStorage.getItem("play2048"));b((r==null?void 0:r.score)||0),S((r==null?void 0:r.best)||0),x((r==null?void 0:r.board)||l)},[]);const y=()=>{for(let r of l)for(let n of r)if(n.value===0)return!1;return!0},z=()=>{const r=new Array(4).fill(0).map(()=>new Array(4).fill(0).map(()=>({value:0,transition:""})));return v(r),v(r),r},N=r=>{if(w)return;const n=[...l],i=[];switch(r.code){case"KeyA":case"ArrowLeft":for(let t=0;t<4;t++){let o=0,a=0;for(let e=0;e<4;e++)l[t][e].value!==0&&(l[t][e].value===a?(o--,a=0):a=l[t][e].value,i.push({row:t,col:e,drow:t,dcol:o}),n[t][e].transition=`translateX(${-1*(e-o)*108}px)`,o++)}break;case"KeyD":case"ArrowRight":for(let t=0;t<4;t++){let o=3,a=0;for(let e=3;e>=0;e--)l[t][e].value!==0&&(l[t][e].value===a?(o++,a=0):a=l[t][e].value,i.push({row:t,col:e,drow:t,dcol:o}),n[t][e].transition=`translateX(${(o-e)*108}px)`,o--)}break;case"KeyW":case"ArrowUp":for(let t=0;t<4;t++){let o=0,a=0;for(let e=0;e<4;e++)l[e][t].value!==0&&(l[e][t].value===a?(o--,a=0):a=l[e][t].value,i.push({row:e,col:t,drow:o,dcol:t}),n[e][t].transition=`translateY(${-1*(e-o)*108}px)`,o++)}break;case"KeyS":case"ArrowDown":for(let t=0;t<4;t++){let o=3,a=0;for(let e=3;e>=0;e--)l[e][t].value!==0&&(l[e][t].value===a?(o++,a=0):a=l[e][t].value,i.push({row:e,col:t,drow:o,dcol:t}),n[e][t].transition=`translateY(${(o-e)*108}px)`,o--)}break;default:return}u(!0),x(n),setTimeout(()=>{const t=[...l];let o=!1,a=0;for(const e of i){if(e.row===e.drow&&e.col===e.dcol){t[e.row][e.col]={value:t[e.row][e.col].value,transition:""};continue}const f=t[e.row][e.col].value;f===t[e.drow][e.dcol].value&&(a+=Math.pow(2,f+1)),t[e.drow][e.dcol]={value:f===t[e.drow][e.dcol].value?f+1:f,transition:""},t[e.row][e.col]={value:0,transition:""},o=!0}A(g+a,t,o)},100)},A=(r,n,i)=>{b(r),S(Math.max(r,p)),x(n),u(!1),!y()&&(i&&(n=v([...l])),localStorage.setItem("play2048",JSON.stringify({score:r,best:Math.max(r,p),board:n})))},v=r=>{do var n=Math.floor(Math.random()*4),i=Math.floor(Math.random()*4);while(r[n][i].value!==0);return r[n][i].value=Math.random()>.9?2:1,r},[l,x]=m.useState(z());return s("div",{className:"w-screen h-screen flex items-center justify-center",onKeyDown:N,tabIndex:"0",children:d("div",{className:"flex flex-col outline-none",children:[d("div",{className:"flex gap-2 justify-between items-center",children:[s("h1",{className:"text-8xl font-bold text-[#776E65] text-left h-min",children:"2048"}),d("div",{className:"flex flex-col items-end gap-2",children:[d("div",{className:"flex gap-2",children:[d("div",{className:"bg-[#BBADA0] px-5 rounded",children:[s("p",{className:"text-[#EEE4DA] font-bold text-xs mt-2 text-center",children:"SCORE"}),s("p",{className:"text-white font-bold text-2xl text-center",children:g})]}),d("div",{className:"bg-[#BBADA0] px-5 rounded",children:[s("p",{className:"text-[#EEE4DA] font-bold text-xs mt-2 text-center",children:"BEST"}),s("p",{className:"text-white font-bold text-2xl text-center",children:p})]})]}),s("button",{className:"p-1.5 bg-[#8F7A66] px-4 font-bold text-lg rounded text-white w-32 my-6",onClick:()=>{const r=JSON.stringify({best:p,score:0});localStorage.setItem("play2048",r),x(z()),b(0)},children:"New Game"})]})]}),s("div",{className:"flex flex-col gap-3 bg-[#BBADA0] p-3 rounded-lg",children:l.map((r,n)=>s("div",{className:"flex gap-3",children:r.map((i,t)=>s(M,{value:i.value,transition:i.transition},t))},n))})]})})};function k(){return s("div",{className:"bg-[#FAF8EF] w-screen h-screen flex items-center justify-center",children:s(D,{})})}E.createRoot(document.getElementById("root")).render(s(B.StrictMode,{children:s(k,{})}));