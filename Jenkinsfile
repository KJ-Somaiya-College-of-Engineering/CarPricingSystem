pipeline {
    agent any
    
    stages {
    
        stage('Build') {
            steps {
                echo 'Build starting...'
                sh  '/usr/bin/docker-compose build'
                echo 'Build ending'
            }
        }
        stage('Unit Testing') {
            steps {
                echo 'Testing..'
                echo 'Test ended'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deployment started'
                sh ' /usr/bin/docker-compose up -d'
                echo 'Deployment ended'
            }
        }
    }
}
