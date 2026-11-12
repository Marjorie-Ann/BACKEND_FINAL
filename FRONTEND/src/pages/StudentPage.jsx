import Header from '../components/Header';
import FormContainer from '../components/FormContainer';
import StudentList from '../components/StudentList';

const StudentPage = () => {
    const students = [
        { id: 1, name: 'Tonio', srcode: '24-12345',program: 'BSHM' },
        { id: 2, name: 'Marjo', srcode: '24-67890',program: 'BSIT' },
        { id: 3, name: 'Jangs', srcode: '24-54321',program: 'BSIT' },
    ];

    const getData = async () => {
        const response = await fetch('http://127.0.0.1:3000/student/');

        if(!response.ok){
            throw new Error(response.status);
        }

        const data = response.json();

        return data;  
    }

    getData().then((result) =>{
        console.log(result)
    }).catch((e) => {
    console.log(e)
})
    
    return (
    <>
      <Header />
      <FormContainer />
      <StudentList data={students}/>

    </>
  )

}
export default StudentPage;
