# **Práctica 2 - Docker**

Docker es un sistema para contenerizar y agilizar el despliegue de distintos servicios.

## **Tabla de contenido**

- [Construcción de imagen](#build)
- [Contenerización](#container)
- [Publicar en Dockerhub](#dockerhub)
- [Limpieza del sistema](#prune)
- [Obtener imagen desde Dockerhub](#pull)


## **Construcción de imagen** <a name="build"></a>

Para construir la imagen se debe de ingresar el siguiente comando, asegurandose que ya se cuenta con Docker instalado.

```
docker build -t dockerhub_user/image-name .
```

En nuestro caso, seria el siguiente comando:

```
docker build -t gomzalo/pareja14 .
```

Para verificar que se creo la imagen correctamente, ingresamos el comando:

```
docker images
```

Este comando, nos deberia mostrar nuestra imagen ya construida, lista para su contenerizacion.

## **Contenerización** <a name="container"></a>

Luego de tener la imagen lista, procedemos a contenerizar la imagen con el siguiente comando.

```
docker run --name image-name -p <local_TCP_port>:<container_port> -d dockerhub_user/image-name
```

En nuestro caso es el siguiente comando:

```
docker run --name pareja14 -p 50:5050 -d gomzalo/pareja14
```

Para verificar que el contenedor fue creado y que esta corriendo, se corre el siguiente comando:

```
docker ps
```

## **Publicar en DockerHub** <a name="dockerhub"></a>

Al subir la imagen al dockerhub, esta se vuelve disponible para poder construir y contenerizar la misma desde cualquier lugar.

Primero que nada se debe de iniciar sesión al Dockerhub con el siguiente comando:

### Login

```
docker login -u dockerhub_user
```

Una vez ingresada la contraseña, cuando sea requerido, se podra proceder a subir la imagen al Dockerhub, con el siguiente comando:

### Push

```
docker push dockerhub_user/image-name
```

El cual, en nuestro caso, seria de la siguiente manera:

```
docker push gomzalo/pareja14
```

## **Limpiando imagenes** <a name="prune"></a>

### Detener imagen local

Para testear la imagen desde el repositorio de Docker, primero detendremos la imagen con el siguiente comando:

```
docker stop image-id
```

## Limpieza del sistema

Luego de detener la imagen y el contenedor, procedemos a limpiar o eliminar las mismas, con el siguiente comando:

```
docker system prune -a
```

## **Obtener imagen desde Dockerhub** <a name="pull"></a>

Obtendremos la imagen con el siguiente comando:

```
docker pull dockerhub_user/image-name
```

El cual, en nuestro caso seria:

```
docker pull gomzalo/pareja14
```

Una vez descargada la imagen, procedemos a construirla y contenerizarla como lo hicimos localmente.

Por último se accede a la direccion y se podrá observar la página con los datos de los integrantes.