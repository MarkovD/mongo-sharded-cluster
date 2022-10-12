#!/bin/bash -e

# add static DNS entry to MongoDB Cluster
# echo "172.31.14.11 mongodb-cluster" | sudo tee -a /etc/hosts

# init config server replica set
docker compose exec configsvr1 sh -c "mongosh < /scripts/init-csrs.js"

# init shards
# - shard A
docker compose exec sharda1 sh -c "mongosh < /scripts/init-sars.js"
# - shard B
docker compose exec shardb1 sh -c "mongosh < /scripts/init-sbrs.js"
# - shard C
docker compose exec shardc1 sh -c "mongosh < /scripts/init-scrs.js"

# wait 10s for the election of primary/secondaries
sleep 10

# init mongos routers
# - mongos1
docker compose exec mongos1 sh -c "mongosh < /scripts/init-mongos.js"
# - mongos2
docker compose exec mongos2 sh -c "mongosh < /scripts/init-mongos.js"
