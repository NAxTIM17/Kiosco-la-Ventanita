import {Input} from "@nextui-org/react";
import './Search.css'

//icono de la barra de busqueda
export const SearchIcon = (props) => (

    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M22 22L20 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
  
export default function SearchInput({filterText, onFilterTextChange}) {

 
  return (
      <>
    <div className="w-[340px] h-[240px] px-8 rounded-2xl flex justify-center items-center bg-gradient-to-tr from-pink-500 to-yellow-500 text-white container-Search">
      <Input
        label="Buscar"
        isClearable
        radius="lg"
        classNames={{
          label: "text-black/50 dark:text-white/90",
          input: [
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ]
        }}
        placeholder="Que buscamos?"
        startContent={
          <SearchIcon className="text-black/50 mb-0.5 dark:text-black/90 text-slate-400 pointer-events-none flex-shrink-0" />
        }
        onChange = {(e)=> onFilterTextChange(e.target.value)}
        value={filterText}
        />
    </div>
    </>
  );
}

