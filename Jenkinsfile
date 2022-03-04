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
      steps {
        echo 'BUILD STAGE'
        sh 'make -sC Practica_5 build'
      }
    }

    stage('Login') {
      steps {
        sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
      }
    }

    stage('Push') {
      steps {
        echo 'PUSH STAGE'
        sh 'make -sC Practica_5 push'
      }
    }

    stage('Destroy') {
      steps {
        echo 'DESTROY STAGE'
        sh 'make -sC Practica_5 destroy'
      }
    }

    stage('Deploy') {
      steps {
        echo 'DEPLOY STAGE'
        sh '# ansible-playbook ./play.yml -i ./hosts.yml'
        ansiblePlaybook(playbook: './play.yml', credentialsId: '	309c78c7-e2cc-43e2-af01-59b965587133', disableHostKeyChecking: true, inventory: 'hosts.yml', colorized: true)
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
  options {
    skipDefaultCheckout(true)
  }
}