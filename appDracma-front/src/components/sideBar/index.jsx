import { Link  } from 'react-router-dom';

const Sidebar = () => {

  return (
    <div className="bg-red-800 h-screen w-1/6 p-8 flex text-center justify-center">
      <ul className="text-white">
        <li className="mb-4">
          <Link to="/home">Home</Link>
        </li>
        <li className='mb-4'>
          <Link to="/alunos">Cadastrar Aluno</Link>
        </li>
        <li className='mb-4'>
          <Link to="/vendas">Vendas</Link>
        </li>
        <li className='mb-4'>
          <Link to="/livros">Livaria</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;