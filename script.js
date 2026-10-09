// === МАССИВ ИДЕЙ ===
// Формат: { text, type, why, how, hook }
// TODO: расширить до 200 (по 50 на тип)
const ideas = [
    // ==================== VIDEO ====================
    // Универсальные (all)
    { text: "Один день из моей жизни", type: "video", genre: "all", why: "Влог = близость с аудиторией", how: "Сними утро, день, вечер — склей в 60 секунд", hook: "Вот как выглядит мой день" },
    { text: "Что я делаю, когда всё валится", type: "video", genre: "all", why: "Уязвимость = доверие", how: "Расскажи про тяжёлый момент и что помогло", hook: "Сегодня всё пошло не так" },
    { text: "Мой самый неожиданный результат", type: "video", genre: "all", why: "Истории с поворотом досматривают", how: "Расскажи, что получилось неожиданно", hook: "Я не ожидал такого" },
    { text: "3 привычки, которые изменили мою работу", type: "video", genre: "all", why: "Список = сохранения", how: "Покажи каждую привычку, объясни за 15 секунд", hook: "Эти 3 привычки изменили всё" },
    { text: "Разбор одного дня в цифрах", type: "video", genre: "all", why: "Цифры = конкретика", how: "Покажи экран аналитики, объясни что видишь", hook: "Смотри, что показывают цифры" },
    { text: "Мой первый заказ / клиент", type: "video", genre: "business", why: "Путь = вдохновение", how: "Расскажи историю первого заказа", hook: "Мой первый заказ — вот как было" },
    { text: "Что я понял после 100 дней работы", type: "video", genre: "all", why: "Рефлексия = ценность", how: "3 вывода за 100 дней", hook: "100 дней спустя — вот что понял" },
    { text: "Мой главный страх и как я с ним живу", type: "video", genre: "all", why: "Уязвимость = резонанс", how: "Расскажи про страх и что делаешь", hook: "Мой главный страх — вот он" },
    { text: "Что бы я сделал, если бы начинал с нуля", type: "video", genre: "all", why: "Ретроспектива = польза", how: "3 шага, которые бы сделал иначе", hook: "Если бы начинал с нуля — сделал бы так" },
    { text: "Мой провальный запуск", type: "video", genre: "business", why: "Провал = история", how: "Расскажи, что запускал и что пошло не так", hook: "Мой запуск провалился" },
    { text: "Как я справляюсь с критикой", type: "video", genre: "all", why: "Помощь = доверие", how: "3 шага, что делаешь после критики", hook: "Вот что я делаю с критикой" },
    { text: "Мой самый смелый шаг", type: "video", genre: "all", why: "Смелость = вдохновение", how: "Расскажи про смелое решение", hook: "Это был самый смелый шаг" },
    { text: "Как я борюсь с выгоранием", type: "video", genre: "life", why: "Помощь = ценность", how: "3 конкретных способа", hook: "Вот что я делаю с выгоранием" },
    { text: "Мой провал за неделю", type: "video", genre: "all", why: "Уязвимость = резонанс", how: "Расскажи про провал недели", hook: "На этой неделе я облажался" },
    { text: "Как я нашёл первых клиентов", type: "video", genre: "business", why: "Метод = польза", how: "Расскажи шаги, как нашёл первых", hook: "Вот как я нашёл первых клиентов" },
    { text: "Что я делаю, когда не понимаю, что делать", type: "video", genre: "all", why: "Помощь = доверие", how: "3 шага в момент ступора", hook: "Когда я в ступоре — делаю так" },
    { text: "Почему я не сдался", type: "video", genre: "all", why: "Мотивация = вовлечение", how: "Расскажи про момент, когда хотел бросить", hook: "Я хотел бросить. Но не бросил" },
    { text: "Как я организую задачи", type: "video", genre: "life", why: "Польза = сохранения", how: "Покажи свой метод, объясни", hook: "Вот как я организую задачи" },
    { text: "Что я понял за год", type: "video", genre: "all", why: "Рефлексия = ценность", how: "3-5 выводов за год", hook: "Год назад я думал иначе" },
    { text: "Мой личный метод обучения", type: "video", genre: "education", why: "Метод = польза", how: "3 шага, как учишься новому", hook: "Вот как я учусь" },
    { text: "Почему я выбрал это направление", type: "video", genre: "all", why: "Личное = близость", how: "Расскажи про выбор", hook: "Я выбрал это — вот почему" },
    { text: "Что бы я сказал себе в начале", type: "video", genre: "all", why: "Ретроспектива = вдохновение", how: "Одно предложение себе в начале", hook: "Что бы я сказал себе в начале" },
    { text: "Как я справляюсь с неудачами", type: "video", genre: "all", why: "Помощь = доверие", how: "3 шага после провала", hook: "Вот что я делаю после провала" },
    { text: "Почему я делаю это каждый день", type: "video", genre: "all", why: "Цель = вдохновение", how: "Расскажи, что мотивирует", hook: "Вот почему я делаю это каждый день" },
    { text: "Разница между мной год назад и сейчас", type: "video", genre: "all", why: "Прогресс = мотивация", how: "Покажи до и после", hook: "Год назад и сейчас — разница" },
    { text: "Мой самый дорогой урок", type: "video", genre: "all", why: "Опыт = ценность", how: "Расскажи про ошибку, которая стоила дорого", hook: "Этот урок стоил мне дорого" },
    { text: "Что я не буду делать никогда", type: "video", genre: "all", why: "Отказ = сильный контент", how: "3 действия, которые не сделаешь", hook: "Этого я не сделаю никогда" },
    { text: "Как я реагирую на хейт", type: "video", genre: "all", why: "Уязвимость = доверие", how: "Покажи пример хейта и свою реакцию", hook: "Вот как я реагирую на хейт" },
    { text: "Мой путь от нуля до сегодня", type: "video", genre: "all", why: "Путь = вдохновение", how: "5 этапов за 30 секунд", hook: "Вот мой путь с нуля" },
    { text: "Почему я не работаю на дядю", type: "video", genre: "business", why: "Провокация = вовлечение", how: "3 причины", hook: "Вот почему я не работаю на дядю" },

    // Video — game
    { text: "3 ошибки в игровом контенте", type: "video", genre: "game", why: "Ошибки = польза", how: "Покажи 3 ошибки геймеров-блогеров", hook: "Ты делаешь эти 3 ошибки" },
    { text: "Почему игровые видео не залетают", type: "video", genre: "game", why: "Боль = интерес", how: "Разбери 3 причины на примерах", hook: "Вот почему твой геймплей не смотрят" },
    { text: "Мой сетап для стрима", type: "video", genre: "game", why: "Сетап = интерес", how: "Покажи оборудование, объясни зачем", hook: "Вот мой сетап" },
    { text: "Как монтировать игровые нарезки", type: "video", genre: "game", why: "Польза = сохранения", how: "Покажи процесс монтажа за 60 сек", hook: "Вот как я монтирую нарезки" },

    // Video — business
    { text: "Как продвигать бизнес через Reels", type: "video", genre: "business", why: "Польза = сохранения", how: "3 приёма с примерами", hook: "Вот как продвигать бизнес" },
    { text: "Ошибки малого бизнеса в соцсетях", type: "video", genre: "business", why: "Польза = доверие", how: "Разбери 3 ошибки", hook: "Бизнес делает эти 3 ошибки" },
    { text: "Как я искал первых клиентов", type: "video", genre: "business", why: "Путь = вдохновение", how: "Расскажи шаги", hook: "Вот как я искал клиентов" },

    // Video — fitness
    { text: "Как не бросить спорт", type: "video", genre: "fitness", why: "Помощь = польза", how: "3 приёма из личного опыта", hook: "Вот как я не бросаю спорт" },
    { text: "Тренировка в 30 секунд", type: "video", genre: "fitness", why: "Формат = вовлечение", how: "Покажи быструю тренировку ускоренно", hook: "Вот тренировка за 30 секунд" },

    // Video — education
    { text: "Как учить что-то за 20 часов", type: "video", genre: "education", why: "Метод = польза", how: "Разбери метод на примере", hook: "Вот метод обучения за 20 часов" },
    { text: "3 ошибки в обучении", type: "video", genre: "education", why: "Ошибки = польза", how: "Покажи 3 ошибки", hook: "Ты учишься неправильно" },

    // ==================== POST ====================
    // Универсальные (all)
    { text: "Один вопрос, который изменил мой подход", type: "post", genre: "all", why: "Вопрос = вовлечение", how: "Задай вопрос, расскажи как ответил", hook: "Что бы ты спросил у себя?" },
    { text: "Что я понял за последний месяц", type: "post", genre: "all", why: "Рефлексия = ценность", how: "3-5 выводов месяца", hook: "Месяц назад думал иначе" },
    { text: "Мой главный страх в работе", type: "post", genre: "all", why: "Уязвимость = доверие", how: "Расскажи про страх и что делаешь", hook: "Мой главный страх — вот он" },
    { text: "Что бы я изменил в начале пути", type: "post", genre: "all", why: "Ретроспектива = польза", how: "3 изменения, которые бы сделал", hook: "Если бы начинал снова" },
    { text: "5 книг, которые стоит прочитать", type: "post", genre: "education", why: "Список = сохранения", how: "5 книг, по 2 предложения каждой", hook: "Эти 5 книг стоит прочитать" },
    { text: "Мой рабочий ритуал", type: "post", genre: "life", why: "Система = интерес", how: "Опиши, что делаешь перед стартом", hook: "Вот мой ритуал перед работой" },
    { text: "Как я борюсь с прокрастинацией", type: "post", genre: "life", why: "Помощь = доверие", how: "3 конкретных способа", hook: "Вот что я делаю с прокрастинацией" },
    { text: "Что я делаю, когда всё валится", type: "post", genre: "all", why: "Уязвимость = резонанс", how: "3 шага в трудный момент", hook: "Когда всё валится — делаю так" },
    { text: "Что я понял после первого клиента", type: "post", genre: "business", why: "Опыт = ценность", how: "3 вывода после первого заказа", hook: "Первый клиент научил меня" },
    { text: "3 ошибки, которые я делал в начале", type: "post", genre: "all", why: "Ошибки = польза", how: "3 ошибки и как исправил", hook: "Вот 3 ошибки моего старта" },
    { text: "Как я нашёл свою нишу", type: "post", genre: "all", why: "Путь = ценность", how: "Расскажи про поиск", hook: "Вот как я нашёл нишу" },
    { text: "Мой метод обучения новому", type: "post", genre: "education", why: "Метод = польза", how: "3 шага обучения", hook: "Вот как я учусь" },
    { text: "Что меня вдохновляет каждый день", type: "post", genre: "all", why: "Личное = близость", how: "3 источника вдохновения", hook: "Вот что меня вдохновляет" },
    { text: "Мой путь за последний год", type: "post", genre: "all", why: "Путь = вдохновение", how: "Опиши путь в 5 этапах", hook: "Год назад я был в другой точке" },
    { text: "Почему я выбрал эту нишу", type: "post", genre: "all", why: "Личное = интерес", how: "Расскажи про выбор", hook: "Я выбрал эту нишу — вот почему" },
    { text: "Как я справляюсь с неудачами", type: "post", genre: "all", why: "Помощь = доверие", how: "3 шага после провала", hook: "Вот что я делаю после провала" },
    { text: "Мой главный принцип в работе", type: "post", genre: "business", why: "Принцип = ценность", how: "Один главный принцип", hook: "Мой главный принцип — вот он" },
    { text: "Что я делаю, когда нет энергии", type: "post", genre: "life", why: "Помощь = доверие", how: "3 конкретных способа", hook: "Когда нет сил — делаю так" },
    { text: "Мой самый полезный совет", type: "post", genre: "all", why: "Совет = ценность", how: "Один конкретный совет", hook: "Лучший совет, который я получил" },
    { text: "Что я понял о себе за год", type: "post", genre: "all", why: "Рефлексия = ценность", how: "3 вывода о себе", hook: "Год назад я не знал этого о себе" },
    { text: "Как я выбираю книги", type: "post", genre: "education", why: "Метод = польза", how: "3 критерия выбора", hook: "Вот как я выбираю книги" },
    { text: "Что бы я сказал себе в 15", type: "post", genre: "all", why: "Ретроспектива = вдохновение", how: "Одно предложение", hook: "Что бы я сказал себе в 15" },
    { text: "Моя самая большая ошибка", type: "post", genre: "all", why: "Уязвимость = резонанс", how: "Расскажи про ошибку", hook: "Это была моя самая большая ошибка" },
    { text: "Что меня держит на пути", type: "post", genre: "all", why: "Мотивация = вовлечение", how: "Опиши, что помогает не сдаться", hook: "Вот что держит меня на пути" },
    { text: "Мой самый важный навык", type: "post", genre: "all", why: "Конкретика = ценность", how: "Один навык + как развил", hook: "Этот навык изменил всё" },
    { text: "5 вещей, которые я делаю иначе", type: "post", genre: "all", why: "Список = сохранения", how: "5 пунктов + почему", hook: "Я делаю эти 5 вещей иначе" },
    { text: "Как я выбираю своё окружение", type: "post", genre: "life", why: "Метод = польза", how: "3 критерия", hook: "Вот как я выбираю окружение" },
    { text: "Что я понял о деньгах", type: "post", genre: "business", why: "Мнение = интерес", how: "3 вывода", hook: "Вот что я понял о деньгах" },

    // Post — game
    { text: "Почему в игры играют миллионы, а смотрят единицы", type: "post", genre: "game", why: "Провокация = интерес", how: "3 причины + примеры", hook: "Вот почему стримы не смотрят" },
    { text: "3 игры, которые изменили мой подход", type: "post", genre: "game", why: "Список = сохранения", how: "3 игры + почему", hook: "Эти игры изменили меня" },

    // Post — fitness
    { text: "Как я начинаю день для энергии", type: "post", genre: "fitness", why: "Польза = доверие", how: "3 ритуала", hook: "Вот моё утро для энергии" },
    { text: "3 мифа о тренировках", type: "post", genre: "fitness", why: "Разоблачение = интерес", how: "Разбери 3 мифа", hook: "Вот 3 мифа о тренировках" },

    // Post — education
    { text: "Как учиться быстрее", type: "post", genre: "education", why: "Польза = сохранения", how: "3 метода", hook: "Вот как учиться быстрее" },
    { text: "3 ошибки в самообразовании", type: "post", genre: "education", why: "Ошибки = польза", how: "3 ошибки и как исправить", hook: "Ты учишься неправильно" },

    // ==================== STORY ====================
    // Универсальные
    { text: "Покажи свой прогресс за неделю", type: "story", genre: "all", why: "Прогресс = вовлечение", how: "Скрин аналитики", hook: "Вот мой прогресс" },
    { text: "Как выглядит мой рабочий день", type: "story", genre: "all", why: "Рутина = интерес", how: "3 кадра: утро, день, вечер", hook: "Вот мой день" },
    { text: "Мой сетап для работы", type: "story", genre: "all", why: "Сетап = интерес", how: "Фото рабочего места", hook: "Вот мой сетап" },
    { text: "Спроси, что я делаю сейчас", type: "story", genre: "all", why: "Вопрос = активность", how: "Стикер-вопрос", hook: "Угадай, что я делаю?" },
    { text: "Что нового я узнал сегодня", type: "story", genre: "all", why: "Факт = польза", how: "Один факт + короткий текст", hook: "Сегодня узнал вот это" },
    { text: "Сколько я заработал за месяц", type: "story", genre: "business", why: "Прозрачность = доверие", how: "Скрин дохода + короткий текст", hook: "Вот сколько я заработал" },
    { text: "Что я делаю для отдыха", type: "story", genre: "all", why: "Рутина = близость", how: "Фото отдыха", hook: "Мой отдых" },
    { text: "Что я недавно попробовал", type: "story", genre: "all", why: "Новое = интерес", how: "Расскажи про новый опыт", hook: "Недавно попробовал вот это" },
    { text: "Мой вечерний ритуал", type: "story", genre: "life", why: "Рутина = близость", how: "Фото вечера", hook: "Вот мой вечер" },
    { text: "Что я делал на этой неделе", type: "story", genre: "all", why: "Итоги = интерес", how: "Скрин итогов недели", hook: "Вот моя неделя" },
    { text: "Мой трекер привычек", type: "story", genre: "life", why: "Система = интерес", how: "Скрин трекера", hook: "Вот мой трекер" },
    { text: "Что я не буду делать сегодня", type: "story", genre: "all", why: "Отказ = интерес", how: "Опиши, что не будешь", hook: "Сегодня я не буду этого делать" },
    { text: "Мои планы на выходные", type: "story", genre: "all", why: "Планы = вовлечение", how: "Опиши планы", hook: "Вот мои планы" },
    { text: "Что произошло сегодня смешного", type: "story", genre: "all", why: "Юмор = близость", how: "Расскажи про смешной момент", hook: "Сегодня было забавно" },
    { text: "Скрин моей цели на месяц", type: "story", genre: "all", why: "Цель = мотивация", how: "Скрин цели", hook: "Вот моя цель на месяц" },
    { text: "Что я записал в блокнот", type: "story", genre: "all", why: "Закулисье = интерес", how: "Фото страницы блокнота", hook: "Вот что я записал" },
    { text: "Мой самый любимый инструмент", type: "story", genre: "all", why: "Инструмент = интерес", how: "Скрин инструмента", hook: "Мой любимый инструмент" },
    { text: "Что я сделал сегодня для цели", type: "story", genre: "all", why: "Прогресс = вовлечение", how: "Опиши действие", hook: "Сегодня сделал вот что" },
    { text: "Скрин моей аналитики", type: "story", genre: "all", why: "Цифры = интерес", how: "Скрин аналитики", hook: "Вот мои цифры" },
    { text: "Что я узнал из последней книги", type: "story", genre: "education", why: "Знание = польза", how: "Один инсайт", hook: "Из книги узнал вот это" },
    { text: "Что мне дал сегодняшний день", type: "story", genre: "all", why: "Рефлексия = ценность", how: "Один вывод", hook: "Сегодняшний день научил" },
    { text: "Покажи свой рабочий стол", type: "story", genre: "all", why: "Закулисье = близость", how: "Фото стола", hook: "Вот где я работаю" },
    { text: "Сколько задач я сделал сегодня", type: "story", genre: "all", why: "Прогресс = интерес", how: "Скрин списка задач", hook: "Вот мои задачи на день" },
    { text: "Что я слушаю прямо сейчас", type: "story", genre: "all", why: "Музыка = интерес", how: "Скрин трека", hook: "Сейчас слушаю вот это" },
    { text: "Спроси меня о чём-нибудь", type: "story", genre: "all", why: "Вопрос = активность", how: "Стикер-вопрос", hook: "Спроси меня о чём угодно" },
    { text: "Мои планы на завтра", type: "story", genre: "all", why: "Планы = вовлечение", how: "3 задачи", hook: "Вот мои планы" },

    // Story — game
    { text: "Покажи свою игровую коллекцию", type: "story", genre: "game", why: "Закулисье = интерес", how: "Фото полки с играми", hook: "Вот моя коллекция" },
    { text: "Во что я играю сейчас", type: "story", genre: "game", why: "Интерес = вовлечение", how: "Скрин игры + текст", hook: "Сейчас играю вот в это" },
    { text: "Спроси совета по игре", type: "story", genre: "game", why: "Вопрос = активность", how: "Стикер-вопрос", hook: "Какую игру посоветуете?" },

    // Story — fitness
    { text: "Покажи тренировку дня", type: "story", genre: "fitness", why: "Прогресс = вовлечение", how: "Видео тренировки", hook: "Вот моя тренировка" },
    { text: "Сколько шагов я прошёл", type: "story", genre: "fitness", why: "Цифры = интерес", how: "Скрин трекера", hook: "Вот мои шаги" },

    // Story — education
    { text: "Что я изучаю сейчас", type: "story", genre: "education", why: "Закулисье = интерес", how: "Скрин курса/книги", hook: "Сейчас учу вот это" },
    { text: "Покажи свою книжную полку", type: "story", genre: "education", why: "Книги = интерес", how: "Фото полки", hook: "Вот что я читаю" },

    // ==================== AUDIO ====================
    // Универсальные
    { text: "Что я понял за последний месяц", type: "audio", genre: "all", why: "Рефлексия = ценность", how: "3 вывода месяца", hook: "Месяц назад думал иначе" },
    { text: "Мой главный страх в работе", type: "audio", genre: "all", why: "Уязвимость = доверие", how: "Расскажи про страх и что с ним делать", hook: "Мой главный страх — вот он" },
    { text: "Почему я не сдаюсь", type: "audio", genre: "all", why: "Мотивация = вдохновение", how: "Расскажи про мотивацию", hook: "Вот почему я не сдаюсь" },
    { text: "Как я справляюсь с одиночеством", type: "audio", genre: "all", why: "Уязвимость = доверие", how: "Расскажи про опыт", hook: "Вот как я справляюсь с одиночеством" },
    { text: "Мой путь за последний год", type: "audio", genre: "all", why: "Путь = вдохновение", how: "Опиши путь", hook: "Год назад я был в другой точке" },
    { text: "Как я нахожу новые идеи", type: "audio", genre: "all", why: "Метод = польза", how: "Расскажи процесс", hook: "Вот как я нахожу идеи" },
    { text: "Что я думаю о критике", type: "audio", genre: "all", why: "Мнение = интерес", how: "Расскажи мнение", hook: "Вот что я думаю о критике" },
    { text: "Как я справляюсь с тревогой", type: "audio", genre: "all", why: "Помощь = доверие", how: "Расскажи опыт", hook: "Вот что я делаю с тревогой" },
    { text: "Что я не буду делать никогда", type: "audio", genre: "all", why: "Отказ = интерес", how: "Расскажи про отказ", hook: "Этого я не сделаю никогда" },
    { text: "Мой утренний ритуал", type: "audio", genre: "life", why: "Рутина = интерес", how: "Расскажи ритуал", hook: "Вот мой утренний ритуал" },
    { text: "Как я справляюсь с неудачами", type: "audio", genre: "all", why: "Помощь = доверие", how: "Расскажи опыт", hook: "Вот что я делаю после провала" },
    { text: "Мой путь к этой идее", type: "audio", genre: "all", why: "Путь = интерес", how: "Расскажи про идею", hook: "Вот как я пришёл к этой идее" },
    { text: "Что я понял про деньги", type: "audio", genre: "business", why: "Мнение = интерес", how: "Расскажи мысль", hook: "Вот что я понял про деньги" },
    { text: "Почему я выбрал эту нишу", type: "audio", genre: "all", why: "Личное = интерес", how: "Расскажи про выбор", hook: "Я выбрал эту нишу — вот почему" },
    { text: "Мой самый сложный день", type: "audio", genre: "all", why: "Уязвимость = доверие", how: "Расскажи про день", hook: "Это был сложный день" },
    { text: "Мой главный принцип", type: "audio", genre: "all", why: "Принцип = ценность", how: "Расскажи про принцип", hook: "Мой главный принцип — вот он" },
    { text: "Что я понял о себе за год", type: "audio", genre: "all", why: "Рефлексия = ценность", how: "Расскажи 3 вывода", hook: "Год назад не знал этого о себе" },
    { text: "Как я справляюсь с сомнениями", type: "audio", genre: "all", why: "Помощь = доверие", how: "Расскажи шаги", hook: "Вот что я делаю с сомнениями" },
    { text: "Что меня держит на пути", type: "audio", genre: "all", why: "Мотивация = вовлечение", how: "Расскажи про мотивацию", hook: "Вот что держит меня на пути" },
    { text: "Что я делаю для продуктивности", type: "audio", genre: "life", why: "Метод = польза", how: "Расскажи 3 шага", hook: "Вот что я делаю для продуктивности" },
    { text: "Мой самый важный выбор", type: "audio", genre: "all", why: "Личное = интерес", how: "Расскажи про выбор", hook: "Это был мой важный выбор" },
    { text: "Как я справляюсь с давлением", type: "audio", genre: "all", why: "Помощь = доверие", how: "Расскажи опыт", hook: "Вот что я делаю с давлением" },
    { text: "Что я думаю об успехе", type: "audio", genre: "all", why: "Мнение = интерес", how: "Расскажи мысль", hook: "Вот что я думаю об успехе" },
    { text: "Мой путь с нуля", type: "audio", genre: "all", why: "Путь = вдохновение", how: "5 этапов", hook: "Я начал с нуля" },
    { text: "Что я бы сказал себе в начале", type: "audio", genre: "all", why: "Ретроспектива = вдохновение", how: "Расскажи одно предложение", hook: "Что бы я сказал себе в начале" },
    { text: "Мой самый важный навык", type: "audio", genre: "all", why: "Конкретика = ценность", how: "Один навык + история", hook: "Этот навык изменил всё" },
    { text: "Почему я не работаю на дядю", type: "audio", genre: "business", why: "Мнение = интерес", how: "3 причины", hook: "Вот почему я не работаю на дядю" },

    // Audio — game
    { text: "Почему игры — это искусство", type: "audio", genre: "game", why: "Мнение = интерес", how: "Расскажи мысль", hook: "Игры — это больше чем игры" },
    { text: "Как я выбираю игры", type: "audio", genre: "game", why: "Метод = польза", how: "3 критерия", hook: "Вот как я выбираю игры" },

    // Audio — fitness
    { text: "Как я не бросил спорт", type: "audio", genre: "fitness", why: "Помощь = доверие", how: "Расскажи опыт", hook: "Вот как я не бросаю спорт" },

    // Audio — education
    { text: "Как я учусь новому", type: "audio", genre: "education", why: "Метод = польза", how: "Расскажи шаги", hook: "Вот как я учусь" },
    { text: "Как выбрать книгу", type: "audio", genre: "education", why: "Метод = польза", how: "3 критерия", hook: "Вот как я выбираю книги" },
];

