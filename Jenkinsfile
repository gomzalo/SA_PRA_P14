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
docker rm gomzalo/pareja14 || (echo "Image gomzalo/pareja14 didn\\\'t exist so not removed."; exit 0)
docker rm $(docker ps -a -q)
docker build -t gomzalo/pareja14 .
docker run --name pareja14 -p 80:8080 -d gomzalo/pareja14'''
      }
    }

  }
}