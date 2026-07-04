let current = [];
let index = 0;

let done = 0;
let correct = 0;

const app = document.getElementById("app");

document.querySelectorAll(".btn").forEach(btn=>{
btn.addEventListener("click",()=>{
loadChapter(btn.dataset.chapter);
});
});

function loadChapter(name){

if(!questionBank[name]){
alert("题库未加载");
return;
}

current = questionBank[name];
index = 0;

render();

}

function render(){

const q = current[index];

app.innerHTML = `
<h2>第 ${index+1} 题</h2>
<p>${q.q}</p>

${q.options.map((o,i)=>`
<div class="option" onclick="check(${i})">${o}</div>
`).join("")}
`;

}

window.check = function(i){

const q = current[index];

done++;

if(i === q.a) correct++;

localStorage.setItem("done",done);
localStorage.setItem("correct",correct);

update();

alert(q.explain);

index++;

if(index < current.length){
render();
}else{
app.innerHTML="完成本章";
}

}

function update(){

document.getElementById("done").innerText = done;

let rate = done?Math.round(correct/done*100):0;

document.getElementById("rate").innerText = rate + "%";

}
