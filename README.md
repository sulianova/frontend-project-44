# Brain games

[![Actions Status](https://github.com/sulianova/frontend-project-44/workflows/hexlet-check/badge.svg)](https://github.com/sulianova/frontend-project-44/actions)
<a href="https://codeclimate.com/github/sulianova/frontend-project-44/maintainability" target="_blank"><img src="https://api.codeclimate.com/v1/badges/3278aa4bebcaee7f508c/maintainability" /></a>

## Install
```
git clone git@github.com:sulianova/frontend-project-44.git
cd frontend-project-44
make install
npm link
```

## Usage
* Even number: `brain-even`
* Calculate the expression: `brain-calc`
* Greatest common divisor: `brain-gcd`
* Guess missing number: `brain-progression`
* Prime number: `brain-prime`

## Description
«Игры разума» — набор из пяти консольных игр, построенных по принципу популярных мобильных приложений для прокачки мозга. Каждая игра задает вопросы, на которые нужно дать правильные ответы. После трех правильных ответов считается, что игра пройдена. Неправильные ответы завершают игру и предлагают пройти ее заново.
### brain-even
Проверка на чётность. Суть игры: пользователю показывается случайное число. И ему нужно ответить yes, если число чётное, или no — если нечётное.

### brain-calc
Калькулятор. Суть игры: пользователю показывается случайное математическое выражение, например 35 + 16, которое нужно вычислить и записать правильный ответ.

### brain-gcd
Наибольший общий делителью Суть игры: пользователю показывается два случайных числа, например, 25 50. Пользователь должен вычислить и ввести наибольший общий делитель этих чисел.

### brain-progression
Арифметическая прогрессия. Суть игры: показываем игроку ряд чисел, образующий арифметическую прогрессию, заменив любое из чисел двумя точками. Игрок должен определить это число.

### brain-prime
Простое число. Суть игры: пользователю показывается случайное число. И ему нужно ответить yes, если число простое, или no — если не простое.
