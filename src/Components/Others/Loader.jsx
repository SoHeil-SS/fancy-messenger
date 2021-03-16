import { useImport } from "../../Imports/imports";

//TODO CLEANUP
const Loader = ({ style }) => {
  const { Spinner } = useImport();
  return (
    <div>
      <Spinner style={style} animation="border" role="status" variant="danger">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
};
export default Loader;
