pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        echo 'Build starting'
        sh '''#!/bin/bash
ls'''
        sh 'npm install'
      }
    }

    stage('test') {
      steps {
        sh 'cd Practica_3'
        sh 'npm run test'
      }
    }

    stage('deploy') {
      steps {
        sh '''cd Practica_3
'''
        sh 'docker build -t gomzalo/pareja14 .'
        sh 'docker run --name pareja14 -p 50:5050 -d gomzalo/pareja14'
      }
    }

  }
}