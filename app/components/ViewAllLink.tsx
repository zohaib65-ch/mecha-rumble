interface ViewAllLinkProps {
  href?: string;
  label?: string;
}

export default function ViewAllLink({ href = "#", label = "VOIR TOUS LES MATCH" }: ViewAllLinkProps) {
  return (
    <div className="flex items-center space-x-4">
      <div className="hidden sm:block h-[1.5px] w-28 bg-black" />
      <a href={href} className="flex items-center text-[10px] gap-2 font-bold tracking-widest text-black hover:text-[#0e77d9] transition-colors">
        {label} <img src="./arrow-right.svg" alt="Arrow Right" />
      </a>
    </div>
  );
}
