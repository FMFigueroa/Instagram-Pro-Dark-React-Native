import {USERS} from './users';

export const POSTS = [
    {
        imageUrl:'https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
        user:USERS[0].user,
        likes: 7825,
        caption:'💚 Todo lo que haces con pasion y disciplina tiene buenos resultados, mi clone de instagram 2021, espero te guste 🚀🔥🙋‍♂️, saludos..!',
        profile_picture: USERS[0].image,
        comments: [
             {
                user:'MariaFernada',
                comment:'WoW, Excelente trabajo, sigue adelante..!',
             },
             {
                user:'FelixManuel',
                comment:'Gracias mi Vida 😍...Espero terminar pronto!',
             },
             {
                user:'MariaFernada',
                comment:'Excelente..! Siempre juntos..!',
             },
        ]
    },
    {
      imageUrl:'https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTd8fGJsb2NrY2hhaW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      user:USERS[1].user,
      likes: 1250,
      caption:'Llegando a casa..!',
      profile_picture: USERS[1].image,
      comments: [
          {
              user:'MariaFernada',
              comment:'Nada como estar en Casa..!',
           },
           {
              user:'FelixManuel',
              coment:'...y contigo mas!',
           },
           {
              user:'MariaFernada',
              comment:'Mañana a la playita 🏝..!',
           },
      ]
  },
   {
      imageUrl:'https://images.unsplash.com/photo-1493238792000-8113da705763?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      user:USERS[4].user,
      likes: 568,
      caption:'🙋‍♂️Familia los quiero Mucho..!',
      profile_picture: USERS[4].image,
      comments: [
         {
            user:'FelixManuel',
            comment:'Hermano, Siempre estas presente 💚😉..!',
         },
      ]
   },
    {
        imageUrl:'https://pbs.twimg.com/media/FCOOwt_WEAAMW6_?format=jpg&name=small',
        user:USERS[0].user,
        likes: 7825,
        caption:'En este es mi humilde setup empece la mejor etapa de mi vida, venci mis miedos para hacer lo que mas me gusta...Programar, gracias Dios por darme todo lo que tengo..!',
        profile_picture: USERS[0].image,
        comments: [
            {
                user:'MariaFernada',
                comment:'Buen trabajo...👏👏!',
             },
             {
                user:'FelixManuel',
                comment:'Gracias mi Vida 😍...Espero les guste, 15/11/2021 🚀.',
             },
        ]
    },
]