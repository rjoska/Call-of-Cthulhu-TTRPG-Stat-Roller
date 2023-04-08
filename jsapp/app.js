#!/usr/bin/env node

const http = require("http");
const locallydb = require('locallydb')
const collection = new locallydb('./mydb')

const parseData = (str, type) => {
	if(type === "application/x-www-form-urlencoded"){
	return Object.fromEntries(str.split("&").map((q) => q.split("=")))
	} else {
	return JSON.parse(str)
	}
}

const getBody = (req) => new Promise((resolve, reject) => {
  let body = ""
  // accumulate body
  req.on("data", (data) => {
    body += data
  })
  // body complete, try to parse
  req.on("end", () => {
    try {
      const parsed = parseData(body, req.headers["content-type"])
      resolve(parsed)
    } catch (e) {
      reject(parsed)
    }
  })
})

//request handler using locallydb
const requestHandler = (req, res) => {
  if(req.method === "POST") {
    getBody(req).then(body => {
      collection.insert(body);
	  collection.save();
      res.writeHead(201)
    })
    .catch(() => res.writeHead(400))
    .finally(() => res.end())
  } else if(req.method === "PUT") {
    getBody(req).then(body => {
      const id = body.cid;
	  collection.replace(id, body);
	  collection.save();
	  res.writeHead(400);
      res.end();
    })
    .catch(() => res.writeHead(400))
    .finally(() => res.end())
  } else if(req.method === "DELETE") {
		getBody(req).then(body => {
		 const id = body.cid;
		 collection.remove(id);
		 collection.save();
		})
      res.writeHead(400)
      res.end()
  } else {
    // default assumes GET
    res.writeHead(200, {
      "Content-Type": "application/json",
    })
    res.write(collection.items)
    res.end()
  }
}

const server = http.createServer(requestHandler);
server.listen(3000);
