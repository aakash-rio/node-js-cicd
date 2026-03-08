pipeline {

agent any

stages {

stage('Clone Code') {
steps {
git branch: 'main', url: 'https://github.com/aakash-rio/node-js-cicd.git'
}
}

stage('Build Docker Image') {
steps {
sh 'docker build -t aakashrio/node-cicd:v1 .'
}
}

stage('Push Docker Image') {
    steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub_cred', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
            sh '''
            echo $PASS | docker login -u $USER --password-stdin
            docker push aakashrio/node-cicd:v1
            '''
        }
    }
}

stage('Deploy Kubernetes') {
steps {
sh 'kubectl apply -f deployment.yaml'
sh 'kubectl apply -f service.yaml'
}
}

}

}
