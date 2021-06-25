const Axios = require('axios');
const moment = require('moment');
const config = require('../config.json');

moment.locale('pt-br');
// teste 123
const parceiros = {

    'ponto': async (message, client) => {
        if (message.channel.name === 'ponto') {
            let args = message.content.slice(1).split(' ')
            let data = moment().format("DD/MM/YYYY kk:mm:ss");
            let hora = moment().format("kk:mm:ss");
            let res = '';
            if (args.length < 2) {
                message.reply('acho que faltou o código 😶');
                return;
            }

            Axios.post(config.BASE_URL + '/integracao/discord/bater_ponto', {
                "pnt_data": data,
                "pnt_fk_usu_codigo": args[1],
                "pnt_horario": hora,
            }, { headers: { Authorization: `Bearer ${config.TOKEN}` } }).then(res => {

                if(res.data.return.pnt_operacao === 1){
                    msg = 'bem vindo(a) 🤙';
                }else{
                    msg = 'tchau 👋';
                }
                message.reply(msg);
            });

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