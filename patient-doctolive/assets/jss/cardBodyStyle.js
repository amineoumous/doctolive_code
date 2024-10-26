const cardBodyStyle = {
  cardBody: {
    padding: "3rem 40px",
    flex: "1 1 auto",
    WebkitBoxFlex: "1",
    position: "relative",
    '@media (max-width: 768px)': { // Adjust the max-width as needed for your mobile breakpoint
      padding: "3rem 15px",
    },
  },
  cardBodyPlain: {
    paddingLeft: "5px",
    paddingRight: "5px",
    '@media (max-width: 768px)': {
      paddingLeft: "15px",
      paddingRight: "15px",
    },
  },
  cardBodyProfile: {
    marginTop: "15px"
  }
};

export default cardBodyStyle;
