pipeline {
    agent any
    tools {
        nodejs 'node26'
        allure3 'allure'
    }
    options {
        timeout(time: 20, unit: 'MINUTES')
    }
    environment {
        TEST_CREDS = credentials('e2e-user')
    }
    stages {
        stage('Build') {
            steps {
                sh '''
                    set -eu
                    apt-get update && apt-get install -y libatomic1
                    npm ci
                    npx playwright install
                '''
            }
        }
        stage('Test') {
            steps {
                sh '''
                    export TEST_USERNAME="$TEST_CREDS_USR"
                    export TEST_PASSWORD="$TEST_CREDS_PSW"
                    npm run dev:make-apt
                '''
        }
        post {
            always {
                allure includeProperties: false,
                jdk: '',
                results: [[path: 'allure-results']],
                reportBuildPolicy: 'ALWAYS'
                }
            }
        }
    }
}