import React from 'react'


function Header() {
  return (
    <>  
        <div className="container-fluid contain">
            <div className="header">
                <div className="title">
                    <h3>Crud operation using Mern</h3>
                </div>
                <div className="link">
                    {/* <h3><Link to={"/create"}>Create User</Link></h3> */}
                    <h3 className='btn btn-success'>CreateUser</h3>&nbsp;&nbsp;&nbsp;&nbsp;
                    <h3 className='btn btn-info'>Alluser</h3>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header