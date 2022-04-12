install: # установить зависимости
	npm ci

brain-games: # запуск игры
	node bin/brain-games.js

publish: #  
	npm publish --dry-run

lint: # Инициализация Eslint
	npx eslint --fix .