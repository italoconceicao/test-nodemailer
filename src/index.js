const nodemailer = require("nodemailer");

const configuracoesSMTP = require("../config/smtp")

const transporter = nodemailer.createTransport({
    host: configuracoesSMTP.host, // HOST
    port: configuracoesSMTP.port, // PORTA
    secure: false, // NÃO É UMA CONEXÃO SEGURA
    auth: {
        user: configuracoesSMTP.user, // USUARIO
        pass: configuracoesSMTP.pass, // SENHA
    },
    tls: {
        rejectUnauthorized: false // NÃO REJEITA CONEXÕES NÃO AUTORIZADAS
    }
});


async function run() {
    const mailSent = await transporter.sendMail({
        text: "Teste bem sucedido!",
        subject: "E-mail enviado pelo nodemailer",
        from: 'Inimigos do PHP <pdv.inimigosphp@gmail.com>',
        to: ['italooliveiradaconceicao@gmail.com']
    });

    console.log(mailSent);
};

run();