var io = require("socket.io");
var socket = io.listen() //this is supposed to accept connection from IP addresses
var people = {};

socket.on("connection", function(client)
{
	client.on("join", function(name)
	{
		people[client.id] = name; //this is supposed to have anonymity 
		client.emit("update", "you have connected to the server");
		socket.sockets.emit("update ", name + "has joined the server");

	});

	client.on("send", function(msg)
	{
		socket.sockets.emit("chat", people[client.id], msg);
	});

	client.on("disconnect", function()
	{
		socket.sockets.emit("update ", people[client.id] + "has left the server");
		delete people[client.id];
	});

});

