import Tiles from "./Title"

const catergories = ['Cars', 'Motorcycles', 'Mobile Phones', 'For Sale:Houses & Appartment', 'Scooters', 'Commercial & Other Vehicles', 'For Rent: Houses & Appartments']

function Catergories() {
    return (
        <>
            <div className="pl-[16px] flex items-center">
                <div className="flex py-2 text-nowrap">
                    <p>ALL CATEGORIES</p>
                    <svg className="ml-3" width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-w4DG7" d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path></svg>
                </div>
                <div className="flex text-nowrap px-4 w-[calc(100%-152px)]">
                    {
                        catergories.map((item)=>(<Tiles item={item}></Tiles>))
                    }
                </div>
            </div>
        </>
    )
}

export default Catergories