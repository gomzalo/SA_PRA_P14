build:
	@docker-compose build --no-cache

pull:
	@docker-compose pull

push:
	@docker-compose push

up:
	@docker-compose up -d

destroy:
	@docker system prune --force --filter 'until=2h'
	@docker volume prune --force

run:
	@make -s pull up destroy