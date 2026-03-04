// ==================== KONSTANTA VA MA'LUMOTLAR ====================

// Ruxsat berilgan Device ID lar
const ALLOWED_DEVICES = [
  "ABC123XYZ",
  "device_1765658529081_fgn1uvpnj","FF3LHS",'R4218Y'
  // Sizning Device ID ingizni shu yerga qo'shing
];



// Testlar ma'lumotlar bazasi
const TESTS = {
    test1: {
        id: 'test1',
        title: "Matematika",
        login: "math2026",
        password: "12345",
        accessCode: "RETAKE1",
        questions: [
            {
                question: "5 + 3 = ?",
                options: ["6", "7", "8", "9"],
                correct: 2
            },
            {
                question: "12 - 7 = ?",
                options: ["4", "5", "6", "7"],
                correct: 1
            },
            {
                question: "4 × 6 = ?",
                options: ["20", "22", "24", "26"],
                correct: 2
            },
            {
                question: "15 ÷ 3 = ?",
                options: ["3", "4", "5", "6"],
                correct: 2
            },
            {
                question: "9² = ?",
                options: ["18", "27", "36", "81"],
                correct: 3
            }
        ]
    },
    test2: {
        id: 'test2',
        title: "Informatika (50 ta savol)",
        login: "info2026",
        password: "54321",
        accessCode: "RETAKE2",
        questions: [
            {
                question: "900 MB faylning 30% qismi 12 Mbit/s, qolgan qismi 6 Mbit/s tezlikda yuklandi. Umumiy vaqtni toping.",
                options: ["12 daqiqa", "15 daqiqa", "18 daqiqa", "20 daqiqa"],
                correct: 1
            },
            {
                question: "IPv4 manzil 172.16.5.300 to'g'rimi?",
                options: ["To'g'ri", "Noto'g'ri", "IPv6", "Maxsus tarmoq"],
                correct: 1
            },
            {
                question: "110101₂ + 101011₂ natijasi?",
                options: ["1010000", "1010001", "1100000", "1001110"],
                correct: 1
            },
            {
                question: "Python: x=7, y=3. print(x**y // y) natija?",
                options: ["114", "57", "343", "49"],
                correct: 0
            },
            {
                question: "(¬A ∨ B) ∧ (A ∨ ¬B) ifoda nechta holatda rost?",
                options: ["1", "2", "3", "4"],
                correct: 1
            },
            {
                question: "5 ta tugunli to'liq grafda nechta qirra mavjud?",
                options: ["8", "9", "10", "12"],
                correct: 2
            },
            {
                question: "range(1,10,2) nechta element beradi?",
                options: ["4", "5", "6", "9"],
                correct: 1
            },
            {
                question: "3F₁₆ o'nlik sanoqda?",
                options: ["61", "62", "63", "64"],
                correct: 2
            },
            {
                question: "not(5>2 and 3<1) qiymati?",
                options: ["True", "False", "1", "0"],
                correct: 0
            },
            {
                question: "101010₂ o'nlikda?",
                options: ["40", "41", "42", "43"],
                correct: 2
            },
            {
                question: "Hub va Switch farqi nimada?",
                options: [
                    "Hub MAC asosida ishlaydi",
                    "Switch barcha portlarga uzatadi",
                    "Switch MAC jadvaldan foydalanadi",
                    "Hub IP asosida ishlaydi"
                ],
                correct: 2
            },
            {
                question: "1 GB nechta KB?",
                options: ["1000000", "1024000", "1048576", "100000"],
                correct: 2
            },
            {
                question: "Python: a=[2,4,6,8]; print(a[1:3]) natija?",
                options: ["[4,6]", "[2,4]", "[4,6,8]", "[6,8]"],
                correct: 0
            },
            {
                question: "8 ta shahar to'liq bog'langan bo'lsa nechta yo'l bor?",
                options: ["28", "32", "36", "56"],
                correct: 0
            },
            {
                question: "while False: sikl necha marta bajariladi?",
                options: ["1", "Cheksiz", "0", "2"],
                correct: 2
            },
            {
                question: "7 | 3 (bitwise OR) natija?",
                options: ["5", "6", "7", "4"],
                correct: 2
            },
            {
                question: "Blok-sxemada parallelogram nimani bildiradi?",
                options: ["Hisoblash", "Shart", "Kiritish/chiqarish", "Boshlash"],
                correct: 2
            },
            {
                question: "4! + 3! qiymati?",
                options: ["24", "30", "36", "48"],
                correct: 1
            },
            {
                question: "A=1, B=0, C=1 bo'lsa (A∧B)∨C qiymati?",
                options: ["0", "1", "2", "Aniqlanmaydi"],
                correct: 1
            },
            {
                question: "len('Algorithm') natija?",
                options: ["8", "9", "10", "7"],
                correct: 1
            },
            {
                question: "IP manzil nechta bitdan iborat?",
                options: ["16", "32", "64", "128"],
                correct: 1
            },
            {
                question: "15 & 9 natija?",
                options: ["8", "9", "7", "1"],
                correct: 0
            },
            {
                question: "range(5) nechta element?",
                options: ["4", "5", "6", "0"],
                correct: 1
            },
            {
                question: "2**5 qiymati?",
                options: ["10", "25", "32", "64"],
                correct: 2
            },
            {
                question: "To'liq graf formulasi?",
                options: ["n²", "n(n−1)", "n(n−1)/2", "2n"],
                correct: 2
            },
            {
                question: "bool(0) qiymati?",
                options: ["True", "False", "0", "Error"],
                correct: 1
            },
            {
                question: "HTTPS nimani bildiradi?",
                options: [
                    "Oddiy HTTP",
                    "Xavfsiz HTTP",
                    "FTP turi",
                    "DNS xizmati"
                ],
                correct: 1
            },
            {
                question: "(1∨1)∧(0∨1) natija?",
                options: ["0", "1", "2", "3"],
                correct: 1
            },
            {
                question: "1023₁₀ ikkilikda?",
                options: [
                    "1111111111",
                    "111111111",
                    "1000000000",
                    "11111111111"
                ],
                correct: 0
            },
            {
                question: "[1,2]*2 natija?",
                options: [
                    "[1,2,1,2]",
                    "[2,4]",
                    "[1,1,2,2]",
                    "Error"
                ],
                correct: 0
            },
            {
                question: "25 % 7 natija?",
                options: ["3", "4", "5", "6"],
                correct: 1
            },
            {
                question: "MAC manzil uzunligi?",
                options: ["32 bit", "48 bit", "64 bit", "128 bit"],
                correct: 1
            },
            {
                question: "Excelda minimal qiymat funksiyasi?",
                options: ["LOW", "MIN", "SMALL", "LESS"],
                correct: 1
            },
            {
                question: "True and False or True natija?",
                options: ["True", "False", "0", "1"],
                correct: 0
            },
            {
                question: "1 TB nechta GB?",
                options: ["1000", "1024", "2048", "512"],
                correct: 1
            },
            {
                question: "int('101',2) natija?",
                options: ["4", "5", "6", "7"],
                correct: 1
            },
            {
                question: "Router qaysi OSI qatlamida ishlaydi?",
                options: ["1", "2", "3", "4"],
                correct: 2
            },
            {
                question: "range(2,8) oxirgi son?",
                options: ["6", "7", "8", "5"],
                correct: 1
            },
            {
                question: "ORDER BY nimaga xizmat qiladi?",
                options: [
                    "Saralash",
                    "O'chirish",
                    "Qo'shish",
                    "Yangilash"
                ],
                correct: 0
            },
            {
                question: "8 << 1 natija?",
                options: ["8", "12", "16", "4"],
                correct: 2
            },
            {
                question: "Deterministik algoritm?",
                options: [
                    "Tasodifiy natija",
                    "Har doim bir xil natija",
                    "Cheksiz ishlovchi",
                    "Grafikli"
                ],
                correct: 1
            },
            {
                question: "LAN nimani anglatadi?",
                options: [
                    "Global tarmoq",
                    "Lokal tarmoq",
                    "Mobil tarmoq",
                    "Bulutli tizim"
                ],
                correct: 1
            },
            {
                question: "DNS vazifasi?",
                options: [
                    "IPni MACga o'tkazish",
                    "Domenni IPga o'tkazish",
                    "Fayl siqish",
                    "Email yuborish"
                ],
                correct: 1
            },
            {
                question: "5! qiymati?",
                options: ["20", "60", "120", "240"],
                correct: 2
            },
            {
                question: "float('5.5') turi?",
                options: ["int", "str", "float", "bool"],
                correct: 2
            },
            {
                question: "HTTP qaysi portdan foydalanadi?",
                options: ["21", "25", "80", "110"],
                correct: 2
            },
            {
                question: "1024 MB nechta GB?",
                options: ["1", "2", "0.5", "4"],
                correct: 0
            },
            {
                question: "3*2**2 natija?",
                options: ["36", "12", "18", "24"],
                correct: 1
            },
            {
                question: "RAM nima uchun xizmat qiladi?",
                options: [
                    "Doimiy saqlash",
                    "Vaqtinchalik saqlash",
                    "Virus tekshirish",
                    "Internet ulash"
                ],
                correct: 1
            },
            {
                question: "Algoritmning asosiy xususiyati?",
                options: [
                    "Cheksiz bajarilish",
                    "Aniq va tugallanuvchi",
                    "Grafikli bo'lishi",
                    "Faqat kompyuterda ishlashi"
                ],
                correct: 1
            }
        ]
    }
};

