// === МАССИВ ИДЕЙ ===
// Формат: { text, type, why, how, hook }
// TODO: расширить до 200 (по 50 на тип)
const ideas = [
    // VIDEO — дополнительно 40
{ text: "Один день из моей жизни", type: "video", why: "Влог = близость с аудиторией", how: "Сними утро, день, вечер — склей в 60 секунд", hook: "Вот как выглядит мой день" },
{ text: "Что я делаю, когда всё валится", type: "video", why: "Уязвимость = доверие", how: "Расскажи про тяжёлый момент и что помогло", hook: "Сегодня всё пошло не так" },
{ text: "Мой самый неожиданный результат", type: "video", why: "Истории с поворотом досматривают", how: "Расскажи, что получилось неожиданно", hook: "Я не ожидал такого" },
{ text: "3 привычки, которые изменили мою работу", type: "video", why: "Список = сохранения", how: "Покажи каждую привычку, объясни за 15 секунд", hook: "Эти 3 привычки изменили всё" },
{ text: "Как я борюсь с ленью", type: "video", why: "Помощь = доверие", how: "3 конкретных способа, что делаешь", hook: "Вот что я делаю, когда лень" },
{ text: "Разбор одного дня в цифрах", type: "video", why: "Цифры = конкретика", how: "Покажи экран аналитики, объясни что видишь", hook: "Смотри, что показывают цифры" },
{ text: "Мой первый заказ / клиент", type: "video", why: "Путь = вдохновение", how: "Расскажи историю первого заказа", hook: "Мой первый заказ — вот как было" },
{ text: "Что я понял после 100 дней работы", type: "video", why: "Рефлексия = ценность", how: "3 вывода за 100 дней", hook: "100 дней спустя — вот что понял" },
{ text: "Как я выбираю инструменты", type: "video", why: "Метод = польза", how: "3 критерия, по которым выбираешь", hook: "Вот как я выбираю инструменты" },
{ text: "Мой главный страх и как я с ним живу", type: "video", why: "Уязвимость = резонанс", how: "Расскажи про страх и что делаешь", hook: "Мой главный страх — вот он" },
{ text: "Что бы я сделал, если бы начинал с нуля", type: "video", why: "Ретроспектива = польза", how: "3 шага, которые бы сделал иначе", hook: "Если бы начинал с нуля — сделал бы так" },
{ text: "Утро, которое задаёт день", type: "video", why: "Рутина = интерес", how: "Покажи утренние ритуалы", hook: "Вот как я начинаю день" },
{ text: "Мой провальный запуск", type: "video", why: "Провал = история", how: "Расскажи, что запускал и что пошло не так", hook: "Мой запуск провалился" },
{ text: "3 книги, которые изменили меня", type: "video", why: "Рекомендации = сохранения", how: "Покажи 3 книги, объясни по 10 секунд", hook: "Эти 3 книги изменили меня" },
{ text: "Как я справляюсь с критикой", type: "video", why: "Помощь = доверие", how: "3 шага, что делаешь после критики", hook: "Вот что я делаю с критикой" },
{ text: "Мой рабочий ритуал перед стартом", type: "video", why: "Ритуал = интерес", how: "Покажи, что делаешь перед работой", hook: "Перед работой я делаю вот это" },
{ text: "Что меня вдохновляет", type: "video", why: "Личное = близость", how: "Покажи 3 источника вдохновения", hook: "Вот что меня вдохновляет" },
{ text: "Мой самый смелый шаг", type: "video", why: "Смелость = вдохновение", how: "Расскажи про смелое решение", hook: "Это был самый смелый шаг" },
{ text: "Как я борюсь с выгоранием", type: "video", why: "Помощь = ценность", how: "3 конкретных способа", hook: "Вот что я делаю с выгоранием" },
{ text: "Скрытая сторона моей работы", type: "video", why: "Закулисье = доверие", how: "Покажи, что скрыто от глаз", hook: "Вот что не видно снаружи" },
{ text: "Мой провал за неделю", type: "video", why: "Уязвимость = резонанс", how: "Расскажи про провал недели", hook: "На этой неделе я облажался" },
{ text: "Как я нашёл первых клиентов", type: "video", why: "Метод = польза", how: "Расскажи шаги, как нашёл первых", hook: "Вот как я нашёл первых клиентов" },
{ text: "Что я делаю, когда не понимаю, что делать", type: "video", why: "Помощь = доверие", how: "3 шага в момент ступора", hook: "Когда я в ступоре — делаю так" },
{ text: "Моя самая большая инвестиция", type: "video", why: "Опыт = ценность", how: "Расскажи про вложение, которое окупилось", hook: "Это была моя лучшая инвестиция" },
{ text: "Почему я не сдался", type: "video", why: "Мотивация = вовлечение", how: "Расскажи про момент, когда хотел бросить", hook: "Я хотел бросить. Но не бросил" },
{ text: "Мой утренний чек-лист", type: "video", why: "Система = ценность", how: "5 действий каждое утро", hook: "Вот мой утренний чек-лист" },
{ text: "Как я организую задачи", type: "video", why: "Польза = сохранения", how: "Покажи свой метод, объясни", hook: "Вот как я организую задачи" },
{ text: "Что я понял за год", type: "video", why: "Рефлексия = ценность", how: "3-5 выводов за год", hook: "Год назад я думал иначе" },
{ text: "Мой личный метод обучения", type: "video", why: "Метод = польза", how: "3 шага, как учишься новому", hook: "Вот как я учусь" },
{ text: "Почему я выбрал это направление", type: "video", why: "Личное = близость", how: "Расскажи про выбор", hook: "Я выбрал это — вот почему" },
{ text: "Мой лучший совет за год", type: "video", why: "Совет = ценность", how: "Один конкретный совет", hook: "Лучший совет за год — вот он" },
{ text: "Что бы я сказал себе в начале", type: "video", why: "Ретроспектива = вдохновение", how: "Одно предложение себе в начале", hook: "Что бы я сказал себе в начале" },
{ text: "Мой худший день за месяц", type: "video", why: "Уязвимость = резонанс", how: "Расскажи что случилось, что понял", hook: "Худший день месяца — вот он" },
{ text: "Как я справляюсь с неудачами", type: "video", why: "Помощь = доверие", how: "3 шага после провала", hook: "Вот что я делаю после провала" },
{ text: "Почему я делаю это каждый день", type: "video", why: "Цель = вдохновение", how: "Расскажи, что мотивирует", hook: "Вот почему я делаю это каждый день" },
{ text: "Мой секрет продуктивности", type: "video", why: "Секрет = интерес", how: "Один главный принцип", hook: "Мой секрет продуктивности — вот он" },
{ text: "Разница между мной год назад и сейчас", type: "video", why: "Прогресс = мотивация", how: "Покажи до и после", hook: "Год назад и сейчас — разница" },
{ text: "Как я выбираю между идеями", type: "video", why: "Метод = польза", how: "3 критерия выбора", hook: "Вот как я выбираю идеи" },
{ text: "Мой самый дорогой урок", type: "video", why: "Опыт = ценность", how: "Расскажи про ошибку, которая стоила дорого", hook: "Этот урок стоил мне дорого" },
{ text: "Что я не буду делать никогда", type: "video", why: "Отказ = сильный контент", how: "3 действия, которые не сделаешь", hook: "Этого я не сделаю никогда" },

    // POST — дополнительно 40
{ text: "Один вопрос, который изменил мой подход", type: "post", why: "Вопрос = вовлечение", how: "Задай вопрос, расскажи как ответил", hook: "Что бы ты спросил у себя?" },
{ text: "Что я понял за последний месяц", type: "post", why: "Рефлексия = ценность", how: "3-5 выводов месяца", hook: "Месяц назад думал иначе" },
{ text: "Мой главный страх в работе", type: "post", why: "Уязвимость = доверие", how: "Расскажи про страх и что делаешь", hook: "Мой главный страх — вот он" },
{ text: "Как я справляюсь с выгоранием", type: "post", why: "Помощь = ценность", how: "3 конкретных способа", hook: "Вот что я делаю с выгоранием" },
{ text: "Что бы я изменил в начале пути", type: "post", why: "Ретроспектива = польза", how: "3 изменения, которые бы сделал", hook: "Если бы начинал снова" },
{ text: "5 книг, которые стоит прочитать", type: "post", why: "Список = сохранения", how: "5 книг, по 2 предложения каждой", hook: "Эти 5 книг стоит прочитать" },
{ text: "Мой рабочий ритуал", type: "post", why: "Система = интерес", how: "Опиши, что делаешь перед стартом", hook: "Вот мой ритуал перед работой" },
{ text: "3 привычки, которые помогают мне каждый день", type: "post", why: "Польза = сохранения", how: "3 привычки + результат", hook: "Эти 3 привычки работают" },
{ text: "Как я борюсь с прокрастинацией", type: "post", why: "Помощь = доверие", how: "3 конкретных способа", hook: "Вот что я делаю с прокрастинацией" },
{ text: "Что я делаю, когда всё валится", type: "post", why: "Уязвимость = резонанс", how: "3 шага в трудный момент", hook: "Когда всё валится — делаю так" },
{ text: "Мой самый неожиданный результат", type: "post", why: "Истории = интерес", how: "Расскажи про неожиданный успех", hook: "Я не ожидал такого результата" },
{ text: "Как я выбираю инструменты", type: "post", why: "Метод = польза", how: "3 критерия", hook: "Вот как я выбираю инструменты" },
{ text: "Что я делаю утром", type: "post", why: "Рутина = интерес", how: "5 утренних действий", hook: "Вот моё утро" },
{ text: "Мой самый смелый шаг", type: "post", why: "Смелость = вдохновение", how: "Расскажи про смелое решение", hook: "Это был самый смелый шаг" },
{ text: "Что я понял после первого клиента", type: "post", why: "Опыт = ценность", how: "3 вывода после первого заказа", hook: "Первый клиент научил меня" },
{ text: "Моя система планирования дня", type: "post", why: "Система = польза", how: "Опиши, как планируешь", hook: "Вот как я планирую день" },
{ text: "Что я делаю для мотивации", type: "post", why: "Помощь = доверие", how: "3 конкретных действия", hook: "Вот что меня мотивирует" },
{ text: "Мой самый дорогой урок", type: "post", why: "Опыт = ценность", how: "Расскажи про урок", hook: "Этот урок стоил мне дорого" },
{ text: "3 ошибки, которые я делал в начале", type: "post", why: "Ошибки = польза", how: "3 ошибки и как исправил", hook: "Вот 3 ошибки моего старта" },
{ text: "Как я нашёл свою нишу", type: "post", why: "Путь = ценность", how: "Расскажи про поиск", hook: "Вот как я нашёл нишу" },
{ text: "Что я не буду делать никогда", type: "post", why: "Отказ = сильный контент", how: "3 действия, которые не сделаешь", hook: "Этого я не сделаю никогда" },
{ text: "Мой метод обучения новому", type: "post", why: "Метод = польза", how: "3 шага обучения", hook: "Вот как я учусь" },
{ text: "Как я справляюсь с критикой", type: "post", why: "Помощь = доверие", how: "3 шага после критики", hook: "Вот что я делаю с критикой" },
{ text: "Что меня вдохновляет каждый день", type: "post", why: "Личное = близость", how: "3 источника вдохновения", hook: "Вот что меня вдохновляет" },
{ text: "Мой путь за последний год", type: "post", why: "Путь = вдохновение", how: "Опиши путь в 5 этапах", hook: "Год назад я был в другой точке" },
{ text: "5 вещей, которые я делаю каждый день", type: "post", why: "Список = сохранения", how: "5 ежедневных действий", hook: "Эти 5 вещей я делаю каждый день" },
{ text: "Почему я выбрал эту нишу", type: "post", why: "Личное = интерес", how: "Расскажи про выбор", hook: "Я выбрал эту нишу — вот почему" },
{ text: "Что изменилось после 100 дней", type: "post", why: "Рефлексия = ценность", how: "3-5 изменений", hook: "100 дней спустя — вот что изменилось" },
{ text: "Как я справляюсь с неудачами", type: "post", why: "Помощь = доверие", how: "3 шага после провала", hook: "Вот что я делаю после провала" },
{ text: "Мой главный принцип в работе", type: "post", why: "Принцип = ценность", how: "Один главный принцип", hook: "Мой главный принцип — вот он" },
{ text: "Что я делаю, когда нет энергии", type: "post", why: "Помощь = доверие", how: "3 конкретных способа", hook: "Когда нет сил — делаю так" },
{ text: "Мой самый полезный совет", type: "post", why: "Совет = ценность", how: "Один конкретный совет", hook: "Лучший совет, который я получил" },
{ text: "Как я организую своё время", type: "post", why: "Метод = польза", how: "Опиши метод", hook: "Вот как я организую время" },
{ text: "Что я понял о себе за год", type: "post", why: "Рефлексия = ценность", how: "3 вывода о себе", hook: "Год назад я не знал этого о себе" },
{ text: "Мой утренний ритуал", type: "post", why: "Система = интерес", how: "Опиши ритуал", hook: "Вот мой утренний ритуал" },
{ text: "Как я выбираю книги", type: "post", why: "Метод = польза", how: "3 критерия выбора", hook: "Вот как я выбираю книги" },
{ text: "Что бы я сказал себе в 15", type: "post", why: "Ретроспектива = вдохновение", how: "Одно предложение", hook: "Что бы я сказал себе в 15" },
{ text: "Моя самая большая ошибка", type: "post", why: "Уязвимость = резонанс", how: "Расскажи про ошибку", hook: "Это была моя самая большая ошибка" },
{ text: "Как я справляюсь с сомнениями", type: "post", why: "Помощь = доверие", how: "3 шага", hook: "Вот что я делаю с сомнениями" },
{ text: "Что меня держит на пути", type: "post", why: "Мотивация = вовлечение", how: "Опиши, что помогает не сдаться", hook: "Вот что держит меня на пути" },

    // STORY — дополнительно 40
{ text: "Сфоткай вид из окна", type: "story", why: "Атмосфера = близость", how: "Фото вида + короткий текст", hook: "Вот что я вижу сегодня" },
{ text: "Покажи, что читаешь", type: "story", why: "Книги = интерес", how: "Фото книги + одна цитата", hook: "Сейчас читаю вот это" },
{ text: "Что я пью прямо сейчас", type: "story", why: "Мелочи = близость", how: "Фото напитка + короткий текст", hook: "Мой напиток дня" },
{ text: "Сколько часов я работал сегодня", type: "story", why: "Цифры = интерес", how: "Скрин таймера + короткий текст", hook: "Сегодня отработал вот столько" },
{ text: "Мой плейлист для работы", type: "story", why: "Плейлист = сохранения", how: "Скрин плейлиста + ссылка", hook: "Вот под что я работаю" },
{ text: "Что мне мешает сегодня", type: "story", why: "Уязвимость = доверие", how: "Опиши, что мешает", hook: "Сегодня мне мешает вот что" },
{ text: "Скрин моей заметки с идеей", type: "story", why: "Закулисье = интерес", how: "Скрин заметки без деталей", hook: "Вот что я записал" },
{ text: "Что я ем на завтрак", type: "story", why: "Рутина = близость", how: "Фото еды", hook: "Мой завтрак" },
{ text: "Покажи свой прогресс за неделю", type: "story", why: "Прогресс = вовлечение", how: "Скрин аналитики", hook: "Вот мой прогресс" },
{ text: "Что я слушаю в наушниках", type: "story", why: "Музыка = интерес", how: "Скрин трека", hook: "Сейчас слушаю вот это" },
{ text: "Как выглядит мой рабочий день", type: "story", why: "Рутина = интерес", how: "3 кадра: утро, день, вечер", hook: "Вот мой день" },
{ text: "Что я делаю в перерыве", type: "story", why: "Закулисье = близость", how: "Фото перерыва", hook: "Мой перерыв" },
{ text: "Мой сетап для работы", type: "story", why: "Сетап = интерес", how: "Фото рабочего места", hook: "Вот мой сетап" },
{ text: "Спроси, что я делаю сейчас", type: "story", why: "Вопрос = активность", how: "Стикер-вопрос", hook: "Угадай, что я делаю?" },
{ text: "Что нового я узнал сегодня", type: "story", why: "Факт = польза", how: "Один факт + короткий текст", hook: "Сегодня узнал вот это" },
{ text: "Скрин моей утренней рутины", type: "story", why: "Ритуал = интерес", how: "Скрин заметки", hook: "Моя утренняя рутина" },
{ text: "Покажи, что делал вчера", type: "story", why: "Закулисье = близость", how: "3 фото вчера", hook: "Вот чем я занимался вчера" },
{ text: "Что я пью перед сном", type: "story", why: "Мелочи = близость", how: "Фото напитка", hook: "Мой напиток перед сном" },
{ text: "Покажи свою книжную полку", type: "story", why: "Книги = интерес", how: "Фото полки", hook: "Вот что я читаю" },
{ text: "Сколько я заработал за месяц", type: "story", why: "Прозрачность = доверие", how: "Скрин дохода + короткий текст", hook: "Вот сколько я заработал" },
{ text: "Что я делаю для отдыха", type: "story", why: "Рутина = близость", how: "Фото отдыха", hook: "Мой отдых" },
{ text: "Мой самый странный день", type: "story", why: "История = интерес", how: "Расскажи про странный день", hook: "Этот день был странным" },
{ text: "Что я недавно попробовал", type: "story", why: "Новое = интерес", how: "Расскажи про новый опыт", hook: "Недавно попробовал вот это" },
{ text: "Мой вечерний ритуал", type: "story", why: "Рутина = близость", how: "Фото вечера", hook: "Вот мой вечер" },
{ text: "Как я выгляжу после работы", type: "story", why: "Уязвимость = близость", how: "Фото с работы", hook: "Так я выгляжу после работы" },
{ text: "Что я делал на этой неделе", type: "story", why: "Итоги = интерес", how: "Скрин итогов недели", hook: "Вот моя неделя" },
{ text: "Мой трекер привычек", type: "story", why: "Система = интерес", how: "Скрин трекера", hook: "Вот мой трекер" },
{ text: "Что я не буду делать сегодня", type: "story", why: "Отказ = интерес", how: "Опиши, что не будешь", hook: "Сегодня я не буду этого делать" },
{ text: "Мои планы на выходные", type: "story", why: "Планы = вовлечение", how: "Опиши планы", hook: "Вот мои планы" },
{ text: "Что произошло сегодня смешного", type: "story", why: "Юмор = близость", how: "Расскажи про смешной момент", hook: "Сегодня было забавно" },
{ text: "Как я провожу вечер", type: "story", why: "Рутина = интерес", how: "Фото вечера", hook: "Мой вечер" },
{ text: "Скрин моей цели на месяц", type: "story", why: "Цель = мотивация", how: "Скрин цели", hook: "Вот моя цель на месяц" },
{ text: "Что я записал в блокнот", type: "story", why: "Закулисье = интерес", how: "Фото страницы блокнота", hook: "Вот что я записал" },
{ text: "Мой самый любимый инструмент", type: "story", why: "Инструмент = интерес", how: "Скрин инструмента", hook: "Мой любимый инструмент" },
{ text: "Что я сделал сегодня для цели", type: "story", why: "Прогресс = вовлечение", how: "Опиши действие", hook: "Сегодня сделал вот что" },
{ text: "Скрин моей аналитики", type: "story", why: "Цифры = интерес", how: "Скрин аналитики", hook: "Вот мои цифры" },
{ text: "Мой обед сегодня", type: "story", why: "Быт = близость", how: "Фото еды", hook: "Мой обед" },
{ text: "Что я узнал из последней книги", type: "story", why: "Знание = польза", how: "Один инсайт", hook: "Из книги узнал вот это" },
{ text: "Как я выгляжу утром", type: "story", why: "Уязвимость = близость", how: "Селфи утром", hook: "Так я выгляжу утром" },
{ text: "Что мне дал сегодняшний день", type: "story", why: "Рефлексия = ценность", how: "Один вывод", hook: "Сегодняшний день научил" },

    // AUDIO — дополнительно 40
{ text: "Что я понял за последний месяц", type: "audio", why: "Рефлексия = ценность", how: "3 вывода месяца", hook: "Месяц назад думал иначе" },
{ text: "Как я нашёл первую работу", type: "audio", why: "Путь = вдохновение", how: "Расскажи про поиск", hook: "Вот как я нашёл первую работу" },
{ text: "Мой главный страх в работе", type: "audio", why: "Уязвимость = доверие", how: "Расскажи про страх и что с ним делать", hook: "Мой главный страх — вот он" },
{ text: "Почему я не сдаюсь", type: "audio", why: "Мотивация = вдохновение", how: "Расскажи про мотивацию", hook: "Вот почему я не сдаюсь" },
{ text: "Как я справляюсь с одиночеством", type: "audio", why: "Уязвимость = доверие", how: "Расскажи про опыт", hook: "Вот как я справляюсь с одиночеством" },
{ text: "Мой путь за последний год", type: "audio", why: "Путь = вдохновение", how: "Опиши путь", hook: "Год назад я был в другой точке" },
{ text: "Что я делаю для отдыха", type: "audio", why: "Рутина = интерес", how: "Расскажи про отдых", hook: "Вот как я отдыхаю" },
{ text: "Как я нахожу новые идеи", type: "audio", why: "Метод = польза", how: "Расскажи процесс", hook: "Вот как я нахожу идеи" },
{ text: "Мой самый дорогой урок", type: "audio", why: "Опыт = ценность", how: "Расскажи про урок", hook: "Этот урок стоил мне дорого" },
{ text: "Что я думаю о критике", type: "audio", why: "Мнение = интерес", how: "Расскажи мнение", hook: "Вот что я думаю о критике" },
{ text: "Как я справляюсь с тревогой", type: "audio", why: "Помощь = доверие", how: "Расскажи опыт", hook: "Вот что я делаю с тревогой" },
{ text: "Мой самый смелый шаг", type: "audio", why: "Смелость = вдохновение", how: "Расскажи про решение", hook: "Это был мой самый смелый шаг" },
{ text: "Что я не буду делать никогда", type: "audio", why: "Отказ = интерес", how: "Расскажи про отказ", hook: "Этого я не сделаю никогда" },
{ text: "Мой самый неожиданный результат", type: "audio", why: "История = интерес", how: "Расскажи про результат", hook: "Я не ожидал такого" },
{ text: "Как я выбираю книги", type: "audio", why: "Метод = польза", how: "Расскажи критерии", hook: "Вот как я выбираю книги" },
{ text: "Мой утренний ритуал", type: "audio", why: "Рутина = интерес", how: "Расскажи ритуал", hook: "Вот мой утренний ритуал" },
{ text: "Что меня вдохновляет", type: "audio", why: "Личное = близость", how: "Расскажи про источники", hook: "Вот что меня вдохновляет" },
{ text: "Как я справляюсь с неудачами", type: "audio", why: "Помощь = доверие", how: "Расскажи опыт", hook: "Вот что я делаю после провала" },
{ text: "Мой путь к этой идее", type: "audio", why: "Путь = интерес", how: "Расскажи про идею", hook: "Вот как я пришёл к этой идее" },
{ text: "Что я понял про деньги", type: "audio", why: "Мнение = интерес", how: "Расскажи мысль", hook: "Вот что я понял про деньги" },
{ text: "Как я принимаю критику", type: "audio", why: "Метод = польза", how: "Расскажи шаги", hook: "Вот как я принимаю критику" },
{ text: "Мой метод обучения", type: "audio", why: "Метод = польза", how: "Расскажи шаги", hook: "Вот как я учусь" },
{ text: "Почему я выбрал эту нишу", type: "audio", why: "Личное = интерес", how: "Расскажи про выбор", hook: "Я выбрал эту нишу — вот почему" },
{ text: "Мой самый сложный день", type: "audio", why: "Уязвимость = доверие", how: "Расскажи про день", hook: "Это был сложный день" },
{ text: "Что я делаю, когда не понимаю", type: "audio", why: "Помощь = доверие", how: "Расскажи шаги", hook: "Когда не понимаю — делаю так" },
{ text: "Мой главный принцип", type: "audio", why: "Принцип = ценность", how: "Расскажи про принцип", hook: "Мой главный принцип — вот он" },
{ text: "Как я организую время", type: "audio", why: "Метод = польза", how: "Расскажи метод", hook: "Вот как я организую время" },
{ text: "Что я понял о себе за год", type: "audio", why: "Рефлексия = ценность", how: "Расскажи 3 вывода", hook: "Год назад не знал этого о себе" },
{ text: "Мой вечерний ритуал", type: "audio", why: "Рутина = интерес", how: "Расскажи ритуал", hook: "Вот мой вечерний ритуал" },
{ text: "Как я справляюсь с сомнениями", type: "audio", why: "Помощь = доверие", how: "Расскажи шаги", hook: "Вот что я делаю с сомнениями" },
{ text: "Мой самый полезный совет", type: "audio", why: "Совет = ценность", how: "Расскажи совет", hook: "Лучший совет — вот он" },
{ text: "Что меня держит на пути", type: "audio", why: "Мотивация = вовлечение", how: "Расскажи про мотивацию", hook: "Вот что держит меня на пути" },
{ text: "Как я выбираю инструменты", type: "audio", why: "Метод = польза", how: "Расскажи критерии", hook: "Вот как я выбираю инструменты" },
{ text: "Мой главный страх и что с ним", type: "audio", why: "Уязвимость = доверие", how: "Расскажи про страх", hook: "Мой главный страх — вот он" },
{ text: "Что я делаю для продуктивности", type: "audio", why: "Метод = польза", how: "Расскажи 3 шага", hook: "Вот что я делаю для продуктивности" },
{ text: "Мой самый важный выбор", type: "audio", why: "Личное = интерес", how: "Расскажи про выбор", hook: "Это был мой важный выбор" },
{ text: "Как я справляюсь с давлением", type: "audio", why: "Помощь = доверие", how: "Расскажи опыт", hook: "Вот что я делаю с давлением" },
{ text: "Что я думаю об успехе", type: "audio", why: "Мнение = интерес", how: "Расскажи мысль", hook: "Вот что я думаю об успехе" },
{ text: "Мой путь с нуля", type: "audio", why: "Путь = вдохновение", how: "Расскажи с самого начала", hook: "Я начал с нуля" },
{ text: "Что я бы сказал себе в начале", type: "audio", why: "Ретроспектива = вдохновение", how: "Расскажи одно предложение", hook: "Что бы я сказал себе в начале" }
];

