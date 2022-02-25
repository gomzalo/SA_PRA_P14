pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        echo 'BUILD STAGE'
        sh '''cd Practica_3
npm install'''
      }
    }

    stage('test') {
      steps {
        echo 'TEST STAGE'
        sh '''cd Practica_3
npm run test'''
      }
    }

    stage('deploy') {
      steps {
        echo 'DEPLOY STAGE'
        sh '''cd Practica_3
docker build -t gomzalo/pareja14:latest .
docker stop gomzalo/pareja14 || (echo "Image gomzalo/pareja14 didn\\\'t exist so not stopped."; exit 0)
docker rm gomzalo/pareja14 || (echo "Image gomzalo/pareja14 didn\\\'t exist so not removed."; exit 0)
docker run --name pareja14 -p 50:5050 -d gomzalo/pareja14:latest'''
        echo 'Corriendo en http://0.0.0.0:50/'
      }
    }

  }
}