import { NowRequest, NowResponse } from '@vercel/node'
const Airtable = require('airtable');

const sendToAirtable = (emailAddress) => {
  return new Promise((resolve) => {
    const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_BASE);

    base('Email Addresses').create([
      {
        "fields": {
          "Email Address": emailAddress
        }
      }
    ], function(err, _records) {
      if (err) {
        console.error(err);
      }
;
      return resolve(_records);
    });
  });
}

export default async (request: NowRequest, response: NowResponse) => {
  const email: string = (request.body && request.body.email) || "";

  await sendToAirtable(email);

  response.json({success: true});
}