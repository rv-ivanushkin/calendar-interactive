# calendar-interactive

Пример реализации интерактивного календаря

<h4>Dark UI</h4>
<img src="./docs/screenshots/ui_dark.png" alt="drawing" width="50%"/>

<h4>Light UI</h4>
<img src="./docs/screenshots/ui_light.png" alt="drawing" width="50%"/>

## Tech Stack
- redux + redux-toolkit
- typescript
- mui + styled + mui icons
- vite
- eslint + prettier

## Motivation

Всегда хотел реализовать календарь своими руками безе Moment.js.
В каталоге components есть компонент Calendar, который и реализует
базовую логику календаря

В том же каталоге есть utils.ts
- *getMonthByDate* - получение месяца по его номеру
- *shiftSunday* - сдвиг на 1 день, нужно помнить, что неделя начинается с воскресенья =)
- *generateDatesInMonth* - получение дат для выбранного месяца
- *generateDatesBeforeDate* - получение дат до первого числа выбранного месяца
- *generateAfterDate* - получение дат после последнего числа выбранного месяца, 
но здесь я указал, что общее кол-вод дней должно уместиться в сетку 7*6 = 42.
так что остаток легко получить = 42 - кол-во дне полученных на *generateDatesInMonth* + *generateDatesBeforeDate*
- *getDates* - получение массива дат для render

## Functional
- Отображение в сетке 7*6 (42 ячейке ) текущего месяца + кол-во дней до и после
- Отображение мини календаря в правой части для трех предыдущих месяцев

## Future features
- добавление events
- добавление multilanguage
- добавление прогноза погоды