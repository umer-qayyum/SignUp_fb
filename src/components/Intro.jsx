import React from "react";
function Intro() {
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center  " style={{backgroundColor:"#F0F2F5",height:"100vh"}}>
            <div className="App container d-flex justify-content-center align-items-center  " style={{padding:"30px",backgroundColor:"#F0F2F5"}}>
                <div className="row" style={{width:"100%"}}>
                    <div className="col-lg-6  " style={{padding:"100px 0px 20px 40px",alignItems:"center"}}>
                        <h1 style={{color:"#1877F2", fontSize:"60px"}}><b>facebook</b></h1>
                        <h4>Facebook helps you connect and share with the people in your life</h4>
                    </div>
                    <div className="col-lg-6 " >
                        <div className="row">
                            <div className="col-lg-1"></div>
                            <div className="col-lg-10">
                                <div className="box" style={{backgroundColor:"white",padding:"20px",textAlign:"center",borderRadius:"10px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                                    <input id="email" type="text" className="form-control " placeholder="Email address or phone number"  style={{marginBottom:"20px",padding:"15px"}} required=""/>
                                    <input id="pswd" type="password" className="form-control " placeholder="Password" style={{marginBottom:"20px" ,padding:"15px"}} required=""/>
                                    <button className="btn btn-primary" style={{width:"100%",marginBottom:"20px",padding:"8px 20px",fontSize:"20px"}}><b>Log In</b></button>
                                    <a href="#" style={{color:"blue",marginBottom:"30px",textDecoration:"none"}}>Forgotten password?</a>
                                    <hr style={{marginBottom:"30px"}} />
                                    <button style={{backgroundColor:"#42B72A",padding:"10px 20px"}} className="btn btn-success"><b>Create new account</b></button>
                                </div>
                                <div className="link d-flex justify-content-center pt-4">
                                    <a style={{color:"black",textDecoration:"none",marginRight:"5px"}} href="#"  ><b>Create a Page</b></a>
                                    <p> for a celebrity, brand or business</p>
                                </div>
                            </div>
                            <div className="col-lg-1"></div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
      
    );
  }
  export default Intro;