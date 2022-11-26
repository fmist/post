pipeline {
    agent any
    tools {
        gradle "gradle"
    }
    stages {
        stage('Build') {
            steps {
                git 'https://github.com/fmist/post.git'
                sh "gradle clean build -DskipTests"
            }
        }

        stage('docker compose') {
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