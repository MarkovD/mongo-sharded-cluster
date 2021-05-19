rs.initiate(
  {
    _id: "sharda-replica-set",
    members: [
      { _id : 0, host : "sharda1:27017" },
      { _id : 1, host : "sharda2:27017" },
      { _id : 2, host : "sharda3:27017" }
    ]
  }
)