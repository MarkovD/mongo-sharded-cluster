rs.initiate(
  {
    _id: "shardb-replica-set",
    members: [
      { _id : 0, host : "msc-shardb1:27017" },
      { _id : 1, host : "msc-shardb2:27017" },
      { _id : 2, host : "msc-shardb3:27017" }
    ]
  }
)