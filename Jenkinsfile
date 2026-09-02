pipeline {
    agent any
    tools {
        nodejs 'nodejs'
        allure 'allure'
    }
    options {
        timeout(time: 20, unit: 'MINUTES')
    }
    environment {
        TEST_CREDS = credentials('e2e_user')
    }
    stages {
        stage('Build') {
            steps {
                sh '''
                    set -eu
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
                reportBuildPolicy: 'ALWAYS',
                }
            }
        }
    }
}