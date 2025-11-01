### exercise 1.2

```
kubectl create deployment todo-app-ex1-2 --image=alxcd/devops_k8s-todo_app
kubectl logs -l app=todo-app-ex1-2
```

### exercise 1.4

```
kubectl apply -f manifests/deployment.yaml
kubectl logs -l app=todo-app -f
```

### exercise 1.5

```
kubectl apply -f manifests/deployment.yaml
kubectl port-forward todo-app-dep-f74c88fc6-s8djd 3000:3001
```

### exercise 1.6

```
kubectl apply -f manifests/deployment.yaml
kubectl apply -f manifests/nodeport_service.yaml
```

### exercise 1.8

```
kubectl apply -f manifests
curl localhost:8081
```