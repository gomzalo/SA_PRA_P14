pipeline {
  agent any

  environment {
		DOCKERHUB_CREDENTIALS=credentials('Docker-hub-token')
	}

  stages {
    stage('build') {
      steps {
        echo 'BUILD STAGE'
        sh 'make -sC Practica_5 build'
      }
    }

    stage('login') {
			steps {
				sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			}
		}

    stage('push') {
      steps {
        echo 'PUSH STAGE'
        sh 'make -sC Practica_5 push'
      }
    }

    stage('destroy') {
      steps {
        echo 'DESTROY STAGE'
        sh 'make -sC Practica_5 destroy'
      }
    }
  }

  post {
		always {
			sh 'docker logout'
		}
	}
}