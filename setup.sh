#!/usr/bin/env bash

# Added Admin User
db.users.insert({username : "admin@billtrim.com",passowrd: "123456",name : "admin",roles : ["ADMIN"]})


# Added unique index to User Collection
db.users.createIndex({email : 1},{unique : 1})

