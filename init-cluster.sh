#!/bin/bash -e

# add static DNS entry to MongoDB Cluster
#echo "172.31.14.1 mongodb-cluster" | sudo tee -a /etc/hosts

# init config server replica set
docker-compose exec configsvr1 sh -c "mongo < /scripts/init-csrs.js"

# init shards
# - shard A
docker-compose exec sharda1 sh -c "mongo < /scripts/init-sars.js"
# - shard B
docker-compose exec shardb1 sh -c "mongo < /scripts/init-sbrs.js"
# - shard C
docker-compose exec shardc1 sh -c "mongo < /scripts/init-scrs.js"

# wait 10s for the election of primary/secondaries
sleep 10

# init mongos routers
# - mongos1
docker-compose exec mongos1 sh -c "mongo < /scripts/init-mongos.js"
# - mongos2
docker-compose exec mongos2 sh -c "mongo < /scripts/init-mongos.js"
