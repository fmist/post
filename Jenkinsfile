pipeline {
    agent any
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
        stage('prepare') {
            withEnv(["PATH=$PATH:~/.local/bin"]){
                            sh "bash test.sh"
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