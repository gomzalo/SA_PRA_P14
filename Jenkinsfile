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
            sh 'make -sC Practica_6 build'
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

    stage('Test') {
      when {
        branch 'develop'
      }
      steps {
        echo 'TEST STAGE'
				sh '''
					docker-compose -f docker-compose-test.yml down
					docker-compose -f docker-compose-test.yml build
				'''
      }
    }

//     stage('Test') {
//       steps {
//         echo 'TEST STAGE'
//         sh '''cd Practica_6
// npm run test'''
//       }
//     }

    // stage('Login') {
    //   steps {
    //     echo 'LOGIN STAGE'
    //     sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
    //   }
    // }

    // stage('Push') {
    //   steps {
    //     echo 'PUSH STAGE'
    //     sh 'make -sC Practica_6 push'
    //   }
    // }

    // stage('Destroy') {
    //   steps {
    //     echo 'DESTROY STAGE'
    //     sh 'make -sC Practica_6 destroy'
    //   }
    // }

    stage('Deploy') {
      steps {
        echo 'DEPLOY STAGE'
        // sh '# ansible-playbook ./play.yml -i ./hosts.yml'
        // ansiblePlaybook(playbook: './play.yml', credentialsId: 'sa-p5', disableHostKeyChecking: true, inventory: 'hosts.yml', colorized: true, extras: '-vvv')
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