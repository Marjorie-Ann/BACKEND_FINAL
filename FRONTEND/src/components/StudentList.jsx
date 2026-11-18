const StudentList = ({ data, getData, setData }) => {
  const handleDelete = async (id) => {
    const response = await fetch(`http://127.0.0.1:3000/student/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(response.status);
    }

    getData()
      .then((result) => {
        setData(result.data || result);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <section id="studentList">
        {Array.isArray(data) &&
          data.map((student) => (
            <article key={student.id} className="list-item">
              <h2>{student.name}</h2>
              <p>{student.srcode}</p>
              <p>{student.program}</p>
              <button onClick={() => handleDelete(student.id)}>Delete</button>
            </article>
          ))}
      </section>
    </>
  );
};

export default StudentList;