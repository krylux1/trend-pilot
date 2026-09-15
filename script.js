const ideas = [
    // Видео — 10
    { text: "Сними видео: 3 вещи, которые я понял за неделю", type: "video" },
    { text: "Сними видео до и после своей работы", type: "video" },
    { text: "Запиши видео о своей главной ошибке в проекте", type: "video" },
    { text: "Покажи в видео, как рождается твоя идея", type: "video" },
    { text: "Сними видео о своём любимом инструменте", type: "video" },
    { text: "Разбери свою старую работу в видео", type: "video" },
    { text: "Сними видео о неожиданном результате проекта", type: "video" },
    { text: "Сравни в видео первый и последний результат", type: "video" },
    { text: "Объясни сложную вещь простыми словами в видео", type: "video" },
    { text: "Запиши видео о решении одной проблемы", type: "video" },

    // Пост — 10
    { text: "Напиши пост: 3 ошибки, которые я больше не повторяю", type: "post" },
    { text: "Напиши пост о том, почему выбрал эту профессию", type: "post" },
    { text: "Опубликуй пост о своём самом полезном навыке", type: "post" },
    { text: "Напиши пост о том, что делаешь, когда нет идей", type: "post" },
    { text: "Опиши в посте свой самый сложный рабочий день", type: "post" },
    { text: "Напиши пост с главным советом, который тебе помог", type: "post" },
    { text: "Сделай пост: 5 идей из одной темы", type: "post" },
    { text: "Напиши пост о том, что ты перестал делать", type: "post" },
    { text: "Опубликуй свой рабочий чек-лист", type: "post" },
    { text: "Задай аудитории один вопрос в посте", type: "post" },

    // Сторис — 10
    { text: "Сфоткай свой рабочий стол прямо сейчас", type: "story" },
    { text: "Покажи в сторис, над чем работаешь сегодня", type: "story" },
    { text: "Сделай сторис с выбором лучшего варианта", type: "story" },
    { text: "Запиши сторис с процессом создания работы", type: "story" },
    { text: "Сделай сторис «угадай, что получится»", type: "story" },
    { text: "Попроси в сторис предложить название для проекта", type: "story" },
    { text: "Сделай сторис с оценкой твоей работы от 1 до 10", type: "story" },
    { text: "Покажи в сторис три задачи на день", type: "story" },
    { text: "Запиши сторис о маленькой победе за день", type: "story" },
    { text: "Дай один полезный совет в сторис", type: "story" },

    // Аудио — 10
    { text: "Запиши аудио: история моего самого большого провала", type: "audio" },
    { text: "Расскажи в аудио, как нашёл свою нишу", type: "audio" },
    { text: "Запиши голосовое о том, почему начал этот проект", type: "audio" },
    { text: "Расскажи в аудио, как принимаешь сложные решения", type: "audio" },
    { text: "Запиши аудио о том, что вдохновило сегодня", type: "audio" },
    { text: "Расскажи в аудио, как справляешься с кризисом", type: "audio" },
    { text: "Запиши аудио о самом смелом решении", type: "audio" },
    { text: "Расскажи в аудио важный урок прошлого", type: "audio" },
    { text: "Запиши голосовое о проекте, которым гордишься", type: "audio" },
    { text: "Расскажи в аудио план на следующий месяц", type: "audio" }
];

const ideaElement = document.getElementById("idea");
const button = document.getElementById("ideaButton");
const saveButton = document.getElementById("saveButton");
const savedIdeasElement = document.getElementById("savedIdeas");
const changeTypeButton = document.getElementById("changeTypeButton");
const typeScreen = document.getElementById("typeScreen");
const mainContent = document.getElementById("mainContent");
const typeButtons = document.querySelectorAll(".type-btn");

const SAVED_IDEAS_KEY = "trendPilotSavedIdeas";
const COUNT_KEY = "trendPilotCount";
const DATE_KEY = "trendPilotDate";
const IDEA_KEY = "trendPilotIdea";
const TYPE_KEY = "trendPilotType";

