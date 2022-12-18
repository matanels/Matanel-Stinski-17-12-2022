import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  search: {
    margin: "60px auto",
    width: "500px",
    display: "flex",
    alignItems: "center",
    border: "solid",
  },
  container: {
    marginTop: "90px",
    border: "solid",
    backgroundColor: "white",
  },
  gridButton: {
    paddingTop: "20px",
    paddingBottom: "60px",
  },
  leftData: {
    paddingTop: "20px",
    paddingBottom: "60px",
  },
  middleData: {
    textAlign: "center",
    paddingBottom: "60px",
  },
  daysCards: {
    textAlign: "center",
    marginBottom: "40px",
    border: "solid",
  },
  indicator: {
    paddingTop: "20px",
    paddingBottom: "60px",
    paddingRight: "20px",
  },
}));

export default useStyles;
