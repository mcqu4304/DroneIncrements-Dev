import React from 'react';
import Table from 'react-bootstrap/Table'
 
function IncrementTable() {
  return (
 <Table bordered hover size="sm">
  <thead>
    <tr>
      <th width="100" className='text-center'>Level</th>
      <th width="1000" className='text-center'>Build Name</th>
      <th width="100" className='text-center'> Price</th>
      <th width="550" className='text-center'>Link</th>
      <th width="1000" className='text-center'>Pros</th>
      <th width="1000" className='text-center'>Cons</th>
      <th width="1000" className='text-center'>Parts</th>
 
    </tr>
  </thead>
  <tbody>
    <tr className='table-primary'>
      <td>Destitute</td>
      <td>Everything you need to fly from Amazon</td>
      <td className='text-center'>$30</td>
      <td className='text-center'><a className ="App-link" href="https://amzn.to/3WWTfRx" title="Destitute">https://amzn.to/3WWTfRx</a></td>
      <td>The cheapest way you'll get in the air</td>
      <td>	The plane uses propellers to steer The controller can't be easily reused</td>
      <td></td>
 
    </tr>
    <tr className='table-info'>
      <td>Poor</td>
      <td>Everything plus a much nicer plane</td>
      <td className='text-center'>$70</td>
      <td className='text-center'></td>
      <td>You get servos!</td>
      <td>The controller can't be easily reused</td>
      <td></td>
 
    </tr>
    <tr className='table-success'>
      <td>Minimum</td>
      <td>Even nicer plane this time</td>
      <td className='text-center'>$86</td>
      <td className='text-center'></td>
      <td>Bigger plane</td>
      <td>Controller still can't be easily reused</td>
      <td></td>
 
    </tr>
    <tr className='table-warning'>
      <td>Entry</td>
      <td>DIY minus a frame</td>
      <td className='text-center'>$102</td>
      <td className='text-center'></td>
      <td>Get everything you'll need for a DIY foam plane</td>
      <td>You have to build the foam airfame (tools, material, time)</td>
      <td></td>
 
    </tr>
    <tr className='table-danger'>
      <td>Modest</td>
      <td>Plug and Play with reusable controller</td>
      <td className='text-center'>$116</td>
      <td className='text-center'></td>
      <td>A controller you can use with other planes</td>
      <td>Not many features on the controller</td>
      <td></td>
 
    </tr>
    <tr>
      <td>Fair</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
 
    </tr>
    <tr>
      <td>Good</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
 
    </tr>
    <tr>
      <td>Very Good</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
 
    </tr>
    <tr>
      <td>Superb</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
 
    </tr>
    <tr>
      <td>Excellent</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
 
    </tr>
    <tr>
      <td>Outstanding</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
 
    </tr>
    <tr>
      <td>Exceptional</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
 
    </tr>
    <tr>
      <td>Enthusiast</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
 
    </tr>
    <tr>
      <td>Extremist</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
 
    </tr>
    <tr>
      <td>Monstrous</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
 
    </tr>
 
  </tbody>
</Table>
  );
}

export default IncrementTable;