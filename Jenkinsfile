pipeline {
    agent any

    triggers {
        // 5분 마다 git 에 새로운 코드가 있으면 빌드를 실행함.
        pollSCM '*/5 * * * *'
    }
    stages {
         stage('Docker Build and Test') {
            steps {
                script {
                    sh 'docker-compose up -d --build'
                    sleep 30
                    sh 'docker exec backend npm run api-test'
                }
            }
        }
    }
}