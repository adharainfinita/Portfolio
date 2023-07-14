

const Presentation = () => {
return (
  <>
  <div className="space-y-7 bg-violet-Ocean aspect-square flex items-center shadow-md p-3">
    <section className="p-3 shadow rounded-lg space-y-5">
      <p className="font-Poppins">I'm</p>
      <h1 className="text-3xl font-bold font-Poppins">Adhara Redruello</h1>
      <h5 className="text-xs border-b font-tittilium">Full stack developer & trans woman writer</h5>
     
    </section>
    <section className="space-y-3">
      <img src="public\perfil.jpg" alt="" className="w-full h-72 mx-auto border-4 "/>
     <div className="">
      <p className="font-tittilium text-sm text-left ">All noble things as difficult as they are rare.</p>
      <p className="font-tittilium text-sm text-right ">Baruch Spinoza</p>
      </div>
      </section>
  </div>
  </>
)
}
export default Presentation;