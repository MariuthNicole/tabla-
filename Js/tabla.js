for (let i = 2; i <= 20; i += 2) {
    let bodyTabla =` <table class="table-striped table-dark">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">${i}</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
    <tr>
      <th scope="row">${i += 2}</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">${i += 2}</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
    </tbody>
  </table>`;
  document.getElementById("contenedor-table").innerHTML += bodyTabla;
   
    
  }