pipeline {
    agent any
    environment {
            PATH = "$PATH:/opt/homebrew/bin/docker-compose"
        }
    tools {
        gradle "gradle"
    }
    stages {
//         stage('stop') {
//                  steps {
//                    sh 'docker-compose down'
//                  }
//             }

        stage('Build') {
            steps {
                git 'https://github.com/fmist/post.git'
                sh "gradle clean build -DskipTests"
            }
        }

        stage('deploy') {
             steps {
               sh 'docker-compose up'
             }
        }
    }
      post {
          always {
            cleanWs()
          }
      }
}