import Card from "./Card";

function Testimonials({data}){
    return(
        <div className="test">
            <Card data={data}></Card>
        </div>
    )
}

export default Testimonials;