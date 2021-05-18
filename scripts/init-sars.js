rs.initiate(
  {
    _id: "sharda-replica-set",
    members: [
      { _id : 0, host : "msc-sharda1:27017" },
      { _id : 1, host : "msc-sharda2:27017" },
      { _id : 2, host : "msc-sharda3:27017" }
    ]
  }
)