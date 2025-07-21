lint:
	go vet ./...

format:
	go fmt ./...

build:
	go vet ./...
	go fmt ./...
	rm -rf ./bin
	go build -o ./bin/mark ./main.go

install:
	go vet ./...
	go fmt ./...
	rm -rf ./bin
	go build -o ./bin/mark ./main.go
	mkdir -p ~/bin
	cp ./bin/mark ~/bin/
	chmod +x ~/bin/mark
	export PATH="$(HOME)/bin:$(PATH)"
