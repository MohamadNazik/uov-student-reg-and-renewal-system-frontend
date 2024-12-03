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

        </div>

       </>
    );
}