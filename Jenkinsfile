pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        echo 'BUILD STAGE'
        sh 'make -sC Practica_5 build'
      }
    }

    stage('push') {
      steps {
        echo 'PUSH STAGE'
        sh '''cd Practica_5
docker.withRegistry(\'https://registry.hub.docker.com\', \'Docker-hub-token\') {
        bat \'docker push gomzalo/practica_5_serverp5:latest\'
}'''
      }
    }

    stage('deploy') {
      steps {
        echo 'DESTROY STAGE'
        sh 'make -sC Practica_5 destroy'
        echo 'Corriendo en http://0.0.0.0:80/'
      }
    }

  }
}