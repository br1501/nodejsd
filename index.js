const express = require('express');
const app = express();
const port = 3000 ;


app.get('/',(req,res)=>{
    res.send(`<div class="users">
	<table>
        <thead>
          <tr>
                <th> Name </th>
                <th> Email </th>
          </tr>	
        </thead>
        <tbody>
          <tr>
              <td> User1 </td>
              <td> user1@gmail.com </td>
          </tr>
          <tr>
            <td> User2 </td>
            <td> user2@gmail.com </td>
          </tr>
        </tbody>
  </table>	
</div>	`)
})
app.listen(port,()=>{
    console.log('listen on port : 3000')
})