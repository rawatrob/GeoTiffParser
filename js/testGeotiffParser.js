
// Test function to check if RGBA value pixel is what we expected 
function TestRGBAPixel(parser,x,y,r,g,b,a)
{
	var pix=parser.getPixelValueOnDemand(x,y);
	var rgba= parser.getRGBAPixelValue(pix)
	console.log("x=" + x + " y=" + y + " pixels="+ pix  +" " + rgba);
	if (rgba[0] == r && rgba[1] == g && rgba[2] == b && rgba[3] == a)
		return true; 
	else
	  return false;
}
function testGeotiffParser(data,x,y) {

	var parser = new GeotiffParser();
	

console.log(parser);
console.log("----------x,y--------------------"+x+"----"+y);
var x = parseInt(x);
	// parseHeader to read TIff / Geotiff parameters
	parser.parseHeader(data);
	
	parser.consoleTiffProperty();
		
	// If a GeoTiff retrieve the BBOX 
	console.log("isGeotiff=" +  parser.isGeotiff());
	if (parser.isGeotiff())
	{
	console.log("CRS Code:" + parser.getCRSCode());
		var source = new Proj4js.Proj('WGS84'); 
		var dest = new Proj4js.Proj('GOOGLE');
		console.log("----u--"+y+'----------x-------'+x)
		var point = parser.ImageToPCS(x,y);
		console.log("--34--"+point[1]);
		var testPt = new Proj4js.Point(point[1],point[2]);
		var x = Proj4js.transform(dest,source,testPt);
		
			alert(" Longitude "+ x.x +" Latitude "+ x.y);
  		
  			console.log("--34--");
  		
  			console.log("--3--");
 			console.log("----"+x);
     		console.log("-67890---");
			console.log(parser.ImageToPCS(753,447));
			//console.log(lr);
		//lcoordinates.push(ul[0].splice(1,2));
		// lcoordinates.push(ur.splice(1,2));
// 		lcoordinates.push(lr.splice(1,2));
// 		lcoordinates.push(ll.splice(1,2));
		//console.log(lcoordinates.push(ul[0].splice(1,2)));
	
	}
	
	//console.log("Try first part of the function getPixelValueOnDemand " );
	//var pix=parser.getPixelValueOnDemand(123,0);
	//console.log("x=" + 123 + " y=" + 0 + " pixels="+ pix  +" " + parser.getRGBAPixelValue(pix));
	/*//console.log("x=" + 11 + " y=" + 10 + " pixels="+ parser.getPixelValueOnDemand(11,10));
	console.log("x=" + 120 + " y=" + 2 + " pixels="+ parser.getPixelValueOnDemand(120,2));
	// Get the buffer of pixels
	// Get a sample of pixels value 
	var pixels = parser.loadPixels();
	console.log("x=" + 10 + " y=" + 10 + " pixels="+ parser.getPixelValue(pixels,10,10) );*/
	
}
// Test Flag_T24.tiff
// SubTest for Flag_T24.tiff 
function testFlag_T24_Color(parser) {

	console.log(TestRGBAPixel(parser, 81,10,248,0,248,1));
	console.log(TestRGBAPixel(parser, 112,10,0,248,248,1));
	console.log(TestRGBAPixel(parser, 113,10,0,0,248,1));
	console.log(TestRGBAPixel(parser, 81,11,248,248,0,1));
	console.log(TestRGBAPixel(parser, 82,11,0,248,0,1));
	console.log(TestRGBAPixel(parser, 81,42,248,0,0,1));
	console.log(TestRGBAPixel(parser, 117,49,248,0,248,1));
	
}

function LoadGeotiffParser(data,canvas) {

var parser = new GeotiffParser();
// 
// 	// parseHeader to read TIff / Geotiff parameters
 	parser.parseHeader(data);
// 	console.log("------rtete--")
// 	console.log(data)
	var tiffCanvas = parser.parseTIFF(data,canvas);
	//var tiffCanvas = parser.toCanvas(canvas,0,0,parser.imageWidth,parser.imageLength,600,2000);
			
	return tiffCanvas;
}
	