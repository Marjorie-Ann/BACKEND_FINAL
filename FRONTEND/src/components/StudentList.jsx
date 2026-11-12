const StudentList = ({data}) => {

    return (
        <>  

       <section id="StudentList">
            {data.map((student) =>(
                <article key={student.id} className="list-item">
                    <h2>{student.name}</h2>
                    <p>{student.srcode}</p>
                    <p>{student.program}</p>
                    <button>Delete</button>
                </article>

            ))}
            
        </section>
</>
    )
}

export default StudentList;