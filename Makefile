run-dev:
	docker compose build
	docker compose watch

logs-dev:
	docker compose logs -f	

vite-dev: ## run vite dev server
	docker run \
		--rm \
		-ti \
		-v $(PWD):/app \
		-p 5173:5173 \
		-w /app \
		node:21-alpine \
		npm i
		npm run dev