console.log("Всего идей:", ideas.length);

// === DOM ===
const ideaElement = document.getElementById("idea");
const button = document.getElementById("ideaButton");
const saveButton = document.getElementById("saveButton");
const savedIdeasElement = document.getElementById("savedIdeas");
const changeTypeButton = document.getElementById("changeTypeButton");
const typeScreen = document.getElementById("typeScreen");
const mainContent = document.getElementById("mainContent");
const typeButtons = document.querySelectorAll(".type-btn");
const genreScreen = document.getElementById("genreScreen");
const genreButtons = document.querySelectorAll(".genre-btn");

const SAVED_IDEAS_KEY = "trendPilotSavedIdeas";
const COUNT_KEY = "trendPilotCount";
const DATE_KEY = "trendPilotDate";
const IDEA_KEY = "trendPilotIdea";
const TYPE_KEY = "trendPilotType";
const FEEDBACK_KEY = "trendPilotFeedback";
const GENRE_KEY = "trendPilotGenre";

let currentGenre = localStorage.getItem(GENRE_KEY) || null;

let savedIdeas = JSON.parse(localStorage.getItem(SAVED_IDEAS_KEY)) || [];
let currentIdea = null;
let currentType = localStorage.getItem(TYPE_KEY) || null;

// === B2B-режим ===
// === B2B-режим с автоистечением 7 дней ===
const urlParams = new URLSearchParams(window.location.search);
const b2bParam = urlParams.get('b2b');
const B2B_DAYS = 7;
const DAY_MS = 24 * 60 * 60 * 1000;

