pipeline {
    environment {
        PATH = "$PATH:/usr/local/bin/docker-compose"
    }
    agent any
    tools {
        gradle "gradle"
    }
    stages {
        stage('Initialize'){
            def dockerHome = tool 'docker'
            env.PATH = "${dockerHome}/bin:${env.PATH}"
        }
        stage('Build') {
            steps {
                git 'https://github.com/fmist/post.git'
                sh "gradle clean build -DskipTests"
            }
        }

        stage('deploy') {
             steps {
               sh "/usr/local/bin/docker-compose up"
             }
        }
    }
      post {
          always {
            cleanWs()
          }
      }
}