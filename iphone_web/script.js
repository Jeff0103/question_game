let currentQuestion = 1;
let selectedAnswers = {};
let timerInterval;

// 選擇答案
function selectAnswer(questionNum, answer) {
    // 移除當前問題所有選項的 selected 類別
    const question = document.getElementById(`question${questionNum}`);
    const options = question.querySelectorAll('.option-btn');
    options.forEach(opt => opt.classList.remove('selected'));
    
    // 添加 selected 類別到被點擊的選項
    event.target.classList.add('selected');
    
    // 儲存答案
    selectedAnswers[questionNum] = answer;
    
    // 啟用下一題按鈕
    document.getElementById(`next${questionNum}`).disabled = false;
}

// 下一題
function nextQuestion(questionNum) {
    if (!selectedAnswers[questionNum]) {
        return;
    }
    
    // 隱藏當前問題
    document.getElementById(`question${questionNum}`).classList.remove('active');
    
    // 顯示下一個問題
    currentQuestion = questionNum + 1;
    document.getElementById(`question${currentQuestion}`).classList.add('active');
    
    // 更新進度條
    const progress = (currentQuestion / 3) * 100;
    document.getElementById('progress').style.width = progress + '%';
    
    // 更新問題計數器
    document.getElementById('current-question').textContent = currentQuestion;
    
    // 如果進入第三題，顯示詐騙廣告
    if (currentQuestion === 3) {
        setTimeout(() => {
            showScamPopup();
        }, 1000); // 延遲1秒顯示
    }
}

// 完成測驗
function finishQuiz() {
    if (!selectedAnswers[3]) {
        return;
    }
    
    // 隱藏第三題
    document.getElementById('question3').classList.remove('active');
    
    // 顯示結果
    document.getElementById('result').classList.add('active');
    
    // 更新進度條到100%
    document.getElementById('progress').style.width = '100%';
}

// 重新開始測驗
function restartQuiz() {
    currentQuestion = 1;
    selectedAnswers = {};
    
    // 重置所有問題
    document.querySelectorAll('.question-card').forEach(card => {
        card.classList.remove('active');
    });
    
    // 移除所有選中狀態
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // 禁用所有下一題按鈕
    document.querySelectorAll('.next-btn').forEach(btn => {
        btn.disabled = true;
    });
    
    // 顯示第一題
    document.getElementById('question1').classList.add('active');
    
    // 重置進度條
    document.getElementById('progress').style.width = '33.33%';
    document.getElementById('current-question').textContent = '1';
}

// 顯示詐騙彈窗
function showScamPopup() {
    const overlay = document.getElementById('scamOverlay');
    overlay.classList.add('show');
    
    // 啟動倒數計時器
    startTimer();
    
    // 播放音效（如果需要）
    // const audio = new Audio('alert.mp3');
    // audio.play();
}

// 關閉詐騙彈窗
function closeScam() {
    const overlay = document.getElementById('scamOverlay');
    overlay.classList.remove('show');
    clearInterval(timerInterval);
}

// 倒數計時器
function startTimer() {
    let timeLeft = 300; // 5分鐘
    
    timerInterval = setInterval(() => {
        timeLeft--;
        
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        
        document.getElementById('timer').textContent = 
            `0${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            document.getElementById('timer').textContent = '00:00';
        }
    }, 1000);
}


// 防止關閉彈窗（更像真實詐騙）
document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('scamOverlay');
    
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            // 點擊背景時不關閉，或者顯示更多誘導訊息
            alert('⚠️ 請不要錯過您的獎品！');
        }
    });
});