// === DOM ===
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
const FEEDBACK_KEY = "trendPilotFeedback";

let savedIdeas = JSON.parse(localStorage.getItem(SAVED_IDEAS_KEY)) || [];
let currentIdea = null;
let currentType = localStorage.getItem(TYPE_KEY) || null;

// === B2B-режим ===
const urlParams = new URLSearchParams(window.location.search);
const b2bParam = urlParams.get('b2b');
if (b2bParam && b2bParam.startsWith('pilot-')) {
    localStorage.setItem('trendPilotB2B', b2bParam);
    if (window.goatcounter && window.goatcounter.count) {
        window.goatcounter.count({ path: 'b2b_visit_' + b2bParam, event: true });
    }
}
const b2bCode = localStorage.getItem('trendPilotB2B');
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
function showMainContent() {
    typeScreen.style.display = "none";
    mainContent.style.display = "block";
}

if (!currentType) {
    showTypeScreen();
} else {
    showMainContent();
    if (ideasCount >= 3 && !isB2B) {
        ideaElement.textContent = "Ты использовал все идеи на сегодня. Возвращайся завтра!";
    }
}

// === Выбор типа ===
typeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        currentType = btn.dataset.type;
        localStorage.setItem(TYPE_KEY, currentType);
        showMainContent();
    });
});

