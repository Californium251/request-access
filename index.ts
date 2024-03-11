const Airtable = require('airtable');
require('dotenv/config');

const client = new Airtable({
    apiKey: process.env.API_KEY,
});
const base = client.base('appo7oUrVEfTwjqFb');

const createAirtableEntry = (data) => {
    base('Table 1').create([
        {
            "fields": {
                "Имя и Фамилия": data.name,
                "Telegram": data.telegram,
                "Emails": data.email || '',
                "Информация о потоке": data.flow.toString() || '',
                "Где обучались": data.education || '',
                "ID формы": data.formId,
            }
        }
    ],(err, records) => {
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
    createAirtableEntry
}