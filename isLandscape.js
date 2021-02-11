

function isLandscape(width,height) {
 width = 800;
 height = 600;
 return (width > height) ? 'Landscape' : 'Portrait';

}
console.log(isLandscape());