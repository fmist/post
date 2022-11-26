pipeline {
    environment {
        PATH = "$PATH:/usr/local/bin/docker-compose"
    }
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

        stage('deploy') {
             steps {
               sh "gradle composeUp"
             }
        }
    }
      post {
          always {
            cleanWs()
          }
      }
}