

function FoodsPage() {
    return (
        <div>
            <img src={`/1.jpg`} placeholder={'blur'} alt={'image'} width={'280px'} height={'420px'}/>
            {
                [...Array(5)].map((_, index) => (
                    <div key={index}>
                        <img  src={`/${index + 1}.jpg`} alt={'image'} width={'280px'} height={'420px'}/>
                    </div>
                ))
            }
        </div>
    )
}

export default FoodsPage