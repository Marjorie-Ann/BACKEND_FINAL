const FormContainer = ({ getData, setData }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const program = e.target.program.value;

    const response = await fetch('http://127.0.0.1:3000/student/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        srcode: '00-00000',
        program: program,
      }),
    });

    if (!response.ok) {
      throw new Error(response.status);
    }

    e.target.reset();

    getData()
      .then((result) => {
        setData(result.data || result);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <section id="formContainer">
      <form id="studentForm" onSubmit={handleSubmit}>
        <div className="input-fields">
          <label htmlFor="name">Student Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="input-fields">
          <label htmlFor="program">Program</label>
          <input type="text" name="program" id="program" />
        </div>
        <div>
          <button type="submit">Add Student</button>
        </div>
      </form>
    </section>
  );
};

export default FormContainer;