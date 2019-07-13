function getLength(r){
	return 2*r*Math.PI;
}
function getArea(r){
	return Math.pow(r,2)*Math.PI;
}

module.exports.getLength=getLength;
module.exports.getArea=getArea;