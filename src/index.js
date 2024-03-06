const { GoogleSpreadsheet } = require('google-spreadsheet');
const file = require('./arquivo.json');
const creds = require('./credentials.json');
const { JWT } = require('google-auth-library');

const SCOPES = [
    'https://www.googleapis.com/auth/spreadsheets'
];

const jwt = new  JWT({
    email: creds.client_email,
    key: creds.private_key,
    scopes: SCOPES,
});


async function GetDoc() {
   const doc = new GoogleSpreadsheet('1B_aNW3fc0jf5e5R79-EeBCmPTLey_iK_77rUyfA5zh4', jwt)
   await doc.loadInfo()
   return doc;
}

async function readWorkSheet() {
  const sheet = await GetDoc()
  const firstSheet = sheet.sheetsByIndex[0]
  const infos = await firstSheet.getRows()
  const users = infos.map(row => {
  return row.toObject()
    
  })
  return users
}


async function user() {
    const array = await readWorkSheet()
    array.forEach( async user => {
       await AddUser('https://apigenerator.dronahq.com/api/VvAAuGcY/dataSpreadSheet', user)
    })
} 

function Get() {

    return fetch("https://apigenerator.dronahq.com/api/VvAAuGcY/dataSpreadSheet")
    
  
      .then((response) => response.json())
  
      .then((data) => console.log(data));
  
  } 

async function AddUser(url, data) {
    const response = await fetch(url, {
  
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
    
        mode: 'cors',
    
        cache: 'no-cache',
    
        credentials: 'same-origin',
    
        headers: {
    
          'Content-Type': 'application/json'
    
        },
    
        redirect: 'follow',
    
        referrerPolicy: 'no-referrer',
    
        body: JSON.stringify(data)
    
      });
    
      return response.json();
   
    } 
try {
    user()
    console.lot(Sucesso)
} catch (error){
    console.log(error.message)
} 
    
 



