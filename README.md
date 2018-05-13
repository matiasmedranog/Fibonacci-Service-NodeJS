# Fibbonaci Service NodeJS
Rest Service - JavaScript - Fibonacci serie

----------------------------------------

Execute this as JavaScript Application:
```
java -jar target/ServicioHTTP-0.0.1-SNAPSHOT.jar
```

----------------------------------------

Execute this as Docker Container: (With Docker Compose)
- Run Container:
```
docker-compose up
```

----------------------------------------

And send a test curl:
```
curl -X GET http://localhost:8080/\?numero\=10
curl -X GET http://localhost:8080/\?numero\=11
curl -X GET http://localhost:8080/\?numero\=12
curl -X GET http://localhost:8080/\?numero\=13
curl -X GET http://localhost:8080/\?numero\=[Nº]
```
