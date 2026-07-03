let done=0;
let correct=0;

async function startChapter(name){

    const res = await fetch(`data/${name}.json`);
    const data = await res.json();

    alert("已加载题目：" + data.length + "题");
}
