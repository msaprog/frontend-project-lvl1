install: # установить зависимости
	npm ci

brain-games: # запуск игры
	node bin/brain-games.js

publish: #  
	npm publish --dry-run

lint: # Запуск Eslint с исправлениями
	npx eslint --fix .