// Test holatini saqlash uchun obyekt
const testStatus = {};

// ==================== DEVICE ID BOSHQARISH ====================

function generateDeviceId() {
  const userAgent = navigator.userAgent;
  const randomString = Math.random().toString(36).substring(2, 15);
  const timestamp = Date.now().toString(36);
  const combined = userAgent + randomString + timestamp;

  let hash = 0;
  for (let i = 0; i < combined.length; i++) {
    const char = combined.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }

  return Math.abs(hash).toString(36).toUpperCase().substring(0, 10);
}

function getDeviceId() {
  let deviceId = localStorage.getItem("deviceId");

  if (!deviceId) {
    deviceId = generateDeviceId();
    localStorage.setItem("deviceId", deviceId);
  }

  return deviceId;
}

function checkDeviceAccess() {
  const deviceId = getDeviceId();
  const isAllowed = ALLOWED_DEVICES.includes(deviceId);

  const deviceIdDisplay = document.getElementById("deviceIdDisplay");
  if (deviceIdDisplay) {
    deviceIdDisplay.textContent = `Device ID: ${deviceId}`;
  }

  setTimeout(() => {
    if (isAllowed) {
      showDashboard();
    } else {
      showUnauthorized(deviceId);
    }
  }, 2000);
}

// ==================== UI BOSHQARISH ====================

