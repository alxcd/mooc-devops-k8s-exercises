### exercise 1.1

```
kubectl create deployment log-output-ex1-1 --image=alxcd/devops_k8s-ex1_1
kubectl logs -l app=log-output-ex1-1 -f
```

### exercise 1.3

```
kubectl apply -f manifests/deployment.yaml
kubectl logs -l app=log-output -f
```

### exercise 1.7

```
kubectl apply -f manifests
curl localhost:8081
```