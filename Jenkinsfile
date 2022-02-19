pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        echo 'Build starting'
        sh '''cd Practica_3
npm install'''
      }
    }

    stage('test') {
      steps {
        sh '''cd Practica_3
npm run test'''
      }
    }

    stage('deploy') {
      steps {
        sh '''cd Practica_3
docker rmi gomzalo/pareja14
docker build -t gomzalo/pareja14 .
docker run --name pareja14 -p 5050:5050 -d gomzalo/pareja14'''
      }
    }

  }
}