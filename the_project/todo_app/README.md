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