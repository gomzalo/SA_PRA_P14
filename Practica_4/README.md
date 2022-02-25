# **Práctica 4 - Jenkins y SonarQube**

Se utilizo Jenkins para realizar la integracion continua, el cual es un servidor de automatización open source escrito en Java. Está basado en el proyecto Hudson y es, dependiendo de la visión, un fork del proyecto o simplemente un cambio de nombre.

Jenkins ayuda en la automatización de parte del proceso de desarrollo de software mediante integración continua y facilita ciertos aspectos de la entrega continua.

Tambien se utilizo Docker es un sistema para contenerizar y agilizar el despliegue de distintos servicios.

## **Tabla de contenido**

- [Construcción de imagen](#build)
- [Jenkins](#jenkins)
- [Contenerización](#container)
- [Publicar en Dockerhub](#dockerhub)
- [Limpieza del sistema](#prune)
- [Obtener imagen desde Dockerhub](#pull)


## **Pruebas Unitarias** <a name="jestbuild"></a>
Se utiliza la herramienta JEST para realizar las pruebas unitarias de la practica 3, con la cual se puede realizar las pruebas unitarias installando el paquete con la siguie

```
npm install --save-dev jest
```
## **Script**
Se agregan  los datos de jest, en el apartado del script, 
```
{
  "scripts": {
    "test": "jest"
  }
}
```
Para luego al momento de utilizar el commando, funcione correctamente
```
npm run test
```

## **Jenkins** <a name="jenkins"></a>
Jenkins es un servidor de automatización open source escrito en Java. Está basado en el proyecto Hudson y es, dependiendo de la visión, un fork del proyecto o simplemente un cambio de nombre.

Jenkins ayuda en la automatización de parte del proceso de desarrollo de software mediante integración continua y facilita ciertos aspectos de la entrega continua. 

## **Instalacion**
Se puede instalar jenkins independientemente en que distribucion de linux, puedes instalar utilizando los siguientes  comandos:
```
curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo tee \
  /usr/share/keyrings/jenkins-keyring.asc > /dev/null
echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
  https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
  /etc/apt/sources.list.d/jenkins.list > /dev/null
sudo apt-get update
sudo apt-get install jenkins
```
## **Dashboard**
Una vez instalado puedes observar un panel como en el siguiente donde podras utilizar las herramientas para iniciar con integracion continua, Utilizando Open Blue Ocean, para realizar las configuraciones, colocando como un minimo de 1 min, para que escanee si existiera algun cambio

Se elige el origen la fuente de datos, utilizando el repositorio en este caso github, y si no existe ningun documento jenkins, se crea uno nuevo.
!["Dashboard](/Practica_4/img/dashboard.jpg "Dashboard")

## **Historial**
En este apartado podemos observar el listado de ejecuciones al momento de levantar nuestro jenkins
!["Historial](/Practica_4/img/historial.jpg "Historial")

## **Stage**
Aca podemos observar los 3 stage que se utilizaron para esta practica, donde podemos observar la consola, los resultados mientras se van ejecutando
!["Stage](/Practica_4/img/stage_deploy.jpg "Stage")

## **Deploy**

!["Deploy](/Practica_4/img/deploy.jpg "Deploy")

## **Construcción de imagen** 

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
docker run --name image-name -p 80:8080 -d dockerhub_user/image-name
```

En nuestro caso es el siguiente comando:

```
docker run --name pareja14 -p 80:8080 -d gomzalo/pareja14
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