const Testimonials = ({page})=>{
    const context = page.body.split('<p>split_code</p>');
    //console.log("Testimonials",context)
    return(
        <div class="wrapper text-center">
        <h1> Testimonials </h1>
            {/* <i id="left" class="fa-solid fa-angle-left"></i> */}
            <ul class="carousel">
                { context.map((content)=>{
                return <li class="flex gap-4 justify-center">
                    <div className="shadow-xl p-4"  dangerouslySetInnerHTML={{__html: content}}>
                    </div>
                </li>
                })
                }
            </ul>
            {/* <i id="right" class="fa-solid fa-angle-right"></i> */}
        </div>
    
    )
}

export default Testimonials;