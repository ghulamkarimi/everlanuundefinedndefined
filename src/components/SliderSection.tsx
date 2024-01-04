 const SliderSection = () => {
  return (
    <div className="w-full h-96 px-9 justify-start items-center gap-20 flex">
    <div className="w-6 h-6 relative" />
    <div className="grow shrink basis-0 px-16 flex-col justify-start items-start gap-10 inline-flex">
      <div className="self-stretch text-black text-base font-normal font-['Maison Neue'] leading-normal tracking-wide">People Are Talking</div>
      <div className="self-stretch h-32 flex-col justify-start items-start gap-3.5 flex">
        <div className="justify-start items-center gap-0.5 inline-flex">
          <div className="w-3.5 h-3.5 relative" />
          <div className="w-3.5 h-3.5 relative" />
          <div className="w-3.5 h-3.5 relative" />
          <div className="w-3.5 h-3.5 relative" />
          <div className="w-3.5 h-3.5 relative" />
        </div>
        <div className="self-stretch text-black text-2xl font-normal font-['Maison Neue'] leading-loose">“Love this shirt! Fits perfectly and the fabric is thick without <br/>being stiff.”</div>
      </div>
      <div className="self-stretch"><span style={{ color: 'black', fontSize: 'small', fontWeight: 'normal', fontFamily: 'Maison Neue', lineHeight: 'none', letterSpacing: 'wider' }}>-- JonSnSF, </span><span style={{ color: 'black', fontSize: 'small', fontWeight: 'normal', fontFamily: 'Maison Neue', textDecoration: 'underline', lineHeight: 'tight', letterSpacing: 'wider' }}>The Heavyweight Overshirt</span></div>
    </div>
    <img className="grow shrink basis-0 h-96" src="https://via.placeholder.com/530x695" />
    <div className="w-6 h-6 relative" />
  </div>
  );
 }
 
 export default SliderSection;










