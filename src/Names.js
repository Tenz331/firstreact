function NamesTable(){
    const names = [{'fname':'Anders','lname':'Henriksen'},{'fname':'Britta','lname':'Albertsen'},{'fname':'Kalle','lname':'Fredborg'}]
    return (
      <>
      <div>
        <table>
            <tr><th>Firstname</th><th>lastname</th></tr>
          {
          names.map(e=><tr><td>{e.fname}</td><td>{e.lname}</td></tr>)
          }
        </table>
      </div>
      </>
    );
  }

  export default NamesTable;