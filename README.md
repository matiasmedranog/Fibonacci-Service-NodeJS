# Fibbonaci Service NodeJS
Rest Service - JavaScript - Fibonacci serie

----------------------------------------

Execute this as JavaScript Application:
```
node FibonacciHTTP.js
```

----------------------------------------

Execute this as Docker Container: (With Docker Compose)
- Run Container:
```
docker-compose up
```

- Run Container as Daemon:
```
docker-compose up -d
```

----------------------------------------

And send a test curl:
```
curl -X GET http://localhost:3000/\?numero\=10
curl -X GET http://localhost:3000/\?numero\=11
curl -X GET http://localhost:3000/\?numero\=12
curl -X GET http://localhost:3000/\?numero\=13
curl -X GET http://localhost:3000/\?numero\=[Nº]
```
