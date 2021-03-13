import { Layout } from "./styles";

const SearchInput = ({ ...rest }) => {
  return (
    <Layout>
      <div>
        <input
          type="text"
          placeholder="Filter by Name, Symbol"
          className="border border-green-400 focus:border-green-400 container-app"
          {...rest}
        />
      </div>
    </Layout>
  );
};

export default SearchInput;
