const checkboxAdnRadioStyle = {
    headerArea:{
        background: "transparent",
        padding: 0,
        border: 0,
        borderRadius: 0,
        transition: "all 0.4s",
        position: "absolute",
        width: "100%",
        zIndex: 99,
        top:0,
        left: 0,
        

        "& .main_menu" : {
            transition: "all 0.4s",
            // background: "rgba(38, 73, 134, 0.05)",
            // boxShadow: "0px 0px 30px rgba(38, 73, 134, 0.47)",
            display: "flex",
            justifyContent: "center",
            width: "100%",
            "& nav" : {
                // maxWidth: "80%",
                
            },
        },
        "& .main_menu.fixed-menu" : {
            position: "fixed",
            top: "-70px",
            transform: "translateY(70px)",
            width: "100%",
            background: "#fff",
            boxShadow: "0px 0px 30px rgba(73, 78, 92, 1)",

            "& nav" : {
               
                "& .nav-item .nav-link" : {
                    color: "#000 !important",
                    "&.active:not(.reserver-btn), &:hover:not(.reserver-btn)" : {
                        background: "rgba(0, 0, 0, 0.1)",
                        borderColor: "#0ad467 !important",
                        color: "#212144",
                    }
                },
                
            },
        },
    },
    navWrap:{
        position: "relative",
        width: "100%",
        top: 0,
        padding: 0,
        border: 0,
        borderRadius: 0,
        backgroundColor: "transparent",
        transition: "background-color 0.3s",
        transition: "all 0.4s",
    },
    navContent : {
        padding: "0 20px",
        height: "100%",
        // display: -webkit-box,
        // display: -webkit-flex,
        // display: -ms-flexbox,
        display: "flex",
        width: "100%",
        // -webkit-box-pack: justify,
        // -webkit-justify-content: space-between,
        // -ms-flex-pack: justify,
        justifyContent: "space-between",
       
    },
    navbarNav: {
        "& .nav-item" :{
            padding: "8px 16px",
            display: "flex",
            alignItems: "center",
        },
        "& .nav-item .nav-link" :{

            cursor: "pointer",
            textDecoration: "none",
            fontWeight: 500,         
    
            // fontFamily: "Poppins, sans-serif",
            textTransform: "uppercase",
            color:" #fff ",
            fontSize: "14px",
            display: "inline-block",
            padding: "12px 8px",
            display: "block",
            lineHeight: "30px",
            transitionDuration: "0.6s",
            transitionTimingFunction: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
            borderRadius: "5px",
            borderBottom: "5px solid transparent",
            "&.active:not(.reserver-btn)": {
                background: "rgba(0, 0, 0, 0.15)",
                borderColor: '#fff',
                color: "#212144",
            },
            "&.reserver-btn" :{
                background:"#0ad467",
                padding: "8px 35px",
                borderRadius: 30,
                minWidth: 150,
                marginLeft: 15,
                borderRadius: 100,
                backgroundColor: "#ffb607",
                color: "#001632",
                fontSize: 16,
                textAlign: "center",
                "&.active": {
                    background: "#0ad467",
                    borderColor: 'transparent',
                    color: "#212144",
                }
            },

        },
        "& .nav-item .nav-link svg" :{
            width: 16,
            height: 16,
            transition: "all 0.2s",
            marginRight: "8px !important",
        },
        "& .nav-item:hover " :{
 
            "& .nav-link svg.arrow-item": {
                transform: "rotate(90deg)"
            }
           
        },

        "& .nav-item .nav-link svg" :{
            width: 16,
            height: 16,
            marginRight: "8px !important",
            transition: ".2s linear",
        },
        "& .professionel" : {
            "& .nav-link" :{
                color: "#0596de !important"
            },
            "& span" :{
                backgroundColor: "#fff",
                borderRadius: 8,
            },
        }
    },
  }
  
  export default checkboxAdnRadioStyle;
  