.PHONY: start
start:
	$(MAKE) start-server &
	npm start

.PHONY: start-server
start-server:
	cd ./server && $(MAKE) initial-start

.PHONY: stop-server
stop-server:
	cd ./server && $(MAKE) stop

.PHONY: clean-server
clean-server:
	cd ./server && $(MAKE) clean