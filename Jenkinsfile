pipeline {
    agent any

    tools {
        gradle "gradle"
    }

    stages {

        stage('Get project from github') {
            steps {
                git 'https://github.com/fmist/post.git'
            }
        }

        stage('Build project by gradle') {
            steps {
                sh "gradle clean build -DskipTests"
            }
        }

        stage('deploy') {
             steps {
               sh "docker-compose up -d --wait"
             }
        }
    }
      post {
          always {
            cleanWs()
          }
      }
}