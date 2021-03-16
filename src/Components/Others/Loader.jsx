import { useImport } from "../../Imports/imports";

const Loader = ({ loaderStyle }) => {
  const { Spinner, Grid } = useImport();
  return (
    <Grid container item xs={8} justify="center" alignContent="center">
      <Spinner
        className={loaderStyle}
        animation="border"
        role="status"
        variant="danger"
      />
    </Grid>
  );
};
export default Loader;
