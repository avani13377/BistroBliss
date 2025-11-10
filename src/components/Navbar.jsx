import logo from '../static/images/logo.png'

function Navbar() {

    const navList = ["Home", "About", "Menu", "Pages", "Contact"]
    const siteName = "BistroBliss"
    
  return (
    <div>
      <div className="container my-3">
          <div className="row">
              <div className="col-12 d-flex align-items-center justify-content-between">
                  <div className='d-flex align-items-center'>
                     <img src={logo} alt="" style={{height : "50px"}}/>
                     <p style={{fontSize : "30px" }} className='ms-2 pt-2'>{siteName}</p>
                  </div>
                  <div className="d-flex gap-4">
                     {navList.length > 0 && navList.map((ele, index) => {
                        return <a key={index} href="" style={{textDecoration : "none", color : "black"}}>{ele}</a>
                     })}

                  </div>
                  <div className="">
                      <button className='btn' style={{border : "1px solid black"}}>Book A Table</button>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar;
