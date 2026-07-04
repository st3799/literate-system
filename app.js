let questions = [];
let current = 0;
let score = 0;

async function load() {
    const res = await fetch("data/limit.json");
    questions = await res.json();

    current = 0;
    score = 0;

    showQuestion();
}

function showQuestion() {
    const q = questions[current];

    document.getElementById("box").innerHTML = `
        <h2>第 ${current + 1} 题</h2>
        <p>${q.question}</p>

        ${q.options.map((opt, i) => `
            <button onclick="check(${i})">${opt}</button>
        `).join("<br>")}

        <p>当前得分：${score}</p>
    `;
}

function check(i) {
    const q = questions[current];

    if (i === q.answer) {
        score++;
        alert("✔ 正确");
    } else {
        alert("❌ 错误");
    }

    current++;

    if (current < questions.length) {
        showQuestion();
    } else {
        document.getElementById("box").innerHTML = `
            <h2>测试完成 🎉</h2>
            <p>最终得分：${score} / ${questions.length}</p>
        `;
    }
}
