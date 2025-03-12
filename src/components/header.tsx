function Header() {
  return (
    <div className="bg-secondary-700 flex items-center gap-2 px-[0.5em] py-[0.75em] text-white">
      <img src="/logo.png" className="size-[2.75em]" alt="logo" />
      <div className="leading-[1.2]">
        <h1 className="font-accent -translate-y-0.5 text-[1.5em]">
          Don Bosco H.S. School, Kokrajhar
        </h1>
        <p className="text-[0.75em] opacity-90">
          Affiliated to CBSC (Affiliation Number: 230027)
        </p>
      </div>
    </div>
  )
}
export default Header