function showDashboard() {
  document.getElementById("deviceCheck").classList.add("hidden");
  document.getElementById("unauthorized").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");
  renderTestsList();
}

function showUnauthorized(deviceId) {
  document.getElementById("deviceCheck").classList.add("hidden");
  document.getElementById("unauthorized").classList.remove("hidden");

  const deviceIdDisplay = document.getElementById("deviceIdDisplay");
  if (deviceIdDisplay) {
    deviceIdDisplay.textContent = `Device ID: ${deviceId}`;
  }
}

function renderTestsList() {
  const testsList = document.getElementById("testsList");
  if (!testsList) return;

  testsList.innerHTML = "";

  Object.values(TESTS).forEach((test) => {
    // Test holatini tekshirish
    const testCompleted = testStatus[test.id]?.completed || false;

    const testCard = document.createElement("div");
    testCard.className = "test-card";

    let buttonHtml = "";
    if (testCompleted) {
      buttonHtml = `<button onclick="openAccessCodeModal('${test.id}')" class="retake-btn">🔄 Qayta topshirish</button>`;
    } else {
      buttonHtml = `<button onclick="openLoginModal('${test.id}')">Boshlash</button>`;
    }

    testCard.innerHTML = `
            <h3>${test.title}</h3>
            <p>${test.questions.length} ta savol</p>
            ${buttonHtml}
        `;

    testsList.appendChild(testCard);
  });
}

