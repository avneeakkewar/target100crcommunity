
document.getElementById('heading1').innerHTML = "V40 Companies";

const v40companies = [

{ name : "NIFTYBEES",  sector : "CONGLOMERATE" },
{ name : "RELIANCE",  sector : "CONGLOMERATE" },

{ name : "HDFCBANK", sector :  "BANKS" } ,
{ name : "BANKBEES", sector : "BANKS" },
{ name : "ICICIBANK", sector : "BANKS" },
{ name : "AXISBANK", sector : "BANKS"},
{ name : "KOTAKBANK", sector : "BANKS"},

// { name : "HCLTECH", sector :  "IT"} ,
// { name : "INFY", sector : "IT" },
// { name : "TCS", sector : "IT" },

// { name : "HDFCAMC", sector : "NON-BANKING" },
// { name : "NAM-INDIA", sector : "NON-BANKING" },
// { name : "RHDFCLIFE", sector : "NON-BANKING" },
// { name : "ICICIGI", sector :  "NON-BANKING" } ,
// { name : "ICICIPRULI", sector : "NON-BANKING" },
// { name : "BAJAJFINSV", sector : "NON-BANKING" },
// { name : "BAJAJHLDNGE", sector : "NON-BANKING" },
// { name : "BAJFINANCE", sector : "NON-BANKING" },

// { name : "HINDUNILVR", sector : "FMCG" },
// { name : "NESTLEIND", sector : "FMCG" },
// { name : "PGHH", sector : "FMCG" },
// { name : "PIDILITIND", sector :  "FMCG" } ,
// { name : "COLPAL", sector : "FMCG" },
// { name :  "DABUR", sector : "FMCG" },
// { name : "GILLETTE", sector : "FMCG" },
// { name : "MARICO", sector : "FMCG" },
// { name :  "ITC", sector : "FMCG" },

// { name : "TITAN", sector : "CONSUMER PRODUCTS" },
// { name : "PAGEIND", sector : "CONSUMER PRODUCTS" },
// { name : "BATAINDIA", sector : "CONSUMER PRODUCTS" },
// { name : "HAVELLS", sector :  "CONSUMER PRODUCTS" } ,
// { name : "WHIRLPOOL", sector : "CONSUMER PRODUCTS" },

// { name :  "GLAXO", sector : "PHARMA" },
// { name : "ABBOTIND", sector : "PHARMA" },
// { name : "PFIZER", sector : "PHARMA" },
// { name :  "SANOFI", sector : "PHARMA" },

// { name :  "AKZOINDIA", sector : "PAINT" },
// { name : "ASIANPAINT", sector : "PAINT" },
// { name : "BERGEPAINT", sector : "PAINT" },

// { name :   "BAJAJ-AUTO", sector : "AUTO" },

];

const v40companieslist = document.getElementById('v40');

const nameheading =  document.createElement('th');
nameheading.innerText = " NAME ";

const sectorheading = document.createElement('th');
sectorheading.innerText = " SECTOR ";

const strategiesapplicableheading = document.createElement('th');
strategiesapplicableheading.innerText = " STRATERGIES  APPLICABLE ";

const v40companiestable = document.createElement('table');
    v40companiestable.border = '1'; 
       
    v40companiestable.cellSpacing = "5";
    v40companiestable.cellPadding="20";
    v40companiestable.align = "center";
    v40companiestable.style.width = "5";
    
const heading = document.createElement('thead');
 const trheading = document.createElement('tr');

   
trheading.append( nameheading, sectorheading , strategiesapplicableheading);
heading.appendChild(trheading);

v40companiestable.appendChild(heading);
v40companieslist.appendChild(v40companiestable);

const tablebody = document.createElement('tbody');

console.log(v40companieslist);

function v40table( array = [])
{

for ( let row = 0; row < v40companies.length; row++ ) {
   
   const trbody = document.createElement('tr');

    const companyname = document.createElement('td');
    companyname.innerText = v40companies[row].name;

    const sectorname = document.createElement('td');
    sectorname.innerText = v40companies[row].sector;

    trbody.append(companyname ,sectorname);
    
    tablebody.appendChild(trbody);
    v40companiestable.appendChild(tablebody)
    v40companieslist.appendChild(v40companiestable);

    
}

console.log(v40companiestable);
}

v40table();
console.log(tablebody);
console.log(v40companieslist);

let desc = false;
nameheading.addEventListener('click', () => {
    
    let array = sortByName ( v40companies,'name', desc);
    // clearTable(true);
    v40table(array)
    console.log(array);
    console.log(v40companiestable);
   desc=!desc;


});

function sortByName ( array, sort, desc) {
    array.sort(function (a,b) {
        if (a[sort] < b[sort]) return -1;
        if (a[sort] > b[sort]) return 1;
        return 0;
    });

    if (desc) array.reverse();

    return array;
};


let isClearTable = false; 
function clearTable(isClearTable,array=[]) {
    if ( isClearTable == true) {
        tablebody.remove();
        // v40table(array);
    }
console.log(tablebody);
}
clearTable(true);
console.log(tablebody);












