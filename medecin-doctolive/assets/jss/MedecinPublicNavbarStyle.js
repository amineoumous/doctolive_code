
  const checkboxAdnRadioStyle = {
    navWrap:{
        width: "100%",
        top: 0,
        padding: 0,
        border: 0,
        borderRadius: 0,
        height: "70px",
        backgroundColor: "#1AB9B9",
        transition: "background-color 0.3s",
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
    dropDown : {
        transition: ".2s linear",
        lineHeight: "72px",
        display: "inline-block",
        fontWeight: 700,
        fontSize: 14,
        marginLeft: 0,
        cursor: "pointer",
        "& .dropdown" : {
            borderTop: "1px solid #eef2f6",
            position: "absolute",
            display: "none",
            top: 62,
            left: 0,
            minWidth: "10rem",
            width: "100%",
            zIndex: 1,
            animationName: "$slideDown",
            animationDuration: ".3s",
            backgroundColor: "#fff",
            paddingBottom: 32,
            boxShadow: "0 10px 18px -17px rgba(34,67,88,.25)",
            "& .container": {
                maxWidth: "1280px",

            },
            "& .cat-wrapper": {
                width: "100%",
                paddingTop: 16,
                "& .cat-title" : {
                    lineHeight: "normal",
                    color: "#224358",
                    marginBottom: 15
                },
                "& ul" : {
                    display: "block",
                    position: "relative",
                    overflow: "auto",
                    width: "100%",
                    zoom: 1,
                    padding: 0,
                },
                "& ul li" : {
                    color: "#224358",                    
                    float: "left",
                    display: "inline-block",
                    position: "relative",
                    lineHeight: "normal",
                    margin: "2px 0",
                    borderRadius: "8px !important",
                    transition: ".2s linear",
                    padding: "6px 20px 6px 20px",
                    verticalAlign: "center",
                    "& label" : {
                        display: "inline-block",
                        margin: 0,
                        fontWeight: 400,
                        fontSize: 14,
                        lineHeight: "24px",
                        fontFamily: "Roboto",
                        color: "#224358",
                    },
                    "&:hover a" : {
                        backgroundColor: "rgba(241, 250, 253, 0.6)",
                    }
                },
                "& ul.cols-3 li" : {
                    width: "33.33%",
                },
                "& ul.cols-2 li" : {
                    width: "50%",
                },
                "& ul li a" : {
                    padding: 8,
                    textAlign: "center",
                    justifyContent: "center",

                }

            }
        },
        "&:hover .dropdown" : {
           display: "block",
           opacity: 1,
          transform: "translateY(0)"
        }
    },
    dropDown2 : {
        transition: ".2s linear",
        lineHeight: "72px",
        display: "inline-block",
       
        marginLeft: 0,
        "& a" : {
            color: "#224358",
            fontWeight: 700,
            fontSize: 14,
        },
        cursor: "pointer",
        "& .dropdown-2" : {
            borderTop: "1px solid #eef2f6",
            position: "absolute",
            display: "none",
            top: 62,
            left: 0,
            minWidth: "10rem",
            width: "100%",
            zIndex: 1,
            animationName: "$slideDown",
            animationDuration: ".3s",
            backgroundColor: "#fff",
            paddingBottom: 32,
            boxShadow: "0 10px 18px -17px rgba(34,67,88,.25)",
            "& .container": {
                maxWidth: "1280px",

            },
            "& .cat-wrapper": {
                width: "100%",
                paddingTop: 16,
                "& .cat-container" : {
                    lineHeight: "normal",
                    color: "#224358",
                    padding: 14,
                    // display: "flex",
                    // justifyContent: "space-between",
                    "& img" : {
                        position: "absolute",
                        left: 18,
                        top: 28,
                    },
                    width: "100%",
                    "& .cat-title" : {
                        lineHeight: "24px",
                        color: "#224358",
                        fontSize: 14,
                        fontWeight: 700,
                        // marginBottom: 15
                    },
                    "& .cat-desc" : {
                        lineHeight: "24px",
                        color: "#224358",
                        fontSize: 14,
                        fontWeight: 400,
                        // marginBottom: 15
                    },
                },
            
                

            }
        },
        "&:hover .dropdown-2" : {
           display: "block",
           opacity: 1,
          transform: "translateY(0)"
        }
    },
    navbarNav: {
        
        "& .nav-item .nav-link" :{
            color: "#FFF",
            cursor: "pointer",
            fontFamily:"Montserrat",
            textDecoration: "none",
            padding: "0 20px 0",
            fontWeight: 700,
            transition: "all 0.3s",
            display: "flex",
            alignItems: "center",
            flexGrow: 0,
            fontSize: 14,
            height: "100%",
            flexShrink: 0,
            userSelect: "none",
        },
        
        "& .nav-item:hover " :{
           
            "& .nav-link": {
                color: "#0a96de",
            },
            "& .nav-link svg.arrow": {
                transform: "rotate(90deg)"
            }
           
        },
        "& .nav-item .nav-link svg" :{
            width: 16,
            height: 16,
            transition: "all 0.2s",
            marginRight: "8px ",
        },
        "& .login": {
            minWidth: 115,
            backgroundColor: "#1ab9b9",
            borderRadius: "8px",
            fontWeight: 700,
            fontSize: 14,
            lineHeight:"24px",
            padding: "8px 16px",
            border: "none",
            wordBreak:'keep-all',
            cursor: 'pointer',
            transition: '.2s linear',
            "& .nav-link" :{
                color: "#fff ",
                 
            },
            "&.nav-item:hover .nav-link" :{
                color: "#fff ",
            }
              
        },
    },
    "@keyframes slideDown": {
        "0%": {
          opacity: 0,
          transform: "translateY(-50%)"
        },
        "85%": {
            opacity: 0.3,
            transform: "translateY(-10%)"
          },
        "100%": {
          opacity: 1,
          transform: "translateY(0)"
        }
      },
  }
  
  export default checkboxAdnRadioStyle;
  