const baterPonto = function (tipo, codigo) {
    let data = moment().format("DD/MM/YYYY kk:mm:ss");
    let hora = moment().format("kk:mm:ss");

    Axios.post(config.BASE_URL + '/integracao/discord/bater_ponto', {
        codigo: this.codigo,

    }, { headers: { Authorization: `Bearer ${config.TOKEN}` } }).then(res => {
        console.log(res);
    });
}

// async function ultimoPonto(codigo, message) {
//     try {
//         axios.request({
//             url: 'https://schaffen.brschaffen-it.com/wsLaravel/public/api/rh/ponto/' + codigo + '/ultimo',
//             method: "get",
//             headers: {
//                 Cookie: "laravel_session=W3oYCd9yBtJVhg2xMDu9YZx6xt28voVdj96YLysO;" +
//                     "token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjMzMywiaXNzIjoiaHR0cHM6Ly9zY2hhZmZlbi5icnNjaGFmZmVuLWl0LmNvbS93c0xhcmF2ZWwvcHVibGljL2FwaS9sb2dpbiIsImlhdCI6MTYxNzgxMDMxNywiZXhwIjoxNjE3ODEzOTE3LCJuYmYiOjE2MTc4MTAzMTcsImp0aSI6InJWc3M2dE5NOVRKMm11Rk4ifQ.7mVl64Tfzqz_6TchmeraudRreek74qwt8HihIZchGkE;" +
//                     "PHPSESSID=fmospv6n1r2evpesh8as9al122;"
//             },
//         }).then(res => {
//             console.log(res.data.return[0]);
//             message.author.send(`Oi ${message.member.user.tag}, o último ponto foi de ${res.data.return[0].pnt_operacao ? '**entrada**' : '**saída**'} 😄`);
//             // message.reply(`${res.data.return.pnt_operacao ? 'entrada' : 'saída'} cadastrada com sucesso, ${res.data.return.pnt_data}.`);
//             return true;
//         })
//     } catch (e) {
//         message.reply('parece que deu algum problema, tenta pelo site 🤘 \n https://schaffen.brschaffen-it.com/index.php?a=ponto&b=ponto');
//         return false;
//     }
// }



// async function baterPonto(codigo, tipo, message) {
//     try {
//         axios.request({
//             url: 'https://schaffen.brschaffen-it.com/wsLaravel/public/api/rh/ponto',
//             method: "post",
//             headers: {
//                 Cookie: "laravel_session=W3oYCd9yBtJVhg2xMDu9YZx6xt28voVdj96YLysO;" +
//                     "token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjMzMywiaXNzIjoiaHR0cHM6Ly9zY2hhZmZlbi5icnNjaGFmZmVuLWl0LmNvbS93c0xhcmF2ZWwvcHVibGljL2FwaS9sb2dpbiIsImlhdCI6MTYxNzgxMDMxNywiZXhwIjoxNjE3ODEzOTE3LCJuYmYiOjE2MTc4MTAzMTcsImp0aSI6InJWc3M2dE5NOVRKMm11Rk4ifQ.7mVl64Tfzqz_6TchmeraudRreek74qwt8HihIZchGkE;" +
//                     "PHPSESSID=fmospv6n1r2evpesh8as9al122;"
//             },
//             data: {
//                 pnt_data: moment().format("DD/MM/YYYY kk:mm:ss"),
//                 pnt_fk_usu_codigo: parseInt(codigo),
//                 pnt_horario: moment().format("kk:mm:ss"),
//                 pnt_operacao: tipo,
//             }
//         }).then(res => {
//             console.log(res.data);
//             message.reply(`${res.data.return.pnt_operacao ? 'entrada' : 'saída'} cadastrada com sucesso, ${moment(res.data.return.pnt_data).format("DD/MM/YYYY kk:mm:ss")}.`);
//             return true;
//         })
//     } catch (e) {
//         message.reply('parece que deu algum problema, tenta pelo site 🤘 \n https://schaffen.brschaffen-it.com/index.php?a=ponto&b=ponto');
//         return false;
//     }
// }

module.exports = {
    baterPonto,
}