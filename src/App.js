import { useState } from 'react';
import Banner from './componets/Banner'
import Form from './componets/Form'
import Team from './componets/Team';
import Footer from './componets/footer';

function App() {

  const teams = [
    {
      name: 'Programação',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },

    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    
    {
      name: 'Devops',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    
    {
      name: 'UX e Design',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE7E8'
    },

    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },

    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    },
  ]
  
  const [collaborators, setCollaborators] = useState([])

  const addedCollaborator = (collaborator) => {
    // debugger
      setCollaborators([...collaborators, collaborator])
  }
  
  return (
    <div className="App">
      <Banner />
      <Form teamsList={teams.map(team => team.name)} toCollaboratorRegistered={collaborator => addedCollaborator(collaborator)} />
      {teams.map(team => <Team 
        key={team.name}
        name={team.name} 
        primaryColor={team.primaryColor} 
        secondaryColor={team.secondaryColor} 
        collaborators={collaborators.filter(collaborator => collaborator.time === team.name)}  
      />)}
      <Footer />
      
    </div>
  );
}

export default App;
