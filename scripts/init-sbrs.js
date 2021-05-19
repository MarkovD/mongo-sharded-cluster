rs.initiate(
  {
    _id: "shardb-replica-set",
    members: [
      { _id : 0, host : "shardb1:27017" },
      { _id : 1, host : "shardb2:27017" },
      { _id : 2, host : "shardb3:27017" }
    ]
  }
)