if (b2bParam && b2bParam.startsWith('pilot-')) {
    localStorage.setItem('trendPilotB2B', b2bParam);
    localStorage.setItem('trendPilotB2BDate', Date.now().toString());
    if (window.goatcounter && window.goatcounter.count) {
        window.goatcounter.count({ path: 'b2b_visit_' + b2bParam, event: true });
    }
}

let b2bCode = localStorage.getItem('trendPilotB2B');
const b2bSavedDate = Number(localStorage.getItem('trendPilotB2BDate')) || 0;

// Автосброс через 7 дней
if (b2bCode && (Date.now() - b2bSavedDate) > B2B_DAYS * DAY_MS) {
    localStorage.removeItem('trendPilotB2B');
    localStorage.removeItem('trendPilotB2BDate');
    b2bCode = null;
    if (window.goatcounter && window.goatcounter.count) {
        window.goatcounter.count({ path: 'b2b_expired', event: true });
    }
}

const isB2B = Boolean(b2bCode);

// === Сброс счётчика по дате ===
const today = new Date().toISOString().split("T")[0];
if (localStorage.getItem(DATE_KEY) !== today) {
    localStorage.setItem(DATE_KEY, today);
    localStorage.setItem(COUNT_KEY, 0);
}
let ideasCount = Number(localStorage.getItem(COUNT_KEY)) || 0;

