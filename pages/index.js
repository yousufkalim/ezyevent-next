import HomePage from 'components/Home';
import 'styles/Home.module.css';
export default function Home() {
  return (
    <div className='container'>
      <HomePage />
    </div>
  );
}
// Home.getInitialProps = async () => {
//   let projects = [];
//   try {
//     const res = await Axios.get(`${baseUrl}/project`);
//     projects = res.data.projects;
//   } catch (error) {
//     projects = [];
//   }

//   return { Projects: projects };
// };
