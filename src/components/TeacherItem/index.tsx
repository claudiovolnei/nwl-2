import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
             <header>
                <img src="https://avatars0.githubusercontent.com/u/42410926?s=460&u=e4b6a2fe2ced360541818d71e8df9afe55395a60&v=4" alt="Claudio Volnei"/>
                <div>
                    <strong>Claudio Volnei</strong>
                    <span>Química</span>
                </div>
             </header>
             <p>
                 Entusiasta das melhores tecnologias de quimica avançada.
                 <br></br>
                 Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências malucas.
             </p>
             <footer>
                 <p>
                     Preço/hora
                     <strong>R$ 80,00</strong>
                 </p>
                 <button type="button">
                     <img src={whatsappIcon} alt="Whatsapp"/>
                     Entrar em contato

                 </button>
             </footer>
         </article>
    );
}

export default TeacherItem;