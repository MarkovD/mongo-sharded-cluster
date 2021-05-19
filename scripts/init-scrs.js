rs.initiate(
  {
    _id: "shardc-replica-set",
    members: [
      { _id : 0, host : "shardc1:27017" },
      { _id : 1, host : "shardc2:27017" },
      { _id : 2, host : "shardc3:27017" }
    ]
  }
)