// ==================== MODAL BOSHQARISH ====================

let currentTestId = null;

function openLoginModal(testId) {
  currentTestId = testId;
  document.getElementById("modalTestTitle").textContent =
    `${TESTS[testId].title} - Kirish`;
  document.getElementById("loginModal").classList.remove("hidden");
  document.getElementById("loginError").classList.add("hidden");
  document.getElementById("loginForm").reset();
}

function openAccessCodeModal(testId) {
  currentTestId = testId;
  document.getElementById("accessCodeModal").classList.remove("hidden");
  document.getElementById("accessCodeInput").value = "";
  document.getElementById("accessCodeError").classList.add("hidden");
}

function closeAllModals() {
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.classList.add("hidden");
  });
}

// Login form submit
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;
  const test = TESTS[currentTestId];

  if (username === test.login && password === test.password) {
    closeAllModals();
    startTest(currentTestId, false); // false = yangi test
  } else {
    document.getElementById("loginError").textContent =
      "Login yoki parol noto'g'ri!";
    document.getElementById("loginError").classList.remove("hidden");
  }
});

// Access code verification
document
  .getElementById("verifyAccessCodeBtn")
  ?.addEventListener("click", function () {
    const accessCode = document.getElementById("accessCodeInput").value;
    const test = TESTS[currentTestId];

    if (accessCode === test.accessCode) {
      closeAllModals();
      startTest(currentTestId, true); // true = qayta topshirish
    } else {
      document.getElementById("accessCodeError").textContent =
        "Noto'g'ri access code!";
      document.getElementById("accessCodeError").classList.remove("hidden");
    }
  });

// Close modal buttons
document.querySelectorAll(".close-modal").forEach((btn) => {
  btn.addEventListener("click", closeAllModals);
});

// ==================== TEST JARAYONI ====================

let currentTest = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let totalTimer = null;
let questionTimer = null;
let totalTimeLeft = 0;
let questionTimeLeft = 30;
let isRetakeMode = false;

function startTest(testId, retake = false) {
  currentTest = JSON.parse(JSON.stringify(TESTS[testId])); // Clone test
  currentQuestionIndex = 0;
  userAnswers = new Array(currentTest.questions.length).fill(null);
  isRetakeMode = retake;

  document.getElementById("dashboard").classList.add("hidden");
  document.getElementById("testContainer").classList.remove("hidden");
  document.getElementById("testTitle").textContent = currentTest.title;

  totalTimeLeft = currentTest.questions.length * 30;
  startTotalTimer();
  loadQuestion();
}

function loadQuestion() {
  if (currentQuestionIndex >= currentTest.questions.length) {
    finishTest();
    return;
  }

  const question = currentTest.questions[currentQuestionIndex];

  document.getElementById("questionNumber").textContent =
    `${currentQuestionIndex + 1}/${currentTest.questions.length}`;
  document.getElementById("questionText").textContent = question.question;

  const optionsContainer = document.getElementById("optionsContainer");
  optionsContainer.innerHTML = "";

  question.options.forEach((option, index) => {
    const optionDiv = document.createElement("div");
    optionDiv.className = "option";
    if (userAnswers[currentQuestionIndex] === index) {
      optionDiv.classList.add("selected");
    }
    optionDiv.textContent = option;
    optionDiv.onclick = () => selectOption(index);
    optionsContainer.appendChild(optionDiv);
  });

  questionTimeLeft = 30;
  document.getElementById("questionTimer").textContent = `${questionTimeLeft}s`;
  startQuestionTimer();
}

function selectOption(index) {
  if (userAnswers[currentQuestionIndex] !== null) return;

  userAnswers[currentQuestionIndex] = index;

  document.querySelectorAll(".option").forEach((opt, i) => {
    if (i === index) {
      opt.classList.add("selected");
    }
  });

  setTimeout(() => {
    nextQuestion();
  }, 500);
}

function nextQuestion() {
  stopQuestionTimer();
  currentQuestionIndex++;

  if (currentQuestionIndex < currentTest.questions.length) {
    loadQuestion();
  } else {
    finishTest();
  }
}