// === Восстановление последней идеи ===
const savedIdeaRaw = localStorage.getItem(IDEA_KEY);
if (savedIdeaRaw) {
    try {
        currentIdea = JSON.parse(savedIdeaRaw);
        renderIdea(currentIdea);
    } catch (e) {
        localStorage.removeItem(IDEA_KEY);
    }
}

// === Экраны ===
function showTypeScreen() {
    typeScreen.style.display = "flex";
    mainContent.style.display = "none";
}
function showGenreScreen() {
    typeScreen.style.display = "none";
    genreScreen.style.display = "flex";
    mainContent.style.display = "none";
}

function hideGenreScreen() {
    genreScreen.style.display = "none";
}

function showMainContent() {
    typeScreen.style.display = "none";
    mainContent.style.display = "block";
}

if (!currentType) {
    showTypeScreen();
} else if (!currentGenre) {
    showGenreScreen();
} else {
    showMainContent();
    updateSettingsBar();
    if (ideasCount >= 3 && !isB2B) {
        renderState("⏰", "Идеи на сегодня закончились", "Возвращайся завтра — будет ещё 3");
    } else if (!currentIdea) {
        renderState("🎯", "Здесь появится идея", "Нажми «Получить идею»");
    }
}

// === Выбор типа ===
typeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        currentType = btn.dataset.type;
        localStorage.setItem(TYPE_KEY, currentType);
        showMainContent();
        updateSettingsBar();
    });
});

genreButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        currentGenre = btn.dataset.genre;
        localStorage.setItem(GENRE_KEY, currentGenre);
        hideGenreScreen();
        showMainContent();
        updateSettingsBar();
        if (currentIdea) {
            renderIdea(currentIdea);
        }
    });
});

function updateSettingsBar() {
    const typeNames = { video: "Видео", post: "Пост", story: "Сторис", audio: "Аудио" };
    const genreNames = { all: "Все", life: "Жизненная", game: "Игровая", business: "Бизнес", fitness: "Фитнес", education: "Образование" };
    const el = document.getElementById("currentSettings");
    if (el) {
        el.textContent = (typeNames[currentType] || "—") + " · " + (genreNames[currentGenre] || "Все");
    }
}


changeTypeButton.addEventListener("click", showTypeScreen);

const changeGenreButton = document.getElementById("changeGenreButton");
if (changeGenreButton) {
    changeGenreButton.addEventListener("click", showGenreScreen);
}

function getFilteredIdeas() {
    let filtered = ideas.filter(i => i.type === currentType);
    if (currentGenre && currentGenre !== "all") {
        filtered = filtered.filter(i => !i.genre || i.genre === currentGenre);
    }
    return filtered;
}

// === Отрисовка идеи с полями why/how/hook ===
function renderIdea(idea) {
    const typeLabels = { video: "ВИДЕО", post: "ПОСТ", story: "СТОРИС", audio: "АУДИО" };
    const genreLabels = { all: "УНИВЕРСАЛ", life: "ЖИЗНЬ", game: "ИГРЫ", business: "БИЗНЕС", fitness: "ФИТНЕС", education: "ОБУЧЕНИЕ" };

    const typeLabel = typeLabels[idea.type] || idea.type.toUpperCase();
    const genreLabel = genreLabels[idea.genre] || "";

    ideaElement.innerHTML = `
        <div class="idea-block">
            <div class="idea-header">
                <span class="idea-tag">${typeLabel}${genreLabel ? " · " + genreLabel : ""}</span>
                <h2 class="idea-text">${idea.text}</h2>
            </div>

            <div class="idea-body">
                <div class="idea-row">
                    <span class="idea-label">Почему сработает</span>
                    <p>${idea.why}</p>
                </div>
                <div class="idea-row">
                    <span class="idea-label">Как снять</span>
                    <p>${idea.how}</p>
                </div>
                <div class="idea-row idea-row--hook">
                    <span class="idea-label">Хук</span>
                    <p>«${idea.hook}»</p>
                </div>
            </div>

            <div class="feedback">
                <button class="fb-btn" data-fb="up">👍</button>
                <button class="fb-btn" data-fb="down">👎</button>
            </div>
        </div>
    `;

    ideaElement.querySelectorAll(".fb-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const feedback = JSON.parse(localStorage.getItem(FEEDBACK_KEY)) || [];
            feedback.push({ text: idea.text, vote: btn.dataset.fb, date: today });
            localStorage.setItem(FEEDBACK_KEY, JSON.stringify(feedback));
            if (window.goatcounter && window.goatcounter.count) {
                const ideaIndex = ideas.findIndex(i => i.text === idea.text);
                window.goatcounter.count({
                    path: 'fb_' + btn.dataset.fb + '_' + idea.type + '_' + ideaIndex,
                    title: idea.text,
                    event: true
                });
            }
            btn.textContent = btn.dataset.fb === "up" ? "👍 Спасибо!" : "👎 Понял";
            btn.disabled = true;
        });
    });
}

