pipeline {
  agent any
  stages {
    stage('Git') {
      steps {
        echo 'Checking out the Git version control...'
        checkout scm
      }
    }

    stage('Build') {
      parallel {
        stage('Build Docker') {
          steps {
            echo 'BUILD DOCKER STAGE'
          }
        }

        stage('Build NPM') {
          steps {
            echo 'BUILD STAGE'
            sh '''cd Practica_6
npm install'''
          }
        }

      }
    }

    stage('Deploy') {
      steps {
        echo 'DEPLOY STAGE'
        withSonarQubeEnv(installationName: 'SonarQubeScanner', credentialsId: 'SonarQube', envOnly: true)
      }
    }

  }
  environment {
    DOCKERHUB_CREDENTIALS = credentials('Docker-hub-token')
  }
  options {
    skipDefaultCheckout(true)
  }
}