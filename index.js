var Airtable = require('Airtable');
require('dotenv/config');
var client = new Airtable({
    apiKey: process.env.API_KEY,
});
var base = client.base('appo7oUrVEfTwjqFb');
var createAirtableEntry = function (data) {
    base('Table 1').create([
        {
            "fields": {
                "Имя и Фамилия": data.name,
                "Telegram": data.telegram,
                "Emails": data.email || '',
                "Информация о потоке": data.flow.toString() || '',
                "Где обучались": data.education || '',
            }
        }
    ], function (err, records) {
        if (err) {
            console.error(err);
            return;
        }
        records.forEach(function (record) {
            console.log(record.getId());
        });
    });
};
module.exports = {
    createAirtableEntry: createAirtableEntry
};
