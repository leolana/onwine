export const Conversations = [
  {
    withUserId: 1,
    messages: [
      {
        id: 0,
        type: 'out',
        time: -300,
        text: 'Hey, how’ve you been?'
      },
      {
        id: 1,
        time: -240,
        type: 'in',
        text: 'Sim, nada mal, na verdade eu finalmente recebi uma ligação do trabalho para o qual eu entrevistei, e adivinhe? Entendi!'
      },
      {
        id: 2,
        time: -230,
        type: 'out',
        text: 'Impressionante! Sim, bem feito, isso é ótimo de ouvir. Você começa imediatamente?'
      },
      {
        id: 3,
        time: -100,
        type: 'out',
        text: 'Bem, sim, sim e não, eu vou treinar amanhã, mas eu não começo até a próxima semana. '+
                 'Você tem algum tempo neste fim de semana, talvez pudéssemos ficar juntos?'
      },
      {
        id: 4,
        time: -45,
        type: 'in',
        text: 'Eu tenho muito planejado neste fim de semana, apenas correndo, fazendo um monte de coisas, mas sexta-feira é bem aberta.'
      },
      {
        id: 5,
        time: -5,
        type: 'out',
        text: 'Isso funciona muito bem para mim!'
      }]
  },
  {
    withUserId: 5,
    messages: [
      {
        id: 0,
        type: 'out',
        time: -300,
        text: 'Não faço ideia do que comprar para Mary no aniversário dela.'
      },
      {
        id: 1,
        time: -240,
        type: 'in',
        text: 'Me, neither! Would you like to go in and buy her a gift together?'
      },
      {
        id: 2,
        time: -100,
        type: 'out',
        text: 'If I remember right, she likes music, skiing, and reading'
      },
      {
        id: 3,
        time: -45,
        type: 'out',
        text: 'You know, maybe we could get her some concert tickets. Who would know her favorite groups?'
      },
      {
        id: 4,
        time: -25,
        type: 'in',
        text: 'Her roommate, Malia, might know what her favorite groups are.'
      },
      {
        id: 5,
        time: -5,
        type: 'out',
        text: 'Cool! Let\'s give Malia a call and ask her for her help right now'
      }]
  }
];

export default Conversations;