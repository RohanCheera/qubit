import React from 'react'
import './projectsdemo.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Card,Button } from 'react-bootstrap'


function ProjectsDemo() {
  return (
    <div className='work-demo container-flex '>
      <h2 className='work-title'>My Projects</h2>
      

       <div className='work-cards'>
          <Card className='work-demo-card'>
            <Card.Img variant="top" src='https://images.pexels.com/photos/16124552/pexels-photo-16124552/free-photo-of-man-walking-along-running-subway-tray.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' />
            {/* <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body> */}
          </Card>


          <Card className='work-demo-card'>
            <Card.Img variant="top" src="https://images.pexels.com/photos/1921326/pexels-photo-1921326.jpeg?auto=compress&cs=tinysrgb&w=600" />
            {/* <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body> */}
          </Card>

          <Card className='work-demo-card'>
            <Card.Img variant="top" src="https://images.pexels.com/photos/8627841/pexels-photo-8627841.jpeg?auto=compress&cs=tinysrgb&w=600" />
            {/* <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body> */}
          </Card>

          <Card className='work-demo-card'>
            <Card.Img variant="top" src="https://images.pexels.com/photos/907489/pexels-photo-907489.jpeg?auto=compress&cs=tinysrgb&w=600" />
            {/* <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body> */}
          </Card>

          <Card className='work-demo-card'>
            <Card.Img variant="top" src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600" />
            {/* <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body> */}
          </Card>

          <Card className='work-demo-card'>
            <Card.Img variant="top" src="https://images.pexels.com/photos/3772711/pexels-photo-3772711.jpeg?auto=compress&cs=tinysrgb&w=600" />
            {/* <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body> */}
          </Card>

        
        </div>

      <div className='work-demo-more '>
          <Button href='/work' className='work-demo-button'>Explore</Button>
        </div>
       

    </div>

  )
}

export default ProjectsDemo

// <div className='row  '>

// <div className='col-4'>
//   <Card className='work-demo-card'>
//     <Card.Img variant="top" src='https://images.pexels.com/photos/16124552/pexels-photo-16124552/free-photo-of-man-walking-along-running-subway-tray.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' />
//     {/* <Card.Body>
//       <Card.Title>Card Title</Card.Title>
//       <Card.Text>
//         Some quick example text to build on the card title and make up the
//         bulk of the card's content.
//       </Card.Text>
//       <Button variant="primary">Go somewhere</Button>
//     </Card.Body> */}
//   </Card>
// </div>
// <div className='col-4'>
//   <Card className='work-demo-card'>
//     <Card.Img variant="top" src="https://images.pexels.com/photos/1921326/pexels-photo-1921326.jpeg?auto=compress&cs=tinysrgb&w=600" />
//     {/* <Card.Body>
//       <Card.Title>Card Title</Card.Title>
//       <Card.Text>
//         Some quick example text to build on the card title and make up the
//         bulk of the card's content.
//       </Card.Text>
//       <Button variant="primary">Go somewhere</Button>
//     </Card.Body> */}
//   </Card>
// </div>
// <div className='col-4'>
//   <Card className='work-demo-card'>
//     <Card.Img variant="top" src="https://images.pexels.com/photos/8627841/pexels-photo-8627841.jpeg?auto=compress&cs=tinysrgb&w=600" />
//     {/* <Card.Body>
//       <Card.Title>Card Title</Card.Title>
//       <Card.Text>
//         Some quick example text to build on the card title and make up the
//         bulk of the card's content.
//       </Card.Text>
//       <Button variant="primary">Go somewhere</Button>
//     </Card.Body> */}
//   </Card>
// </div>
// <div className='col-4'>
//   <Card className='work-demo-card'>
//     <Card.Img variant="top" src="https://images.pexels.com/photos/907489/pexels-photo-907489.jpeg?auto=compress&cs=tinysrgb&w=600" />
//     {/* <Card.Body>
//       <Card.Title>Card Title</Card.Title>
//       <Card.Text>
//         Some quick example text to build on the card title and make up the
//         bulk of the card's content.
//       </Card.Text>
//       <Button variant="primary">Go somewhere</Button>
//     </Card.Body> */}
//   </Card>
// </div>
// <div className='col-4'>
//   <Card className='work-demo-card'>
//     <Card.Img variant="top" src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600" />
//     {/* <Card.Body>
//       <Card.Title>Card Title</Card.Title>
//       <Card.Text>
//         Some quick example text to build on the card title and make up the
//         bulk of the card's content.
//       </Card.Text>
//       <Button variant="primary">Go somewhere</Button>
//     </Card.Body> */}
//   </Card>
// </div>
// <div className='col-4'>
//   <Card className='work-demo-card'>
//     <Card.Img variant="top" src="https://images.pexels.com/photos/3772711/pexels-photo-3772711.jpeg?auto=compress&cs=tinysrgb&w=600" />
//     {/* <Card.Body>
//       <Card.Title>Card Title</Card.Title>
//       <Card.Text>
//         Some quick example text to build on the card title and make up the
//         bulk of the card's content.
//       </Card.Text>
//       <Button variant="primary">Go somewhere</Button>
//     </Card.Body> */}
//   </Card>
// </div>


// </div>