changeTypeButton.addEventListener("click", showTypeScreen);

function getFilteredIdeas() {
    return ideas.filter(i => i.type === currentType);
}

// === Отрисовка идеи с полями why/how/hook ===
function renderIdea(idea) {
    ideaElement.innerHTML = `
        <div class="idea-block">
            <h2 class="idea-text">${idea.text}</h2>
            <p class="idea-why"><strong>Почему сработает:</strong> ${idea.why}</p>
            <p class="idea-how"><strong>Как снять:</strong> ${idea.how}</p>
            <p class="idea-hook"><strong>Хук:</strong> ${idea.hook}</p>
            <div class="feedback">
                <button class="fb-btn" data-fb="up">👍</button>
                <button class="fb-btn" data-fb="down">👎</button>
            </div>
        </div>
    `;
    // Кнопки обратной связи
    ideaElement.querySelectorAll(".fb-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const feedback = JSON.parse(localStorage.getItem(FEEDBACK_KEY)) || [];
            feedback.push({ text: idea.text, vote: btn.dataset.fb, date: today });
            localStorage.setItem(FEEDBACK_KEY, JSON.stringify(feedback));
            if (window.goatcounter && window.goatcounter.count) {
                window.goatcounter.count({ path: 'feedback_' + btn.dataset.fb + '_' + idea.type, event: true });
            }
            btn.textContent = btn.dataset.fb === "up" ? "👍 Спасибо!" : "👎 Понял";
            btn.disabled = true;
        });
    });
}

