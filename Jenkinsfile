pipeline {
    agent any

    environment {
        MAVEN_HOME = tool 'Maven 3' // Make sure this matches your Jenkins Maven tool name exactly
    }

    triggers {
        githubPush() // Trigger build on push event from GitHub webhook
    }

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/Kabilan-12taste/1-2-Taste_EU.git'
            }
        }

        stage('Build & Run Tests') {
            steps {
                bat "\"${MAVEN_HOME}\\bin\\mvn.cmd\" clean test"
            }
        }

        stage('Publish Reports') {
            steps {
                junit '**/target/surefire-reports/*.xml'
            }
        }
    }

    post {
        failure {
            emailext subject: "BUILD FAILED: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                     body: "Build failed. Check Jenkins: ${env.BUILD_URL}",
                     recipientProviders: [[$class: 'DevelopersRecipientProvider']]
        }
    }
}
