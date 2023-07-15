const Presentation = () => {
	return (
		<div className="w-4/5 h-auto bg-gradient-to-br from-black to-violet-Ocean flex items-center 
    justify-center shadow-md my-4 p-3 rounded-md">
  <section className="p-3 shadow rounded-lg w-2/4 space-y-5 ">
    <p className="font-Poppins text-4xl">I'm</p>
    <h1 className="text-4xl font-bold font-Poppins">Adhara Redruello</h1>
    <h5 className="text-xl border-b font-tittilium">Full stack developer & <p className="text-ciel inline">trans</p> woman <p className="text-pink inline">writer</p></h5>
  </section>
  <section className="space-y-3 w-2/4 hover:w-screen">
    <img src="public\perfil.jpg" alt="" className="w-full h-full mx-auto border-4" />
    <div className="p-2">
      <p className="font-tittilium text-sm italic text-left">All noble things as difficult as they are rare.</p>
      <p className="font-tittilium text-sm text-right">Baruch Spinoza</p>
    </div>
  </section>
</div>
	);
};
export default Presentation;