function startTotalTimer() {
  updateTotalTimer();
  totalTimer = setInterval(() => {
    totalTimeLeft--;
    updateTotalTimer();

    if (totalTimeLeft <= 0) {
      finishTest();
    }
  }, 1000);
}

function updateTotalTimer() {
  const minutes = Math.floor(totalTimeLeft / 60);
  const seconds = totalTimeLeft % 60;
  document.getElementById("timer").textContent =
    `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  const totalTime = currentTest.questions.length * 30;
  const progress = ((totalTime - totalTimeLeft) / totalTime) * 100;
  document.getElementById("progressFill").style.width = `${progress}%`;
}

function startQuestionTimer() {
  questionTimer = setInterval(() => {
    questionTimeLeft--;
    document.getElementById("questionTimer").textContent =
      `${questionTimeLeft}s`;

    if (questionTimeLeft <= 0) {
      nextQuestion();
    }

    if (questionTimeLeft <= 5) {
      document.getElementById("questionTimer").classList.add("timer-critical");
    }
  }, 1000);
}

function stopQuestionTimer() {
  if (questionTimer) {
    clearInterval(questionTimer);
    questionTimer = null;
  }
  document.getElementById("questionTimer").classList.remove("timer-critical");
}

function stopTotalTimer() {
  if (totalTimer) {
    clearInterval(totalTimer);
    totalTimer = null;
  }
}

// ==================== TEST NATIJALARI ====================

function finishTest() {
  stopTotalTimer();
  stopQuestionTimer();

  document.getElementById("testContainer").classList.add("hidden");

  let correct = 0;
  let wrong = 0;

  userAnswers.forEach((answer, index) => {
    if (answer !== null && answer === currentTest.questions[index].correct) {
      correct++;
    } else {
      wrong++;
    }
  });

  const percentage = Math.round((correct / currentTest.questions.length) * 100);

  document.getElementById("correctCount").textContent = correct;
  document.getElementById("wrongCount").textContent = wrong;
  document.getElementById("percentageResult").textContent = `${percentage}%`;

  // Test holatini saqlash - agar qayta topshirish bo'lmasa
  if (!isRetakeMode) {
    testStatus[currentTest.id] = {
      completed: true,
      correct: correct,
      wrong: wrong,
      percentage: percentage,
      date: new Date().toISOString(),
    };

    // localStorage ga saqlash
    localStorage.setItem("testStatus", JSON.stringify(testStatus));
  }

  document.getElementById("resultsModal").classList.remove("hidden");
}

// ==================== NATIJALARNI YOPISH ====================

document
  .getElementById("closeResultsBtn")
  ?.addEventListener("click", function () {
    document.getElementById("resultsModal").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");

    // Testlar ro'yxatini qayta yuklash (tugma holati o'zgarishi uchun)
    renderTestsList();
  });

// ==================== LOGOUT ====================

document.getElementById("logoutBtn")?.addEventListener("click", function () {
  if (confirm("Haqiqatan ham chiqmoqchimisiz?")) {
    localStorage.removeItem("deviceId");
    // Test statuslarini o'chirish ham mumkin, agar kerak bo'lsa
    // localStorage.removeItem('testStatus');
    location.reload();
  }
});

// ==================== INITIALIZATION ====================

document.addEventListener("DOMContentLoaded", function () {
  // Saqlangan test statuslarini yuklash
  const savedStatus = localStorage.getItem("testStatus");
  if (savedStatus) {
    Object.assign(testStatus, JSON.parse(savedStatus));
  }

  checkDeviceAccess();
});

// Modalni yopish uchun backdrop ga click
window.addEventListener("click", function (e) {
  if (e.target.classList.contains("modal")) {
    closeAllModals();
  }
});

// Klaviatura boshqaruvi
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeAllModals();
  }

  if (!document.getElementById("testContainer").classList.contains("hidden")) {
    const num = parseInt(e.key);
    if (num >= 1 && num <= 4) {
      const options = document.querySelectorAll(".option");
      if (options[num - 1]) {
        options[num - 1].click();
      }
    }
  }
});
