# Run
```docker pull mongo:4.0.4```

```docker run -d -p 27017:27017 --name test-mongo -v mongo-data:/data/books.import.txt -e MONGODB_INITDB_ROOT_USERNAME=user -e MONGODB_INITDB_ROOT_PASSWORD=password mongo:latest```

```docker cp data/books.import.txt  test-mongo:/opt/```

```docker exec -it test-mongo sh```

```cd /opt```

```mongoimport -d test -c books books.import.txt```

```npm run start```


# App url
`http://localhost:3000/book`

# How to add books
`curl localhost:3000/book -X POST -d '{"title": "Book title", "authors": ["author number 1"], "description": "New book xyz", "isbn": "1234567890"}' -H "Content-Type: application/json"`


# Tests
```npm run test```