let savedIdeas = JSON.parse(localStorage.getItem(SAVED_IDEAS_KEY)) || [];
let currentIdea = "";
let currentType = localStorage.getItem(TYPE_KEY) || null;

const today = new Date().toISOString().split("T")[0];
const savedDate = localStorage.getItem(DATE_KEY);

if (savedDate !== today) {
    localStorage.setItem(DATE_KEY, today);
    localStorage.setItem(COUNT_KEY, 0);
}

let ideasCount = Number(localStorage.getItem(COUNT_KEY)) || 0;

const savedIdea = localStorage.getItem(IDEA_KEY);
if (savedIdea) {
    ideaElement.textContent = savedIdea;
    currentIdea = savedIdea;
}

// Показать экран выбора типа
function showTypeScreen() {
    typeScreen.style.display = "flex";
    mainContent.style.display = "none";
}

function showMainContent() {
    typeScreen.style.display = "none";
    mainContent.style.display = "block";
}

if (!currentType) {
    showTypeScreen();
} else {
    showMainContent();
    if (ideasCount >= 3) {
        ideaElement.textContent = "Ты использовал все идеи на сегодня. Возвращайся завтра!";
    }
}

// Выбор типа
typeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        currentType = btn.dataset.type;
        localStorage.setItem(TYPE_KEY, currentType);
        showMainContent();
    });
});

// Сменить тип
changeTypeButton.addEventListener("click", () => {
    showTypeScreen();
});

function getFilteredIdeas() {
    return ideas.filter(i => i.type === currentType);
}

function renderSavedIdeas() {
    savedIdeasElement.innerHTML = "";

    if (savedIdeas.length === 0) {
        savedIdeasElement.textContent = "Пока нет сохранённых идей";
        return;
    }

    savedIdeas.forEach((idea, index) => {
        const ideaItem = document.createElement("div");
        ideaItem.classList.add("saved-idea");

        const ideaText = document.createElement("span");
        ideaText.textContent = idea;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Удалить";
        deleteButton.classList.add("delete-button");

        deleteButton.addEventListener("click", () => {
            savedIdeas.splice(index, 1);
            localStorage.setItem(SAVED_IDEAS_KEY, JSON.stringify(savedIdeas));
            renderSavedIdeas();
        });

        ideaItem.appendChild(ideaText);
        ideaItem.appendChild(deleteButton);
        savedIdeasElement.appendChild(ideaItem);
    });
}

button.addEventListener("click", () => {
    if (ideasCount >= 3) {
        ideaElement.textContent = "Ты использовал все идеи на сегодня. Возвращайся завтра!";
        return;
    }

    const filtered = getFilteredIdeas();
    if (filtered.length === 0) {
        ideaElement.textContent = "Для этого типа пока нет идей";
        return;
    }

    const randomIndex = Math.floor(Math.random() * filtered.length);
    currentIdea = filtered[randomIndex].text;
    ideaElement.textContent = currentIdea;

    ideasCount++;
    localStorage.setItem(COUNT_KEY, ideasCount);
    localStorage.setItem(IDEA_KEY, currentIdea);

    // Аналитика с типом
    if (window.goatcounter && window.goatcounter.count) {
        window.goatcounter.count({
            path: "generate_idea_" + currentType,
            title: "Generate idea: " + currentType,
            event: true
        });
    }
});

saveButton.addEventListener("click", () => {
    if (!currentIdea) {
        ideaElement.textContent = "Сначала получи идею";
        return;
    }

    if (savedIdeas.includes(currentIdea)) {
        ideaElement.textContent = "Эта идея уже сохранена";
        return;
    }

    savedIdeas.push(currentIdea);
    localStorage.setItem(SAVED_IDEAS_KEY, JSON.stringify(savedIdeas));
    renderSavedIdeas();
});

renderSavedIdeas();