// === Сохранённые ===
function renderSavedIdeas() {
    savedIdeasElement.innerHTML = "";

    const auth = window.FirebaseAPI?.auth;

    // 1. Если юзер НЕ вошёл — показываем кнопку входа
    if (!auth || !auth.currentUser) {
        savedIdeasElement.innerHTML = `
            <p style="color:#888; margin-bottom:12px;">Войди, чтобы сохранять идеи.</p>
            <button class="auth-btn" id="loginBtnInline">Войти через Google</button>
        `;
        const btn = document.getElementById("loginBtnInline");
        if (btn) {
            btn.addEventListener("click", async () => {
                const { GoogleAuthProvider, signInWithPopup } = window.FirebaseAPI;
                try {
                    await signInWithPopup(auth, new GoogleAuthProvider());
                } catch (e) {
                    console.error("Ошибка входа:", e.message);
                }
            });
        }
        return;
    }

    // 2. Юзер вошёл — показываем имя и "Выйти"
    const user = auth.currentUser;
    const header = document.createElement("div");
    header.classList.add("user-header");

    const userName = document.createElement("span");
    userName.classList.add("user-name");
    userName.textContent = user.displayName || user.email || "Пользователь";

    const logoutBtn = document.createElement("button");
    logoutBtn.classList.add("logout-btn");
    logoutBtn.textContent = "Выйти";
    logoutBtn.addEventListener("click", async () => {
        const { signOut } = window.FirebaseAPI;
        try {
            await signOut(auth);
        } catch (e) {
            console.error("Ошибка выхода:", e.message);
        }
    });

    header.appendChild(userName);
    header.appendChild(logoutBtn);
    savedIdeasElement.appendChild(header);

    // 3. Если идей нет — сообщение
    if (savedIdeas.length === 0) {
        const empty = document.createElement("div");
        empty.style.color = "#888";
        empty.textContent = "Пока нет сохранённых идей";
        savedIdeasElement.appendChild(empty);
        return;
    }

    // 4. Рендер сохранённых идей
    savedIdeas.forEach((idea, index) => {
        const ideaItem = document.createElement("div");
        ideaItem.classList.add("saved-idea");

        const topRow = document.createElement("div");
        topRow.classList.add("saved-idea__row");

        const ideaText = document.createElement("div");
        ideaText.classList.add("saved-idea__text");
        ideaText.textContent = typeof idea === "string" ? idea : idea.text;
        if (typeof idea === "object") {
            ideaText.style.cursor = "pointer";
            ideaText.title = "Нажми, чтобы раскрыть";
        }

        const details = document.createElement("div");
        details.classList.add("saved-details");
        details.style.display = "none";
        if (typeof idea === "object") {
            details.innerHTML = `
                <p><strong>Почему:</strong> ${idea.why}</p>
                <p><strong>Как:</strong> ${idea.how}</p>
                <p><strong>Хук:</strong> ${idea.hook}</p>
            `;
        }

        ideaText.addEventListener("click", () => {
            details.style.display = details.style.display === "none" ? "block" : "none";
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Удалить";
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click", (e) => {
            e.stopPropagation();
            savedIdeas.splice(index, 1);
            localStorage.setItem(SAVED_IDEAS_KEY, JSON.stringify(savedIdeas));
            renderSavedIdeas();
            if (window.FirebaseAPI?.auth?.currentUser) {
                saveUserData();
            }
        });

        topRow.appendChild(ideaText);
        topRow.appendChild(deleteButton);
        ideaItem.appendChild(topRow);
        ideaItem.appendChild(details);
        savedIdeasElement.appendChild(ideaItem);
    });
}

