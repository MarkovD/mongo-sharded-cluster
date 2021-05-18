rs.initiate(
  {
    _id: "config-server-replica-set",
    configsvr: true,
    members: [
      { _id : 0, host : "msc-configsvr1:27017" },
      { _id : 1, host : "msc-configsvr2:27017" },
      { _id : 2, host : "msc-configsvr3:27017" }
    ]
  }
)