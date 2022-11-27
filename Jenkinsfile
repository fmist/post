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

        stage('deploy') {
             steps {
               sh "docker-compose up"
             }
        }
    }
      post {
          always {
            cleanWs()
          }
      }
}