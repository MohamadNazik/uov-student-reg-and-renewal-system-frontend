export default function RecordBook() {
    return (
       <>
       <div style={{display:"flex",
                     justifyContent:"space-around",
                     fontFamily: "inter, sans-serif",
                     flexWrap: "wrap",
                     padding:"20px"
                     }}>
        //front Side
        <div style={{width: "90%",
              maxWidth: "500px",
              height: "650px",
              border:"2px solid #2320E8",
              backgroundColor:"#E13923",
              display:"flex",
              flexDirection:"column",
              alignItems:"center",
              justifyContent:"center"
              }}>
                <div style={{width: "90%",
                            maxWidth: "400px",
                        height: "550px",
                         border:"2px solid #2320E8",
                         backgroundColor:"#E13923",
                         display:"flex",
                         flexDirection:"column"
                         }}>
                         
                          
                <img src={require('../assets/uov_logo.png')} alt="UOV LOGO" style={{width:"123px",height:"122px",display: "block", margin: "auto"}}/>
                          
                <h3 style={{textAlign:"center",
                             color:"#2328E8",
                             marginTop:"31px",
                             marginBottom:"10px",
                             fontWeight:"700",
                             fontSize:"28px",
                             fontLineHeight:"33.89px",
                             textShadow: `-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white`}}>
                University Of Vavuniya
                <br/>
                Sri Lanka
                </h3>
                <h2 style={{textAlign:"center",color:"#2320E8",fontSize:"40px",fontweight:"700",fontLineHeight:"33.89px",marginTop:"auto",textShadow: `-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white`}}>STUDENT'S RECORD BOOK</h2>
                <p style={{textAlign:"center",color:"#2320E8",fontSize:"16px",fontweight:"700",fontLineHeight:"19.36px",marginTop:"auto",textShadow: `-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white`}}>FACULTY OF APPLIED SCIENCE</p>
                </div>
            </div>
            //second page of record book
            <div style={{
              width: "90%",
              maxWidth: "500px",
              height: "650px",
              border:"2px solid #000",
              backgroundColor:"#ffffff",
              display:"flex",
              flexDirection:"column",
              alignItems:"center",
              justifyContent:"center"
              }}>
              <div style={{ width: "90%",
                            maxWidth: "400px",
                           height: "550px",
                         border:"2px solid #000",
                         backgroundColor:"#ffffff",
                         display:"flex",
                         flexDirection:"column"
                         }}>
                          <div style={{ width:"140px",height:"28px",border:"1px solid #000",fontSize:"15px",marginLeft:'auto',marginRight:'20px',marginTop:'auto'}}>
                           <p style={{textAlign:'center',marginTop:'5px'}}><strong>Registration No:</strong></p></div>
                          <div style={{ width:"140px",height:"28px",border:"1px solid #000",fontSize:"15px",marginLeft:'auto',marginRight:'20px'}}>
                           <p style={{textAlign:'center',marginTop:'4px',fontStyle:"bold"}}><strong>2020/CT/000</strong></p>
                          </div>
                          <div style={{textAlign:'left',marginLeft:"20px",fontSize:"14px"}}>
                            <h4>Name With Initials <h4 style={{display: 'inline',margin: "auto"}}> : </h4> J. Doe</h4>
                            <h4>Name Donated By Initials <h4 style={{display: 'inline',margin: "auto"}}> :  </h4> John Doe</h4>
                            <h4>National Identity Crad No <h4 style={{display: 'inline',margin: "auto"}}>: </h4> 123456789012</h4>
                            <h4>Date of Birth <h4 style={{display: 'inline',margin: "auto"}}> : </h4>01.01.2001</h4>
                          </div>
                          <div style={{width:'163px',height:'206px',border:'2px solid #000',marginLeft:'120px',marginTop:'20px',margin: "auto"}}>
                            <img src={require('../assests/img/profile.jpeg')} alt='profile' style={{width:"163px",height:"206px"}}/>
                          </div>
                          <div style={{textAlign:'left',marginLeft:"20px",marginTop:'20px'}}>
                            <h4>Signaturev Of the Student <h4 style={{display: 'inline',marginLeft:'auto'}}> : </h4>
                            <div style={{display:'inline'}}><img src={require('../assets/signature.png')} alt='profile' style={{width:"45.85px",height:"20.39px"}}/></div></h4>
                          </div>
                        
              </div>

            </div>
        </div>


       </>
    );
}