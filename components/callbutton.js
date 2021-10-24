
export default function CallButton({name, loaded, setClicked}) {
    return(
        <div className={`duration-700 ${loaded?"h-24":"h-screen"} items-center flex`}>
            <button 
                className="duration-300 p-2 rounded-xl border-black border-2 hover:shadow-2xl transform hover:-translate-y-px transform hover:-translate-x-px" 
                onClick={()=>setClicked(true)}
                >
                {name}
            </button>
        </div>
    )
}
