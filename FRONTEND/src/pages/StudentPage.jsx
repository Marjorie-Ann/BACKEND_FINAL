import { useState } from 'react';
import Header from '../components/Header';
import FormContainer from '../components/FormContainer';
import StudentList from '../components/StudentList';

const StudentPage = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch('http://127.0.0.1:3000/student/all');

    if (!response.ok) {
      throw new Error(response.status);
    }

    const data = await response.json();

    return data;
  };

  if (data.length === 0) {
    getData()
      .then((result) => {
        setData(result.data || result);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <>
      <Header />
      <FormContainer getData={getData} setData={setData} />
      <StudentList data={data} getData={getData} setData={setData} />
    </>
  );
};

export default StudentPage;