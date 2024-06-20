
document.getElementById('heading1').innerHTML = "V40 Next Companies";



const v40nextcompanies = [

{ name : "EQUITASBNK",  sector : "BANKING (SFB)" },
{ name : "UJJIVANSFB",  sector : "BANKING (SFB)" },

{ name : "5PAISA", sector :  "NON-BANKING" } ,
{ name : "ANGELONE", sector : "NON-BANKING" },
{ name : "ISEC", sector : "NON-BANKING" },
{ name : "MOTILALOFS", sector : "NON-BANKING"},
{ name : "MCX", sector : "NON-BANKING"},

{ name : "OFSS", sector :  "IT"} ,
{ name : "TATAELXSI", sector : "IT" },

{ name : "TEAMLEASE", sector : "MANPOWER" },
{ name : "SIS", sector : "MANPOWER" },

{ name : "ASTRAZEN", sector : "PHARMA" },
{ name : "BAYERCROP", sector : "PHARMA" },
{ name : "ERIS", sector :  "PHARMA" } ,
{ name : "LALPATHLAB", sector : "PHARMA" },

{ name : "FINEORG", sector : "CHEMICAL" },
{ name : "CAPLIPOINT", sector : "CHEMICAL" },
{ name : "VINATIORGA", sector : "CHEMICAL" },

{ name : "INDIGOPNTS", sector : "PAINT" },
{ name : "KANSAINER", sector : "PAINT" },

{ name : "3MINDIA", sector : "CONSUMER PRODUCTS" },
{ name : "GODREJCP", sector :  "CONSUMER PRODUCTS" } ,
{ name : "FINCABLES", sector : "CONSUMER PRODUCTS" },
{ name :  "DIXON", sector : "CONSUMER PRODUCTS" },
{ name : "CERA", sector : "CONSUMER PRODUCTS" },
{ name : "HONAUT", sector : "CONSUMER PRODUCTS" },
{ name :  "JCHAC", sector : "CONSUMER PRODUCTS" },
{ name : "LUXIND", sector : "CONSUMER PRODUCTS" },
{ name : "POLYCAB", sector : "CONSUMER PRODUCTS" }, 
{ name : "RAJESHEXΡΟ", sector : "CONSUMER PRODUCTS" },
{ name : "RELAXO", sector :  "CONSUMER PRODUCTS" } ,
{ name : "SFL", sector : "CONSUMER PRODUCTS" },
{ name :  "SYMPHONY", sector : "CONSUMER PRODUCTS" },
{ name : "VIPIND", sector : "CONSUMER PRODUCTS" },
{ name : "TTKPRESTIG", sector : "CONSUMER PRODUCTS" },

{ name :  "BOSCHLTD", sector : "AUTO" },
{ name :  "EICHERMOT", sector : "AUTO" },

{ name : "MCDOWELL-N", sector : "LIQUOR" },
{ name : "RADICO", sector : "LIQUOR" },

{ name :   "SUNTV", sector : "MEDIA" },

];
const v40nextcompanieslist = document.getElementById('v40');

const v40nextcompaniestable = document.createElement('table');
v40nextcompaniestable.border = '1'; 
   
v40nextcompaniestable.cellSpacing = "5";
v40nextcompaniestable.cellPadding="20";
v40nextcompaniestable.align = "center";
v40nextcompaniestable.style.width = "5";

const heading = document.createElement('thead');
const tr = document.createElement('tr');

const nameheading = document.createElement('th');
nameheading.innerText = " NAME ";

const sectorheading = document.createElement('th');
sectorheading.innerText = " SECTOR ";

const strategiesapplicableheading = document.createElement('th');
strategiesapplicableheading.innerText = " STRATERGIES  APPLICABLE ";

tr.append( nameheading, sectorheading , strategiesapplicableheading);
heading.appendChild(tr);

v40nextcompaniestable.appendChild(heading);

const tablebody = document.createElement('tbody');
v40nextcompaniestable.appendChild(tablebody);

for ( let row = 0; row < v40nextcompanies.length; row++ ) {
    const tr = document.createElement('tr');

    const companyname = document.createElement('td');
    companyname.innerText = v40nextcompanies[row].name;
    tr.appendChild(companyname);

    const sectorname = document.createElement('td');
    sectorname.innerText = v40nextcompanies[row].sector;
    tr.appendChild(sectorname);

    tablebody.appendChild(tr);

}

v40nextcompanieslist.appendChild(v40nextcompaniestable);

















