// this is what is sending
var exports = module.exports = {};

// functions that are being uput in export above
exports.queryMessage = function (request, response, next){
console.log(request.query.message);
response.status(200).send('im sorry you had to mentor me')
}
exports.paramMessage = function(request, response, next){
  console.log(request.params.paramMessage);
  response.status(200).send('hi lloyd')
}