// === Получить идею ===
button.addEventListener("click", () => {
    if (ideasCount >= 3 && !isB2B) {
    renderState("⏰", "Идеи на сегодня закончились", "Возвращайся завтра ");
    return;
}
    const filtered = getFilteredIdeas();
    if (filtered.length === 0) {
    renderState("🔍", "Для этой ниши пока нет идей", "Попробуй другую нишу или формат");
    return;
    }

    const randomIndex = Math.floor(Math.random() * filtered.length);
    currentIdea = filtered[randomIndex];
    renderIdea(currentIdea);
    ideasCount++;
    localStorage.setItem(COUNT_KEY, ideasCount);
    localStorage.setItem(IDEA_KEY, JSON.stringify(currentIdea));
        // Сохраняем счётчик в Firestore (если вошёл)
    if (window.FirebaseAPI?.auth?.currentUser) {
    saveUserData();
}
    if (window.goatcounter && window.goatcounter.count) {
        window.goatcounter.count({ path: "generate_idea_" + currentType, event: true });
        if (isB2B) {
            window.goatcounter.count({ path: "b2b_idea_" + b2bCode, event: true });
        }
    }
});

// === Сохранить ===
saveButton.addEventListener("click", () => {
    if (!currentIdea) {
    renderState("👆", "Сначала получи идею", "Нажми «Получить идею»");
    return;
}
    const exists = savedIdeas.some(i => (typeof i === "string" ? i : i.text) === currentIdea.text);
    if (exists) {
    renderState("✅", "Уже сохранено", "Эта идея есть в списке ниже");
    return;
}
    savedIdeas.push(currentIdea);
    localStorage.setItem(SAVED_IDEAS_KEY, JSON.stringify(savedIdeas));
    renderSavedIdeas();
    if (window.FirebaseAPI?.auth?.currentUser) {
    saveUserData();
}
});

    // === Firebase Auth ===
