pipeline {
  agent any
  environment {
		DOCKERHUB_CREDENTIALS=credentials('Docker-hub-token')
	}
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
docker build -t practica3:latest .
docker stop practica3
docker rm practica3
docker run --name practica3 -p 50:5050 -d practica3:latest'''
        echo 'Corriendo en http://0.0.0.0:50/'
      }
    }

  }
}