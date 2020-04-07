var http = require('http');

http.createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    let returnObject = {
        todaysNews: [
            '- Coronavirus India LIVE Updates: Delhi CM Kejriwal announces 5-T plan to fight Covid-19.',
            '- Coronavirus LIVE: India cases rise to 4,858; Maharashtra tally nears 900.',
            '- Coronavirus India Live Updates: Varanasi reports first death; Noida police extends Section 144 till April 30.',
            '- 1.67 million tested for coronavirus in US, says Donald Trump.']
    };
    returnObject = JSON.stringify(returnObject);

    if (req.url === '/get_latest_news') {
        setTimeout(() => {
            res.write(returnObject);
            res.end();
        }, 1000)
    }
}).listen(42000);