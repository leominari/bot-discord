const axios = require('axios');
const moment = require('moment');
moment.locale('pt-br');


async function baterPonto(codigo, tipo, message) {
    try {
        axios.request({
            url: 'https://schaffen.brschaffen-it.com/wsLaravel/public/api/rh/ponto',
            method: "post",
            headers: {
                Cookie: "laravel_session=W3oYCd9yBtJVhg2xMDu9YZx6xt28voVdj96YLysO;" +
                    "token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjMzMywiaXNzIjoiaHR0cHM6Ly9zY2hhZmZlbi5icnNjaGFmZmVuLWl0LmNvbS93c0xhcmF2ZWwvcHVibGljL2FwaS9sb2dpbiIsImlhdCI6MTYxNzgxMDMxNywiZXhwIjoxNjE3ODEzOTE3LCJuYmYiOjE2MTc4MTAzMTcsImp0aSI6InJWc3M2dE5NOVRKMm11Rk4ifQ.7mVl64Tfzqz_6TchmeraudRreek74qwt8HihIZchGkE;" +
                    "PHPSESSID=fmospv6n1r2evpesh8as9al122;"
            },
            data: {
                pnt_data: moment().format("DD/MM/YYYY kk:mm:ss"),
                pnt_fk_usu_codigo: parseInt(codigo),
                pnt_horario: moment().format("kk:mm:ss"),
                pnt_operacao: tipo,
            }
        }).then(res => {
            console.log(res.data);
            message.reply(`${res.data.return.pnt_operacao ? 'entrada' : 'saída'} cadastrada com sucesso, ${moment(res.data.return.pnt_data).format("DD/MM/YYYY kk:mm:ss")}.`);
            return true;
        })
    } catch (e) {
        message.reply('parece que deu algum problema, tenta pelo site 🤘 \n https://schaffen.brschaffen-it.com/index.php?a=ponto&b=ponto');
        return false;
    }
}


async function ultimoPonto(codigo, message) {
    try {
        axios.request({
            url: 'https://schaffen.brschaffen-it.com/wsLaravel/public/api/rh/ponto/' + codigo + '/ultimo',
            method: "get",
            headers: {
                Cookie: "laravel_session=W3oYCd9yBtJVhg2xMDu9YZx6xt28voVdj96YLysO;" +
                    "token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjMzMywiaXNzIjoiaHR0cHM6Ly9zY2hhZmZlbi5icnNjaGFmZmVuLWl0LmNvbS93c0xhcmF2ZWwvcHVibGljL2FwaS9sb2dpbiIsImlhdCI6MTYxNzgxMDMxNywiZXhwIjoxNjE3ODEzOTE3LCJuYmYiOjE2MTc4MTAzMTcsImp0aSI6InJWc3M2dE5NOVRKMm11Rk4ifQ.7mVl64Tfzqz_6TchmeraudRreek74qwt8HihIZchGkE;" +
                    "PHPSESSID=fmospv6n1r2evpesh8as9al122;"
            },
        }).then(res => {
            console.log(res.data.return[0]);
            message.author.send(`Oi ${message.member.user.tag}, o último ponto foi de ${res.data.return[0].pnt_operacao ? '**entrada**' : '**saída**'} 😄`);
            // message.reply(`${res.data.return.pnt_operacao ? 'entrada' : 'saída'} cadastrada com sucesso, ${res.data.return.pnt_data}.`);
            return true;
        })
    } catch (e) {
        message.reply('parece que deu algum problema, tenta pelo site 🤘 \n https://schaffen.brschaffen-it.com/index.php?a=ponto&b=ponto');
        return false;
    }
}

const parceiros = {
    'psai': async (message, client) => {
        if (message.channel.name === 'ponto') {
            let args = message.content.slice(1).split(' ')
            if (args.length < 2) {
                message.reply('acho que faltou o código 😶');
                return;
            }
            await baterPonto(args[1], 0, message);
        } else {
            message.reply('sala errada 😴');
        }
    },
    'pent': async (message, client) => {
        if (message.channel.name === 'ponto') {
            let args = message.content.slice(1).split(' ')
            if (args.length < 2) {
                message.reply('acho que faltou o código 😶');
                return;
            }
            await baterPonto(args[1], 1, message);
        } else {
            message.reply('sala errada 😴');
        }
    },
    'pult': async (message, client) => {
        if (message.channel.name === 'ponto') {
            let args = message.content.slice(1).split(' ')

            if (args.length < 2) {
                message.reply('acho que faltou o código 😶');
                return;
            }
            await ultimoPonto(args[1], message);
        } else {
            message.reply('sala errada 😴');
        }
    },
    // 'review': async (message, client) => {
    //     if (message.channel.name === 'reviews-back') {
    //         await message.guild.members.fetch();
    //         let selecionadosText = ''
    //         let selecionadosReview = [];
    //         let msg = '';
    //         const messageOwner = message.member.user.id;
    //         const Role = message.guild.roles.cache.find(role => role.name === "Sifus back");
    //         let Members = message.guild.members.cache.filter(member => member.roles.cache.find(role => role === Role)).map(member => member.user.id);
    //         Members = Members.filter(member => member !== messageOwner);
    //
    //
    //         if (Members.length > 4) {
    //             let sorteados = [];
    //             let aux;
    //
    //             for (let i = 0; i < 4; i++) {
    //                 aux = Math.floor(Math.random() * Members.length);
    //                 selecionadosReview.push(Members[aux]);
    //                 selecionadosText += ` <@${Members[aux]}>`;
    //             }
    //
    //         } else {
    //             Members.forEach(member => {
    //                 selecionadosReview.push(member);
    //                 selecionadosText += ` <@${member}>`;
    //             });
    //         }
    //
    //
    //         let content = message.content.split(' ');
    //         msg = 'Review: ' + content[1] + selecionadosText;
    //         let channel = message.channel;
    //         message.delete();
    //
    //
    //         channel.send(msg).then(async message => {
    //             await message.react('✔');
    //             // await message.react('douglasP');
    //
    //             const filter = (reaction, user) => {
    //                 return true//YOUR FILTER HERE;
    //             };
    //
    //             const collector = message.createReactionCollector(filter, {time: 3600000});
    //
    //             collector.on('collect', (reaction, reactionCollector) => {
    //
    //                 console.log(reactionCollector.id);
    //             });
    //         });
    //     } else {
    //         message.reply('sala errada 😴');
    //     }
    // },
}

const utils = {}


module.exports = {
    utils,
    parceiros,
}