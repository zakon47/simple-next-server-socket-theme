SUDO = 
DOCKER_NAME = NODE_BD
SLEEP = 5
DB_PW = 9608
DB_PORT = 5100
DB_USER = postgres
DB_LINK = 'postgres://$(DB_USER):$(DB_PW)@localhost:$(DB_PORT)/postgres?sslmode=disable'



build:
	rm -r ./dist && npm run build
start:
	DB_PASSWORD=$(9608) npm run start

run:
	go run ./cmd/main.go

sleep:
	sleep SLEEP
db_volume:
	$(SUDO) docker volume create --name my-store
db_volume_save:
	$(SUDO) docker run --rm \
		-v my-store:/volume \
		-v /home/zak/backup:/backup \
		busybox sh \
		-c 'cp -r /volume /backup'
db_up: db_volume
	$(SUDO) docker run -d --rm \
		--name $(DOCKER_NAME) \
		-e POSTGRES_PASSWORD=$(DB_PW) \
		-p $(DB_PORT):5432 \
		postgres
		#-v my-store:/var/lib/postgresql/data \

db_down:
	$(SUDO) docker stop $(DOCKER_NAME)

db_exec:
	$(SUDO) docker exec \
        -it $(DOCKER_NAME) \
        /bin/bash \
    && psql -U postgres

#\l - list of databases
#\connect postgres
#\d get list of tables

#go get -u github.com/golang-migrate/migrate
migrate_init:
	migrate create \
        -ext sql \
        -dir ./schema \
        -seq init

migrate_up:
	migrate \
        -path ./schema \
        -database $(DB_LINK) \
        up

migrate_down:
	migrate \
        -path ./schema \
        -database $(DB_LINK) \
        down

up: db_up sleep migrate_up build start
down: db_down