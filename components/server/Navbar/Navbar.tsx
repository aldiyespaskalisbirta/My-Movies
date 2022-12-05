import Link from "next/link";
import Image from "next/image";
// Components
import SearchInput from "../../client/SearchInput/SearchInput";

type Props = {
  setQuery?: React.Dispatch<React.SetStateAction<string>>;
};

const Header = ({ setQuery }: Props) => (
  <div className="sticky flex top-0 z-40 w-full h-16 bg-zinc-900">
    <div className="flex justify-between w-full h-full max-w-7xl m-auto px-4">
      <Link className="flex" href="/">
        <div className="flex items-center cursor-pointer">
          <h1 className="brand font-bold text-4xl">MY MOVIES</h1>
        </div>
      </Link>
      {setQuery ? (
        <div className="relative flex items-center">
          <SearchInput setQuery={setQuery} />
        </div>
      ) : null}
    </div>
  </div>
);

export default Header;
