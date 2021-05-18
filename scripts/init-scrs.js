rs.initiate(
  {
    _id: "shardc-replica-set",
    members: [
      { _id : 0, host : "msc-shardc1:27017" },
      { _id : 1, host : "msc-shardc2:27017" },
      { _id : 2, host : "msc-shardc3:27017" }
    ]
  }
)