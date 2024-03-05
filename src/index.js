const { GoogleSpreadsheet } = require(' google-spreadsheet ');
const creds = require( './credentials.json' );
const file = require( './arquivo.json' );
const { JWT } = require( 'google-auth-library' );

  const SCOPES = [
    'https://www.googleapis.com/auth/spreadsheets',
    'https://www.googleapis.com/auth/drive.file',
  ];
  const jwt = new JWT({
    email: creds.client_email,
    key: creds.private_key,
    scopes: SCOPES,
  });

  async function GetDoc() {
    const object = new GoogleSpreadsheet("17c_IuIyTO6IjnVaZyf286kFMEo3KlD4o7GqinSwrd7c/edit#gid=1386834576")
    return object
  }