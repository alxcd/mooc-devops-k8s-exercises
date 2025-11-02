
### exercise 1.11

```
kubectl apply -f manifests
kubectl apply -f log_output/manifests
kubectl apply -f pingpong/manifests
curl localhost:8081
curl localhost:8081/pingpong
curl localhost:8081
```