// === Сохранённые ===
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
        ideaText.textContent = typeof idea === "string" ? idea : idea.text;
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

// === Получить идею ===
button.addEventListener("click", () => {
    if (ideasCount >= 3 && !isB2B) {
        ideaElement.textContent = "Ты использовал все идеи на сегодня. Возвращайся завтра!";
        return;
    }
    const filtered = getFilteredIdeas();
    if (filtered.length === 0) {
        ideaElement.textContent = "Для этого типа пока нет идей";
        return;
    }
    const randomIndex = Math.floor(Math.random() * filtered.length);
    currentIdea = filtered[randomIndex];
    renderIdea(currentIdea);
    ideasCount++;
    localStorage.setItem(COUNT_KEY, ideasCount);
    localStorage.setItem(IDEA_KEY, JSON.stringify(currentIdea));
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
        ideaElement.textContent = "Сначала получи идею";
        return;
    }
    const exists = savedIdeas.some(i => (typeof i === "string" ? i : i.text) === currentIdea.text);
    if (exists) {
        ideaElement.textContent = "Эта идея уже сохранена";
        return;
    }
    savedIdeas.push(currentIdea);
    localStorage.setItem(SAVED_IDEAS_KEY, JSON.stringify(savedIdeas));
    renderSavedIdeas();
});

renderSavedIdeas();