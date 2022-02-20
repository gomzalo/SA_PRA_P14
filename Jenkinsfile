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
npm run start'''
      }
    }

  }
}