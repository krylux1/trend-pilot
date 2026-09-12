const ideas = [
    "Напиши пост о том, как ты перестал бояться ошибок",
    "Запиши видео о своей самой нелепой привычке",
    "Сделай подборку книг, которые изменили твоё мышление",
    "Расскажи историю своего первого провала",
    "Покажи свой рабочий процесс",
    "Запиши короткое видео о том, что ты узнал за месяц",
    "Расскажи, как ты пришёл к своей идее",
    "Покажи свою самую странную идею",
    "Сделай подборку из 3 вещей, которые ты понял за последнюю неделю",
    "Покажи, как ты готовишься к съёмке",
    "Запиши видео о том, как ты искал решение проблемы",
    "Расскажи, что бы ты сказал себе год назад",
    "Покажи свой самый любимый инструмент",
    "Запиши короткое видео о том, что ты планируешь сделать завтра"
];




const ideaElement = document.getElementById("idea");
const button = document.getElementById("ideaButton");
const saveButton = document.getElementById("saveButton");
const savedIdeasElement = document.getElementById("savedIdeas");


const SAVED_IDEAS_KEY = "trendPilotSavedIdeas";
const COUNT_KEY = "trendPilotCount";
const DATE_KEY = "trendPilotDate";
const IDEA_KEY = "trendPilotIdea";




let savedIdeas = JSON.parse(
    localStorage.getItem(SAVED_IDEAS_KEY)
) || [];



let currentIdea = "";




const today = new Date().toISOString().split("T")[0];
const savedDate = localStorage.getItem(DATE_KEY);

// Если день сменился — сбрасываем счётчик
if (savedDate !== today) {
    localStorage.setItem(DATE_KEY, today);
    localStorage.setItem(COUNT_KEY, 0);
}

let ideasCount = Number(localStorage.getItem(COUNT_KEY)) || 0;




const savedIdea = localStorage.getItem(IDEA_KEY);

if (ideasCount >= 3) {
    ideaElement.textContent =
        "Ты использовал все идеи на сегодня. Возвращайся завтра!";
} else if (savedIdea) {
    ideaElement.textContent = savedIdea;
    currentIdea = savedIdea;
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
            localStorage.setItem(
                SAVED_IDEAS_KEY,
                JSON.stringify(savedIdeas)
            );
            renderSavedIdeas();
        });

        ideaItem.appendChild(ideaText);
        ideaItem.appendChild(deleteButton);
        savedIdeasElement.appendChild(ideaItem);
    });
}




button.addEventListener("click", () => {

    
    if (ideasCount >= 3) {
        ideaElement.textContent =
            "Ты использовал все идеи на сегодня. Возвращайся завтра!";
        return;
    }

    const randomIndex = Math.floor(Math.random() * ideas.length);
    currentIdea = ideas[randomIndex];
    ideaElement.textContent = currentIdea;

    
    ideasCount++;
    localStorage.setItem(COUNT_KEY, ideasCount);
    localStorage.setItem(IDEA_KEY, currentIdea);
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

    // Сохраняем
    localStorage.setItem(
        SAVED_IDEAS_KEY,
        JSON.stringify(savedIdeas)
    );

    renderSavedIdeas();
});


renderSavedIdeas();{}