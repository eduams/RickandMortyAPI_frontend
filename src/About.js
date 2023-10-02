import React from 'react';
import './css/about.css';
import proj1 from './img/proj1.png'
import proj2 from './img/proj2.png'
import proj3 from './img/proj3.png'

var proj1var = proj1;
var proj2var = proj2;
var proj3var = proj3;

function About() {
  return (
    <div className='about'>
      <div className='about_box'>
        <h2>Sobre mim</h2>
        <p>
          Sou formado em Ciências Biológicas pela Universidade Federal de São Carlos (campus Sorocaba) e cursando Análise e Desenvolvimento 
          de Sistemas na Facens, em transição de carreira para a área de TI. No momento, me encontro interessado em estudar javascript, 
          suas tecnologias e frameworks.
        </p>
        <h2>Projetos</h2>
        <p><h3>
        Line-Up - plataforma para criação de e-commerce (em desenvolvimento). 
          </h3></p>
        <div className='about_subbox'>
        <img src={proj1var}/>
        <p>
          Projeto de plataforma para criação de web-commerce em desenvolvimento para a disciplina de Fábrica de Projetos do
          curso de Análise e Desenvolvimento de Sistemas.
        </p>
        </div>
        <p><h3>
        Tarefa realizada para a disciplina de Desenvolvimento Web no curso de Análise e desenvolvimento de Sistemas. 
          </h3></p>
        <div className='about_subbox'>
          <img src={proj2var}/>
          <p>Basicamente o popular exercício de desenvolvimento web de clonar a página inicial do Netflix, mas nesse caso 
          com o uso da API do TMDB. Foi uma maneira interessante de exercitar a implementação de uma página web responsiva, 
          preparada também para mobile. </p>
        </div>
        <p><h3>
        Notas 
          </h3></p>
        <div className='about_subbox'>
          <img src={proj3var}/>
          <p>Um Single Page App de notas. Para esse projeto, como um desafio, não usei nenhuma framework, apenas javascript puro
            e nodeJS para tratar o banco de dados das notas salvas. </p>
        </div>
      </div>
    </div>

  );
}

export default About;
