# MongoDB Sharded Cluster

## **Table of Contents**
- [MongoDB Sharded Cluster](#mongodb-sharded-cluster)
  - [**Table of Contents**](#table-of-contents)
  - [**Introduction**](#introduction)
  - [**Server-Side Configurations**](#server-side-configurations)
    - [Launch MongoDB Sharded Cluster](#launch-mongodb-sharded-cluster)
  - [**Client-Side Configurations**](#client-side-configurations)
    - [Set Local DNS Entry](#set-local-dns-entry)
    - [Access Database WEB UI](#access-database-web-ui)
## **Introduction**
TODO
## **Server-Side Configurations**

### Launch MongoDB Sharded Cluster 
```
docker compose up
./init-cluster.sh
```

TESTED ON UBUNTU 20.04 - MONGODB VERSION: 6.0.2

---
## **Client-Side Configurations**
### Set Local DNS Entry
Example with Ubuntu Host: append the following entry to the /etc/hosts file. Substitute x.x.x.x with the IP of the Database Server

```
x.x.x.x mongodb-cluster
```
### Access Database WEB UI

Click on http://mongodb-cluster:8081/ to access the GUI.