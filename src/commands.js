const axios = require('axios');

const parceiros = {
    'ponto': async (message, client) => {
        if (message.channel.name === 'ponto') {
            let args = message.content.slice(1).split(' ')
            console.log(args);
            try {

                axios.request({
                    url: 'https://schaffen.brschaffen-it.com/wsLaravel/public/api/rh/ponto/' + args[1] + '/ultimo',
                    method: "get",
                    headers: {
                        Cookie: "laravel_session=zUKT735n6ToY9I0GDGmLsQk10pHsD7BFd8l0MIq2;token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjMzMywiaXNzIjoiaHR0cHM6Ly9zY2hhZmZlbi5icnNjaGFmZmVuLWl0LmNvbS93c0xhcmF2ZWwvcHVibGljL2FwaS9sb2dpbiIsImlhdCI6MTYxNzczNDQ3MiwiZXhwIjoxNjE3NzM4MDcyLCJuYmYiOjE2MTc3MzQ0NzIsImp0aSI6ImhFTnZDTktOOThtY2NNZGQifQ.pcm6mxYZI1Kr5m1DoGLeXaYX5JYwEtNbCUmIIXtesmU;PHPSESSID=qlag873vhr8hi67ofvra440fe1;"
                    }
                }).then(res => {
                    const ultima_operacao = res.data.return[0].pnt_operacao;
                    console.log(new Date());
                    // axios.post('https://schaffen.brschaffen-it.com/wsLaravel/public/api/rh/ponto', {
                    //     pnt_data: "06/04/2021 18:32:12",
                    //     pnt_fk_usu_codigo: 196,
                    //     pnt_horario: "18:32:12",
                    //     pnt_operacao: ultima_operacao ? 0 : 1,
                    // }).then(res => {
                    //     console.log(res);
                    // })
                })
            } catch (e) {
                console.log(e);
            }
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