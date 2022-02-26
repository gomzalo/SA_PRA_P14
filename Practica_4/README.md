# **Práctica 4 - Jenkins y SonarQube**

Se utilizo Jenkins para realizar la integración continua, el cual es un servidor de automatización open source escrito en Java. Está basado en el proyecto Hudson y es, dependiendo de la visión, un fork del proyecto o simplemente un cambio de nombre.

Jenkins ayuda en la automatización de parte del proceso de desarrollo de software mediante integración continua y facilita ciertos aspectos de la entrega continua.

También se utilizo Docker-Compose, para manejar los contenedores de forma mas rápida y cómoda.

## **Tabla de contenido**

- [Pruebas unitarias](#build)
- [Jenkins](#jenkins)
- [Contenerización](#container)
- [Publicar en Dockerhub](#dockerhub)
- [Limpieza del sistema](#prune)
- [Obtener imagen desde Dockerhub](#pull)


## **Pruebas Unitarias**
Se utiliza la herramienta JEST para realizar las pruebas unitarias de la practica 3, con la cual se puede realizar las pruebas unitarias instalando el paquete con el siguiente comando:

```
npm install --save-dev jest
```
### **Script**
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

## **Docker-Compose** 

