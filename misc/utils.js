const fetch = require("node-fetch");

exports.dolar = async function dolar() {
    let response = await fetch("http://dolarhoje.com/cotacao.txt");
    let dolar = await response.text();
    return `R$ ${dolar}`;
};

exports.bitcoin = async function bitcoin() {
    let response = await fetch("https://dolarhoje.com/bitcoin-hoje/cotacao.txt");
    let bitcoin = await response.text();
    return `R$ ${Number(result.replace(",",".")).toLocaleString('pt-BR')}`;
};

exports.temperatura = async function temperatura(cidade) {
    let response = await fetch(
        `https://api.hgbrasil.com/weather?key=d66d4d25&city_name=${cidade},PR`
    );
    let temperatura = await response.text();
    temperatura = JSON.parse(temperatura);
    let minima = temperatura.results.forecast[0].min;
    let maxima = temperatura.results.forecast[0].max;
    return `Mínima: ${minima} °C | Máxima: ${maxima} °C`;
};

exports.formatDate = function formatDate(template, date) {
    var specs = "YYYY:MM:DD:HH:mm:ss".split(":");
    date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4);
    return date
        .toISOString()
        .split(/[-:.TZ]/)
        .reduce(function (template, item, i) {
            return template.split(specs[i]).join(item);
        }, template);
};
