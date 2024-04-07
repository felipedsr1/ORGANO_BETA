import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Gerente',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Gestores',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Setor Admnistrativo',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'Laboratório de Análise e Controle de Qualidade',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'Setor Operacional',
      cor: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome: 'Manutenção e Limpeza',
      cor: '#FF8A29'
    },
  ]);

  const inicial = [
  
    {
      id: uuidv4(),
      nome: 'Vagner Recuero',
      cargo: 'Gerente de Operações',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      nome: 'Bryan Souza',
      cargo: 'Supervisor de operações',
      imagem: 'https://media.licdn.com/dms/image/C4E03AQF0pkd2nP7DDQ/profile-displayphoto-shrink_800_800/0/1649269839210?e=1717632000&v=beta&t=iJJL2CFTRT5wOJh_RnzE4FAzJwWAzm1lbXcH3zIGtGk',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      nome: 'Felipe Mourige',
      cargo: 'Supervisor de operações',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      nome: 'Carolina Paradeda',
      cargo: 'Analista Administrativo',
      imagem: 'https://media.licdn.com/dms/image/D4D35AQF0au01vH7tVA/profile-framedphoto-shrink_800_800/0/1712233593075?e=1712955600&v=beta&t=_moccpkp2V6ZU-2KP51zw_-ET6Nw0O9GdglnCi9jA7U',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      nome: 'Felipe Rios',
      cargo: 'Inspetor',
      imagem: 'https://media.licdn.com/dms/image/C4D03AQHG4jCA60X61Q/profile-displayphoto-shrink_800_800/0/1535743379281?e=1717632000&v=beta&t=-V72w06Rs5Neg0VrEOEqUqeoQbonZ4WyXtfUvN4keMk',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      nome: 'Alef',
      cargo: 'Inspetor',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      nome: 'Fernando',
      cargo: 'Inspetor',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      nome: 'Camila Machado De Machado',
      cargo: 'Supervisora de Laboratório',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[3].nome
    },
     {
      id: uuidv4(),
      nome: 'Viviana Froes',
      cargo: 'Técnico Químico',
      imagem: 'https://media.licdn.com/dms/image/C4D03AQHJVT5Vv9EueA/profile-displayphoto-shrink_800_800/0/1626807309312?e=1717632000&v=beta&t=JT77Ft0PQPah8m2JMf-cLR-zyB681ErOvSaui4nUpao',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      nome: 'Lúcia',
      cargo: 'Serviços Gerais',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[5].nome
    },

  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudarCor(cor, id) {
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor;
      }
      return time;
    }));
  }

  function cadastrarTime({ nome, cor }) {
    setTimes([...times, { nome, cor, id: uuidv4() }])
  }


  return (
    <div>
      <Banner />
      <Formulario aoCriarTime={cadastrarTime} times={times.map(time => time.nome)} aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} />
      <section className="times">
        <h1>AmSpec RG</h1>
        {times.map((time, indice) => <Time mudarCor={mudarCor} key={indice} time={time} colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} aoDeletar={deletarColaborador} />)}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