function initAuth() {
    if (!window.FirebaseAPI) {
        console.warn("Firebase API не готов");
        return;
    }
    const { auth, onAuthStateChanged } = window.FirebaseAPI;

    onAuthStateChanged(auth, async (user) => {
        if (user) {
            console.log("Пользователь:", user.uid);
            await loadUserData(user.uid);
        } else {
            console.log("Не авторизован");
        }
        renderSavedIdeas();
    });
}

window.addEventListener("load", () => {
    setTimeout(initAuth, 500);
});

// === Firestore: загрузка данных юзера ===
async function loadUserData(uid) {
    const { db, doc, getDoc } = window.FirebaseAPI;
    try {
        const userRef = doc(db, "users", uid);
        const snap = await getDoc(userRef);

        if (snap.exists()) {
            const data = snap.data();
            savedIdeas = data.savedIdeas || [];
            ideasCount = data.ideasCount || 0;

            const today = new Date().toISOString().split("T")[0];
            if (data.lastResetDate !== today) {
                ideasCount = 0;
                await updateDoc(userRef, { ideasCount: 0, lastResetDate: today });
            }

            localStorage.setItem(SAVED_IDEAS_KEY, JSON.stringify(savedIdeas));
            console.log("Данные загружены из Firestore");
        } else {
            // Новый юзер
            const today = new Date().toISOString().split("T")[0];
            await setDoc(userRef, {
                savedIdeas: [],
                ideasCount: 0,
                lastResetDate: today
            });
            savedIdeas = [];
            ideasCount = 0;
            console.log("Создан новый профиль в Firestore");
        }
    renderSavedIdeas();

    // Обновляем отображение лимита
    // Обновляем отображение лимита
    if (ideasCount >= 3 && !isB2B) {
        renderState("⏰", "Идеи на сегодня закончились", "Возвращайся завтра — будет ещё 3");
    } else if (!currentIdea) {
        renderState("🎯", "Здесь появится идея", "Нажми «Получить идею»");
    }

    } catch (e) {
        console.error("Ошибка загрузки Firestore:", e.message);
    }
}

// === Firestore: сохранение данных ===
async function saveUserData() {
    const { auth, db, doc, setDoc } = window.FirebaseAPI;
    const user = auth?.currentUser;
    if (!user) return;
    try {
        await setDoc(doc(db, "users", user.uid), {
            savedIdeas: savedIdeas,
            ideasCount: ideasCount,
            lastResetDate: new Date().toISOString().split("T")[0]
        }, { merge: true });
        console.log("Сохранено в Firestore");
    } catch (e) {
        console.error("Ошибка сохранения Firestore:", e.message);
    }
}

function renderState(icon, title, subtitle, ctaText, ctaAction) {
    ideaElement.innerHTML = `
        <div class="state-block">
            <div class="state-icon">${icon}</div>
            <div class="state-title">${title}</div>
            <div class="state-subtitle">${subtitle}</div>
            ${ctaText ? `<button class="state-cta" id="stateCta">${ctaText}</button>` : ""}
        </div>
    `;
    if (ctaText && ctaAction) {
        document.getElementById("stateCta").addEventListener("click", ctaAction);
    }
}



