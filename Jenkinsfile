pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        echo 'Build starting'
        sh '''cd Practica_4
npm install'''
      }
    }

    stage('test') {
      steps {
        sh '''cd Practica_4
npm run test'''
      }
    }

    stage('deploy') {
      steps {
        sh '''cd Practica_4
docker build -t gomzalo/pareja14:latest .
docker stop -t gomzalo/pareja14
docker rm gomzalo/pareja14:latest || (echo "Image gomzalo/pareja14 didn\\\'t exist so not removed."; exit 0)
docker run --name pareja14 -p 50:5050 -d gomzalo/pareja14:latest'''
        echo 'Corriendo en http://0.0.0.0:50/'
      }
    }

  }
}