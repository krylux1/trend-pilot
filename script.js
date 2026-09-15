const ideas = [
    // Видео — 10
    { text: "3 вещи, которые я понял за неделю", type: "video" },
    { text: "До и после моей работы", type: "video" },
    { text: "Моя главная ошибка в проекте", type: "video" },
    { text: "Как рождается моя идея", type: "video" },
    { text: "Мой любимый инструмент в работе", type: "video" },
    { text: "Разбери одну свою старую работу", type: "video" },
    { text: "Неожиданный результат проекта", type: "video" },
    { text: "Сравни первый и последний результат", type: "video" },
    { text: "Объясни сложную вещь простыми словами", type: "video" },
    { text: "Расскажи о решении одной проблемы", type: "video" },

    // Пост — 10
    { text: "3 ошибки, которые я больше не повторяю", type: "post" },
    { text: "Почему я выбрал эту профессию", type: "post" },
    { text: "Мой самый полезный рабочий навык", type: "post" },
    { text: "Что я делаю, когда нет идей", type: "post" },
    { text: "Мой самый сложный рабочий день", type: "post" },
    { text: "Главный совет, который мне помог", type: "post" },
    { text: "5 идей из одной темы", type: "post" },
    { text: "Что я перестал делать", type: "post" },
    { text: "Мой рабочий чек-лист", type: "post" },
    { text: "Один вопрос моей аудитории", type: "post" },

    // Сторис — 10
    { text: "Мой рабочий стол прямо сейчас", type: "story" },
    { text: "Над чем я работаю сегодня", type: "story" },
    { text: "Выбери лучший вариант", type: "story" },
    { text: "Процесс создания работы", type: "story" },
    { text: "Угадай, что получится в итоге", type: "story" },
    { text: "Предложи название для проекта", type: "story" },
    { text: "Оцени мою работу от 1 до 10", type: "story" },
    { text: "Что я делаю сегодня", type: "story" },
    { text: "Маленькая победа за день", type: "story" },
    { text: "Один полезный совет", type: "story" },

    // Аудио — 10
    { text: "История моего самого большого провала", type: "audio" },
    { text: "Как я нашёл свою нишу", type: "audio" },
    { text: "Почему я начал этот проект", type: "audio" },
    { text: "Как я принимаю сложные решения", type: "audio" },
    { text: "Что вдохновило меня сегодня", type: "audio" },
    { text: "Как я справляюсь с творческим кризисом", type: "audio" },
    { text: "Самое смелое решение", type: "audio" },
    { text: "Важный урок прошлого", type: "audio" },
    { text: "Проект, которым я горжусь", type: "audio" },
    { text: "План на следующий месяц", type: "audio" }
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