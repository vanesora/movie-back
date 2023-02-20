# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Instala las dependencias
### `npm start`

Corre la aplicación en local

## Crear estaticos del proyecto

Cada vez que exista un cambio en el proyecto hay que crear los estaticos del proyecto:

```bash
npm run build
```

## Crear imagen

Cada vez que exista un cambio en los estaticos del proyecto hay que crear un nueva image con:

```bash
sudo docker build -t unir/movies-front .
```

## Crear contenedor

```bash
sudo docker run -d --name movies-front__container_1 -p 8080:80 unir/movies-front 
```


