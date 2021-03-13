import { useState } from "react";
import MarketTable from "../components/Table/MarketTable";
import SearchInput from "../components/SearchInput/SearchInput";
import useSWR from "swr";
import { Layout } from "../styles/style";
import { CryptoIcons } from "../libs/data";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const { data, error } = useSWR("/api/bitkub", fetcher, {
    refreshInterval: 2000,
  });

  const cryptos = Object.keys(data || {}).map((v) => ({
    ...data[v],
    symbol: v,
  }));

  cryptos.sort((a, b) => a.id - b.id);

  let combineCoin = cryptos.map((item, i) =>
    Object.assign({}, item, CryptoIcons[i])
  );

  const filterSymbol = combineCoin.filter(
    (sym) =>
      sym.symbol.toLowerCase().includes(keyword) ||
      sym.name.toLowerCase().includes(keyword)
  );

  const onInputChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };

  return (
    <Layout>
      <div className="container mx-auto px-16 container-index-moblie">
        <div className="">
          <div className="flex justify-center">
            <img src="/Bitkub-icon.jpg" className="h-24" />
          </div>
          <p className="w-auto gray-200 text-lg">
            Cryptos{" "}
            <span className="bg-green-400 text-white rounded-lg px-3.5">
              {cryptos.length}
            </span>
          </p>
          <SearchInput onChange={onInputChange} />
        </div>
        <MarketTable symbols={filterSymbol} />
      </div>
    </Layout>
  );
}
