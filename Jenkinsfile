pipeline {
  agent any
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

    stage('deploy') {
      steps {
        echo 'DEPLOY STAGE'
        ansiblePlaybook(playbook: 'play', installation: 'Ansible', inventory: 'hosts.yml')
      }
    }

  }
  environment {
    DOCKERHUB_CREDENTIALS = credentials('Docker-hub-token')
  }
  post {
    always {
      sh 'docker logout'
    }

  }
}